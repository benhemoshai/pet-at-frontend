import { useState } from 'react';
import { categoryItems } from '../data/categoryItems';

export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRadians = (deg) => deg * (Math.PI / 180);
  const R = 6371; // Earth's radius in km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};

function useNearMe() {
  const [nearMeItems, setNearMeItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNearMeClick = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const nearbyItems = categoryItems
            .map((item) => {
              const distance = calculateDistance(
                latitude,
                longitude,
                item.coordinates.lat,
                item.coordinates.lng
              );
              return { ...item, distance };
            })
            .filter((item) => item.distance <= 5) // Items within 5 km
            .sort((a, b) => a.distance - b.distance); // Sort by proximity

          setNearMeItems(nearbyItems);
          setLoading(false);
        },
        (error) => {
          console.error("Geolocation error:", error.message);
          alert("Failed to retrieve location. Please enable location services.");
          setLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return { nearMeItems, handleNearMeClick, loading };
}

export default useNearMe;
