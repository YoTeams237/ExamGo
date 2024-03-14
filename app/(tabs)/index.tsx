import React, { useEffect } from "react";
import StartScreen from "../StartScreen";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";

export default function TabOneScreen() {
  return (
    <>
      <ScrollView>
        <StartScreen />
      </ScrollView>
    </>
  );
}
