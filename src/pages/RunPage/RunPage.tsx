import React, { SetStateAction, useState } from "react";
import LoadProg from "../../components/LoadProg";
import { FaPlay } from "react-icons/fa";
import Button from "../../components/Button";
import { FaStop } from "react-icons/fa6";
import Container from "../../components/Container";


interface Props {}

const RunPage = () => {
  const [count, setCount] = useState<number>(1);

  const [status, setStatus] = useState<string>("stopped");

  return (
    <>


      <div className=" flex-grow  w-full h-full  flex-col ">
        <div className="flex flex-row h-full gap-1">
          <div className="flex flex-col justify-between w-fit h-full gap-1">
            <div className="flex  listDiv  w-full   flex-grow">
              <LoadProg status={status} />
            </div>

            <div className="flex flex-row justify-evenly items-center bg-white p-10 gap-6 ">
              <div className="  ">
                <Button
                  symbol={<FaPlay size={48} />}
                  round="rounded-full"
                  bg="bg-blue-600"
                  border=""
                  borderc=""
                  hover="bg-blue-400"
                  text="text-white"
                  focus="focus:outline-black focus:ring focus:ring-blue-800"
                  flex="flex"
                  onClick={() => setStatus("started")}
                />
              </div>
              <div className=" ">
                <Button
                  symbol={<FaStop size={48} />}
                  round="rounded-full"
                  bg="bg-blue-600"
                  hover="bg-blue-400"
                  text="text-white"
                  focus="focus:outline-black focus:ring focus:ring-blue-800"
                  flex="flex"
                  onClick={() => setStatus("stopped")}
                />
              </div>
            </div>
          </div>

          <div className="w-full  flex">
            <Container />
          </div>
        </div>
      </div>
    </>
  );
};

export default RunPage;

function setCount(value: SetStateAction<number>): void {
  throw new Error("Function not implemented.");
}
