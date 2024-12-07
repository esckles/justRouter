import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../Pages/HomeScreen";
import WisdomScreen from "../Components/WisdomScreen";
import Sam from "../Components/Sam";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/wisdom",
        element: <WisdomScreen />,
      },
      {
        path: "/sam",
        element: <Sam />,
      },
    ],
  },
]);
