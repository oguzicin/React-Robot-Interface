import React from "react";
import { FaPlay } from "react-icons/fa";

interface Props {
  symbol: React.ReactNode;
  height?: string;
  width?: string;
  round?: string;
  bg?: string;
  border?: string;
  borderc?: string;
  hover?: string;
  text?: string;
  focus?: string;
  flex?: string;
  label?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  symbol,
  height,
  width,
  round,
  bg,
  border,
  borderc,
  hover,
  text,
  focus,
  flex,
  label,
  onClick
}) => {
  return (
    <>
      <div className="stop_div">
        <button
          onClick={onClick}
          className={`${height} ${width} ${round} ${bg} ${border} ${borderc} ${hover} ${text} ${focus} ${flex} ${onClick} p-6 items-center justify-center`}
        >
          <div className={`flex items-center`}>
            {symbol}
            {label && <span className="ml-2">{label}</span>}{" "}
          </div>
        </button>
      </div>
    </>
  );
};

export default Button;
