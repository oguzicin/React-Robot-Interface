import React, { useState } from "react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";

type Props = {
  initialProgress: number;
  nick: string;
};

const ProgressBar = ({ initialProgress, nick }: Props) => {
  const [progress, setProgress] = useState<number>(50);

  const addProg = () => {
    if (progress < 100) {
      setProgress((progress) => progress + 1);
    }
  };

  const minusProg = () => {
    if (progress > 0) {
      setProgress((progress) => progress - 1);
    }
  };

  return (
    <div className="w-[23vw] ">
      <div className=" w-full justify-center flex flex-row">
        <div className=" flex flex-col items-center justify-center">
          <button
            onClick={minusProg}
            className="w-10 h-10 text-2xl items-center justify-center flex"
          >
            <ImArrowLeft />
          </button>
        </div>
        <div className="w-full justify-center flex flex-col">
          <div className="flex flex-row justify-between">
            <div className=" w-20 text-lg">{nick}</div>
            <div className="border-2 border-black w-16 justify-end flex">{progress}</div>
          </div>
          <div className=" w-full flex flex-col justify-center items-center h-full">
            <div className="w-full h-fit bg-transparent border-2 border-black   my-2 ">
              <div className="w-full h-5  bg-gray-300">
                <div
                  className="h-2 transition-all   border-e-8 border-r-black "
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className=" items-center flex">
          <button
            onClick={addProg}
            className="w-10 h-10 text-2xl items-center justify-center flex"
          >
            <ImArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
