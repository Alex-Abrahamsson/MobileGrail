import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import colors from "../config/colors";

function WelcomeScreen({ navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = [
      {Username: "", Password: "", score: 666},
      {Username: "Marja", Password: "Plutten123", score: 4},
      {Username: "Pigge", Password: "Pigge30", score: 4320}
  ];

  const handleLogin = () => {
    let userFound = false;
    let passMatch = false;
    users.forEach((element) => {
      if (element.Username == email) {
        userFound = true;
        if (element.Password == password) {
          passMatch = true;
          navigation.navigate("Home", { user: element });
        }
      }
    });
    if (userFound === false) {
        alert("User not found");
    }else if (passMatch === false) {
        alert("Wrong Password!")
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/GrailBg.jpg")}
    >
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require("../assets/GrailLogo.png")}/>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="UserName"
            placeholderTextColor="white"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    paddingTop: Platform.OS === "android" ? 40 : 0,
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  logo: {

  },
  inputView: {
    backgroundColor: colors.Faded,
    borderRadius: 8,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: colors.RuneWords,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "white",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#0008",
    borderWidth: 2,
    borderColor: colors.GoldBorder,
  },
  loginText: {
    color: "white",
  },
});

export default WelcomeScreen;
