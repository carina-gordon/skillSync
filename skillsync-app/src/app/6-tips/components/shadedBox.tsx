// ShadedBox.tsx
import React from 'react';

interface ShadedBoxProps {
  title: string;
  text: string;
  width: string;
  height: string;
}

const ShadedBox: React.FC<ShadedBoxProps> = ({ title, text, width, height }) => {
  return (
    <div className={`bg-gray-100 p-6 rounded-lg w-${width} h-${height}`}>
      <p className="text-center font-bold">{title}</p>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default ShadedBox;
