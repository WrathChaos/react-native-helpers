import { Platform, Dimensions } from "react-native";

export const Screen = Dimensions.get("window");
export const ScreenWidth = Screen.width;
export const ScreenHeight = Screen.height;
export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
