import { Platform, Dimensions, NativeModules } from "react-native";

// i.e: en_US
const getDeviceLanguage =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

// ? Screen Constants
const Screen = Dimensions.get("screen");
const ScreenWidth: number = Screen.width;
const ScreenHeight: number = Screen.height;
const ScreenScale: number = Screen.scale;
const ScreenFontScale: number = Screen.fontScale;
// ? Window Constants
const Window = Dimensions.get("window");
const WindowWidth: number = Window.width;
const WindowHeight: number = Window.height;
const WindowFontScale: number = Window.fontScale;
const WindowScale: number = Window.scale;
const isIOS: boolean = Platform.OS === "ios";
const isAndroid: boolean = Platform.OS === "android";
const PlatformVersion = Platform.Version;

/**
 * @description
 * These are the dynamic calculation for the app is on the landscape or portrait mode.
 */
const ScreenMin = Math.min(WindowWidth, WindowHeight) || WindowHeight;
const ScreenMax = Math.max(WindowWidth, WindowHeight) || WindowWidth;

/**
 * @description
 * These are the viewport units for the web or mobile web who wants to use viewport units.
 */
const vh = WindowHeight / 100;
const vw = WindowWidth / 100;
const vmin = Math.min(vh, vw) || vh;
const vmax = Math.max(vh, vw) || vw;

export {
  vh,
  vw,
  vmin,
  vmax,
  ScreenMin,
  ScreenMax,
  isIOS,
  isAndroid,
  ScreenWidth,
  ScreenHeight,
  ScreenScale,
  ScreenFontScale,
  WindowWidth,
  WindowHeight,
  WindowScale,
  WindowFontScale,
  PlatformVersion,
  getDeviceLanguage,
};
