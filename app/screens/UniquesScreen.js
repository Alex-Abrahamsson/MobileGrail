import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Pressable,
  ImageBackground,
  SectionList,
} from "react-native";

const backgroundImage = "../assets/GrailBg.jpg";
const uniques = [
  { Name: "Biggin's Bonnet", Img: "", Score: 3 },
  { Name: "Tarnhelm", Img: "", Score: 5 },
  { Name: "Coif of Glory", Img: "", Score: 7 },
  { Name: "Duskdeep", Img: "", Score: 12 },
  { Name: "Howltusk", Img: "", Score: 17 },
];

function UniquesScreen() {
    const renderList = () => {
      uniques.forEach((element) => {
        return (
          <View>
            <Pressable>
              <Text>!!!{element.Name}!!!</Text>
            </Pressable>
          </View>
        );
      });
    };


  return (
    <ImageBackground
      source={require(backgroundImage)}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={[
            { Title: "A", data: ["Alex", "Abel", "Arne"] },
            { Title: "B", data: ["Bertil", "Bosse", "Berit"] },
          ]}
          renderItem={({ item }) => (
            <Pressable>
              <Text>{item}</Text>
            </Pressable>
          )}
          renderSectionHeader={({section}) => <Text>{section.Title}</Text>}
        />

        <StatusBar style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 80 : 0,
    flex: 1,
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default UniquesScreen;
