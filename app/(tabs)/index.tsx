import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import HomeScreen from "../HomeScreen";
import SelectDepartment from "../SelectDepartment";
import OLevelSubjects from "../../components/Olevel ARTS/OLevelSubjects";


export default function TabOneScreen() {
  return (
    <>
      <ScrollView>
        <OLevelSubjects/>
      {/* <HomeScreen/> */}
      {/* <ViewSubjects/> */}
      {/* <SelectDepartment/> */}
      </ScrollView>
   
    </>
  );
}
