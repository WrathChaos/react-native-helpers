<img alt="React Native Helpers" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-helpers)

<b><i>All helpers in one; iPhone series support, dimensions helper, hasNotch helper, normalize text helper and text helpers for React Native with very easy use</i></b>

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

```bash
npm i @freakycoder/react-native-helpers
```

## Peer Dependencies

<b><i>Zero Dependency</i></b>

## DeviceInfo Usage

```jsx
import {
  Screen,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  isAndroid,
} from "@freakycoder/react-native-helpers";

<View>
  <Container title="Device OS" subtitle={isIOS ? "iOS" : "Android"} />
  <Container title="Screen Height" subtitle={ScreenHeight} />
  <Container title="Screen Width" subtitle={ScreenWidth} />
</View>;
```

## Notch (iPhoneX & iPhone 11 & iPhone 12 & iPhone SE & StatusBar) Usage

```js
import {
  isIPhoneNotchFamily,
  isIPhone11,
  isIPhone12,
  isIPhone12Mini,
  isIPhone12ProMax,
  hasNotch,
  isIPhoneX,
  isIPhoneXr,
  isIPhoneXs,
  isIPhoneXsMax,
  getStatusBarHeight,
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

# Configuration - Props

## DeviceInfo Props

| Property        |  Type   | Description                                                                                |
| --------------- | :-----: | ------------------------------------------------------------------------------------------ |
| isIOS           | boolean | returns if it is an iOS device or not                                                      |
| isAndroid       | boolean | returns if it is an Android device or not                                                  |
| ScreenWidth     | number  | get the device's screen width                                                              |
| ScreenHeight    | number  | get the device's screen height                                                             |
| ScreenScale     | number  | get the device's screen scale ratio                                                        |
| ScreenFontScale | number  | get the device's screen font scale ratio (depends on the user's device font scale setting) |
| WindowWidth     | number  | get the device's window width                                                              |
| WindowHeight    | number  | get the device's window height                                                             |
| WindowScale     | number  | get the device's window scale ratio                                                        |
| WindowFontScale | number  | get the device's window font scale ratio (depends on the user's device font scale setting) |
| PlatformVersion | number  | returns the platform version                                                               |

## DeviceInfo Props

| Property            |     Type      | Description                                                                                         |
| ------------------- | :-----------: | --------------------------------------------------------------------------------------------------- |
| hasNotch            |   function    | returns if the device has notch or not                                                              |
| isIPhoneNotchFamily |   function    | returns if it the iPhone has in the notch family (iPhone X, 11, 12 Series)                          |
| isIPhoneXFamily     |   function    | returns if it the iPhone has in the notch family (iPhone X, 11, 12 Series) (Backward compatibility) |
| isIPhoneSE          | function(dim) | returns if device is iPhone SE or not                                                               |
| isIPhoneX           | function(dim) | returns if device is iPhone X or not                                                                |
| isIPhoneXr          | function(dim) | returns if device is iPhone Xr or not                                                               |
| isIPhoneXs          | function(dim) | returns if device is iPhone Xs or not                                                               |
| isIPhoneXsMax       | function(dim) | returns if device is iPhone Xs Max or not                                                           |
| isIPhone11          | function(dim) | returns if device is iPhone 11 or not                                                               |
| isIPhone11Pro       | function(dim) | returns if device is iPhone 11 Pro or not                                                           |
| isIPhone11ProMax    | function(dim) | returns if device is iPhone 11 Pro Max or not                                                       |
| isIPhone12          | function(dim) | returns if device is iPhone 12 or not                                                               |
| isIPhone12Pro       | function(dim) | returns if device is iPhone 12 Pro or not                                                           |
| isIPhone12ProMax    | function(dim) | returns if device is iPhone 12 Pro Max or not                                                       |
| isIPhone12Mini      | function(dim) | returns if device is iPhone 12 Mini or not                                                          |

## Normalize Text Props

| Property  |       Type       | Description                      |
| --------- | :--------------: | -------------------------------- |
| normalize | function(number) | returns the normalized font size |

## Custom Text Props

| Property     |               Type               | Description                                                 |
| ------------ | :------------------------------: | ----------------------------------------------------------- |
| numberFormat | function(value, locale, options) | returns the number formatted font with its given parameters |

### Roadmap

- [x] ~~LICENSE~~
- [x] ~~Typescript~~
- [x] ~~iPhone Series Support~~
- [ ] More custom text helpers
- [ ] Write an article about the lib on Medium

# Changelog

## [1.0.0](https://github.com/WrathChaos/react-native-helpers/tree/1.0.0) (2020-10-31)

## ⚠️ Breaking Change ⚠️

- `isIPhoneXFamily` is renamed to `isIPhoneNotchFamily`

[Full Changelog](https://github.com/WrathChaos/react-native-helpers/compare/0.1.3...1.0.0)

## [0.1.3](https://github.com/WrathChaos/react-native-helpers/tree/0.1.3) (2020-03-15)

[Full Changelog](https://github.com/WrathChaos/react-native-helpers/compare/0.1.2...0.1.3)

## [0.1.2](https://github.com/WrathChaos/react-native-helpers/tree/0.1.2) (2019-12-16)

[Full Changelog](https://github.com/WrathChaos/react-native-helpers/compare/0.1.1...0.1.2)

## [0.1.1](https://github.com/WrathChaos/react-native-helpers/tree/0.1.1) (2019-12-16)

[Full Changelog](https://github.com/WrathChaos/react-native-helpers/compare/0.0.2...0.1.1)

## [0.0.2](https://github.com/WrathChaos/react-native-helpers/tree/0.0.2) (2019-07-05)

[Full Changelog](https://github.com/WrathChaos/react-native-helpers/compare/0ec4a22f68b857dfbd311d9b9dd1f9e3926bd1c3...0.0.2)

\* _This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)_

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Helpers Library is available under the MIT license. See the LICENSE file for more info.
