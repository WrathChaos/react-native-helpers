import { Dimensions, Platform, StatusBar } from "react-native";

// iPhone X Dimensions
const iPhoneX_HEIGHT = 812;
// iPhone Xr Dimensions
const iPhoneXr_HEIGHT = 896;
// iPhone XS Dimensions
const iPhoneXs_HEIGHT = 896;
// iPhone XsMax Dimensions
const iPhoneXsMax_HEIGHT = 896;
// iPhone SE Dimensions
const iPhoneSE_HEIGHT = 568;

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

export function isIPhoneSE(dim) {
  return dim.height === iPhoneSE_HEIGHT;
}

export function isIPhoneX(dim) {
  return dim.height === iPhoneX_HEIGHT;
}

export function isIPhoneXr(dim) {
  return dim.height === iPhoneXr_HEIGHT;
}

export function isIPhoneXs(dim) {
  return dim.height === iPhoneXs_HEIGHT;
}

export function isIPhoneXsMax(dim) {
  return dim.height === iPhoneXsMax_HEIGHT;
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
