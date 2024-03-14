import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import HeroCarousel from "../components/hero/HeroCorousel";
import ChooseDepartment from "../components/hero/ChooseDepartment";


const HomeScreen = () => {
  return (
    <ScrollView>
      <HeroCarousel />
      <ChooseDepartment />
    </ScrollView>
  );
};
export default HomeScreen;
