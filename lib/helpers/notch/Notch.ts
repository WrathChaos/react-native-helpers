import { Dimensions, ScaledSize, Platform, StatusBar } from "react-native";
const DEFAULT_STATUSBAR_HEIGHT = 30;
// ? iPhone X Family
const iPhoneX_HEIGHT = 812;
const iPhoneXsMax_HEIGHT = 896;
const iPhoneSE_HEIGHT = 568;
const iPhone11Pro_HEIGHT = 812;
const iPhone11ProMax_HEIGHT = 896;
const iPhone12ProMax_HEIGHT = 926;
const iPhone12Mini_HEIGHT = 812;
const iPhone14_HEIGHT = 844;
const iPhone14Plus_HEIGHT = 926;
const iPhone14Pro_HEIGHT = 852;
const iPhone14ProMax_HEIGHT = 932;

const isIPhoneSE = (dim: ScaledSize) => dim.height === iPhoneSE_HEIGHT;
const isIPhoneX = (dim: ScaledSize) => dim.height === iPhoneX_HEIGHT;
const isIPhoneXsMax = (dim: ScaledSize) => dim.height === iPhoneXsMax_HEIGHT;

const isIPhone11Pro = (dim: ScaledSize) => dim.height === iPhone11Pro_HEIGHT;
const isIPhone11ProMax = (dim: ScaledSize) =>
  dim.height === iPhone11ProMax_HEIGHT;

const isIPhone12ProMax = (dim: ScaledSize) =>
  dim.height === iPhone12ProMax_HEIGHT;
const isIPhone12Mini = (dim: ScaledSize) => dim.height === iPhone12Mini_HEIGHT;

const isIPhone14 = (dim: ScaledSize) => dim.height === iPhone14_HEIGHT;
const isIPhone14Plus = (dim: ScaledSize) => dim.height === iPhone14Plus_HEIGHT;
const isIPhone14Pro = (dim: ScaledSize) => dim.height === iPhone14Pro_HEIGHT;
const isIPhone14ProMax = (dim: ScaledSize) =>
  dim.height === iPhone14ProMax_HEIGHT;

const detection = (): boolean => {
  const dim = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (isIPhone14(dim) ||
      isIPhone14Pro(dim) ||
      isIPhone14ProMax(dim) ||
      isIPhone14Plus(dim) ||
      isIPhone12ProMax(dim) ||
      isIPhone12Mini(dim) ||
      isIPhone11ProMax(dim) ||
      isIPhone11Pro(dim) ||
      isIPhoneSE(dim) ||
      isIPhoneX(dim) ||
      isIPhoneXsMax(dim))
  );
};

const detectionNotchOnly = (): boolean => {
  const dim = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (isIPhone14Plus(dim) ||
      isIPhone14(dim) ||
      isIPhone12ProMax(dim) ||
      isIPhone12Mini(dim) ||
      isIPhone11ProMax(dim) ||
      isIPhone11Pro(dim) ||
      isIPhoneXsMax(dim) ||
      isIPhoneSE(dim) ||
      isIPhoneX(dim))
  );
};

const detectionForDynamicIsland = (): boolean => {
  const dim = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (isIPhone14Pro(dim) || isIPhone14ProMax(dim))
  );
};

/**
 * This and hasNotch functions are the same,
 * just want to make two functions with different names
 * hasNotch is more accurate name
 */
const hasNotch = (): boolean => detection();

const hasNotchOnly = (): boolean => detectionNotchOnly();

const hasDynamicIsland = (): boolean => detectionForDynamicIsland();

const getStatusBarHeight = (): number => {
  return (
    Platform.select({
      ios: hasNotch() ? 44 : DEFAULT_STATUSBAR_HEIGHT,
      android: StatusBar.currentHeight || DEFAULT_STATUSBAR_HEIGHT,
    }) || DEFAULT_STATUSBAR_HEIGHT
  );
};

export { getStatusBarHeight, hasNotch, hasNotchOnly, hasDynamicIsland };
