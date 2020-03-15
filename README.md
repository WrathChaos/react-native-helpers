<img alt="React Native Helpers" src="https://github.com/WrathChaos/react-native-helpers/blob/master/assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-helpers)

[![Easy to use & awesome helpers for React Native.](https://img.shields.io/badge/-Easy%20to%20use%20%26%20awesome%20helpers%20for%20React%20Native.-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-helpers)

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-helpers.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-helpers)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-helpers.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-helpers)
![expo-compatible](https://img.shields.io/badge/Expo-compatible-9cf.svg?style=for-the-badge)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
<img alt="React Native Helpers" src="https://github.com/WrathChaos/react-native-helpers/blob/master/assets/Screenshots/example.png" width="49.7%" />
</p>

## Installation

Add the dependency:

### React Native

```ruby
npm i @freakycoder/react-native-helpers
```

### Expo Version

```ruby
"@freakycoder/react-native-helpers": "WrathChaos/@freakycoder/react-native-helpers#expo"
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
```

## DeviceInfo Usage

```js
import {
  Screen,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  isAndroid
} from "@freakycoder/react-native-helpers";

<View>
  <Container title="Device OS" subtitle={isIOS ? "iOS" : "Android"} />
  <Container title="Screen Height" subtitle={ScreenHeight} />
  <Container title="Screen Width" subtitle={ScreenWidth} />
</View>;
```

## Notch (iPhoneX & StatusBar) Usage

```js
import {
  isIPhoneXFamily,
  hasNotch,
  isIPhoneX,
  isIPhoneXr,
  isIPhoneXs,
  isIPhoneXsMax,
  getStatusBarHeight
} from "@freakycoder/react-native-helpers";

<View>
  <Container
    title="hasNotch?"
    subtitle={hasNotch() ? "iPhone X Family" : "iPhone Family"}
  />
  <Container
    title="isIPhoneXsMax?"
    subtitle={isIPhoneXsMax(Screen) ? "iPhone XsMax" : "NOT iPhone XsMax"}
  />
  <Container title="getStatusBarHeight?" subtitle={getStatusBarHeight()} />
</View>;
```

## Normalize Text Usage

Method to normalize size of fonts across devices

```js
import { normalizeText } from "@freakycoder/react-native-helpers";

fontSize: normalizeText(24),
```

## Native Number Format Usage

Method to format the number of your texted number. You can change each options.

```js
import { numberFormat } from "@freakycoder/react-native-helpers";

<Text>{numberFormat(50319341)</Text> // Output: 50.319.341
<Text>
  {numberFormat(1093495, "en", {
    style: "currency",
    currency: "GBP"
  })}
</Text>// Output: £ 50.319.341
```

## Credits

<b>NormalizeText</b> is completely coming from <b>react-native-elements</b>. All credits goes to <b>@xiaoneng</b> and RN Elements team. Thank you so much guys.

### Roadmap

- [x] LICENSE
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Helpers Library is available under the MIT license. See the LICENSE file for more info.
