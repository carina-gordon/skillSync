import React from 'react';

// Define a type for the size prop
type Size = 'small' | 'medium' | 'large';

const sizes = {
  small: {
    container: 'text-base',
    svg: {
      width: '44',
      height: '44',
    },
  },
  medium: {
    container: 'text-3xl',
    svg: {
      width: '66',
      height: '66',
    },
  },
  large: {
    container: 'text-6xl',
    svg: {
      width: '89',
      height: '89',
    },
  },
};

interface SkillSyncLogoProps {
  size?: Size; // Use the Size type here
}

const SkillSyncLogo = ({ size = 'medium' }: SkillSyncLogoProps) => {
  const chosenSize = sizes[size] || sizes.medium;

  return (
    <div className={`flex flex-row items-center justify-center ${chosenSize.container}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={chosenSize.svg.width} height={chosenSize.svg.height} viewBox="0 0 89 89" fill="none">
      <rect width="88.5646" height="88.5646" rx="10.3963" fill="#161616"/>
        <path d="M46.2198 70.241C48.16 70.241 49.5057 68.5511 50.5071 66.0163L66.4046 24.4887C66.9054 23.2056 67.187 22.0791 67.187 21.1403C67.187 19.419 66.0917 18.3237 64.3705 18.3237C63.4317 18.3237 62.3051 18.6054 61.0533 19.1061L19.2441 35.1288C17.0535 35.9737 15.2698 37.3507 15.2698 39.2909C15.2698 41.7945 17.21 42.5768 19.6822 43.3279L37.0819 48.4601L42.1515 65.5781C42.9026 68.2069 43.7162 70.241 46.2198 70.241ZM38.3337 44.2041L21.8729 39.1032C21.6538 39.0406 21.5912 38.9467 21.5912 38.8528C21.5912 38.7276 21.6225 38.6338 21.8729 38.5399L53.0107 26.7732C55.2326 25.9283 57.3606 24.833 59.5199 23.8316C57.6423 25.365 55.4204 27.1174 53.8869 28.6509L38.3337 44.2041ZM46.6892 63.9821C46.5641 63.9821 46.5014 63.857 46.4076 63.6379L41.3066 47.1771L56.8599 31.6551C58.4246 30.0904 60.2084 27.8372 61.7105 25.9283C60.7091 28.0876 59.5825 30.2469 58.7375 32.5314L46.9709 63.6379C46.877 63.8882 46.8144 63.9821 46.6892 63.9821Z" fill="white"/>
      </svg>
      <div className={`pl-5 font-medium text-customGreen font-neue-haas leading-normal`}>
        SkillSync
      </div>
    </div>
  );
};

export default SkillSyncLogo;
