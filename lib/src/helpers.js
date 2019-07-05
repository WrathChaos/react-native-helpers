import {
  ScreenWidth,
  ScreenHeight,
  isIOS,
  isAndroid
} from "./helpers/device/DeviceInfo";

import {
  isIPhoneXFamily,
  hasNotch,
  isIPhoneX,
  isIPhoneXr,
  isIPhoneXs,
  isIPhoneXsMax,
  getStatusBarHeight
} from "./helpers/notch/Notch";
import normalizeText from "./helpers/normalize/normalizeText";

export {
  ScreenWidth,
  ScreenHeight,
  isIOS,
  isAndroid,
  isIPhoneXFamily,
  hasNotch,
  isIPhoneX,
  isIPhoneXr,
  isIPhoneXs,
  isIPhoneXsMax,
  getStatusBarHeight,
  normalizeText
};
