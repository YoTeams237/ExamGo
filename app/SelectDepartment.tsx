import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import DepHeroSection from "../components/Choose Department/DepHeroSection";
import HeroSection from "../components/hero/HeroSection";

const SelectDepartment: React.FC = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <DepHeroSection />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default SelectDepartment;
