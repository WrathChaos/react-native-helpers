import {
  isIOS,
  isAndroid,
  ScreenMin,
  ScreenMax,
  vh,
  vw,
  vmin,
  vmax,
  ScreenWidth,
  ScreenHeight,
  ScreenScale,
  ScreenFontScale,
  WindowWidth,
  WindowHeight,
  isTablet,
  WindowScale,
  WindowFontScale,
  PlatformVersion,
  getDeviceLanguage,
} from "./helpers/device/DeviceInfo";

import {
  getStatusBarHeight,
  hasNotch,
  hasNotchOnly,
  hasDynamicIsland,
} from "./helpers/notch/Notch";
import normalizeText from "./helpers/normalize/normalizeText";

import {
  openExternalApp,
  openAppInAppStore,
  openAppInPlayStore,
} from "./utils";

import { numberFormat } from "./helpers/text/Text";

export {
  vh,
  vw,
  vmin,
  vmax,
  ScreenMin,
  ScreenMax,
  isIOS,
  isAndroid,
  isTablet,
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
  getStatusBarHeight,
  hasNotch,
  hasNotchOnly,
  hasDynamicIsland,
  numberFormat,
  normalizeText,
  openExternalApp,
  openAppInAppStore,
  openAppInPlayStore,
};
