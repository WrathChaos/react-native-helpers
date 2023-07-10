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
  WindowScale,
  WindowFontScale,
  PlatformVersion,
} from "./helpers/device/DeviceInfo";

import {
  getStatusBarHeight,
  hasNotch,
  hasNotchOnly,
  hasDynamicIsland,
} from "./helpers/notch/Notch";
import normalizeText from "./helpers/normalize/normalizeText";

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
  ScreenWidth,
  ScreenHeight,
  ScreenScale,
  ScreenFontScale,
  WindowWidth,
  WindowHeight,
  WindowScale,
  WindowFontScale,
  PlatformVersion,
  getStatusBarHeight,
  hasNotch,
  hasNotchOnly,
  hasDynamicIsland,
  numberFormat,
  normalizeText,
};
