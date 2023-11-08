import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
    number: string;
}

const ContinueButton = ({ number }: ButtonProps) => {

    return (
        <div className="flex flex-row">
            <div>
                Continue
            </div>
            <div className='pr-5'>
                Step {number} of 7
            </div>
        </div>
    );
};

export default ContinueButton;
