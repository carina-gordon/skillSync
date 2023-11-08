import React from 'react';

type CustomInputProps = {
  value: string;
  onInputChange: (value: string) => void;
};

const CustomInput: React.FC<CustomInputProps> = ({ value, onInputChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="form-input w-94 max-w-lg mx-4 px-4 py-2 border border-customGreen rounded-lg focus:outline-none focus:border-green-500" style={{ borderRadius: '0.5rem' }}
    />
  );
};

export default CustomInput;