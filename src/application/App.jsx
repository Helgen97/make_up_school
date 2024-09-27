import RouterProviderImpl from "../router/RouterProviderImpl";
import StoreProvider from "../store/StoreProvider/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <RouterProviderImpl />
    </StoreProvider>
  );
};

export default App;
