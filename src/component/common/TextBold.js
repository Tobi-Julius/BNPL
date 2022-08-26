import { Text as MainText } from "react-native";
import React from "react";

export const TextBold = ({
  textStyle,
  text,
  textAlign,
  fontSize,
  fontWeight,
  ...others
}) => {
  const [fontsLoaded] = useFonts({
    NunitoBold: require("../../assets/font/Nunito-Bold.ttf"),
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
        { fontFamily: "NunitoBold" },
      ]}
      {...others}
    >
      {text}
    </MainText>
  );
};
