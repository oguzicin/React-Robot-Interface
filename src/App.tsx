import Nav from "./components/Navigation";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <>
      <div className=" flex flex-col mb-0 h-screen justify-between bg-gray-200">
        <div className="h-full p-1 flex items-center justify-center">
          <Outlet />
        </div>
          
        <div>
          <Nav />
        </div>

      </div>
    </>
  );
}

export default App;

