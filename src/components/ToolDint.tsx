import React, { useState } from 'react';

const ToolDint: React.FC = () => {

  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    setCheckedItems(prevCheckedItems => {
   
      if (prevCheckedItems.includes(value)) {

        return prevCheckedItems.filter(item => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };


  const isChecked = (value: string) => checkedItems.includes(value);

  return (
    <div className="h-full w-full bg-white">
      <div className="h-full w-full flex flex-col">
        <div className="bg-gray-500 text-white">Tool Digital Input</div>
        <div className="w-full h-full flex flex-col justify-start mt-5">
          <div className="flex flex-row items-end p-2 justify-center gap-5 w-full">
            {['0', '1'].map(value => (
              <label
                key={value}
                className={`gap-1 flex ${isChecked(value) ? 'text-green-500' : ''}`}
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
        </div>
      </div>
    </div>
  );
};

export default ToolDint;