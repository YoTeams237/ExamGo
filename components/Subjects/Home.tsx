import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";
import dummySubjects, { Subject } from "../../constants/dummyData";
import { FONT, SIZES } from "../../constants/theme";
import SearchBar from "../searchBar";
import { LinearGradient } from "expo-linear-gradient";
import images from "../../constants/images";
import { router } from "expo-router";
import { FlatList } from "react-native-gesture-handler";

export default function Home() {
  const artsSubjects = dummySubjects.filter(
    (subject: Subject) => subject.category === "Arts"
  );
  const scienceSubjects = dummySubjects.filter(
    (subject: Subject) => subject.category === "Science"
  );
  const commerceSubjects = dummySubjects.filter(
    (subject: Subject) => subject.category === "Commerce"
  );
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greetingMessage = "";

  if (currentHour < 12) {
    greetingMessage = "Good Morning!";
  } else if (currentHour < 18) {
    greetingMessage = "Good Afternoon!";
  } else {
    greetingMessage = "Good Evening!";
  }

  const handleSearch = (query: string) => {
    // Perform search logic based on the query
    console.log("Search query:", query);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.GreetingText}>{greetingMessage}</Text>
      <Text>Chi Amaka</Text>
      <View style={{ paddingVertical: 20 }}>
        <SearchBar onSearch={handleSearch} />
        {/* Other components */}
      </View>
      <LinearGradient
        style={{ borderRadius: 20, marginVertical: 10 }}
        colors={["#4F86F2", "#FF4A80"]}
      >
        <View style={styles.Hero}>
          <View style={{ width: "50%", flexDirection: "column", padding: 10 }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                lineHeight: 25,
                paddingTop: 15,
              }}
            >
              “Learning is never done without errors and defeat”
            </Text>
            <Text style={{ color: "white", fontWeight: "100", fontSize: 12 }}>
              -Vladmir Lenen
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Image source={images.schoolgirl} />
          </View>
        </View>
      </LinearGradient>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold" }}>Popular Subject</Text>
        <Text style={{ color: "blue" }}>see all</Text>
      </View>
      <View
        style={{ paddingVertical: 20, width: "100%", justifyContent: "center", alignContent:"center"}}
      >
        <View style={{ flexDirection: "row", justifyContent:"center" }}>
          <ImageBackground
            source={images.Background}
            style={styles.icon}
            resizeMode="contain"
          >
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>Math</Text>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground
            source={images.Background3}
            style={styles.icon}
            resizeMode="contain"
          >
            <TouchableOpacity
              onPress={() => router.push("/SearchScreen")}
              style={styles.card}
            >
              <Text style={styles.cardText}>English</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={{ flexDirection: "row", paddingTop: 15 , justifyContent: "center"}}>
          <ImageBackground
            source={images.Background2}
            style={styles.icon}
            resizeMode="contain"
          >
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>French</Text>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground
            source={images.Background1}
            style={styles.icon}
            resizeMode="contain"
          >
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>Economics</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold" }}>Top Download</Text>
        <Text style={{ color: "blue" }}>see all</Text>
      </View>
    </SafeAreaView>
    // <View>

    //   {/* <Text>Arts Subjects:</Text>
    //   {artsSubjects.map((subject: Subject) => (
    //     <View key={subject.id}>
    //       <Text>{subject.name}</Text>
    //     </View>
    //   ))}

    //   <Text>Science Subjects:</Text>
    //   {scienceSubjects.map((subject: Subject) => (
    //     <View key={subject.id}>
    //       <Text>{subject.name}</Text>
    //     </View>
    //   ))}

    //   <Text>Commerce Subjects:</Text>
    //   {commerceSubjects.map((subject: Subject) => (
    //     <View key={subject.id}>
    //       <Text>{subject.name}</Text>
    //     </View>
    //   ))} */}
    // </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    justifyContent:"center",
  },
  GreetingText: {
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
  Hero: {
    flexDirection: "row",
  },
  
//   container2: {
//     alignItems: "center",
//     flexDirection: "row",
//     alignContent: "center",
//     paddingLeft: 50,
//     paddingRight: 50,
//   },
//   container4: {
//     paddingTop: 20,
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexDirection: "row",
//     alignContent: "center",
//     paddingLeft: 50,
//     paddingRight: 50,
//   },
  card: {
    marginVertical:20,
    marginHorizontal:15,
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

//   container3: {
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     alignContent: "center",
//     paddingBottom: 30,
//     marginTop: 12,
//   },
});
