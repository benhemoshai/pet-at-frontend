import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import CategoryItemCard from '../components/CategoryItemCard';
import { categoryItems } from '../data/categoryItems';
import { cities } from '../data/cities';
import { categories } from '../data/categories';

function CategoryDetails() {
  const { categoryId, cityId } = useParams();

  const selectedCity = cities.find((city) => city.id === cityId);
  const selectedCategory = categories.find((cat) => cat.id === categoryId);

  const filteredItems = categoryItems.filter(
    (item) => item.categoryId === categoryId && item.cityId === cityId
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <BackButton />
      
      <h1 className="text-3xl font-bold mb-6">
        {selectedCategory?.title} in {selectedCity?.name}
      </h1>
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <CategoryItemCard
              key={item.id}
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
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
