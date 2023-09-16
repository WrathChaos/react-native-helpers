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

## Notch & DynamicIsland Usage

```js
import {
  getStatusBarHeight,
  hasNotch,
  hasNotchOnly,
  hasDynamicIsland,
  getStatusBarHeight,
} from "@freakycoder/react-native-helpers";

<View>
  <Container
    title="hasNotch?"
    subtitle={hasNotch() ? "Has Notch" : "NOT notch"}
  />
  <Container
    title="hasDynamicIsland?"
    subtitle={
      hasDynamicIsland(Screen) ? "Has Dynamic Island" : "NOT Dynamic Island"
    }
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

| Property          |  Type   | Description                                                                                                                |
|-------------------|:-------:|----------------------------------------------------------------------------------------------------------------------------|
| isIOS             | boolean | returns if it is an iOS device or not                                                                                      |
| isAndroid         | boolean | returns if it is an Android device or not                                                                                  |
| ScreenWidth       | number  | get the device's screen width                                                                                              |
| ScreenHeight      | number  | get the device's screen height                                                                                             |
| ScreenScale       | number  | get the device's screen scale ratio                                                                                        |
| ScreenFontScale   | number  | get the device's screen font scale ratio (depends on the user's device font scale setting)                                 |
| WindowWidth       | number  | get the device's window width                                                                                              |
| WindowHeight      | number  | get the device's window height                                                                                             |
| WindowScale       | number  | get the device's window scale ratio                                                                                        |
| WindowFontScale   | number  | get the device's window font scale ratio (depends on the user's device font scale setting)                                 |
| PlatformVersion   | number  | returns the platform version                                                                                               |
| ScreenMin         | number  | get the device's screen width/height which are **minimum** depend on the landscape or portrait mode                        |
| ScreenMax         | number  | get the device's screen width/height which are **maximum** depend on the landscape or portrait mode                        |
| vh                | number  | get the device's height but as a **viewport unit**                                                                         |
| vw                | number  | get the device's width but as a **viewport unit**                                                                          |
| vmin              | number  | get the device's screen width/height as a **viewport unit** which are **minimum** depend on the landscape or portrait mode |
| vmax              | number  | get the device's screen width/height as a **viewport unit** which are **maximum** depend on the landscape or portrait mode |
| getDeviceLanguage | string  | get the device's language (en_US)                                                                                          |

## DeviceInfo Props

getStatusBarHeight, hasNotch, hasNotchOnly, hasDynamicIsland

| Property           |   Type   | Description                                                                               |
|--------------------|:--------:|-------------------------------------------------------------------------------------------|
| hasNotch           | function | returns if the device has notch (returns true for dynamic island!)                        |
| hasNotchOnly       | function | returns if the device has notch only, it does not detect if the device has dynamic island |
| hasDynamicIsland   | function | returns if the device has dynamic island                                                  |
| getStatusBarHeight |  number  | returns status bar height of the device                                                   |

## Normalize Text Props

| Property  |       Type       | Description                      |
|-----------|:----------------:|----------------------------------|
| normalize | function(number) | returns the normalized font size |

## Custom Text Props

| Property     |               Type               | Description                                                 |
|--------------|:--------------------------------:|-------------------------------------------------------------|
| numberFormat | function(value, locale, options) | returns the number formatted font with its given parameters |

### Roadmap

- [x] ~~LICENSE~~
- [x] ~~Typescript~~
- [x] ~~iPhone Series Support~~
- [x] ~~Dynamic Island~~
- [ ] Separate the style helpers from device
- [ ] More custom text helpers
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Helpers Library is available under the MIT license. See the LICENSE file for more info.
