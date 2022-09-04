import React from "react";
import { StatusBar } from "react-native";
import { GlobalContext } from "./context/GlobalState";
import { useFonts } from "./hooks";
import NavigationContainer from "./navigation/NavigationContainer";

const App = () => {
  const { isAppReady } = useFonts();

  return !isAppReady ? null : (
    <GlobalContext>
      <NavigationContainer />
    </GlobalContext>
  );
};

export default App;
