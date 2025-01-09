import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';


function Home() {


  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <CategoryGrid />
      </div>
    </div>
  );
}

export default Home;
