import React from 'react';
import { View, StyleSheet } from 'react-native';
import DepHeroSection from '../components/Choose Department/DepHeroSection';
import HeroSection from '../components/hero/HeroSection';

const SelectDepartment: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <DepHeroSection
      /> */}
      <HeroSection/>

    
      {/* Add other components or sections below */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SelectDepartment;
