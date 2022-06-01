import react from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Pressable,
  ImageBackground,
  Dimensions,
  ScrollView,
  Modal,
  Image,
} from "react-native";
import colors from "../config/colors";

const backgroundImage = "../assets/GrailBg.jpg";
const WIDTH = Dimensions.get("window").width;

function CubeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require(backgroundImage)}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.pageHeaderText}>Horadric Cube Recipes</Text>
          <View>
            <Text style={styles.headerText}>Runes</Text>
            <View style={styles.bigSection}>
              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/El_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = 1x </Text>
                <Image
                  source={require("../assets/Runes/Eld_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Eld_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = 1x </Text>
                <Image
                  source={require("../assets/Runes/Tir_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Tir_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = 1x </Text>
                <Image
                  source={require("../assets/Runes/Nef_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Nef_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = 1x </Text>
                <Image
                  source={require("../assets/Runes/Eth_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Eth_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = 1x </Text>
                <Image
                  source={require("../assets/Runes/Ith_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Ith_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = 1x </Text>
                <Image
                  source={require("../assets/Runes/Tal_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Tal_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = 1x </Text>
                <Image
                  source={require("../assets/Runes/Ral_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Ral_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = 1x </Text>
                <Image
                  source={require("../assets/Runes/Ort_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Ort_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = 1x </Text>
                <Image
                  source={require("../assets/Runes/Thul_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              {/* Recipes with Gems*/}
              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Thul_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/chipped_topaz.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Amn_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Amn_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/chipped_amethyst.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Sol_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Sol_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/chipped_sapphire.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Shael_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Shael_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/chipped_ruby.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Dol_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Dol_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/chipped_emerald.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Hel_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Hel_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/chipped_diamond.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Io_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Io_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/flawed_topaz.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Lum_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Lum_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/flawed_amethyst.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Ko_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Ko_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/flawed_sapphire.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Fal_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Fal_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/flawed_ruby.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Lem_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>3x </Text>
                <Image
                  source={require("../assets/Runes/Lem_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/flawed_emerald.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Pul_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Lum_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/flawed_diamond.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Um_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Um_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/topaz.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Mal_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Mal_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/amethyst.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Ist_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Ist_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/sapphire.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Gul_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Gul_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/ruby.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Vex_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Vex_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/emerald.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Ohm_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Ohm_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/diamond.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Lo_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Lo_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/flawless_topaz.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Sur_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Sur_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/flawless_amethyst.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Ber_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Ber_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/flawless_sapphire.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Jah_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Jah_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/flawless_ruby.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Cham_Rune.webp")}
                  style={styles.runes}
                />
              </View>

              <View style={styles.sectionStyle}>
                <Text style={styles.runeText}>2x </Text>
                <Image
                  source={require("../assets/Runes/Cham_Rune.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> + 1x </Text>
                <Image
                  source={require("../assets/Gems/flawless_emerald.webp")}
                  style={styles.runes}
                />
                <Text style={styles.runeText}> = </Text>
                <Image
                  source={require("../assets/Runes/Zod_Rune.webp")}
                  style={styles.runes}
                />
              </View>
            </View>

            <Text style={styles.headerText}>Recipes</Text>
            <View style={[styles.bigSection, { flexDirection: "row" }]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.requirements}>Requirements</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.requirements}>Result</Text>
              </View>
            </View>
            <View style={[styles.bigSection, { flexDirection: "row" }]}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../assets/Twisted_Essence_of_Suffering.gif")}
                  style={styles.essence}
                />
                <Image
                  source={require("../assets/Charged_Essence_of_Hatred.gif")}
                  style={styles.essence}
                />
                <Image
                  source={require("../assets/Burning_Essence_of_Terror.gif")}
                  style={styles.essence}
                />
                <Image
                  source={require("../assets/Festering_Essence_of_Destruction.gif")}
                  style={styles.essence}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/Token_of_Absolution.gif")}
                  style={styles.essence}
                />
              </View>
            </View>

            <Text style={styles.headerText}>Rings & Amulets</Text>
            <View style={[styles.bigSection, { flexDirection: "row" }]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.requirements}>Requirements</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.requirements}>Result</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.requirements}>Notes</Text>
              </View>
            </View>
            <View style={[styles.bigSection, { flexDirection: "row" }]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.text}> 3 Magic Rings</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text}>1 Magic Amulet</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text}></Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  pageHeaderText: {
    color: "white",
    fontSize: 28,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 10,
  },
  runes: {
    height: 30,
    width: 30,
  },
  runeText: {
    textAlign: "center",
    color: colors.RuneWords,
    letterSpacing: 3,
  },
  sectionStyle: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 3,
  },
  bigSection: {
    borderColor: colors.GoldBorder,
    borderWidth: 2,
    borderRadius: 5,
    width: WIDTH - 20,
    backgroundColor: colors.Faded,
  },
  requirements: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    color: colors.GoldBorder,
  },
  essence: {
    height: 25,
    width: 25,
    marginHorizontal: 5,
  },
  rareItem: {
    color: "yellow",
  },
});

export default CubeScreen;
