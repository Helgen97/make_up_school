import { RouterProvider } from "react-router-dom";
import BROWSER_ROUTER from "../BrowserRouter/BrowserRouter";

const RouterProviderImpl = () => {
  return <RouterProvider router={BROWSER_ROUTER} />;
};

export default RouterProviderImpl;
