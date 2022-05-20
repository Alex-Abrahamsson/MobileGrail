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

function UniquesScreen( {navigation} ) {
  const userName = navigation.getParam("Username");
  console.log(userName);

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(userName);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (err) {
      console.log("Error loading in UNIQUES SCREEN");
    }
  };

  const handleItemClick = (item) => {
    Promise.resolve(getUser()).then(function(theUser){theUser.forEach(element => {
      console.log("Unique" + item, element);
      navigation.navigate("Unique"+item, element)
    });})
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
            {
              Title: "Armor",
              data: ["Helms", "Armor", "Shields", "Gloves", "Boots", "Belts"],
            },
            {
              Title: "Weapons",
              data: [
                "Axes",
                "Bows",
                "Crossbows",
                "Daggers",
                "Maces",
                "Polearms",
                "Scepters",
                "Spears",
                "Staves",
                "Swords",
                "Throwning Weapons",
                "Wands",
              ],
            },
            {
              Title: "Jewlery",
              data: ["Rings", "Amulets", "Charms", "Circlets", "Jewels"],
            },
            {
              Title: "Class-Specific",
              data: [
                "Amazon",
                "Assassin",
                "Necromancer",
                "Barbarian",
                "Sorceress",
                "Druid",
                "Paladin",
              ],
            },
          ]}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleItemClick(item)} style={styles.itemPressable}>
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
  sectionList:{
      width: "100%",
      marginBottom: 50,
  }
});

export default UniquesScreen;
