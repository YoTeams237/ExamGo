import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const AppSplashScreen: React.FC = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Bekam</Text>
    </View>
  );
};

export default AppSplashScreen;