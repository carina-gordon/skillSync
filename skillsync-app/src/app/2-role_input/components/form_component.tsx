import React, { useState } from 'react';
import CustomInput from './input';
import Link from 'next/link';
import ContinueButton from '@/components/ContinueButton';
import generateRoles from '../../../app/openAI/sendRoles-2.jsx';
import { useRouter } from 'next/navigation'

const FormComponent: React.FC = () => {
    const router = useRouter()
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue1);
    console.log(inputValue2);

    // Save the data to local storage
   
    const data = await generateRoles(inputValue1, inputValue2)
    console.log(data);

    //upload to open ai
    localStorage.setItem('myKey', JSON.stringify(data));

    router.push('/3-show_roles');

  };

  const handleInputChange1 = (value: string) => {
    setInputValue1(value);
  };

  const handleInputChange2 = (value: string) => {
    setInputValue2(value);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <h1 className="font-neue-haas font-normal tracking-wide text-gray-800 text-3xl leading-tight">
            I'm a <span><CustomInput value={inputValue1} onInputChange={handleInputChange1}/>
            </span> looking to transition into <span><CustomInput value={inputValue2} onInputChange={handleInputChange2} /></span>
        </h1>

      <button type="submit" className="mt-24 px-4">
            <ContinueButton number = "2" />
      </button>
    </form>
  );
};

export default FormComponent;