import { Dimensions, ScaledSize, Platform, StatusBar } from "react-native";
const DEFAULT_STATUSBAR_HEIGHT = 30;
// ? iPhone X Family
// iPhone X Dimension
const iPhoneX_HEIGHT = 812;
// iPhone Xr Dimension
const iPhoneXr_HEIGHT = 896;
// iPhone XS Dimension
const iPhoneXs_HEIGHT = 896;
// iPhone XsMax Dimension
const iPhoneXsMax_HEIGHT = 896;
// iPhone SE Dimension
const iPhoneSE_HEIGHT = 568;
// ? iPhone 11 Family
// iPhone 11 Dimension
const iPhone11_HEIGHT = 896;
// iPhone 11 Pro Dimension
const iPhone11Pro_HEIGHT = 812;
// iPhone 11 Pro Max Dimension
const iPhone11ProMax_HEIGHT = 896;
// ? iPhone 12 Family
// iPhone 12 Dimension
const iPhone12_HEIGHT = 844;
// iPhone 12 Pro Dimension
const iPhone12Pro_HEIGHT = 844;
// iPhone 12 Pro Max Dimension
const iPhone12ProMax_HEIGHT = 926;
// iPhone 12 Mini Dimension
const iPhone12Mini_HEIGHT = 812;

/**
 * This and hasNotch functions are the same,
 * just want to make two functions with different names
 * hasNotch is more accurate name
 */

const isIPhoneNotchFamily = (): boolean => {
  return detection();
};

const isIPhoneXFamily = (): boolean => {
  return detection();
};

const hasNotch = (): boolean => {
  return detection();
};

const isIPhoneSE = (dim: ScaledSize) => dim.height === iPhoneSE_HEIGHT;
// ? iPhone X Family
const isIPhoneX = (dim: ScaledSize) => dim.height === iPhoneX_HEIGHT;
const isIPhoneXr = (dim: ScaledSize) => dim.height === iPhoneXr_HEIGHT;
const isIPhoneXs = (dim: ScaledSize) => dim.height === iPhoneXs_HEIGHT;
const isIPhoneXsMax = (dim: ScaledSize) => dim.height === iPhoneXsMax_HEIGHT;
// ? iPhone 11 Family
const isIPhone11 = (dim: ScaledSize) => dim.height === iPhone11_HEIGHT;
const isIPhone11Pro = (dim: ScaledSize) => dim.height === iPhone11Pro_HEIGHT;
const isIPhone11ProMax = (dim: ScaledSize) =>
  dim.height === iPhone11ProMax_HEIGHT;
// ? iPhone 12 Family
const isIPhone12 = (dim: ScaledSize) => dim.height === iPhone12_HEIGHT;
const isIPhone12Pro = (dim: ScaledSize) => dim.height === iPhone12Pro_HEIGHT;
const isIPhone12ProMax = (dim: ScaledSize) =>
  dim.height === iPhone12ProMax_HEIGHT;
const isIPhone12Mini = (dim: ScaledSize) => dim.height === iPhone12Mini_HEIGHT;

const detection = (): boolean => {
  const dim = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (isIPhoneX(dim) ||
      isIPhoneXr(dim) ||
      isIPhoneXs(dim) ||
      isIPhoneXsMax(dim) ||
      isIPhone11(dim) ||
      isIPhone11Pro(dim) ||
      isIPhone11ProMax(dim) ||
      isIPhone12(dim) ||
      isIPhone12Pro(dim) ||
      isIPhone12ProMax(dim))
  );
};

const getStatusBarHeight = (): number => {
  return (
    Platform.select({
      ios: hasNotch() ? 44 : DEFAULT_STATUSBAR_HEIGHT,
      android: StatusBar.currentHeight || DEFAULT_STATUSBAR_HEIGHT,
    }) || DEFAULT_STATUSBAR_HEIGHT
  );
};

export {
  getStatusBarHeight,
  hasNotch,
  isIPhoneNotchFamily,
  isIPhoneXFamily,
  isIPhoneSE,
  isIPhoneX,
  isIPhoneXr,
  isIPhoneXs,
  isIPhoneXsMax,
  isIPhone11,
  isIPhone11Pro,
  isIPhone11ProMax,
  isIPhone12,
  isIPhone12Pro,
  isIPhone12ProMax,
  isIPhone12Mini,
};
