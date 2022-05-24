import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Pressable,
  ImageBackground,
  Dimensions,
  Image
} from "react-native";
import {BuildBanner} from "../components/BuildBanner";


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
            <BuildBanner tierLetter="A" build="Hydra Build" skillPix={["../assets/Blizzard.png","../assets/FrostNova.png","../assets/IceBlast.png","../assets/IceBolt.png","../assets/ColdMastery.png","../assets/Teleport.png","../assets/EnergyShield.png"]}/>

            <Pressable style={[styles.buildBtns, {borderColor:"orange"}]}>
              <View style={styles.bannerView}>
                <View style={styles.tierView}>
                  <Text style={styles.tierLetter}>A</Text>
                  <Text style={styles.tierText}>Tier</Text>
                </View>
                <View style={styles.spellView}>
                  <Image style={styles.spellImage} source={require("../assets/Blizzard.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/FrostNova.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBlast.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBolt.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/ColdMastery.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/Teleport.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/EnergyShield.png")}/>
                </View>
                <View style={{ alignItems: "center", flexDirection:"row",marginHorizontal:5}}>
                  <Text style={{color:"white"}}>Blizzard Build</Text>
                </View>
              </View>
            </Pressable>

            <Pressable style={[styles.buildBtns, {borderColor:"orange"}]}>
              <View style={styles.bannerView}>
                <View style={styles.tierView}>
                  <Text style={styles.tierLetter}>A</Text>
                  <Text style={styles.tierText}>Tier</Text>
                </View>
                <View style={styles.spellView}>
                  <Image style={styles.spellImage} source={require("../assets/FireBolt.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/FireBall.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/Meteor.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/FireMastery.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/FrozenArmor.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/FrozenOrb.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/ColdMastery.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/Teleport.png")}/>
                </View>
                <View style={{ alignItems: "center", flexDirection:"row",marginHorizontal:5}}>
                  <Text style={{color:"white"}}>Fire Meteor</Text>
                </View>
              </View>
            </Pressable>

            <Pressable style={[styles.buildBtns, {borderColor:"orange"}]}>
              <View style={styles.bannerView}>
                <View style={styles.tierView}>
                  <Text style={styles.tierLetter}>A</Text>
                  <Text style={styles.tierText}>Tier</Text>
                </View>
                <View style={styles.spellView}>
                  <Image style={styles.spellImage} source={require("../assets/Blizzard.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/FrostNova.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBlast.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBolt.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/ColdMastery.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/Teleport.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/EnergyShield.png")}/>
                </View>
                <View style={{ alignItems: "center", flexDirection:"row",marginHorizontal:5}}>
                  <Text style={{color:"white"}}>Chain Lightning</Text>
                </View>
              </View>
            </Pressable>

            <Pressable style={[styles.buildBtns, {borderColor:"yellow"}]}>
              <View style={styles.bannerView}>
                <View style={styles.tierView}>
                  <Text style={styles.tierLetter}>B</Text>
                  <Text style={styles.tierText}>Tier</Text>
                </View>
                <View style={styles.spellView}>
                  <Image style={styles.spellImage} source={require("../assets/Blizzard.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/FrostNova.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBlast.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBolt.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/ColdMastery.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/Teleport.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/EnergyShield.png")}/>
                </View>
                <View style={{ alignItems: "center", flexDirection:"row",marginHorizontal:5}}>
                  <Text style={{color:"white"}}>Firewall Build</Text>
                </View>
              </View>
            </Pressable>

            <Pressable style={[styles.buildBtns, {borderColor:"orange"}]}>
              <View style={styles.bannerView}>
                <View style={styles.tierView}>
                  <Text style={styles.tierLetter}>A</Text>
                  <Text style={styles.tierText}>Tier</Text>
                </View>
                <View style={styles.spellView}>
                  <Image style={styles.spellImage} source={require("../assets/Blizzard.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/FrostNova.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBlast.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBolt.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/ColdMastery.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/Teleport.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/EnergyShield.png")}/>
                </View>
                <View style={{ alignItems: "center", flexDirection:"row",marginHorizontal:5}}>
                  <Text style={{color:"white"}}>Blizzard MF%</Text>
                </View>
              </View>
            </Pressable>

            <Pressable style={[styles.buildBtns, {borderColor:"red"}]}>
              <View style={styles.bannerView}>
                <View style={styles.tierView}>
                  <Text style={styles.tierLetter}>S</Text>
                  <Text style={styles.tierText}>Tier</Text>
                </View>
                <View style={styles.spellView}>
                  <Image style={styles.spellImage} source={require("../assets/Blizzard.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/FrostNova.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBlast.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBolt.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/ColdMastery.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/Teleport.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/EnergyShield.png")}/>
                </View>
                <View style={{ alignItems: "center", flexDirection:"row",marginHorizontal:5}}>
                  <Text style={{color:"white"}}>Frozen Orb</Text>
                </View>
              </View>
            </Pressable>

            <Pressable style={[styles.buildBtns, {borderColor:"green"}]}>
              <View style={styles.bannerView}>
                <View style={styles.tierView}>
                  <Text style={styles.tierLetter}>C</Text>
                  <Text style={styles.tierText}>Tier</Text>
                </View>
                <View style={styles.spellView}>
                  <Image style={styles.spellImage} source={require("../assets/Blizzard.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/FrostNova.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBlast.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/IceBolt.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/ColdMastery.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/Teleport.png")}/>
                  <Image style={styles.spellImage} source={require("../assets/EnergyShield.png")}/>
                </View>
                <View style={{ alignItems: "center", flexDirection:"row",marginHorizontal:5}}>
                  <Text style={{color:"white"}}>Melee Enchantress</Text>
                </View>
              </View>
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
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "#0007",
    width: WIDTH - 50,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  bannerView: {
    flexDirection: "row",
    flex: 1,
  },
  tierText: {
    color: "white",
    fontSize: 16,
  },
  tierLetter: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  tierView: {
    marginLeft: 5,
  },
  spellView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  spellImage: {
    height: 20,
    width: 20,
  },
});


export default BuildsScreen;