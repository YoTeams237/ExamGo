import React from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import images from "../constants/images";
import { FONT, SIZES } from "../constants/theme";
import { router } from "expo-router";

export default function PaymentDetail() {
  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground source={images.bgPayment} style={styles.Background}>
        <Image source={images.icon5} style={styles.Icons} />
        <Text style={styles.HeaderText}>Premium</Text>
        <Text style={styles.BodyText}>
          Get full access to tall questions and answers right now and start
          viewing
        </Text>
        <Text style={{ paddingVertical: 40 }}>
          <Text style={{ fontSize: 45, fontWeight: "800" }}>XAF 1000</Text>{" "}
          /year
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 2,
            paddingVertical: 10,
            width: "100%",
          }}
        >
          <View>
            <Image source={images.icon4} style={styles.Icons} />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}> Full Access</Text>
            <Text style={{ paddingRight: 30, color: "#3b3d3c" }}>
              Get complete access to our questions and answers
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 2, paddingVertical: 20 }}>
          <View>
            <Image source={images.icon2} style={styles.Icons} />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}> Unlinited Download</Text>
            <Text style={{ paddingRight: 30, color: "#3b3d3c" }}>
              unlimited and fast download for all questions and answer
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 2, paddingVertical: 20 }}>
          <View>
            <Image source={images.notificationIcon} style={styles.Icons} />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}> Full</Text>
            <Text style={{ paddingRight: 30, color: "#3b3d3c" }}>
              Easy Customizable global style
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => router.push("/(subjects)/SubjectHomeScreen")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: SIZES.medium,
            }}
          >
            Proceed
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "auto",
    height: "auto",
  },
  Background: {
    flex: 1,
    resizeMode: "cover", 
    justifyContent: "center", 
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  Icons: {
    width: 40,
    height: 40,
  },
  HeaderText: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 10,
  },
  BodyText: {
    color: "#3b3d3c",
    width: "100%",
  },
  Btn: {
    width: "100%",
    marginHorizontal: "auto",
    marginTop: 30,
    backgroundColor: "#1F54C8",
    borderRadius: 20,
    paddingVertical: 10,
  },
});