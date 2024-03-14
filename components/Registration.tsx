import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  TextInput,
} from "react-native";
import images from "../constants/images";
import { FONT, SIZES } from "../constants/theme";
import { router } from "expo-router";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleSubmit = () => {
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      return setErrorMessage("all fields are is required!");
    } else if (!validateEmail(email)) {
      return setErrorMessage("invalide Email!");
    } else {
      // Perform registration logic here
    //   Alert.alert("Success", "Registration successful!");
    }
  };
  const validateEmail = (email: string) => {
    // Regular expression to validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground source={images.bgRegistration} style={styles.Background}>
        <View style={{ marginVertical: "auto" }}>
          <Text style={styles.Label}>Email</Text>
          <TextInput
            style={styles.FormInput}
            placeholder="@ Email"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.Label}>Username</Text>
          <TextInput
            style={styles.FormInput}
            placeholder="emal"
            value={name}
            onChangeText={handleNameChange}
          />
          <Text style={styles.Label}>Password</Text>
          <TextInput
            style={styles.FormInput}
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry
          />
          <Text style={styles.ErrorMessage}>{errorMessage}</Text>
          <TouchableOpacity style={styles.Btn} onPress={handleSubmit}>
            <Text style={{ color: "white" }}>Registration</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  Background: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  FormInput: {
    backgroundColor: "white",
    height: 40,
    marginVertical: 20,
    borderRadius: 10,
    padding: 10,
  },
  Label: {
    color: "white",
    fontSize: SIZES.medium,
  },
  ErrorMessage: {
    color: "red",
    fontSize: 16,
    paddingVertical: 10,
    textAlign: "center",
  },
  Btn: {
    width: "100%",
    marginHorizontal: "auto",
    backgroundColor: "#1F54C8",
    borderRadius: 20,
    paddingVertical: 10,
  },
});
