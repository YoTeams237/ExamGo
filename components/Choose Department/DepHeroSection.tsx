import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import images from "../../constants/images";

const DepHeroSection = () => {
  const navigation = useNavigation();

  function handleCardPress(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <View style={styles.Container}>
        <ImageBackground
          source={images.frame1}
          style={styles.Container}
          resizeMode="cover"
        >
          <Image source={images.UniversityClass} />
        </ImageBackground>
      </View>

      <View style={styles.container1}>
        <View style={styles.container2}>
          <ImageBackground
            source={images.Background}
            style={styles.icon}
            resizeMode="contain"
          >
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress("_layout")}
            >
              <Image source={images.Laboratory} />
              <Text style={styles.cardText}>Science</Text>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground
            source={images.Background2}
            style={styles.icon}
            resizeMode="contain"
          >
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress("SplashScreen")}
            >
              <Image source={images.map} />
              <Text style={styles.cardText}>Arts</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.container3}>
          <ImageBackground
            source={images.Background3}
            style={styles.icon}
            resizeMode="contain"
          >
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress("HomeScreen")}
            >
              <Image source={images.chart} />
              <Text style={styles.cardText}>Commercial</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: Dimensions.get("window").width,
    height: 264,
    flexShrink: 0,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    //    borderBottomWidth: 15, // Add a bottom border with a height of 15 pixels
    //   borderBottomLeftRadius: 20,
    //  borderBottomColor: "#0B265F",
    //   borderBottomRightRadius: 20,
  },
  container1: {
    paddingTop: 60,
    paddingBottom: 60,
    // paddingLeft: 30,
    //  paddingRight: 30,
    justifyContent: "space-between",
  },
  container2: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  card: {
    width: 150,
    height: 80,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  icon: {
    paddingTop: 20,
    paddingBottom: 15,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    textAlign: "center",
    color: "#fff",
    flex: 0,
    width: 111,
    height: 51,
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "Poppins",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: 26, // React Native handles percentage line heights differently
    letterSpacing: -0.216,
  },

  container3: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    paddingBottom: 30,
    marginTop: 12,
  },
});

export default DepHeroSection;
