import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';

function Home(){
    return (
    <div className="min-h-screen bg-gray-50">

      <Hero />
      <CategoryGrid />
    
  </div>
    );
}

export default Home;