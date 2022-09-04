import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

// base dimensions for android  w: 424, h: 942

const widthBaseScale = width / 360;
const heightBaseScale = height / 762;

export const normalize = (size, based) => {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// for screen height

const heightPixel = (size) => {
  return normalize(size, "height");
};

// for screen width

const widthPixel = (size) => {
  return normalize(size, "width");
};

// vertical padding and margin

const pixelSizeVertical = (size) => {
  return heightPixel(size);
};

// horizontal padding and margin

const pixelSizeHorizontal = (size) => {
  return widthPixel(size);
};

// fonts

const fontPixel = (size) => {
  return heightPixel(size);
};

const fontSize = {
  h1: normalize(24),
  h2: normalize(21),
  h3: normalize(19),
  h4: normalize(17),
  h5: normalize(14),
  h6: normalize(9),
};

export default {
  width,
  height,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  size: {
    h1: fontSize.h1,
    h2: fontSize.h2,
    h3: fontSize.h3,
    h4: fontSize.h4,
    h5: fontSize.h5,
    h6: fontSize.h6,
    isSmallDevice: width <= 375,
  },
};
