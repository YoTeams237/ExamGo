import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import OLArtsSearch from "../components/Search Page/OLArtsSearch";

export default function Home() {
 

  const handleSearch = (query: string) => {
    // Perform search logic based on the query
    console.log("Search query:", query);
  };

  return (
    <SafeAreaView style={styles.Container}>
    <OLArtsSearch/>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 0,
    justifyContent:"center",
  }
});
