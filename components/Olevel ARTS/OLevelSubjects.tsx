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

const OLevelSubjects = () => {
  const navigation = useNavigation();

  function handleCardPress(arg0: string): void {
    throw new Error("Function not implemented.");
  }
  interface Card {
    SubjectTitle: string;
    imageBg: string;
  }

  const cardData: Card[] = [
    { SubjectTitle: "Card 1", imageBg: "images.Background" },
    { SubjectTitle: "Card 2", imageBg: "images.Background" },
    { SubjectTitle: "Card 3", imageBg: "images.Background" },
    { SubjectTitle: "Card 1", imageBg: "images.Background" },
    { SubjectTitle: "Card 2", imageBg: "images.Background" },
    { SubjectTitle: "Card 3", imageBg: "images.Background" },
    { SubjectTitle: "Card 1", imageBg: "images.Background" },
    { SubjectTitle: "Card 2", imageBg: "images.Background" },
    { SubjectTitle: "Card 3", imageBg: "images.Background" },
    { SubjectTitle: "Card 1", imageBg: "images.Background" },
    { SubjectTitle: "Card 2", imageBg: "images.Background" },
    { SubjectTitle: "Card 3", imageBg: "images.Background" },
  ];

  return (
    <>
      <View>
        <View>
          <Text style={styles.cardText}>Subjects</Text>
        </View>

        <View style={styles.container2}>
          {cardData.map((card, index) => (
            <View key={index} style={styles.card}>
              <ImageBackground
                source={images.Background}
                style={styles.icon}
                resizeMode="contain"
              >
                <TouchableOpacity
                  style={styles.touchableCard}
                  onPress={() => handleCardPress("_layout")}
                >
                  <Text style={styles.cardText}>{card.SubjectTitle}</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          ))}
        </View>
      </View>
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
