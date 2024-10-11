import React, { useState } from "react";

const CheckBox: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  const isChecked = (value: string) => checkedItems.includes(value);

  return (
    <div className="h-full w-full  bg-yellow-200">
      <div className="h-full w-full flex flex-col">
        <div className="bg-gray-500 text-white">Configurable</div>
        <div className="w-full h-full flex flex-row justify-between">
          <div className="flex flex-col items-end p-2 justify-center gap-5 w-full">
            {["S-Guard Reset", "S-Guard-Reset", "2", "3"].map((value) => (
              <label
                key={value}
                className={`gap-1 flex ${
                  isChecked(value) ? "text-green-500" : ""
                }`}
              >
                {value}
                <input
                  type="checkbox"
                  checked={isChecked(value)}
                  onChange={() => handleCheckboxChange(value)}
                />
              </label>
            ))}
          </div>
          <div className="flex flex-col items-start p-2 justify-center gap-5 w-full h-full">
            {["4", "5", "6", "7"].map((value) => (
              <label
                key={value}
                className={`gap-1 flex ${
                  isChecked(value) ? "text-green-500" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked(value)}
                  onChange={() => handleCheckboxChange(value)}
                />
                {value}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
