import { Dimensions, Platform, StatusBar } from "react-native";

// iPhone X Dimensions
const iPhoneX_WIDTH = 375;
const iPhoneX_HEIGHT = 812;
// iPhone Xr Dimensions
const iPhoneXr_WIDTH = 414;
const iPhoneXr_HEIGHT = 896;
// iPhone XS Dimensions
const iPhoneXs_WIDTH = 375;
const iPhoneXs_HEIGHT = 896;
// iPhone XsMax Dimensions
const iPhoneXsMax_WIDTH = 414;
const iPhoneXsMax_HEIGHT = 896;

/**
 * This and hasNotch functions are the same,
 * just want to make two functions with different names
 * hasNotch is more accurate name
 */

export function isIPhoneXFamily() {
  return detection();
}

export function hasNotch() {
  return detection();
}

export function isIPhoneX(dim) {
  return dim.height === iPhoneX_HEIGHT || dim.width === iPhoneX_WIDTH;
}

export function isIPhoneXr(dim) {
  return dim.height === iPhoneXr_HEIGHT || dim.width === iPhoneXr_WIDTH;
}

export function isIPhoneXs(dim) {
  return dim.height === iPhoneXs_HEIGHT || dim.width === iPhoneXs_WIDTH;
}

export function isIPhoneXsMax(dim) {
  return dim.height === iPhoneXsMax_HEIGHT || dim.width === iPhoneXsMax_WIDTH;
}

function detection() {
  const dim = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (isIPhoneX(dim) || isIPhoneXr(dim) || isIPhoneXs(dim) || isIPhoneXsMax(dim))
  );
}

export function getStatusBarHeight() {
  return Platform.select({
    ios: hasNotch() ? 44 : 30,
    android: StatusBar.currentHeight
  });
}
