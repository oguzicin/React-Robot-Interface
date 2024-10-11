import React, { SetStateAction, useState } from "react";
import JointPos from "../../components/JointPos";
import ToolPos from "../../components/ToolPos";
import ZoomSlide from "../../components/ZoomSlide";
import Button from "../../components/Button";
import { TbDimensions, TbHomeLink } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import Rotate from "../../components/Rotate";
import {
  ImArrowDown,
  ImArrowDownLeft,
  ImArrowDownRight,
  ImArrowLeft,
  ImArrowRight,
  ImArrowUp,
} from "react-icons/im";

interface Props {}

const MovePage = () => {
  const [count, setCount] = useState<number>(1);

  const [toolPosition, setToolPosition] = useState({
    x: "0",
    y: "0",
    z: "0",
    rx: "0",
    ry: "0",
    rz: "0",
  });

  const handleSetToolPosition = (newValues: any) => {
    console.log("new",newValues);
    
    setToolPosition((prev) => ({ ...prev, ...newValues }));
  };
  console.log( "dasadasd",toolPosition);
  

  return (
    <>
      <div className=" flex-grow w-full h-full flex flex-row gap-1">
        <div className="flex flex-col gap-1">
          <div className="h-full w-full flex flex-row items-center justify-center bg-white">
            <Rotate
              header="TCP Position"
              symbol0={
                <ImArrowUp className="fill-blue-500 hover:fill-gray-500 " />
              }
              symbol1={
                <ImArrowDown className="fill-blue-500 hover:fill-gray-500" />
              }
              symbol2={
                <ImArrowUp className="fill-blue-500 hover:fill-gray-500" />
              }
              symbol3={
                <ImArrowLeft className="fill-blue-500 hover:fill-gray-500" />
              }
              symbol4={
                <ImArrowRight className="fill-blue-500 hover:fill-gray-500" />
              }
              symbol5={
                <ImArrowDown className="fill-blue-500 hover:fill-gray-500" />
              }
            />
          </div>
          <div className="h-full">
            <Rotate
              header="TCP Orientation"
              symbol0={
                <ImArrowDownLeft className="fill-blue-500 hover:fill-gray-500 " />
              }
              symbol1={
                <ImArrowDownRight className="fill-blue-500 hover:fill-gray-500" />
              }
              symbol2={
                <ImArrowUp className="fill-blue-500 hover:fill-gray-500" />
              }
              symbol3={
                <ImArrowLeft className="fill-blue-500 hover:fill-gray-500" />
              }
              symbol4={
                <ImArrowRight className="fill-blue-500 hover:fill-gray-500" />
              }
              symbol5={
                <ImArrowDown className="fill-blue-500 hover:fill-gray-500" />
              }
            />
          </div>
        </div>
        <div className="min-w-96 w-full h-fulljustify-between flex flex-col bg-white">
          <div className="w-full h-fit  bg-gray-500 text-white">Content</div>
          <div className="w-full h-full  flex flex-row justify-between ">
            <div className="h-full w-full  "></div>
            <div className="w-16 flex flex-row justify-center items-center ">
              <ZoomSlide />
            </div>
          </div>
          <div className=" flex flex-row w-full gap-2 p-2">
            <div className="w-full flex justify-center">
              <Button
                symbol={<TbHomeLink />}
                width="w-40"
                height="h-16"
                bg="bg-white"
                border="border-blue-400 border-2"
                hover="hover:bg-blue-300"
                text="white"
                flex="flex flex-row items-center justify-center"
                label="Home"
                onClick={() =>
                  handleSetToolPosition({
                    x: "0",
                    y: "0",
                    z: "0",
                    rx: "0",
                    ry: "0",
                    rz: "0",
                  })
                }
              />
            </div>
            <div className="w-full flex justify-center">
            <Button
                symbol={<TbHomeLink />}
                width="w-40"
                height="h-16"
                bg="bg-white"
                border="border-blue-400 border-2"
                hover="hover:bg-blue-300"
                text="white"
                flex="flex flex-row items-center justify-center"
                label="Align"
                onClick={() =>
                  handleSetToolPosition({
                    x: "150",
                    y: "250",
                    z: "250",
                    rx: "7.5",
                    ry: "2.9",
                    rz: "1.2",
                  })
                }
              />
              
            </div>
            <div className="w-full flex justify-center">
              <Button
                symbol={<IoIosArrowForward />}
                width="w-40"
                height="h-16"
                bg="bg-white"
                border="border-blue-400 border-2"
                hover="hover:bg-blue-300"
                text="white"
                flex="flex flex-row items-center justify-center"
                label="FreeDrive"
                onClick={() =>
                  handleSetToolPosition({ x: 200, y: 100, z: 500, rx: 1.5, ry:4.5, rz:9.5 })
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-80 ">
            <ToolPos toolPosition={toolPosition} />
          </div>
          <div className="h-full bg-white">
            <JointPos />
          </div>
        </div>
      </div>
    </>
  );
};

//<ProgressBar initialProgress={50} />

export default MovePage;
