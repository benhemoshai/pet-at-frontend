import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryItemCard from '../components/CategoryItemCard';
import { categoryItems } from '../data/categoryItems';
import { categories } from '../data/categories';
import { cities } from '../data/cities';
import BackButton from '../components/BackButton';

function CategoryDetails() {
  const { categoryId, cityId } = useParams();

  // Find category and city names
  const category = categories.find((cat) => cat.id === categoryId);
  const city = cities.find((cty) => cty.id === cityId);

  // Filter items by categoryId and cityId
  const filteredItems = categoryItems.filter(
    (item) => item.categoryId === categoryId && item.cityId === cityId
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-4">
        <BackButton />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        {filteredItems.length > 0
          ? `${category?.title || 'Category'} in ${city?.name || 'City'}`
          : 'Category Details'}
      </h1>

      {/* Items List */}
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
        <p className="text-gray-500">
          No items found for this category in this city.
        </p>
      )}
    </div>
  );
}

export default CategoryDetails;
