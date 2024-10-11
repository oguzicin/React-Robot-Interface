import React from "react";
import { TiArrowDownThick } from "react-icons/ti";
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { FaScissors } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

const ComEdit = () => {
  return (
    <div className=" h-full min-w-64 w-full max-w-96 flex flex-col justify-between ">
      <div className="h-fit bg-gray-500 text-white ">
        Program
      </div>
      <div className="h-full border-2 bg-white"></div>
      <div className="h-fit min-h-10  bg-gray-500 text-white flex flex-row justify-between text-xl p-0">
        <div>
          <button className="hover:bg-gray-400 h-full min-w-10 w-full p-0 flex items-center align-middle justify-center text-3xl">
            <TiArrowDownThick />
          </button>
        </div>
        <div>
          <button className="hover:bg-gray-400 h-full min-w-10 w-full p-0 flex items-center align-middle justify-center text-3xl">
            <TiArrowUpThick />
          </button>
        </div>
        <div>
          <button className="hover:bg-gray-400 h-full min-w-10 w-full p-0 flex items-center align-middle justify-center text-3xl">
            <TiArrowBack />
          </button>
        </div>
        <div>
          <button className="hover:bg-gray-400 h-full min-w-10 w-full p-0 flex items-center align-middle justify-center text-3xl">
            <TiArrowForward />
          </button>
        </div>
        <div>
          <button className="hover:bg-gray-400 h-full min-w-10 w-full p-0 flex items-center align-middle justify-center">
            <FaScissors />
          </button>
        </div>
        <div>
          <button className="hover:bg-gray-400 h-full min-w-10 w-full p-0 flex items-center align-middle justify-center">
            <FaCopy />
          </button>
        </div>
        <div>
          <button className="hover:bg-gray-400 h-full min-w-10 w-full p-0 flex items-center align-middle justify-center text-2xl">
            <RiDeleteBinFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComEdit;
