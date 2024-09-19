
import { Provider } from "react-redux"
import mainStore from "../mainStore";

const StoreProvider = ({ children }) => {
  return <Provider store={mainStore}>{children}</Provider>;
};

export default StoreProvider;
