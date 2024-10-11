import { log } from "console";
import React, { useState } from "react";

interface ToolPosProps {
  toolPosition: {
    x: string;
    y: string;
    z: string;
    rx: string;
    ry: string;
    rz: string;
  };
}

const ToolPos = ({ toolPosition }: ToolPosProps) => {
  
  return (
    <div className="h-full w-full bg-white">
      <div className="w-full h-fit bg-gray-500 text-white">Tool Position</div>
      <div className="flex flex-row w-full h-full items-center justify-center">
        <div className="w-full justify-center grid grid-flow-row gap-5">
          <div className="w-full h-10 flex flex-row gap-2">
            <div>X</div>
            <div>
            <input
                className="border-2 border-gray-500 w-20"
                value={toolPosition.x}
                
              />
            </div>
            <div className="text-gray-500">mm</div>
          </div>
          <div className="w-10 h-10 flex flex-row gap-2">
            <div>Y</div>
            <div>
            <input
                className="border-2 border-gray-500 w-20"
                value={toolPosition.y}
                
              />
            </div>
            <div className="text-gray-500">mm</div>
          </div>
          <div className="w-10 h-10 flex flex-row gap-2">
            <div>Z</div>
            <div>
            <input
                className="border-2 border-gray-500 w-20"
                value={toolPosition.z}
                
              />
            </div>
            <div className="text-gray-500">mm</div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-10 h-10 flex flex-row gap-2">
            <div>RX</div>
            <div>
            <input
                className="border-2 border-gray-500 w-20"
                value={toolPosition.rx}
                
              />
            </div>
            <div className="text-gray-500">rad</div>
          </div>
          <div className="w-10 h-10 flex flex-row gap-2">
            <div>RX</div>
            <div>
            <input
                className="border-2 border-gray-500 w-20"
                value={toolPosition.ry}
                
              />
            </div>
            <div className="text-gray-500">rad</div>
          </div>
          <div className="w-10 h-10 flex flex-row gap-2">
            <div>RX</div>
            <div>
            <input
                className="border-2 border-gray-500 w-20"
                value={toolPosition.rz}
               
              />
            </div>
            <div className="text-gray-500">rad</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolPos;
