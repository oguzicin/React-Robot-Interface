import React, { useState } from "react";

const ZoomBar = () => {
    const [progress, setProgress] = useState<number>(50);

  const addProg = () => {
    if (progress < 100) {
      setProgress((progress) => (progress + 10));
    }
  };

  const minusProg = () => {
    if (progress > 0) {
      setProgress((progress) => (progress - 10));
    }
  };

  return (
    <div className=" flex flex-col h-fit gap-32 justify-stretch ">
        <div className="flex flex-row justify-center  m-1 ">
        <button onClick={addProg} className="w-10 h-10 bg-gray-300 border-2 border-gray-400">
          +
        </button>
        
      </div>
      <div className="w-full h-0.5 bg-gray-500  -rotate-90 -mt-1 -mb-1">
        <div
          className="h-5 transition-all border-e-4 border-black -my-2 "
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex flex-row justify-center  m-1">
        
        <button onClick={minusProg} className="w-10 h-10 bg-gray-300 border-2 border-gray-400">
          -
        </button>
      </div>
    </div>
  );
}

export default ZoomBar