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
  isIPhoneSE,
  isIPhoneXsMax,
  getStatusBarHeight
} from "./helpers/notch/Notch";
import normalizeText from "./helpers/normalize/normalizeText";

export {
  isIOS,
  hasNotch,
  isAndroid,
  isIPhoneX,
  isIPhoneXr,
  isIPhoneXs,
  isIPhoneSE,
  ScreenWidth,
  ScreenHeight,
  isIPhoneXsMax,
  normalizeText,
  isIPhoneXFamily,
  getStatusBarHeight
};
