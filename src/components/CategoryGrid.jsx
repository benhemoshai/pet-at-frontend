
import { CategoryCard } from './CategoryCard';
import { categories } from '../data/categories';


function CategoryGrid() {
  return (
    <section id="categories" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Find The Perfect Service For Your Pet</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;