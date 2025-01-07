import { useParams } from 'react-router-dom';
import CityCard from '../components/CityCard';
import { cities } from '../data/cities';
import { categories } from '../data/categories';

function Cities() {
  const { categoryId } = useParams();

  const selectedCategory = categories.find((cat) => cat.id === categoryId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Cities offering {selectedCategory?.title || 'Category'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cities.map((city) => (
          <CityCard
            key={city.id}
            cityId={city.id}
            name={city.name}
            imageUrl={city.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Cities;
