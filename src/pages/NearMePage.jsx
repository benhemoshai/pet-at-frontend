import React from 'react';
import useNearMe from '../hooks/useNearMe';
import CategoryItemCard from '../components/CategoryItemCard';
import NearMeCard from '../components/NearMeCard';

function NearMePage() {
  const { nearMeItems, handleNearMeClick, loading } = useNearMe();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">📍 Nearby Places</h1>

      {/* Near Me Card */}
      <div className="mb-6">
        <NearMeCard onNearMeClick={handleNearMeClick} loading={loading} />
      </div>

      {/* Nearby Items */}
      {nearMeItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {nearMeItems.map((item) => (
            <CategoryItemCard
              key={item.id}
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
              categoryId={item.categoryId}
              cityId={item.cityId}
              itemId={item.id} // Pass the item ID
            />
          ))}
        </div>
      ) : (
        !loading && <p className="text-gray-500">No nearby places found.</p>
      )}
    </div>
  );
}

export default NearMePage;
