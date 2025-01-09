import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CategoryItemCard({ name, description, imageUrl, categoryId, cityId, itemId, distance }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/categories/${categoryId}/${cityId}/${itemId}`, { state: { distance } });
  };

  return (
    <div
      className="group relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Image Section */}
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        {distance !== undefined && (
          <p className="text-sm text-green-600 mt-2">
            📍 {distance.toFixed(2)} km away
          </p>
        )}
      </div>
    </div>
  );
}

CategoryItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  categoryId: PropTypes.string.isRequired,
  cityId: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  distance: PropTypes.number, // Distance is optional
};

export default CategoryItemCard;
