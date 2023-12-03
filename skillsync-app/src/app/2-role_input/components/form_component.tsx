import React, { useState } from 'react';
import CustomInput from './input';
import Link from 'next/link';
import ContinueButton from '@/components/ContinueButton';
import generateRoles from '../../../app/openAI/sendRoles-2.jsx';
import { useRouter } from 'next/navigation'
import LoadingIndicator from '@/components/loadingIndicator';
import Toast from '@/components/toast';
import { useEffect } from 'react';
import { useChat } from 'ai/react';

const FormComponent: React.FC = () => {
  const router = useRouter()
  const [role1, setrole1] = useState('');
  const [role2, setrole2] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const {isLoading, data, handleSubmit: chatHandleSubmit, setInput} = useChat({
    onFinish: (data) => {
      console.log(data);
      localStorage.setItem('myKey', JSON.stringify(data));
      router.push('/3-show_roles');
    },
    onError: (error) => {
      console.log(error);
      showToast({ message: 'An error occurred: ' + error });
    },
  });

  const showToast = ({ message }: { message: string }) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 5000);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (role1 === '' || role2 === '') {
      showToast({ message: 'Please enter both roles' });
      return;
    }

    console.log(role1);
    console.log(role2);

    console.log('Sending to Skillsync ChatFunction');

    setInput(`You are a professional recommender for job retraining. Your task is to suggest alternative job roles for a client who is currently employed and seeking a career transition. Provide a list of 7 suitable job roles. Present this information in a JSON format with the structure: { roles: [{ role_number: role name }] }. Respond only with the JSON file content and refrain from additional commentary. Your Client: "  I am a ${role1} and I am interested in transitioning to ${role2}`)
    chatHandleSubmit(event);
    console.log('Sent to Skillsync ChatFunction');


    /*
    Data is in the format of:
    {
    "roles": "{\n  \"roles\": [\n    {\"1\": \"Data Analyst\"},\n    {\"2\": \"Digital Marketer\"},\n    {\"3\": \"UX/UI Designer\"},\n    {\"4\": \"Software Developer\"},\n    {\"5\": \"Project Manager\"},\n    {\"6\": \"Business Analyst\"},\n    {\"7\": \"Sales Representative\"},\n    {\"8\": \"Graphic Designer\"},\n    {\"9\": \"Content Writer\"},\n    {\"10\": \"Human Resources Specialist\"}\n  ]\n}"
    }

    TODO: Implement state management with Z

    */
    
  };
  
  const handleInputChange1 = (value: string) => {
    setrole1(value);
  };

  const handleInputChange2 = (value: string) => {
    setrole2(value);
  };
  
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <h1 className="font-neue-haas font-normal tracking-wide text-gray-800 text-3xl leading-tight">
            I&apos;m a <span><CustomInput value={role1} onInputChange={handleInputChange1}/>
            </span> looking to transition into <span><CustomInput value={role2} onInputChange={handleInputChange2} /></span>
        </h1>
        <button type="submit">
            <ContinueButton number="2" />
        </button>
        {isLoading && <LoadingIndicator />}
        <Toast message={toastMessage} />
    </form>
  );
};

export default FormComponent;