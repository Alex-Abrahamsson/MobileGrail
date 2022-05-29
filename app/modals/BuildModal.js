import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import Builds from "../data/Builds.js";

const WIDTH = Dimensions.get("window").width;
const HEIGHT_MODAL = Dimensions.get("window").height;


const BuildModal = (props) => {
    let activeBuild = getActiveBuild(props.buildName);

    //Add builds here 
    function getActiveBuild(build) {
      switch (build) {
        case "Blizzard":
          return (activeBuild = Builds.Blizzard);
        case "MeteOrb":
          return (activeBuild = Builds.MeteOrb);
        case "Frozen Orb":
          return (activeBuild = Builds.FrozenOrb);
        case "Hammerdin":
          return (activeBuild = Builds.Hammerdin);
        case "Trapsin":
          return (activeBuild = Builds.Trapsin);
        case "Summoner":
          return (activeBuild = Builds.Summoner);
        case "Wind Druid":
          return (activeBuild = Builds.WindDruid);
        default:
          return (activeBuild = Builds.None);
      }
    }

    closeModal = (bool, data) => {
        props.changeModalVisible(bool);
    }
    
    const getBorderColor = (letter) => {
      switch (letter) {
        case "S":
          return { borderColor: "#C80A16" };
        case "A":
          return { borderColor: "#E94111" };
        case "B":
          return { borderColor: "yellow" };
        case "C":
          return { borderColor: "green" };
        default:
          return { borderColor: "black" };
      }
    };

    return (
      <View style={styles.container}>
        <View style={[styles.modal, getBorderColor(props.borderColor)]}>
          <View style={styles.buttonsView}>
            <Text style={{ color: "peru", fontSize:22 }}>{props.buildName}</Text>
          </View>
          <View style={styles.statsView}>
            <Text style={styles.sectionText}>Stats</Text>
            <FlatList
              data={activeBuild.Stats}
              renderItem={({ item, index }) => (
                <Text key={index} style={styles.statText}>
                  {item}
                </Text>
              )}
            />
          </View>
          <View style={styles.gearView}>
            <Text style={styles.sectionText}>Gear</Text>
            <FlatList
              data={activeBuild.Gear}
              renderItem={({ item, index }) => (
                <Text key={index} style={styles.statText}>
                  {item}
                </Text>
              )}
            />
          </View>
          <View style={styles.gearView}>
            <Text style={styles.sectionText}>Merc</Text>
            <FlatList
              data={activeBuild.Merc}
              renderItem={({ item, index }) => (
                <Text key={index} style={styles.statText}>
                  {item}
                </Text>
              )}
            />
          </View>
        </View>
        <Pressable
          style={styles.modalClose}
          onPress={() => closeModal(false, "Ok")}
        >
          <Text style={styles.text}>Close</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 15 : 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: HEIGHT_MODAL - 50,
    width: WIDTH - 30,
    paddingTop: 10,
    backgroundColor: "#000",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  textView: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#8A6227",
  },
  buttonsView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  modalClose: {
    position: "absolute",
    bottom: 9,
    borderRadius: 13,
    paddingHorizontal: 153,
    paddingVertical:15
  },
  statsView: {
    paddingVertical:15
  },
  statText:{
    color:"white",
    paddingLeft:10
  },
  gearView: {

  },
  sectionText: { 
    color:"white",
    fontSize:20,
    textAlign: "center"
  },
});

export {BuildModal};