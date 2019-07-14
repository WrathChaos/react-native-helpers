<img alt="React Native Helpers" src="https://github.com/WrathChaos/react-native-helpers/blob/master/assets/logo.png" width="1050"/>

Easy to use & awesome helpers for React Native.

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-helpers.svg)](https://www.npmjs.com/package/@freakycoder/react-native-helpers)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-helpers.svg)](https://www.npmjs.com/package/@freakycoder/react-native-helpers)
![expo-compatible](https://img.shields.io/badge/Expo-compatible-9cf.svg)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Helpers" src="https://github.com/WrathChaos/react-native-helpers/blob/master/assets/Screenshots/example.png" width="49.7%" />
</p>

## Installation

Add the dependency:

### React Native:

```ruby
npm i @freakycoder/react-native-helpers

// Expo Version
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
} from "react-native-helpers";

<View>
  <Container title="Device OS" subtitle={isIOS ? "iOS" : "Android"} />
  <Container title="Screen Height" subtitle={ScreenHeight} />
  <Container title="Screen Width" subtitle={ScreenWidth} />
</View>;
```

## Noth (iPhoneX & StatusBar) Usage

```js
import {
  isIPhoneXFamily,
  hasNotch,
  isIPhoneX,
  isIPhoneXr,
  isIPhoneXs,
  isIPhoneXsMax,
  getStatusBarHeight
} from "react-native-helpers";

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
import normalizeText from "./lib/src/helpers/normalize/normalizeText";

fontSize: normalizeText(24),
```

## Credits

<b>NormalizeText</b> is completely coming from <b>react-native-elements</b>. All credits goes to <b>@xiaoneng</b> and RN Elements team. Thank you so much guys.

### ToDos

- [x] LICENSE
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Helpers Library is available under the MIT license. See the LICENSE file for more info.
