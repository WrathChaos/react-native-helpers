import React from "react";
import { StyleSheet, Dimensions, Text, View } from "react-native";
import { Card, Container } from "react-native-card-collection";
import {
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
} from "@freakycoder/react-native-helpers";

const dim = Dimensions.get("window");

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
          subtitle={isIPhoneXsMax(dim) ? "iPhone XsMax" : "NOT iPhone XsMax"}
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
          <Card headerText="Notch Information">
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
    fontSize: normalizeText(24),
    fontWeight: "700",
    paddingBottom: 36
  }
});
