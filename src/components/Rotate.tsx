import React from "react";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { ImArrowLeft } from "react-icons/im";
import { ImArrowRight } from "react-icons/im";
import { ImArrowDownLeft } from "react-icons/im";
import { ImArrowDownRight } from "react-icons/im";
import Button from "./Button";

interface Props {
  symbol0: React.ReactNode;
  symbol1: React.ReactNode;
  symbol2: React.ReactNode;
  symbol3: React.ReactNode;
  symbol4: React.ReactNode;
  symbol5: React.ReactNode;
  header?: string;
  flex?: string;
  //onClick: (symbol: number) => void;
}

const Rotate: React.FC<Props> =  ({
    symbol0,
    symbol1,
    symbol2,
    symbol3,
    symbol4,
    symbol5,
    header,
    //onClick
  }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="bg-gray-500 text-white">{header}</div>
      <div className=" h-full  w-full min-w-72 flex flex-col justify-evenly bg-white">
        <div className=" flex flex-row justify-evenly text-7xl p-3 ">
          <button >
            {symbol0}
            
          </button>
          <button>
            {symbol1}
          </button>
        </div>
        <div className=" flex flex-col justify-evenly text-7xl  ">
          <button className=" flex flex-row justify-center ">
            {symbol2}
          </button>
          <div className=" flex flex-row justify-evenly gap-8 ">
            <button className="flex flex-row justify-center items-center  ">
              {symbol3}
            </button>
            <button>
              {symbol4}
            </button>
          </div>
          <button className=" flex flex-row justify-center">
            {symbol5}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rotate;


