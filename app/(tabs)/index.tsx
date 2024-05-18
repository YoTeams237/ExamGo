import React, { useEffect } from "react";
import StartScreen from "../StartScreen";
import { ScrollView } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";

export default function TabOneScreen() {
  return (
    <>
      <ScrollView>
        <StartScreen />
      </ScrollView>
    </>
  );
}
