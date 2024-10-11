import React, { useState } from "react";

const Status = () => {
  const [status, setProgress] = useState<number>(0);
  

  

  const statOn = () => {
    if (status < 1) {
      setProgress((status) => status + 1);
      
    } else if (status < 2) setProgress((status) => status + 1);
    
  };

  const statOff = () => {
    setProgress((status) => 0);
  };

  const pOn = () => {
    if (status == 1) return "bg-green-500";
    else if(status==2)
      return 'bg-green-500'
    else return "bg-gray-400";
  };
  const pMain = () => {
    if (status == 1) return "bg-green-500";
    else if(status==2)
      return 'bg-green-500'
    else return "bg-red-500";
  };

  const pIdle = () => {
    if (status == 1) return "bg-yellow-500";
    else if (status == 2) return "bg-green-500";
    else return "bg-gray-400";
  };

  const pStart = () => {
    if (status == 2) return "bg-green-500";
    else return "bg-gray-400";
  };

  const statusText = () => {
    switch (status) {
      case 0:
        return 'ON';
      case 1:
        return 'START';
      case 2:
        return 'START';
      default:
        return 'ON'; 
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-white justify-center text-xs">
      <div className="w-full bg-gray-500 text-white">Robot Status</div>
      <div className="w-full flex flex-row justify-center items-center h-full">
        <div>
          <div className="w-full flex flex-row justify-center items-center h-full">
            <div
              className={`${pMain()} p-4 transition-colors duration-300 border-black border-2 w-12 h-12 rounded-full`}
            ></div>
            <div className= {`${pOn()} transition-colors duration-300  h-1 w-24`}></div>
          </div>
          <div className=" w-12 flex justify-center">Power</div>
        </div>

        <div>
          <div className="w-full flex flex-row justify-center items-center h-full">
            <div
              className={`${pOn()} p-4 transition-colors duration-300 border-black border-2 w-12 h-12 rounded-full`}
            ></div>
            <div className= {`${pOn()} transition-colors duration-300  h-1 w-24`}></div>
          </div>
          <div className=" w-12 flex justify-center">Booting</div>
        </div>

        <div>
          <div className="w-full flex flex-row justify-center items-center h-full">
            <div
              className={`${pIdle()} p-4 transition-colors duration-300 border-black border-2 w-12 h-12 rounded-full`}
            ></div>
            <div className= {`${pStart()} transition-colors duration-300  h-1 w-24`}></div>
          </div>
          <div className=" w-12 flex justify-center">Idle</div>
        </div>

        <div>
          <div className="w-full flex flex-row justify-center items-center h-full">
            <div className={`${pStart()} p-4 transition-colors duration-300 border-black border-2 w-12 h-12 rounded-full`}></div>
            <div className= {`${pStart()} transition-colors duration-300  h-1 w-24`}></div>
          </div>
          <div className=" w-12 flex justify-center">Release</div>
        </div>

        <div>
          <div className="w-full flex flex-row justify-center items-center h-full">
            <div className={`${pStart()} p-4 transition-colors duration-300 border-black border-2 w-12 h-12 rounded-full`}></div>
          </div>
          <div className=" w-12 flex justify-center">Operate</div>
        </div>
      </div>
      <div className="flex flex-row w-full h-fit text-lg font-medium justify-center gap-5">
        <button
          onClick={statOn}
          className={`w-1/3 bg-white border-blue-300 border-2 h-10  m-2 ${
            status === 2 ? "border-gray-300  text-gray-300" : "border-blue-300 hover:bg-gray-200"
          }`}disabled={status===2}
        >
          {statusText()}
        </button>
        <button
          onClick={statOff}
          className= {`w-1/5 bg-white border-blue-300 border-2 h-10  m-2 ${
            status ? "border-blue-300 hover:bg-gray-200" : "border-gray-300 text-gray-300"
          }`}disabled={!status}
        >
          OFF
        </button>
      </div>
    </div>
  );
};

export default Status;
