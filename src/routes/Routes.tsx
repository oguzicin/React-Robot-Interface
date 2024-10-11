import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RunPage from "../pages/RunPage/RunPage";
import ProgPage from "../pages/ProgPage/ProgPage";
import MovePage from "../pages/MovePage/MovePage";
import InstallPage from "../pages/InstallPage/InstallPage";
import InoPage from "../pages/InoPage/InoPage";
import LogPage from "../pages/LogPage/LogPage";
import PowerPage from "../pages/PowerPage/PowerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "Run", element: <RunPage /> },
      { path: "Program", element: <ProgPage /> },
      { path: "Move", element: <MovePage /> },
      { path: "Install", element: <InstallPage /> },
      { path: "Ino", element: <InoPage /> },
      { path: "Log", element: <LogPage /> },
      { path: "Power", element: <PowerPage /> },
    ],
  },
]);
