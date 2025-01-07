import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export function CategoryCard({ title, description, icon: Icon, imageUrl, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cities/${id}`);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 p-6 text-white">
          <div className="mb-2 flex items-center gap-2">
            <Icon className="h-6 w-6" />
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
