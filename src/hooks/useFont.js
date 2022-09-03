import { useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

export const useFonts = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  SplashScreen.preventAutoHideAsync();

  const subcribe = async () => {
    try {
      await Font.loadAsync({
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_600SemiBold,
        Nunito_700Bold,
      });
    } catch (error) {
      console.warn(error);
    } finally {
      Font.isLoaded ? setIsAppReady(true) : setIsAppReady(false);
    }
  };
  useEffect(() => {
    subcribe();
  }, []);

  const unSubcribe = async () => {
    isAppReady ? await SplashScreen.hideAsync() : null;
  };

  useEffect(() => {
    unSubcribe();
  });
  return { isAppReady };
};
