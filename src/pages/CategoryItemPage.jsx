import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { categoryItems } from '../data/categoryItems';

function CategoryItemPage() {
  const { categoryId, cityId, itemId } = useParams();
  const location = useLocation(); // Access location state
  const distance = location.state?.distance; // Retrieve distance from state

  const selectedItem = categoryItems.find(
    (item) => item.categoryId === categoryId && item.cityId === cityId && item.id === itemId
  );

  if (!selectedItem) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton />
        <h1 className="text-2xl font-bold text-red-500 mt-4">Item not found!</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-4">
        <BackButton />
      </div>

      {/* Title and Distance */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-3xl font-bold text-gray-900">{selectedItem.name}</h1>
        {distance !== undefined && (
          <p className="text-green-600 text-lg mt-2 md:mt-0">
            📍 {distance.toFixed(2)} km away
          </p>
        )}
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 mt-4">{selectedItem.description}</p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Image Section */}
        <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
          <img
            src={selectedItem.imageUrl}
            alt={selectedItem.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Map Section */}
        <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src={`https://www.google.com/maps?q=${selectedItem.coordinates.lat},${selectedItem.coordinates.lng}&output=embed`}
            className="w-full h-full rounded-md"
            allowFullScreen
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Additional Information</h2>
        <ul className="text-gray-700 space-y-1">
          <li>
            <strong>📍 Address:</strong> {selectedItem.address || 'N/A'}
          </li>
          <li>
            <strong>🕒 Opening Hours:</strong> {selectedItem.hours || 'N/A'}
          </li>
          <li>
            <strong>📞 Contact:</strong> {selectedItem.contact || 'N/A'}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryItemPage;
