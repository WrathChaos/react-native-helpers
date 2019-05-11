import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Screen,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  isAndroid
} from "./lib/src/helpers/device/DeviceInfo";

import {
  isIPhoneXFamily,
  hasNotch,
  isIPhoneX,
  isIPhoneXr,
  isIPhoneXs,
  isIPhoneXsMax,
  getStatusBarHeight
} from "./lib/src/helpers/notch/Notch";

import normalizeText from "./lib/src/helpers/normalize/normalizeText";

import Card from "./src/components/Card/Card";
import Container from "./src/components/Card/components/Container/Container";

export default class App extends React.Component {
  renderDeviceInfoContainers() {
    return (
      <View>
        <Container title="Device OS" subtitle={isIOS ? "iOS" : "Android"} />
        <Container title="Screen Height" subtitle={ScreenHeight} />
        <Container title="Screen Width" subtitle={ScreenWidth} />
      </View>
    );
  }

  renderNotchContainers() {
    return (
      <View>
        <Container
          title="hasNotch?"
          subtitle={hasNotch() ? "iPhone X Family" : "iPhone Family"}
        />
        <Container
          title="isIPhoneXsMax?"
          subtitle={isIPhoneXsMax(Screen) ? "iPhone XsMax" : "NOT iPhone XsMax"}
        />
        <Container
          title="getStatusBarHeight?"
          subtitle={getStatusBarHeight()}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>React Native Helpers</Text>
        <Card>{this.renderDeviceInfoContainers()}</Card>
        <View style={{ marginTop: 24 }}>
          <Card headerText="Noth Information">
            {this.renderNotchContainers()}
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "15%",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  titleStyle: {
    paddingBottom: 36,
    fontWeight: "700",
    fontSize: normalizeText(24)
  }
});
