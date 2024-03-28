import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import DepHeroSection from "../components/Choose Department/DepHeroSection";
import HeroSection from "../components/hero/HeroSection";

const SelectDepartment: React.FC = () => {
  return (
    <View style={styles.container}>
      <DepHeroSection />
    
      {/* Add other components or sections below */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default SelectDepartment;
