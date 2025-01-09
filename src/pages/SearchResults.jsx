import { useSearch } from '../context/SearchContext';
import CategoryItemCard from '../components/CategoryItemCard';
import BackButton from '../components/BackButton';

function SearchResults() {
  const { searchQuery, searchResults } = useSearch();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
      <div className="mb-4">
        <BackButton />
      </div>

      <h1 className="text-3xl font-bold mb-6">
        Search Results for: {searchQuery}
      </h1>

      {searchResults.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {searchResults.map((item) => (
            <CategoryItemCard
              key={item.id}
              name={item.name}
              description={item.description || ''}
              imageUrl={item.imageUrl || ''}
              categoryId={item.categoryId}
              cityId={item.cityId}
              itemId={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
