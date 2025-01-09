import { useState } from 'react';
import { categoryItems } from '../data/categoryItems';

function useNearMe() {
  const [nearMeItems, setNearMeItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (deg) => deg * (Math.PI / 180);
    const R = 6371; // Radius of the Earth in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c * 1000; // Distance in meters
  };

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
            .filter((item) => item.distance <= 5000) // Filter items within 5 km
            .sort((a, b) => a.distance - b.distance); // Sort by proximity

          setNearMeItems(nearbyItems);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to fetch your location. Please enable location services.");
          setLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    },
    (error) => {
      console.error("Location error:", error.message);
    }
  );
  

  return { nearMeItems, handleNearMeClick, loading };
}

export default useNearMe;
