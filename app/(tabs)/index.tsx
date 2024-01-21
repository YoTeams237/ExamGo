import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import SplashScreen from "react-native-splash-screen";
import AppSplashScreen from "../SplashScreen";
import HeroSection from "../../components/hero/HeroSection";
export default function TabOneScreen() {
  //  useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen?.hide(); // Add the null check here
  //   }, 2000); // Adjust the delay as needed
  // }, []);

  return (
    <>
      {/* <AppSplashScreen /> */}

      <HeroSection/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
