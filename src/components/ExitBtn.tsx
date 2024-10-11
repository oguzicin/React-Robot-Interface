import React from "react";
import { useNavigate } from "react-router-dom";


const ExitBtn = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button 
      onClick={goBack}
      className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 ${className}`} 
    >
      {children}
    </button>
  );
};

export default ExitBtn;
