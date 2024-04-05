import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import dummySubjects, { Subject } from "../../constants/dummyData";
import { FONT, SIZES } from "../../constants/theme";
import SearchBar from "../searchBar";
import { LinearGradient } from "expo-linear-gradient";
import images from "../../constants/images";
import { router } from "expo-router";
import { FlatList } from "react-native-gesture-handler";

export default function OLArtsSearch() {
  const handleSearch = (query: string) => {
    // Perform search logic based on the query
    console.log("Search query:", query);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={{ paddingVertical: 20, marginTop: -100, marginBottom: 20 }}>
        <SearchBar onSearch={handleSearch} />
        {/* Other components */}
      </View>
      <View style={styles.Background}>
        <ImageBackground source={images.manbendingsearch} style={{ flex: 2 }} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Popular Searches</Text>
        <Text style={{ color: "blue" }}>see all </Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>Mathematics paper 2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>Economics June 2020</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>History paper 1 2014</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>Literature 2022</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => router.push("/SelectDepartment")}
              style={styles.card}
            >
              <Text style={styles.cardText}>Geography SW Mock</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>English paper1 2023</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>Medicine</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>Logic questions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  Background: {
    flex: 0,
    height: 310,
    width: 330,
    justifyContent: "center",
  },
  card: {
    width: "auto",
    height: 50,
    borderWidth: 0.01,
    borderRadius: 100,
    justifyContent: "center",
    alignContent: "space-around",
    alignItems: "center",
    gap: 10,
    paddingTop: 15,
    paddingLeft: 12,
    backgroundColor: "#E3E3E3",
  },

  cardText: {
    textAlign: "left",
    color: "#3A3A3A",
    //flex: 0,
    width: 180,
    height: 50,
    flexDirection: "row",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
    //lineHeight: 26,
    letterSpacing: 0.2,
    margin: 3,
  },
});
