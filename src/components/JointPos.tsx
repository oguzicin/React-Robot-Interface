import React from "react";
import { ImArrowLeft } from "react-icons/im";
import { ImArrowRight } from "react-icons/im";
import { IoMdArrowDropup } from "react-icons/io";
import ValueSlide from "./ValueSlide";
import ProgressBar from "./ProgressBar";

const Play = () => {
  return (
    <div className=" w-full  h-full flex flex-col ">
      <div className="bg-gray-500 text-white w-full">Container</div>
        <div className="flex flex-col justify-between h-full items-center w-full">
            <div className=" flex flex-col  justify-evenly items-center  h-full">
            <div className=" h-12 w-full">
            <ProgressBar initialProgress={50} nick={"Base"} />
            </div>

            <div className=" h-12 w-full">
            <ProgressBar initialProgress={50} nick={"Shoulder"} />
            </div>

            <div className=" h-12 w-full">
            <ProgressBar initialProgress={50} nick={"Elbow"} />
            </div>

            <div className=" h-12 w-full">
            <ProgressBar initialProgress={50} nick={"Wrist 1"} />
            </div>

            <div className=" h-12 w-full">
            <ProgressBar initialProgress={50} nick={"Wrist 2"} />
            </div>

            
            </div>
        </div>
    </div>
  );
};

export default Play;

/**<div className=" h-12">
                <div className=" flex flex-row  justify-between items-center text-2xl h-7">
                <div className=" flex flex-row">
                    <button>
                    <ImArrowLeft />
                    </button>
                </div>
                <div className=" w-80 flex flex-row justify-between p-2 ">
                    <div className=" h-fit text-xl">Wrist-3</div>
                    <div className="border-2 border-black h-7 w-20"></div>
                </div>

                <div className=" flex flex-row">
                    <button>
                    <ImArrowRight />
                    </button>
                </div>
                </div>

                <div className="w-full flex flex-col  items-center justify-between ">
                <div className="w-5/6 border-2 border-black h-4 flex flex-row m-1 bg-gray-200 justify-evenly">
                    <div className="h-1 bg-gray-500 w-0.5 flex flex-col "></div>
                    <div className="h-2 bg-gray-500 w-0.5 flex flex-col "></div>
                    <div className="h-1 bg-gray-500 w-0.5 flex flex-col "></div>
                    <div className="h-full bg-gray-400 w-1 flex flex-col "></div>
                    <div className="h-1 bg-gray-500 w-0.5 flex flex-col "></div>
                    <div className="h-2 bg-gray-500 w-0.5 flex flex-col "></div>
                    <div className="h-1 bg-gray-500 w-0.5 flex flex-col "></div>
                </div>
                <div className="cursor text-2xl flex float-none -my-5 ">
                    <IoMdArrowDropup />
                </div>
                </div>
            </div> */