import React, { useEffect } from "react";
import StartScreen from "../StartScreen";
import {ScrollView } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
// import HomeScreen from "../";
import SelectDepartment from "../SelectDepartment";
import HomeScreen from "../HomeScreen";
import Art_Ol_Dashboard from "../Arts_Ol_Dashboard";

export default function TabOneScreen() {
  return (
    <>
     {/* <SelectDepartment/>
     <HomeScreen/> */}
     <Art_Ol_Dashboard/>
    </>
  );
}
