'use client'

import Image from 'next/image';
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link';
import SkillSyncLogo from '@/components/skillsyncLogo';
import HeaderText from '@/components/HeaderText';
import { useEffect } from 'react';
import RoleButton from './components/RoleButton';
import useChatStore from '../provider/chat/chatstore';
import { SuggestedRolesData } from '../provider/chat/chat_types'; 
import { useState } from 'react';
import LoadingIndicator from '@/components/loadingIndicator';
import Toast from '@/components/toast';
import { useChat } from 'ai/react';
import convertStringToJson from '../utilities/string_to_json';
import { useRouter } from 'next/navigation'



export default function ShowRoles() {
  const router = useRouter()
  const [toastMessage, setToastMessage] = useState('');
  const SuggestedRolesData = useChatStore((state) => state.SuggestedRolesData);
  // TS needs to understand what SuggestedRolesData is
  const rolesData = SuggestedRolesData as SuggestedRolesData | null;
  const { setSelectedRole, setTipsData } = useChatStore(state => ({
    setSelectedRole: state.setSelectedRole,
    setTipsData: state.setTipsData
  }));

  const positions = [
    { top: '80%', left: '20%' },
    { top: '55%', left: '12%' },
    { top: '20%', left: '18%' },
    { top: '12%', left: '49%' },
    { top: '20%', left: '80%' },
    { top: '55%', left: '85%' },
    { top: '80%', left: '75%' },
    { top: '77%', left: '51%' },
  ];

  const showToast = ({ message }: { message: string }) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 5000);
  };

  const handleRoleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Role inside of handleRoleClick');
    console.log(useChatStore.getState().selectedRole);
  
    setInput('You are a professional recommender for job retraining. Your task is to suggest 4 tips that are one line long specific to this job role. The role is ${useChatStore.getState().selectedRole.role_name} Present this information in a JSON format with the structure: { tips: [{ tip_number: insert one line tip description}] }. Respond only with the JSON file content and refrain from additional commentary');
    roleHandleSubmit(event);
  };

  const {isLoading, data, handleSubmit: roleHandleSubmit, setInput} = useChat({
    onFinish: (data) => {
      console.log('Completed API call');
      console.log('1) Raw Data');
      console.log(data.content);
      
      const conversion = convertStringToJson(data.content);
      
      if (conversion === null) {
        console.log('Error converting string to JSON');
        showToast({ message: 'An error occured, try submitting again' });
        return;
      }
      
      setTipsData(conversion);

      console.log('2) Data in provider/chatstore.tsx');
      console.log(useChatStore.getState().tipsData);

      router.push('/4-experiences');


      // const selectedRole: Role = {
      //   role_name: role2,
      //   description: '' 
      // };

      // setSelectedRole(selectedRole);
      
      // console.log('2) Data in provider/chatstore.tsx');
      // console.log(useChatStore.getState().SuggestedRolesData);

      // TODO: Set selected role to desired role
    },
    onError: (error) => {
      console.log(error);
      showToast({ message: 'An error occurred: ' + error });
    },
    body: {response_format: { type: "json_object" }},
  });


  return (
    <div className="relative">
      <div className='absolute top-0 pt-12 pl-12'>
        <SkillSyncLogo size='medium' />
      </div>
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="flex flex-col items-center relative">
        <div className="text-sm text-gray-500 mb-4">🌟 click on a role to switch to it</div>
          <HeaderText text='Have you also thought about these roles?' size='large' />
         
          <div className="mt-4">
          <form onSubmit ={handleRoleClick}>
              <button className="bg-white text-black py-2 px-4 border rounded mt-4">
                I&apos;d like to keep my current role
              </button>
           </form>
          </div>
        </div>
      </div>

      {/* Map roles to their respective positions */}
      {rolesData?.roles.map((role, index) => {
          const position = positions[index]; // Get the position for this index
          return (
            <form onSubmit={handleRoleClick} key={index}>
            <button 
                type = "submit"
                key={index} 
                className="absolute" 
                style={{ top: position.top, left: position.left }}
              >
                  <RoleButton buttonText={role.role_name} additionalInfo={role.description}/>
              </button>
              {isLoading && <LoadingIndicator />}
              <Toast message={toastMessage} />
            </form>
          );
        })}


    </div>

  );
}
