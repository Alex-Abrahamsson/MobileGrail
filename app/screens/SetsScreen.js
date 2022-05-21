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

function SetsScreen({ navigation }) {
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
        navigation.navigate("Set" + item, element);
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
            { Title: "A", data: ["Angelic Raiment", "Arcanna's Tricks", "Arctic Gear", "Aldur's Watchtower "] },
            { Title: "B", data: ["Berserker's Arsenal", "Bul-Kathos' Children"] },
            { Title: "C", data: ["Cathan's Traps", "Civerb's Vestments", "Cleglaw's Brace", "Cow King's Leathers"] },
            { Title: "D", data: ["Death's Disguise"] },
            { Title: "G", data: ["Griswold's Legacy "] },
            { Title: "H", data: ["Hsarus' Defense", "Heaven's Brethren", "Hwanin's Majesty"] },
            { Title: "I", data: ["Infernal Tools", "Iratha's Finery", "Isenhart's Armory", "Immortal King"] },
            { Title: "M", data: ["Milabrega's Regalia", "M'avina's Battle Hymn"] },
            { Title: "N", data: ["Natalya's Odium", "Naj's Ancient Vestige"] },
            { Title: "O", data: ["Orphan's Call"] },
            { Title: "S", data: ["Sigon's Complete Steel", "Sander's Folly", "Sazabi's Grand Tribute"] },
            { Title: "T", data: ["Tancred's Battlegear", "The Disciple", "Tal Rasha's Wrappings", "Trang-Oul's Avatar"] },
            { Title: "V", data: ["Vidala's Rig "] },
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
    color: colors.SetItems,
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

export default SetsScreen;
