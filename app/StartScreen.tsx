import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import images from "../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { SIZES } from "../constants/theme";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const StartScreen = () => {
  return (
    <SafeAreaView style={styles.Container}>
      {/* <Home/> */}
      <LinearGradient style={styles.Background} colors={["#755BDF", "#2C1FA3"]}>
        <ImageBackground
          source={images.startscreenBG}
          style={{ flex: 1, paddingTop: 50,}}
        >
          <View style={styles.Card}>
            <ImageBackground source={images.buttonBG} style={styles.Buttonbg}>
              <Text style={styles.BtnHeadText}>
                The best way to prepare for your exam
              </Text>
              <Text style={styles.BtnText}>
                Study efficiently with us, your one-stop solution for exam
                preparation
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/HomeScreen")}
                style={styles.Btn}
              >
                <Text style={styles.text}>
                  Get started{" "}
                  <Image
                    source={images.arrow}
                    style={{ height: 30, width: 30, paddingHorizontal: 30 }}
                  />
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Background: {
    flex: 1,
    height:"auto",
  },
  Card: {
    // backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Icon: {
    marginTop: 50,
  },
  Buttonbg: {
    marginTop: 400,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  BtnHeadText: {
    color: "white",
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
  BtnText: {
    fontSize: SIZES.small,
    color: "white",
  },
  Btn: {
    marginTop: 5,
    borderRadius: 30,
    backgroundColor: "white",
    width: "60%",
  },
  text: {
    fontSize: SIZES.medium,
    fontWeight: "400",
    textAlign: "right",
    paddingRight: 10,
    paddingBottom: 10,
    color: "0B265F",
  },
});
export default StartScreen;
