import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoadProgProps {
  status?: string;
}


const LoadProg: React.FC<LoadProgProps> = ({ status }) => {
  const navigate = useNavigate();
  const [ setStatus] = useState("stopped");

 

  return (
    <div className=" h-full w-96 flex flex-col bg-white">
      <div className="h-fit bg-gray-500 text-white">Load Program</div>
      <div className="flex flex-col items-center justify-evenly align-middle h-full">
        <div>Load</div>
        <div>
          
            <input type="file" id="myFile" name="filename" aria-label="hidden"></input>
          
        </div>
        <div className="text-2xl bold">Status</div>
        <div>{status}</div>
        
      </div>
    </div>
  );
};

export default LoadProg;
