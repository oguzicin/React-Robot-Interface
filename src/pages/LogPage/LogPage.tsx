import React, { SetStateAction, useState } from "react";
import Readings from "../../components/Readings";
import Container from "../../components/Container";
import JointLoad from "../../components/JointLoad";
import LogBtn from "../../components/LogBtn";
import DateLog from "../../components/DateLog";

interface Props {}

const LogPage = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      

      <div className=" flex-grow  w-full h-full flex flex-col gap-1">
        <div className="flex flex-row h-full gap-1">
          <div className="w-96 h-full  flex ">
            <Readings />
          </div>
          <div className="w-full h-full  flex ">
            <JointLoad />
          </div>
        </div>
        <div className="w-full h-full  flex ">
          <DateLog></DateLog>
        </div>
      </div>
    </>
  );
};

export default LogPage;
