import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import { NavScreens } from "./NavigationScreens";

import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <NavScreens />
      </NavigationContainer>
    </AuthProvider>
  );
};

registerRootComponent(App);
