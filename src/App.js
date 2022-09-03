import React from "react";
import { GlobalContext } from "./context/GlobalState";
import { useFonts } from "./hooks";
import NavigationContainer from "./navigation/NavigationContainer";

const App = () => {
  const { isAppReady } = useFonts();
  console.warn(isAppReady);

  return !isAppReady ? null : (
    <GlobalContext>
      <NavigationContainer />
    </GlobalContext>
  );
};

export default App;
