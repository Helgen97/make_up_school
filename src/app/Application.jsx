import RouterProviderImpl from "../router/RouterProviderImpl";
import StoreProvider from "../store/StoreProvider/StoreProvider";

const Application = () => {
  return (
    <StoreProvider>
      <RouterProviderImpl />
    </StoreProvider>
  );
};

export default Application;
