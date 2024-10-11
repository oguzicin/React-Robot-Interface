import React, { useState } from "react";
import List from "../../components/List";
import Container from "../../components/Container";
import Password from "../../components/Password";


interface Props {}

const InstallPage = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <>

      <div className=" flex-grow  w-full h-full flex flex-row justify-between gap-1">
        <div className="h-full bg-w">
          <List />
        </div>
        <div className="flex flex-col h-full w-full justify-between gap-1">
          <div className=" flex flex-row h-full w-full justify-between gap-1">
            <div className="flex w-full h-full ">
              <Container />
            </div>

            <div className="justify-evenly flex flex-col gap-1">
              <div className=" h-full ">
                <Container />
              </div>
              <div className="h-full flex flex-row  ">
                <Container />
              </div>
            </div>
          </div>

          <div className="flex w-full h-fit min-h-12 bg-white">
            <Password/>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallPage;
