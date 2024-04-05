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
import images from "../../../constants/images";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { dummyPapers } from "../../../constants/dummyData";
import { LinearGradient } from "expo-linear-gradient";
import { SIZES } from "../../../constants/theme";

const OLevelSubjects = () => {
  const { subjectName } = useLocalSearchParams();
    const subjectPapers = dummyPapers.filter(
      (paper) => paper.subject === subjectName
    );

  function handleCardPress(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <ScrollView>
        <View>
          <LinearGradient
            colors={["#4F86F2", "#FF4A80"]}
            style={{ height: 100, borderRadius: 30 }}
          >
            <ImageBackground
              source={images.headerBG}
              style={{ width: "100%", height: 150, paddingHorizontal: 20 }}
            >
              <Text style={{ color: "white", fontSize: SIZES.large }}>
                {subjectName}
              </Text>
            </ImageBackground>
          </LinearGradient>
        </View>
        <View style={styles.container2}>
          {subjectPapers.map((paper) => (
            <View key={paper.id} style={styles.card}>
              <ImageBackground
                source={images.Background}
                style={styles.icon}
                resizeMode="contain"
              >
                <TouchableOpacity
                  style={styles.touchableCard}
                  onPress={() => handleCardPress("_layout")}
                >
                  <Text style={styles.cardText}>{paper.name}</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    width: "50%",
    height: 150,
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default OLevelSubjects;
