import React, { useState } from 'react';
import CustomInput from './input';
import Link from 'next/link';
import ContinueButton from '@/components/ContinueButton';
import { useRouter } from 'next/navigation'
import LoadingIndicator from '@/components/loadingIndicator';
import Toast from '@/components/toast';
import { useEffect } from 'react';
import { useChat } from 'ai/react';
import useChatStore from '../../provider/chat/chatstore';
import convertStringToJson from '../../utilities/string_to_json';

export interface Role {
  role_name: string;
  description: string;
}

const FormComponent: React.FC = () => {
  const router = useRouter()
  const { setSuggestedRolesData, setCurrentRole, setSelectedRole } = useChatStore(); // Zustand store hook

  const [role1, setrole1] = useState('');
  const [role2, setrole2] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const {isLoading, data, handleSubmit: chatHandleSubmit, setInput} = useChat({
    onFinish: (data) => {

      console.log('1) Raw Data');
      console.log(data.content);

      const conversion = convertStringToJson(data.content);
      
      if (conversion === null) {
        console.log('Error converting string to JSON');
        showToast({ message: 'An error occured, try submitting again' });
        return;
      }

      setSuggestedRolesData(conversion);


      const currentRole: Role = {
        role_name: role1,
        description: '' 
      };

      const selectedRole: Role = {
        role_name: role2,
        description: '' 
      };


      setCurrentRole(currentRole);
      setSelectedRole(selectedRole);
      
      console.log('2) Data in provider/chatstore.tsx');
      console.log(useChatStore.getState().SuggestedRolesData);

      // TODO: Set selected role to desired role
    

      router.push('/3-show_roles');
    },
    onError: (error) => {
      console.log(error);
      showToast({ message: 'An error occurred: ' + error });
    },
    body: {response_format: { type: "json_object" }},
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
    console.log('Sending to Skillsync ChatFunction');

    setInput(`You are a professional recommender for job retraining. Your task is to suggest alternative job roles for a client who is currently employed and seeking a career transition. Provide a list of 7 suitable job roles and a 1 line role description. Present this information in a JSON format with the structure: { roles: [{ role_name: role name, description: insert one line role description}] }. Respond only with the JSON file content and refrain from additional commentary. Your Client: "  I am a ${role1} and I am interested in transitioning to ${role2}`)
    chatHandleSubmit(event);
    console.log('Sent to Skillsync ChatFunction');

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
        <button type="submit" disabled={isLoading}>
            <ContinueButton number="2" />
        </button>
        {isLoading && <LoadingIndicator />}
        <Toast message={toastMessage} />
    </form>
  );
};

export default FormComponent;