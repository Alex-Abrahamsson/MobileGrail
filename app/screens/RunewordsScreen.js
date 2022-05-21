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

function RunewordsScreen({ navigation }) {
  const userName = navigation.getParam("Username");

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(userName);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (err) {
      console.log("Error loading in UNIQUES SCREEN");
    }
  };

  const handleItemClick = (item) => {
    Promise.resolve(getUser()).then(function (theUser) {
      theUser.forEach((element) => {
        navigation.navigate("Runeword" + item, element);
      });
    });
  };

  return (
    <ImageBackground
      source={require(backgroundImage)}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <SectionList
          style={styles.sectionList}
          sections={[
            {
              Title: "A",
              data: ["Ancient's Pledge"],
            },
            {
              Title: "B",
              data: [
                "Beast",
                "Black",
                "Bone",
                "Bramble",
                "Brand",
                "Breath of the Dying",
              ],
            },
            {
              Title: "C",
              data: [
                "Call to Arms",
                "Chains of Honor",
                "Chaos",
                "Crescent Moon",
              ],
            },
            {
              Title: "D",
              data: [
                "Death",
                "Delirium",
                "Destruction",
                "Doom",
                "Dragon",
                "Dream",
                "Duress",
              ],
            },
            {
              Title: "E",
              data: ["Edge", "Enigma", "Enlightenment", "Eternity", "Exile"],
            },
            {
              Title: "F",
              data: [
                "Faith",
                "Famine",
                "Fortitude",
                "Fury",
                "Flickering Flame (2.4)",
              ],
            },
            { Title: "G", data: ["Gloom", "Grief"] },
            {
              Title: "H",
              data: [
                "Hand of Justice",
                "Harmony",
                "Heart of the Oak",
                "Holy Thunder",
                "Honor",
              ],
            },
            {
              Title: "I",
              data: ["Ice", "Infinity", "Insight"],
            },
            { Title: "K", data: ["King's Grace", "Kingslayer"] },
            {
              Title: "L",
              data: ["Last Wish", "Lawbringer", "Leaf", "Lionheart", "Lore"],
            },
            {
              Title: "M",
              data: ["Malice", "Melody", "Memory", "Myth", "Mist (2.4)"],
            },
            { Title: "N", data: ["Nadir"] },
            { Title: "O", data: ["Oath", "Obedience", "Obsession (2.4)"] },
            {
              Title: "P",
              data: [
                "Passion",
                "Peace",
                "Phoenix",
                "Pride",
                "Principle",
                "Prudence",
                "Pattern (2.4)",
                "Plague (2.4)",
              ],
            },
            { Title: "R", data: ["Radiance", "Rain", "Rhyme", "Rift"] },
            {
              Title: "S",
              data: [
                "Sanctuary",
                "Silence",
                "Smoke",
                "Spirit",
                "Splendor",
                "Stealth",
                "Steel",
                "Stone",
                "Strength",
              ],
            },
            { Title: "T", data: ["Treachery"] },
            { Title: "U", data: ["Unbending Will (2.4)"] },
            { Title: "V", data: ["Venom", "Voice of Reason"] },
            {
              Title: "W",
              data: ["Wealth", "White", "Wind", "Wrath", "Wisdom (2.4)"],
            },
            { Title: "Z", data: ["Zephyr"] },
          ]}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handleItemClick(item)}
              style={styles.itemPressable}
            >
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
    color: colors.RuneWords,
    fontSize: 21,
    paddingTop: 3,
    letterSpacing: 0.6,
  },
  sectionTxT: {
    color: colors.GoldBorder,
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

export default RunewordsScreen;
