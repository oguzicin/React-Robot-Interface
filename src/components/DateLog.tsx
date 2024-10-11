import React, { useEffect, useState } from "react";
import LogBtn from "./LogBtn";
import { FaCalendarAlt } from "react-icons/fa";


const DateLog = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };


  return (
    <div className=" w-full bg-white h-full flex flex-col">
      <div className="bg-gray-500 text-white">Date Log</div>
      <div className="flex justify-between p-1 h-11 items-center">
        <div className="flex flex-row justify-between items-center gap-2 ps-4">
          <FaCalendarAlt />
          {formatDate(currentTime)}
        </div>
        <div className=" w-fit">
          <LogBtn></LogBtn>
        </div>
        <div>
          <input
            type="file"
            id="myFile"
            name="filename"
            aria-label="hidden"
          ></input>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="border-b-2 border-blue-300 w-11/12 flex flex-col justify-center"></div>
      </div>

      <div></div>
    </div>
  );
};

export default DateLog;
