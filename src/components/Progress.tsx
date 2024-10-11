import React from "react";

interface Props {
    value:number;
    symbol:string;
}

const Progress = ({value,symbol}:Props) => {
  return (
    <div className="w-full h-full  p-2">
      <div className="bg-gray-200 border-2 border-gray-400 h-full w-full rounded-md ">
        <div className="font-thin text-[10px] items-center flex flex-row justify-center "><span >{value}</span>{symbol}</div>
      </div>
    </div>
  );
};

export default Progress;
