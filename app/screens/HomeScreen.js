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
} from "react-native";

import colors from "../config/colors";

const btnBackground = "../assets/GrailBg.jpg";
const backgroundImage = "../assets/GrailBg.jpg";

export default function HomeScreen({navigation}) {
    const userName = navigation.getParam("Username");
    let userScore = navigation.getParam("Score");
    
    const getUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(userName);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (err) {
        console.log("Error loading IN HOME SCREEN");
      }
    };

    const handleBtnClick = (page) => {
      Promise.resolve(getUser()).then(function(theUser){theUser.forEach(element => {
        navigation.navigate(page, element)
      });})
    }

  return (
    <ImageBackground
      source={require(backgroundImage)}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headText}>Welcome {userName}!</Text>
          <View style={styles.scoreWindow}>
            <Text style={styles.textz}>Score: {userScore}</Text>
          </View>
        </View>

        <View style={styles.main}>
          <Text style={styles.headText}>What did you find?</Text>

          <ImageBackground
            source={require(btnBackground)}
            style={styles.mainButtons}
            resizeMode="cover"
          >
            <Pressable
              onPress={() => handleBtnClick("Uniques")}
              style={styles.mainButtons}
            >
              <Text style={[styles.buttonText, { color: colors.Uniques }]}>
                Uniques
              </Text>
            </Pressable>
          </ImageBackground>

          <ImageBackground
            source={require(btnBackground)}
            style={styles.mainButtons}
            resizeMode="cover"
          >
            <Pressable
              onPress={() => handleBtnClick("Sets")}
              style={styles.mainButtons}
            >
              <Text style={[styles.buttonText, { color: colors.SetItems }]}>
                Sets
              </Text>
            </Pressable>
          </ImageBackground>

          <ImageBackground
            source={require(btnBackground)}
            style={styles.mainButtons}
            resizeMode="cover"
          >
            <Pressable
              onPress={() => handleBtnClick("Runewords")}
              style={styles.mainButtons}
            >
              <Text style={[styles.buttonText, { color: colors.RuneWords }]}>
                Runewords
              </Text>
            </Pressable>
          </ImageBackground>

          <Text style={styles.headText}>Guides</Text>
          <ImageBackground
            source={require(btnBackground)}
            style={styles.mainButtons}
            resizeMode="cover"
          >
            <Pressable
              onPress={() => handleBtnClick("Builds")}
              style={styles.mainButtons}
            >
              <Text style={[styles.buttonText, { color: colors.GoldBorder }]}>
                Builds
              </Text>
            </Pressable>
          </ImageBackground>

          <ImageBackground
            source={require(btnBackground)}
            style={styles.mainButtons}
            resizeMode="cover"
          >
            <Pressable
              onPress={() => handleBtnClick("Cube")}
              style={styles.mainButtons}
            >
              <Text style={[styles.buttonText, { color: colors.GoldBorder }]}>
                Horadric Cube Recipes
              </Text>
            </Pressable>
          </ImageBackground>
        </View>

        <StatusBar style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 60 : 0,
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    flex: 1.5,
    alignItems: "center",
  },
  main: {
    flex: 7.5,
    alignItems: "center",
  },
  footer: {
    flex: 0.5,
    alignItems: "center",
  },
  scoreWindow: {
    borderWidth: 3,
    borderColor: colors.BloodRed,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.Faded,
  },
  headText: {
    color: "white",
    fontSize: 28,
  },
  textz: {
    color: "white",
    fontSize: 18,
  },
  mainButtons: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    elevation: 2,
    width: 300,
    height: 70,
    borderColor: colors.GoldBorder,
    borderWidth: 2,
    margin: 10,
    backgroundColor: colors.Faded,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
});
