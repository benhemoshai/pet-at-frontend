import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { categories } from '../data/categories';

function CityCard({ cityId, name, imageUrl }) {
  const { categoryId } = useParams(); // Extract categoryId from route
  const navigate = useNavigate();

  const selectedCategory = categories.find((cat) => cat.id === categoryId);

  const handleCityClick = () => {
    console.log('Navigating to:', `/categories/${categoryId}/${cityId}`);
    navigate(`/categories/${categoryId}/${cityId}`);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg cursor-pointer"
      onClick={handleCityClick}
    >
      <img
        src={imageUrl}
        alt={name}
        className="h-48 w-full object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
    </div>
  );
}

CityCard.propTypes = {
  cityId: PropTypes.string.isRequired, // ✅ Add cityId as a required prop
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CityCard;
