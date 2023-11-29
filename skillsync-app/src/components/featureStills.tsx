import React from 'react';

const FeatureText = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
        <div className="flex flex-col bg-white p-4 text-left">
            <img src = "/roles.svg" alt="roles"/>
            <div className='mt-6'>
              <h2 className="text-xl font-normal text-gray-800">Role Suggestion</h2>
              <p className="mt-2 pr-10 text-customGrey2">Input your current role, and see jobs that have good retraining capability</p>
            </div>
        </div>
        
        <div className="flex flex-col bg-white p-4 text-left">
            <img src="/resume.svg" alt="resume"/>
            <div className='mt-6'>
              <h2 className="text-xl font-normal text-gray-800">Resume Tailoring</h2>
              <p className="mt-2 pr-10 text-customGrey2">Generate a completely personalized and relevant resume mapping your previous experiences to new ones</p>
            </div>
        </div>

        
        <div className="flex flex-col bg-white p-4 text-left">
            <img src ="/insights.svg" alt="insights"/>
            <div className='mt-6'>
              <h2 className="text-xl font-normal text-gray-800">Job Search Specific Advice</h2>
              <p className="pr-10 mt-2 text-customGrey2">Find and learn about specific insights relevant to your desired role.</p>
            </div>
        </div>
        
    </div>
  );
};

export default FeatureText;