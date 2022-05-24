import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Pressable,
  ImageBackground,
  SectionList,
  Dimensions,
  Image
} from "react-native";


const backgroundImage = "../assets/GrailBg.jpg";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = 100;

function BuildsScreen({ navigation }) {
    return (
      <ImageBackground
        source={require(backgroundImage)}
        style={styles.background}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.headText}>Build screen</Text>
          <View>
            <Text style={styles.classText}>Sorceress</Text>
            <Pressable style={styles.buildBtns}>
              <View style={{ borderWidth: 1, borderColor: "white" }}>
                <Text style={styles.tierLetter}>A</Text>
                <Text style={styles.tierText}>Tier</Text>
                <Image></Image>
              </View>
            </Pressable>
            <Pressable style={styles.buildBtns}>
              <Text>Hej</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 80 : 0,
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  headText: {
    color: "white",
    fontSize: 22,
  },
  classText: {
    color: "white",
  },
  buildBtns: {
    borderWidth: 1,
    borderColor: "white",
    width: WIDTH - 80,
    marginTop: 10,
    marginBottom: 10,
    flex: 0.2,
    flexDirection: "row",
  },
  tierText: {
    color: "white",
    fontSize: 16,
  },
  tierLetter: {
      color: "white",
      fontSize:18,
      textAlign: "center"
  }
});


export default BuildsScreen;