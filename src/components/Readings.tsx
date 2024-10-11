import React from "react";

interface Props {
    value:number;
    symbol:string;
}

const Readings = () => {
  return (
    <div className=" bg-white w-full h-full flex flex-col">
      <div className="bg-gray-500 text-white ">Readings</div>
      <div className="flex flex-col justify-center gap-5  h-full text-sm p-5">
        
        <div className="h-fit">
          <div className=" flex flex-row  gap-20">
            <div className=" w-80">
              Controller Temp
            </div>
            <div className="w-full">
              <div className="flex flex-row justify-center">24.0 C</div>
            </div>
          </div>
        </div>

        <div className="h-fit">
          <div className=" flex flex-row  gap-20">
            <div className=" w-80">
              Main Voltage
            </div>
            <div className="w-full">
              <div className="flex flex-row justify-center">48.0 V</div>
            </div>
          </div>
        </div>

        <div className="h-fit">
          <div className=" flex flex-row  gap-20">
            <div className="b w-80">
              Avg Robot Power
            </div>
            <div className="w-full">
              <div className="flex flex-row justify-center">0 W</div>
            </div>
          </div>
        </div>

        <div className="h-fit">
          <div className="  flex flex-row  gap-20">
            <div className=" w-80">
              Current
            </div>
            <div className="w-full">
              <div className="flex flex-row justify-center">0.0 A</div>
            </div>
          </div>
        </div>

        <div className="h-fit">
          <div className=" flex flex-row  gap-20">
            <div className=" w-80">
              IO Current
            </div>
            <div className="w-full">
              <div className="flex flex-row justify-center">0.0 A</div>
            </div>
          </div>
        </div>

        <div className="h-fit">
          <div className=" flex flex-row  gap-20">
            <div className=" w-80">
              Tool Current
            </div>
            <div className="w-full">
              <div className="flex flex-row justify-center">0 mA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readings;
