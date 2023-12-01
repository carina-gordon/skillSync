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
    

    try {
      console.log('Sending to Skillsync SSR');
      const data = await generateRoles(inputValue1, inputValue2)

      /*
      Data is in the format of:
      {
      "roles": "{\n  \"roles\": [\n    {\"1\": \"Data Analyst\"},\n    {\"2\": \"Digital Marketer\"},\n    {\"3\": \"UX/UI Designer\"},\n    {\"4\": \"Software Developer\"},\n    {\"5\": \"Project Manager\"},\n    {\"6\": \"Business Analyst\"},\n    {\"7\": \"Sales Representative\"},\n    {\"8\": \"Graphic Designer\"},\n    {\"9\": \"Content Writer\"},\n    {\"10\": \"Human Resources Specialist\"}\n  ]\n}"
      }

      */
      localStorage.setItem('myKey', JSON.stringify(data));
      router.push('/3-show_roles');
    } catch (error) {
      console.log('data is undefined');
      console.log(error);
    }
    
  };
  
  const handleInputChange1 = (value: string) => {
    setInputValue1(value);
    console.log(inputValue1);
  };

  const handleInputChange2 = (value: string) => {
    setInputValue2(value);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <h1 className="font-neue-haas font-normal tracking-wide text-gray-800 text-3xl leading-tight">
            I&apos;m a <span><CustomInput value={inputValue1} onInputChange={handleInputChange1}/>
            </span> looking to transition into <span><CustomInput value={inputValue2} onInputChange={handleInputChange2} /></span>
        </h1>
        <button type="submit">
            <ContinueButton number="2" />
        </button>
    </form>
  );
};

export default FormComponent;