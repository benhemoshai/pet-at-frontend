import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CityCard from '../components/CityCard';
import BackButton from '../components/BackButton';
import { cities } from '../data/cities';
import { categories } from '../data/categories';
import { categoryItems } from '../data/categoryItems';

function Cities() {
  const { categoryId } = useParams();
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const validCityIds = [...new Set(categoryItems
      .filter((item) => item.categoryId === categoryId)
      .map((item) => item.cityId)
    )];
    
    setFilteredCities(cities.filter((city) => validCityIds.includes(city.id)));
  }, [categoryId]);

  const selectedCategory = categories.find((cat) => cat.id === categoryId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <BackButton />
      
      <h1 className="text-3xl font-bold mb-6">
        Cities offering "{selectedCategory?.title || 'Category'}"
      </h1>
      {filteredCities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredCities.map((city) => (
            <CityCard
              key={city.id}
              cityId={city.id}
              name={city.name}
              imageUrl={city.imageUrl}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No cities offer this category at the moment.</p>
      )}
    </div>
  );
}

export default Cities;
