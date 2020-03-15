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

import { numberFormat } from "./helpers/text/Text";

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
  numberFormat,
  isIPhoneXsMax,
  normalizeText,
  isIPhoneXFamily,
  getStatusBarHeight
};
