import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryItemCard from '../components/CategoryItemCard';
import { categoryItems } from '../data/categoryItems';
import BackButton from '../components/BackButton';

function CategoryDetails() {
  const { categoryId, cityId } = useParams();

  const filteredItems = categoryItems.filter(
    (item) => item.categoryId === categoryId && item.cityId === cityId
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
       <div className="mb-4">
        <BackButton />
      </div>
      <h1 className="text-3xl font-bold mb-6">
        Category Details
      </h1>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <CategoryItemCard
              key={item.id}
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
              categoryId={categoryId}
              cityId={cityId}
              itemId={item.id}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No items found for this category in this city.</p>
      )}
    </div>
  );
}

export default CategoryDetails;
