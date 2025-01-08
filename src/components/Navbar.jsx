import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/PetAtLogo.jpg'; // Import the logo image

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after navigation
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate('/')}>
          <img
            src={logo}
            alt="PetAt Logo"
            className="h-12 w-12 rounded-full object-cover border-2 border-green-500 shadow-md"
          />
          <h1 className="text-2xl font-bold text-gray-900">Pet-At</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 w-full max-w-2xl">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavigate('/')}
              className="text-gray-700 hover:text-green-500 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('/about')}
              className="text-gray-700 hover:text-green-500 font-medium"
            >
              About
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-grow flex items-center border border-gray-300 rounded-lg px-3 py-1 bg-gray-50">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
            <button className="text-gray-500 hover:text-green-500">
              🔍
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-green-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              className="h-8 w-8 text-gray-700 hover:text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-8 w-8 text-gray-700 hover:text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col gap-4 p-4">
            {/* Search Bar Above Buttons */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
              <button className="text-gray-500 hover:text-green-500">
                🔍
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => handleNavigate('/')}
              className="text-gray-700 hover:text-green-500 font-medium text-xl py-2"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('/about')}
              className="text-gray-700 hover:text-green-500 font-medium text-xl py-2"
            >
              About
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
