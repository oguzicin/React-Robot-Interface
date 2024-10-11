import React, { SetStateAction, useState } from "react";
import List from "../../components/List";
import CheckBox from "../../components/CheckBox";
import CheckBox1 from "../../components/CheckBox1";
import ToolDint from "../../components/ToolDint";
import ToolDout from "../../components/ToolDout";
import { Slider } from "@mui/material";
import ProgressBar from "../../components/ProgressBar";
import SmallList from "../../components/SmallList";
import Progress from "../../components/Progress";
import List2 from "../../components/List2";

interface Props {}

const InoPage = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <>


      <div className=" flex-grow  w-full h-full flex flex-row justify-between bg-gray-200 gap-1">
        <div className=" w-fit  flex">
          <List2 />
        </div>
        <div className="w-full  ">
          <div className="flex flex-col h-full justify-between  gap-1">
            <div className="flex flex-row h-full gap-1">
              <div className="w-full h-full  flex">
                <CheckBox />
              </div>
              <div className="w-full h-full  flex">
                <CheckBox />
              </div>
            </div>

            <div className="w-full h-full  flex flex-col bg-white">
              <div className="bg-slate-500 w-full h-fit text-white">
                Container
              </div>
              <div className="w-full h-full flex flex-col justify-evenly items-center ">
                <div className="w-full h-fit flex flex-row justify-center mt-4">
                  <div className="w-28 h-10 ">analog_in[0]</div>
                  <div className="w-1/2 flex flex-col ">
                    <div>
                    <div><Progress symbol='mA' value={50}/></div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="w-10 h-10 ">0V</div>
                      <div className="w-10 h-10 ">10V</div>
                    </div>
                  </div>
                  <div className="w-28 h-10  flex flex-row items-center "><SmallList/></div>
                </div>
                <div className="w-full h-fit flex flex-row justify-center">
                  <div className="w-28 h-10 ">analog_in[1]</div>
                  <div className="w-1/2 flex flex-col ">
                    <div>
                    <div><Progress symbol='mA' value={50}/></div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="w-10 h-10 ">0V</div>
                      <div className="w-10 h-10 ">10V</div>
                    </div>
                  </div>
                  <div className="w-28 h-10 flex flex-row items-center "><SmallList/></div>
                </div>
              </div>
            </div>
            <div className="w-full h-full  flex flex-col bg-white">
              <div className="bg-slate-500 w-full h-fit text-white">
                Container
              </div>
              <div className="w-full h-full flex flex-col justify-evenly items-center  ">
                <div className="w-full h-fit flex flex-row justify-center mt-4">
                  <div className="w-28 h-10 ">analog_out[0]</div>
                  <div className="w-1/2 flex flex-col ">
                    <div className="me-2 ms-2">
                      <Slider />
                    </div>
                    <div className="flex flex-row justify-center">
                      <div className="w-fit h-10 ">4.00 mA</div>
                      
                    </div>
                  </div>
                  <div className="w-28 h-10  flex flex-row items-center "><SmallList/></div>
                </div>
                <div className="w-full h-fit flex flex-row justify-center">
                  <div className="w-28 h-10 ">analog_out[1]</div>
                  <div className="w-1/2 flex flex-col ">
                    <div className="me-2 ms-2 ">
                      <Slider />
                    </div>
                    <div className="flex flex-row justify-center">
                      <div className="w-fit h-10 ">4.00 mA</div>
                      
                    </div>
                  </div>
                  <div className="w-28 h-10  flex flex-row items-center "><SmallList/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-1 bg-gray-200">
          <div className="flex flex-row h-full gap-1">
            <div className="w-full h-full  flex ">
              <CheckBox1 />
            </div>
            <div className="w-full h-full  flex">
              <CheckBox1 />
            </div>
          </div>
          <div className="h-full">
            <div className="flex flex-row h-full gap-1">
              <div className="w-full h-full flex">
                <ToolDint />
              </div>
              <div className="w-full h-full  flex">
                <ToolDout />
              </div>
            </div>
          </div>
          <div className="w-full h-full  flex flex-col bg-white">
            <div className="bg-slate-500 w-full h-fit text-white">
              Container
            </div>
            <div className="w-full h-full flex flex-col justify-evenly items-center ">
              <div className="w-full h-fit flex flex-row justify-center mt-4">
                <div className="w-28 h-10 ">analog_in[2]</div>
                <div className="w-1/2 flex flex-col ">
                  <div>
                  <div><Progress symbol='V' value={50}/></div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="w-10 h-10 ">0V</div>
                    <div className="w-10 h-10 ">10V</div>
                  </div>
                </div>
                <div className="w-28 h-10 ">Voltage</div>
              </div>
              <div className="w-full h-fit flex flex-row justify-center">
                <div className="w-28 h-10 ">analog_in[3]</div>
                <div className="w-1/2 flex flex-col">
                  <div>
                  <div><Progress symbol='V' value={50}/></div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="w-10 h-10 ">0V</div>
                    <div className="w-10 h-10 ">10V</div>
                  </div>
                </div>
                <div className="w-28 h-10 ">Voltage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InoPage;
