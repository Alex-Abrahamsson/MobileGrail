import React from 'react';
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, SafeAreaView, Text } from "react-native";

function WelcomeScreen(props) {
    return (
      <ImageBackground style={styles.background}source={require("../assets/GrailBg.jpg")}>
        <SafeAreaView style={styles.container}>
          <Text>Hello</Text>
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
  },
});

export default WelcomeScreen;