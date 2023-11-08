import React from 'react';

const FeatureText = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
      <div className="bg-white p-4 text-left">
        <img src = "/images/roles.png" alt="learning"/>
        <h2 className="text-xl font-normal text-gray-800">Role Suggestion</h2>
        <p className="mt-2 text-gray-600">Input your current role, and see jobs that have good retraining capability</p>
      </div>
      
      <div className="bg-white p-4 text-left">
        <img src = "/images/resume.png" alt="learning"/>
        <h2 className="text-xl font-normal text-gray-800">Resume Tailoring</h2>
        <p className="mt-2 text-gray-600">Generate a completely personalized and relevant resume mapping your previous experiences to new ones</p>
      </div>
      
      <div className="bg-white p-4 text-left">
        <img src ="/images/searching.png" alt="learning"/>
        <h2 className="text-xl font-normal text-gray-800">Job Search Specific Advice</h2>
        <p className="mt-2 text-gray-600">Find and learn about specific insights relevant to your desired role.</p>
      </div>
      
    </div>
  );
};

export default FeatureText;