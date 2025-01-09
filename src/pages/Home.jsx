import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import NearMeCard from '../components/NearMeCard'; // Import Near Me Card
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNearMeNavigate = () => {
    navigate('/near-me');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Near Me Card */}
          <NearMeCard onNearMeClick={handleNearMeNavigate} />
        </div>

        {/* Category Grid */}
        <CategoryGrid />
      </div>
    </div>
  );
}

export default Home;
