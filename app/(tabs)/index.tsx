import React, { useEffect } from "react";
import StartScreen from "../StartScreen";
import {ScrollView } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
// import HomeScreen from "../";
import SelectDepartment from "../SelectDepartment";
import HomeScreen from "../HomeScreen";
import Art_Ol_Dashboard from "../Arts_Ol_Dashboard";
import OlArtsSearchResults from "../../components/Search Page/OlArtsSearchResults";
import SearchResults from "../SearchResults";

export default function TabOneScreen() {
  return (
    <>
    <ScrollView>
      {/* <StartScreen/> */}
      <SearchResults/>
    </ScrollView>
    
    {/* <HomeScreen/>  */}
     {/* <SelectDepartment/>
     
     {/* <Art_Ol_Dashboard/> */}
    </>
  );
}
