import React, { SetStateAction, useState } from "react";
import List from "../../components/List";
import ComEdit from "../../components/ComEdit";
import Container from "../../components/Container";

interface Props {}

const ProgPage = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <div className=" flex-grow  w-full h-full flex flex-row gap-1 ">
        <div className=" w-fit  flex">
          <List />
        </div>
        <div className="w-fit  flex">
          <ComEdit />
        </div>
        <div className="w-full  flex">
          <Container />
        </div>
      </div>
    </>
  );
};

export default ProgPage;
