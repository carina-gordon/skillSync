import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Make sure you need navigation, otherwise remove this line

interface ButtonProps {
  number: string;
}

const ContinueButton = ({ number }: ButtonProps) => {
  return (
    <div className="flex flex-row justify-center items-center space-x-4 bg-customGrey py-1 pl-1 pr-5 "style={{ borderRadius: '0.5rem' }}>
      <button className="bg-customGreen text-white tracking-wide 
      font-neue-haas font-normal py-2 px-7 transition duration-150 
      ease-in-out hover:outline-green-600
       focus:ring-green-700 focus:ring-opacity-50" style={{ borderRadius: '0.5rem' }}>
        Continue
      </button>
      <span className="text-gray-700 tracking-wide font-neue-haas font-normal">
        Step {number} of 6
      </span>
    </div>
  );
};

export default ContinueButton;
