import React from "react";
import Progress from "./Progress";
import SmallProg from "./SmallProg";

const JointLoad = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white ">
      <div className="bg-gray-500 text-white">Joint Load</div>
      <div className="flex flex-row justify-evenly h-full">
        <div className="w-1/4 p-4 flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <div className="border-2 border-gray-300 w-7 flex justify-center  rounded-full">
                0
              </div>
              <div>Base</div>
            </div>
            <div>OK</div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <div className="border-2 border-gray-300 w-7 flex justify-center  rounded-full">
                1
              </div>
              <div>Shoulder</div>
            </div>
            <div>OK</div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <div className="border-2 border-gray-300 w-7 flex justify-center  rounded-full">
                2
              </div>
              <div>Elbow</div>
            </div>
            <div>OK</div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <div className="border-2 border-gray-300 w-7 flex justify-center  rounded-full">
                3
              </div>
              <div>Wrist 1</div>
            </div>
            <div>OK</div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <div className="border-2 border-gray-300 w-7 flex justify-center  rounded-full">
                4
              </div>
              <div>Wrist 2</div>
            </div>
            <div>OK</div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <div className="border-2 border-gray-300 w-7 flex justify-center  rounded-full">
                5
              </div>
              <div>Wrist 5</div>
            </div>
            <div>OK</div>
          </div>
        </div>
        <div className="w-full  flex flex-col  h-full justify-evenly gap-3 ">
          <div className="text-xs  flex flex-row justify-center ">
            <div className="flex flex-row w-1/3 gap-10 ">
              <div className="w-full ">
                <div className="h-7 w-full ">
                  <SmallProg symbol="V" value={50} />
                </div>
                
              </div>

              <div className="text-xs  flex items-center w-16 h-8 justify-center">
                0.0 V
              </div>
            </div>
          </div>
          
          <div className="text-xs  flex flex-row justify-center ">
            <div className="flex flex-row w-1/3 gap-10 ">
              <div className="w-full ">
                <div className="h-7 w-full ">
                  <SmallProg symbol="V" value={50} />
                </div>
                
              </div>

              <div className="text-xs  flex items-center w-16 h-8 justify-center">
                0.0 V
              </div>
            </div>
          </div>

          <div className="text-xs  flex flex-row justify-center ">
            <div className="flex flex-row w-1/3 gap-10 ">
              <div className="w-full ">
                <div className="h-7 w-full ">
                  <SmallProg symbol="V" value={50} />
                </div>
                
              </div>

              <div className="text-xs  flex items-center w-16 h-8 justify-center">
                0.0 V
              </div>
            </div>
          </div>

          <div className="text-xs  flex flex-row justify-center ">
            <div className="flex flex-row w-1/3 gap-10 ">
              <div className="w-full ">
                <div className="h-7 w-full ">
                  <SmallProg symbol="V" value={50} />
                </div>
                
              </div>

              <div className="text-xs  flex items-center w-16 h-8 justify-center">
                0.0 V
              </div>
            </div>
          </div>

          <div className="text-xs  flex flex-row justify-center ">
            <div className="flex flex-row w-1/3 gap-10 ">
              <div className="w-full ">
                <div className="h-7 w-full ">
                  <SmallProg symbol="V" value={50} />
                </div>
                
              </div>

              <div className="text-xs  flex items-center w-16 h-8  justify-center">
                0.0 V
              </div>
            </div>
          </div>

          <div className="text-xs  flex flex-row justify-center ">
            <div className="flex flex-row w-1/3 gap-10 ">
              <div className="w-full ">
                <div className="h-7 w-full ">
                  <SmallProg symbol="V" value={50} />
                </div>
                
              </div>

              <div className="text-xs  flex items-center w-16 h-8 justify-center">
                0.0 V
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JointLoad;
