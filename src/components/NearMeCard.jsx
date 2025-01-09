import PropTypes from 'prop-types'; // Import PropTypes for validation

function NearMeCard({ onNearMeClick, loading }) {
  return (
    <div
      className="group relative rounded-lg overflow-hidden shadow-md bg-green-50 hover:shadow-lg cursor-pointer"
      onClick={onNearMeClick}
    >
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-green-700">📍 Near Me</h3>
        <p className="text-sm text-gray-600">
          {loading ? 'Fetching your location...' : 'Find places near you'}
        </p>
      </div>
    </div>
  );
}

// Prop validation
NearMeCard.propTypes = {
  onNearMeClick: PropTypes.func.isRequired, // Ensure onNearMeClick is a function and required
  loading: PropTypes.bool, // Optional boolean for loading state
};

// Default props for optional properties
NearMeCard.defaultProps = {
  loading: false, // Default loading state
};

export default NearMeCard;
