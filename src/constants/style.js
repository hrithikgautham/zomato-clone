import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0
  }
});
