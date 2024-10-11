import React from "react";
import ExitBtn from "../../components/ExitBtn";
import Status from "../../components/Status";


const PowerPage = () => {
    return(
        <div className="w-3/4 p-0 h-3/4 bg-gray-300 flex flex-col items-center justify-center border-2 border-gray-400 gap-1">
            <div className="w-full h-full flex flex-row justify-center ">
                <Status></Status>
            </div>
            <div className="w-full h-fit flex flex-row items-center justify-start border-t-2 border-gray-400 bg-white m-1">
                <ExitBtn className=" w-fit h-fit  min-w-28 m-2" >Exit</ExitBtn>
            </div>
        </div>
    );
}

export default PowerPage;