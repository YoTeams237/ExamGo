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

const Cards = () => {
  const navigation = useNavigation();

  function handleCardPress(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <View>
        <View style={styles.container2}>
          <ImageBackground
            source={images.Frame2}
            style={styles.icon}
            resizeMode="contain"
          >
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress("_layout")}
            >
              {/* <Text style={styles.cardText}>Science</Text> */}
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground
            source={images.Frame3}
            style={styles.icon}
            resizeMode="contain"
          >
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress("SplashScreen")}
            >
              {/* <Text style={styles.cardText}>Arts</Text> */}
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.container3}>
          <ImageBackground
            source={images.Frame4}
            style={styles.icon}
            resizeMode="contain"
          >
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress("HomeScreen")}
            >
              {/* <Text style={styles.cardText}>Commercial</Text> */}
            </TouchableOpacity>
          </ImageBackground>

          <ImageBackground
            source={images.Frame5}
            style={styles.icon}
            resizeMode="contain"
          >
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress("HomeScreen")}
            >
              {/* <Text style={styles.cardText}>Test</Text> */}
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container2: {
    paddingTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    paddingLeft: 30,
    // paddingRight: 50,
  },
  card: {
    width: 150,
    height: 80,
    marginVertical: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  icon: {
    paddingTop: 35,
    paddingBottom: 15,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  // cardText: {
  //   textAlign: "center",
  //   color: "#fff",
  //   flex: 0,
  //   width: 111,
  //   height: 51,
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   fontFamily: "Poppins",
  //   fontSize: 18,
  //   fontStyle: "normal",
  //   fontWeight: "800",
  //   lineHeight: 26, // React Native handles percentage line heights differently
  //   letterSpacing: -0.216,
  // },

  container3: {
    paddingTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    paddingLeft: 30,
  },
});

export default Cards;
