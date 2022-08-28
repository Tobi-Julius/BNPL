import React from "react";
import { Auth } from "./firebase/firebase-config";
import { AuthProvider, useUserAuth } from "./context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { AuthScreen } from "./AuthScreens";
import { Tab } from "./bottomTabs";

const App = () => {
  // const { user } = useUserAuth();

  return (
    <AuthProvider>
      <NavigationContainer>
        {Auth ? <AuthScreen /> : <Tab />}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
