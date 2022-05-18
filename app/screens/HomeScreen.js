import { StatusBar } from "expo-status-bar";
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

const name = "Alex";
const score = 0;
const btnBackground = "../assets/GrailBg.jpg";
const backgroundImage = "../assets/GrailBg.jpg";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require(backgroundImage)}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headText}>Welcome {name}!</Text>
          <View style={styles.scoreWindow}>
            <Text style={styles.textz}>Score: {score}</Text>
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
              onPress={() => alert("Uniques")}
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
              onPress={() => alert("Set Items")}
              style={styles.mainButtons}
            >
              <Text style={[styles.buttonText, { color: colors.SetItems }]}>
                Set Items
              </Text>
            </Pressable>
          </ImageBackground>

          <ImageBackground
            source={require(btnBackground)}
            style={styles.mainButtons}
            resizeMode="cover"
          >
            <Pressable
              onPress={() => alert("Runes Words")}
              style={styles.mainButtons}
            >
              <Text style={[styles.buttonText, { color: colors.RuneWords }]}>
                Rune Words
              </Text>
            </Pressable>
          </ImageBackground>
        </View>

        <View style={styles.footer}>
          <Text style={styles.textz}>Footer</Text>
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 40 : 0,
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    flex: 2,
    alignItems: "center",
  },
  main: {
    flex: 7,
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
    padding: 20,
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