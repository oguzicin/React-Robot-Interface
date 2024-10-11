import { ReactNode, useState } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <div className="counter bg-gray-500 p-5 h-60 w-60 rounded-l">
      <>
        <div className="text-3xl border-2 border-blue-200 text-center">
          <h1>{children}</h1>
        </div>

        <div className="inner_count border-2 border-blue-200 text-center space-x-5 space-y-10">
          <button className="bg-blue-400 w-20 h-20 rounded-xl hover:bg-blue-300 " onClick={() => setCount((prev) => prev + 1)}>+</button>
          <button className="bg-blue-400 w-20 h-20 rounded-xl hover:bg-blue-300 "onClick={() => setCount((prev) => prev - 1)}>-</button>
        </div>
      </>
    </div>
  );
};

export default Counter;
