import React, { useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { FaLink } from "react-icons/fa";
import Button from "./Button";

const LogBtn = () => {
  const [isGray1, setIsGray1] = useState<boolean>(false);
  const [isGray2, setIsGray2] = useState<boolean>(false);
  const [isGray3, setIsGray3] = useState<boolean>(false);
  const [isGray4, setIsGray4] = useState<boolean>(false);

  const clearAll = () => {
    setIsGray1(false);
    setIsGray2(false);
    setIsGray3(false);
    setIsGray4(false);
  };

  return (
    <div className="flex flex-row gap-16   items-center justify-center ">
      <div>View:</div>
      <div className="flex flex-row gap-2 text-2xl items-center  ">
        <div
          className={`w-full h-full ${
            isGray1 ? "bg-gray-500" : "bg-white"
          } transition-colors duration-300`}
        >
          <button
            onClick={() => setIsGray1(!isGray1)}
            className="border-2 border-blue-400  flex flex-row items-center justify-center "
          >
            <IoIosInformationCircle fill="blue" />
          </button>
        </div>
        <div
          className={`w-full h-full ${
            isGray2 ? "bg-gray-500" : "bg-white"
          } transition-colors duration-300`}
        >
          <button
            onClick={() => setIsGray2(!isGray2)}
            className="border-2 border-blue-400  flex flex-row items-center justify-center "
          >
            <IoIosWarning fill="yellow" />
          </button>
        </div>
        <div
          className={`w-full h-full ${
            isGray3 ? "bg-gray-500" : "bg-white"
          } transition-colors duration-300`}
        >
          <button
            onClick={() => setIsGray3(!isGray3)}
            className="border-2 border-blue-400  flex flex-row items-center justify-center "
          >
            <TiDelete fill="red" />
          </button>
        </div>
        <div className={`w-full h-full ${isGray4 ? 'bg-gray-500' : 'bg-white'} transition-colors duration-300`}>
          <button onClick={() => setIsGray4(!isGray4)} className="border-2 border-blue-400  flex flex-row items-center justify-center "><FaLink fill="gray" />
          </button></div>
      </div>
      <div>
        <button
          onClick={clearAll}
          className="border-2 border-blue-400 ps-5 pe-5"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default LogBtn;

//<div className={`w-full h-full ${isGray4 ? 'bg-gray-500' : 'bg-white'} transition-colors duration-300`}><button onClick={() => setIsGreen4(!isGray4)} className="border-2 border-blue-400  flex flex-row items-center justify-center "><FaLink fill="gray"/></button></div>
