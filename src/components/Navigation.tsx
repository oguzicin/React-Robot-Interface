import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Switch1 from "./Switch1";
import { TiThList } from "react-icons/ti";
import { GiMechanicalArm } from "react-icons/gi";
import { FaArrowsUpDownLeftRight } from "react-icons/fa6";
import { MdOutlineDonutSmall } from "react-icons/md";
import { TbGraph } from "react-icons/tb";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

type NavProps = {};

const Nav = ({}: NavProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = (checked: boolean) => {
    setIsSwitchOn(checked);
  };

  const getButtonClass = (path: string) => {
    return location.pathname === `/${path}`
      ? "bg-gray-200 text-gray-500" 
      : "hover:bg-gray-400 ";
  };

  return (
    <>
      <div
        className={`w-full h-20 NavMain flex  justify-between text-white ${
          isSwitchOn ? "bg-green-500" : "bg-slate-600"
        }`}
      >
        <div className=" p-2 text-center">
          <button
            className=" w-full h-full px-2.5 flex flex-row items-center justify-center bg-white rounded-full  border-2 border-gray-400"
            onClick={() => navigate("Power")}
          >
            <div className="w-6 h-6 p-5 bg-red-500 rounded-full"></div>
          </button>
        </div>

        <div className=" flex flex-row my-auto h-full items-center ">
          <button
            className={`border-s-2 border-slate-500 p-2 items-center h-full w-24 ${getButtonClass(
              "Run"
            )}`}
            onClick={() => navigate("Run")}
          >
            <div className="flex flex-col items-center justify-between h-full ">
              <div className="flex h-full items-center"><SiGoogledisplayandvideo360 size={36} /></div> 
              <div className=" flex h-fit ">Run</div>
            </div>
          </button>

          <button
           className={`border-s-2 border-slate-500 p-2 items-center h-full w-24 ${getButtonClass(
            "Program"
          )}`}
            onClick={() => navigate("Program")}
          >
            <div className="flex flex-col items-center justify-between h-full ">
              <div className="flex h-full items-center"><TiThList size={36} /></div> 
              <div className=" flex h-fit ">Program</div>
            </div>
            
            
          </button>

          <button
            className={`border-s-2 border-slate-500 p-2 items-center h-full w-24 ${getButtonClass(
              "Install"
            )}`}
            onClick={() => navigate("Install")}
          >
            <div className="flex flex-col items-center justify-between h-full ">
              <div className="flex h-full items-center"><GiMechanicalArm size={36}/></div> 
              <div className=" flex h-fit ">Install</div>
            </div>
            
          </button>
          <button
            className={`border-s-2 border-slate-500 p-2 items-center h-full w-24 ${getButtonClass(
              "Move"
            )}`}
            onClick={() => navigate("Move")}
          >
            <div className="flex flex-col items-center justify-between h-full ">
              <div className="flex h-full items-center"><FaArrowsUpDownLeftRight size={36}/></div> 
              <div className=" flex h-fit ">Move</div>
            </div>
            
          </button>
          <button
            className={`border-s-2 border-slate-500 p-2 items-center h-full w-24 ${getButtonClass(
              "Ino"
            )}`}
            onClick={() => navigate("Ino")}
          >
            <div className="flex flex-col items-center justify-between h-full ">
              <div className="flex h-full items-center"><MdOutlineDonutSmall size={36}/></div> 
              <div className=" flex h-fit ">I/O</div>
            </div>
           
            
          </button>
          <button
            className={`border-s-2 border-slate-500 p-2 items-center h-full w-24 ${getButtonClass(
              "Log"
            )}`}
            onClick={() => navigate("Log")}
          >
            <div className="flex flex-col items-center justify-between h-full ">
              <div className="flex h-full items-center"><TbGraph size={36} /></div> 
              <div className=" flex h-fit ">Log</div>
            </div>
            
          </button>
        </div>

        <div className=" p-2 flex flex-row items-center w-fit justify-center">
          <Switch1 onToggle={handleToggle} />
        </div>
      </div>
    </>
  );
};

export default Nav;
