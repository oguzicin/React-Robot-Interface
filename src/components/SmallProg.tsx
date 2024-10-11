import React from "react";

interface Props {
    value:number;
    symbol:string;
}

const SmallProg = ({value,symbol}:Props) => {
  return (
    <div className="w-full h-2 gap-2 flex flex-col">
      <div className="bg-gray-200 border-2 border-gray-400 h-3 w-full rounded-md ">
        <div className="font-thin text-[0.5rem] items-center flex flex-row justify-center "><div className="-mt-1"><span >{value}</span>{symbol}</div></div>
      </div>
      <div className="bg-gray-200 border-2 border-gray-400 h-3 w-full rounded-md ">
      <div className="font-thin text-[0.5rem] items-center flex flex-row justify-center "><div className="-mt-1"><span >{value}</span>{symbol}</div></div>
      </div>
    </div>
  );
};

export default SmallProg;