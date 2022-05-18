import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Button,
  Pressable,
  ImageBackground,
} from "react-native";

const windowFade = "#0005";
const name = "Alex";
const score = 0;
const uniqueColor = "#6B3600";
const setColor = "#00C400";
const runeColor = "#FFA500";
const buttonImage = {uri: "https://picsum.photos/200"};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headText}>Welcome {name}!</Text>
        <View style={styles.scoreWindow}>
          <Text style={styles.textz}>Score: {score}</Text>
        </View>
      </View>
      <View style={styles.main}>
        <Text style={styles.textz}>Main Area</Text>
        <Pressable onPress={() => alert("Uniques")} style={styles.mainButtons}>
          <Text style={[styles.buttonText,{color: uniqueColor}]}>Uniques</Text>
        </Pressable>
        <Pressable onPress={() => alert("Set Items")} style={styles.mainButtons}>
          <Text style={[styles.buttonText,{color: setColor}]}>Set Items</Text>
        </Pressable>
        <ImageBackground source={buttonImage} resizeMode="cover">
          <Pressable onPress={() => alert("Runes")} style={styles.mainButtons}>  
            <Text style={[styles.buttonText,{color:runeColor}]}>Runes</Text>
          </Pressable>
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textz}>Footer</Text>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 40 : 0,
    flex: 1,
    backgroundColor: "#260205",
  },
  header: {
    flex: 2,
    backgroundColor: windowFade,
    alignItems: "center",
  },
  main: {
    borderWidth: 2,
    borderColor: "red",
    flex: 7,
    backgroundColor: windowFade,
    alignItems: "center",
    alignContent: "center",
  },
  footer: {
    flex: 0.5,
    backgroundColor: windowFade,
    alignItems: "center",
  },
  scoreWindow: {
    borderWidth: 3,
    borderColor: "#260205",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headText: {
    color: "white",
    fontSize: 24,
    padding: 20,
  },
  textz: {
    color: "white",
  },
  mainButtons: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    width: 200,
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",

  },
});
