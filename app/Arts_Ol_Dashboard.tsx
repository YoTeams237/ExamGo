// StudentDashboard.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the FontAwesome icon set
import Cards from "../components/cards with touchable opacity/cards";
import images from "../constants/images";

const StudentDashboard: React.FC = () => {
  const [userName, setUserName] = useState("John Doe");

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Good Morning!</Text>
      <Text style={styles.userNameText}>Hello, {userName}!</Text>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search "
          onChangeText={(text) => console.log("Search Query:", text)} // Handle search query
        />
      </View>

      <View style={styles.heroSection}>
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitle}>
            “Learning is never done without errors and defeat” -Vladmir Lenen
          </Text>
        </View>
        <ImageBackground
          source={images.schoolgirl} // Replace with your hero image source
          style={styles.heroImage}
        />
      </View>

      <View style={styles.popularSubjectsSection}>
        <Text style={styles.popularSubjectsHeader}>Popular Subjects</Text>
        <View style={styles.popularSubjectsGrid}>
          <Cards />
          {/* {popularSubjects.map((subject, index) => (
            <TouchableOpacity key={index} style={styles.popularSubjectCard} onPress={() => handleSubjectClick(subject)}>
              <Text style={styles.popularSubjectTitle}>{subject.title}</Text>
            </TouchableOpacity>
          ))} */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  userNameText: {
    fontSize: 18,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 16,
    width: 350,
    height: 50,
    borderColor: "#755BDF",
    borderWidth: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  heroSection: {
    width: 350,
    height: 160,
    flexShrink: 0,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#755BDF",
    borderWidth: 0,
    borderRadius: 20,
    marginTop: 10,
  },
  heroTextContainer: {
    width: 171,
    height: 110,
    top: 13,
    left: 12,
    position: "absolute",
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  heroImage: {
    width: 148,
    height: 158,
    left: 173,
    position: "absolute",
  },
  popularSubjectsSection: {
    marginTop: 24,
  },
  popularSubjectsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  popularSubjectsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  popularSubjectCard: {
    width: "48%", // Adjust the width of the card based on your design
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  popularSubjectTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default StudentDashboard;
