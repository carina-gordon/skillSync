import React, { useState } from 'react';

interface RoleButtonProps {
  buttonText: string;
  additionalInfo: string;
}

const RoleButton = ({ buttonText, additionalInfo }: RoleButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="bg-customGreen text-white tracking-wide font-neue-haas font-normal py-2 px-7 transition duration-150 ease-in-out hover:outline-green-600 focus:ring-green-700 focus:ring-opacity-50"
        style={{ borderRadius: '0.5rem' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {buttonText}
      </button>
      {isHovered && (
        <div className="absolute top-0 left-0 bg-white text-black text-center p-2 mt-8 border border-gray-300 rounded">
          {additionalInfo}
        </div>
      )}
    </div>
  );
};

export default RoleButton;
