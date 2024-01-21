import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

interface CarouselItem {
  id: string;
  title: string;
}

const HeroSection: React.FC = () => {
  const data: CarouselItem[] = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
    { id: "5", title: "Item 5" },
  ];

  const renderItem: React.FC<{ item: CarouselItem }> = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  item: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9c2ff",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default HeroSection;
