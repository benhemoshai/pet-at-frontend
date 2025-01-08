import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <button
      onClick={handleBack}
      className="
        group flex items-center gap-2 
        text-gray-700 hover:text-gray-900 
        text-lg font-medium 
        px-4 py-2
        transition-all duration-300 ease-in-out
        relative
      "
    >
      {/* Arrow and Text combined for unified hover */}
      <span
        className="
          flex items-center gap-2 
          border-b-2 border-transparent 
          group-hover:border-gray-700 
          transition-all duration-300 ease-in-out
        "
      >
        <span className="text-2xl">←</span>
        <span className="text-lg">Back</span>
      </span>
    </button>
  );
}

export default BackButton;
