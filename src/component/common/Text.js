import { Text as MainText } from "react-native";
import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

export const Text = ({
  textStyle,
  text,
  textAlign,
  fontSize,
  fontWeight,
  ...others
}) => {
  const [fontsLoaded] = useFonts({
    Nunito: require("../../assets/font/Nunito-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MainText
      onLayout={onLayoutRootView}
      style={[
        textStyle,
        textAlign,
        fontSize,
        fontWeight,
        { fontFamily: "Nunito" },
      ]}
      {...others}
    >
      {text}
    </MainText>
  );
};
