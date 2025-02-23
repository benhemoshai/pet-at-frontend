import logo from '../assets/PetAtLogo.jpg';
import { useNavigate } from 'react-router-dom';
import NearMeCard from './NearMeCard';

function Hero() {
  const handleExploreClick = () => {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  const handleNearMeNavigate = () => {
    navigate('/near-me');
  };

  return (
<section className="relative bg-white-100 h-[500px] flex flex-col items-center justify-center text-center px-4 pt-16 md:pt-30">
{/* Logo */}
      <img
        src={logo}
        alt="PetAt Logo"
        className="h-48 w-48 rounded-full object-cover mb-4 border-4 border-green-500 shadow-lg"
      />

      {/* Hero Text */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Welcome to Pet-At</h1>
      <p className="text-lg text-gray-600 mb-6">Find the best pet-friendly places around you!</p>

      {/* Call to Action Button */}
      <button
        onClick={handleExploreClick}
        className="
          bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-medium 
          hover:bg-green-600 transition-all duration-500 ease-in-out
          hover:scale-105 active:scale-95
        "
      >
        Explore Now
      </button>
      {/* Near Me Button */}
      <div className="w-1/2 px-4 py-4">
        <NearMeCard onNearMeClick={handleNearMeNavigate} />
      </div>
    </section>
  );
}

export default Hero;
