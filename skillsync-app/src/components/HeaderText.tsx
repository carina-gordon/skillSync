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

interface HeaderTextProps {
  size?: Size;
  text?: string;
}

// Destructure both size and text from the props
const HeaderText = ({ size = 'medium', text = '' }: HeaderTextProps) => {
  const chosenSize = sizes[size] || sizes.medium;

  return (
    <div className={`flex flex-row items-center justify-center ${chosenSize.container}`}>
        {/* Render the text prop here */}
        <div className={`pl-5 font-medium text-black font-neue-haas leading-normal`}>
            {text}
        </div>
    </div>
  );
};

export default HeaderText;
