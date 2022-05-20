import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import colors from "../config/colors";

const backgroundImage = "../assets/GrailBg.jpg";

function UniqueHelmsScreen({navigation}) {
  const userName = navigation.getParam("Username");

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(userName);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (err) {
      console.log("Error loading IN HOME SCREEN");
    }
  };

  const handleItemPress = (item) => {
    Promise.resolve(getUser()).then(function(theUser){theUser.forEach(element => {
      element.Score += item.length;
      const updatedUser = [{ Username: userName, Password: element.Password, Score: element.Score }];
      try {
        const jsonValue = JSON.stringify(updatedUser);
        AsyncStorage.setItem(userName, jsonValue);
        console.log(element);
      }catch (err) {

      }
    })})
  }


  return (
    <ImageBackground
      source={require(backgroundImage)}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <SectionList
          style={styles.sectionList}
          sections={[
            { Title: "A", data: ["Andariel's Visage"] },
            { Title: "B", data: ["Biggin's Bonnet", "Blackhorn's Face"] },
            { Title: "C", data: ["Coif of Glory", "Crown of Thieves", "Crown of Ages"],},
            { Title: "D", data: ["Duskdeep", "Darksight Helm"] },
            { Title: "G", data: ["Giant Skull"] },
            { Title: "H", data: ["Howltusk", "Harlequin Crest"] },
            { Title: "N", data: ["Nightwing's Veil"] },
            { Title: "P", data: ["Peasant Crown"] },
            { Title: "R", data: ["Rockstopper"] },
            { Title: "S", data: ["Stealskull", "Steel Shade"] },
            { Title: "T", data: ["Tarnhelm", "The Face of Horror"] },
            { Title: "U", data: ["Undead Crown", "The Face of Horror"] },
            { Title: "V", data: ["Valkyrie Wing", "Vampire Gaze", "Veil of Steel"],},
            { Title: "W", data: ["Wormskull", "The Face of Horror"] },
          ]}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleItemPress(item)} style={styles.itemPressable}>
              <Text style={styles.itemTxT}>{item}</Text>
            </Pressable>
          )}
          renderSectionHeader={({ section }) => (
            <View>
              <Text style={styles.sectionTxT}>{section.Title}</Text>
            </View>
          )}
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
  itemTxT: {
    color: colors.Uniques,
    fontSize: 21,
    paddingTop: 3,
    letterSpacing: 0.6,
  },
  sectionTxT: {
    color: colors.RuneWords,
    fontSize: 32,
    paddingTop: 20,
    textAlign: "center",
  },
  itemPressable: {
    alignItems: "center",
  },
  sectionList: {
    width: "100%",
    marginBottom: 50,
  },
});

export default UniqueHelmsScreen;
