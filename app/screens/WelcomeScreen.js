import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
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


  const handleRegister = () => {
    registerUser();
  };

  const registerUser = async () => {
    if (await AsyncStorage.getItem(email) == null) {
      const newUser = [{Username: email, Password: password, Score: 0}];
      try {
        const jsonValue = JSON.stringify(newUser);
        AsyncStorage.setItem(email, jsonValue)
        alert(`Successfully registered ${email}`);
      } catch (error) {
        console.log("Register error", error);
      }
    }else{
      alert("Username already taken");
    }
  }


  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(email)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    }catch (err){
      return null;
    }
  }

  const handleLogin = () => {
    let userFound = false;
    let passMatch = false;
    Promise.resolve(getUser()).then(function(theUser){theUser.forEach(element => {
      if (element !== null) {
        userFound = true;
        if (element.Password === password) {
          passMatch = true;
          navigation.navigate("Home", element)
        }
      }
    })});
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

        <TouchableOpacity onPress={handleRegister} style={styles.loginBtn}>
          <Text style={styles.loginText}>Register</Text>
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
    width:250,
    marginBottom: 20,
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
