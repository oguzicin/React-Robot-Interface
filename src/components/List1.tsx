import { useState } from "react";

const List = () => {
  const [visibleLists, setVisibleLists] = useState([false, false, false]);

  const handleClick = (index: number) => {
    setVisibleLists((prevVisibleLists) => {
      const newVisibleLists = [...prevVisibleLists];
      newVisibleLists[index] = !newVisibleLists[index];
      return newVisibleLists;
    });
  };

  return (
    <div className=" w-60 bg-white h-full">
      <ul>
        <li>
          <div className="outList ">
            <button
              onClick={() => handleClick(0)}
              className="ps-5 w-60 h-10 text-white  bg-blue-500 border-2 border-white  hover:bg-gray-600 hover:text-white text-left "
            >
              Basic 1
            </button>
          </div>
          {visibleLists[0] && (
            <div className="innerList">
              <ul>
                <li>
                  <button className="ps-5 w-52 ml-8 h-10 bg-gray-400  text-black  border-2 border-white hover:bg-gray-600 hover:text-white text-left">
                    a
                  </button>
                </li>
                <li>
                  <button className="ps-5 w-52 ml-8 h-10 bg-gray-400  text-black border-2 border-white hover:bg-gray-600 hover:text-white text-left">
                    a
                  </button>
                </li>
                <li>
                  <button className="ps-5 w-52 ml-8 h-10 bg-gray-400  text-black border-2 border-white hover:bg-gray-600 hover:text-white text-left">
                    a
                  </button>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li>
          <div className="outList">
            <button
              onClick={() => handleClick(1)}
              className="ps-5 w-60 h-10 text-white border-2 bg-blue-500  border-white hover:bg-gray-600 hover:text-white text-left"
            >
              Basic 2
            </button>
          </div>
          {visibleLists[1] && (
            <div className="innerList">
              <ul>
                <li>
                  <button className="ps-5 w-52 ml-8 h-10 bg-gray-400  text-black  border-2 border-white hover:bg-gray-600 hover:text-white text-left">
                    a
                  </button>
                </li>
                <li>
                  <button className="ps-5 w-52 ml-8 h-10 bg-gray-400  text-black border-2 border-white hover:bg-gray-600 hover:text-white text-left">
                    a
                  </button>
                </li>
                <li>
                  <button className="ps-5 w-52 ml-8 h-10 bg-gray-400  text-black border-2 border-white hover:bg-gray-600 hover:text-white text-left">
                    a
                  </button>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li>
          <div className="outList">
            <button
              onClick={() => handleClick(2)}
              className="ps-5 w-60 h-10 text-white  bg-blue-500 border-2 border-white hover:bg-gray-600 hover:text-white text-left"
            >
              Basic 3
            </button>
          </div>
          {visibleLists[2] && (
            <div className="innerList">
              <ul>
                <li>
                  <button className="ps-5 w-52 ml-8 h-10 bg-gray-400  text-black border-2 border-white hover:bg-gray-600 hover:text-white text-left">
                    a
                  </button>
                </li>
                <li>
                  <button className="ps-5 w-52 ml-8 h-10 bg-gray-400  text-black border-2 border-white hover:bg-gray-600 hover:text-white text-left">
                    a
                  </button>
                </li>
                <li>
                  <button className="ps-5 w-52 ml-8 h-10 bg-gray-400  text-black border-2 border-white hover:bg-gray-600 hover:text-white text-left">
                    a
                  </button>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default List;
