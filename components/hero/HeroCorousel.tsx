import HeroSection from "./HeroSection";
import { View, StyleSheet, FlatList } from "react-native";

const HeroCarousel = () => {
    const renderItem = () => {
        return <HeroSection />;
      };
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};
export default HeroCarousel;
