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
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const ChooseDepartment = () => {
  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.container2}>
        <ImageBackground
          source={images.Background}
          style={styles.icon}
          resizeMode="contain"
        >
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>HND</Text>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          source={images.Background3}
          style={styles.icon}
          resizeMode="contain"
        >
          <TouchableOpacity
            onPress={() => router.push("/SelectDepartment")}
            style={styles.card}
          >
            <Text style={styles.cardText}>Advance Level</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View style={styles.container4}>
        <ImageBackground
          source={images.Background2}
          style={styles.icon}
          resizeMode="contain"
        >
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>Ordinary Level</Text>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          source={images.Background1}
          style={styles.icon}
          resizeMode="contain"
        >
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>Concours</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    width: Dimensions.get("window").width,
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "space-between"
  },
  container2: {
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  container4: {
    paddingTop: 20,
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
    paddingRight: 10,
  },
  cardText: {
    textAlign: "center",
    color: "#fff",
    flex: 0,
    width: 111,
    height: 51,
    flexDirection: "column",
    justifyContent: "center",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: 26,
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

export default ChooseDepartment;
