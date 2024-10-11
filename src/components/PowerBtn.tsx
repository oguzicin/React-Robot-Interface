import React from 'react';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };



type ButtonProps = {
  label: string;
  route: string;
};


const Button: React.FC<ButtonProps> = () => {
  

    
    const handleClick = () => {
        window.open(
          '/PowerPage',
          'popupWindow',
          'width=600,height=400,scrollbars=yes,resizable=yes'
        );
      };

  return (
    
    <div className="border-2 border-black p-2 text-center">
    <button
      className="w-full h-full px-6 flex flex-row items-center justify-center bg-red-500 rounded-full"
      onClick={handleClick}
    >
      
    </button>
  </div>
  );
};

export default Button;
