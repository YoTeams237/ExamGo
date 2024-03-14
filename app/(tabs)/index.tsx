import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "../HomeScreen";
import StartScreen from "../StartScreen";
import { ScrollView } from "react-native-gesture-handler";

export default function TabOneScreen() {
  return (
    <>
      <ScrollView>
        <StartScreen />
      </ScrollView>
    </>
  );
}
