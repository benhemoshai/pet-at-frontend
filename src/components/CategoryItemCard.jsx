import PropTypes from 'prop-types';

function CategoryItemCard({ name, description, imageUrl }) {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
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
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="p-4 pt-0">
        <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md font-medium hover:bg-green-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

// Prop Validation
CategoryItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

// Default Props
CategoryItemCard.defaultProps = {
  imageUrl: '',
};

export default CategoryItemCard;
