import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <button
      onClick={handleBack}
      className="
        mt-4 mr-4 ml-auto
        bg-green-500 text-white px-4 py-2 rounded-md 
        hover:bg-green-600 shadow-md 
        transition duration-300 ease-in-out
        flex items-center gap-2
      "
    >
      ← Back
    </button>
  );
}

export default BackButton;
