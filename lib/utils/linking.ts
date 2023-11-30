import { Linking, Platform } from "react-native";

export const openAppInPlayStore = (appPackageName: string) => {
  const url = `market://details?id=${appPackageName}`;
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        return console.log("Cannot handle URL: " + url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error("An error occurred", err));
};

export const openAppInAppStore = (appStoreId: string) => {
  const url = `https://apps.apple.com/app/id${appStoreId}`;
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        return console.log("Cannot handle URL: " + url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error("An error occurred", err));
};

export const openExternalApp = (appPackageName: string, appStoreId: string) => {
  if (Platform.OS === "ios") {
    openAppInAppStore(appStoreId);
  } else if (Platform.OS === "android") {
    openAppInPlayStore(appPackageName);
  }
};
