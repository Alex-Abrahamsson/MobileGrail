import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  FlatList,
  ScrollView
} from "react-native";
import colors from "../config/colors";
import Builds from "../data/Builds.js";

const WIDTH = Dimensions.get("window").width;
const HEIGHT_MODAL = Dimensions.get("window").height;


const BuildModal = (props) => {
    const activeBuild = Builds.MeteOrb;// MeteOrb need to change dynamicly With "props.buildName"


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
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.modal, getBorderColor(props.borderColor)]}>
            <View style={styles.buttonsView}>
              <Text style={{ color: "peru" }}>{props.buildName}</Text>
              <FlatList
                data={activeBuild.Stats}
                renderItem={({ item, index }) => (
                  <Text key={index} style={{ color: "white" }}>
                    {item}
                  </Text>
                )}
              />
              <FlatList
                data={activeBuild.Gear}
                renderItem={({ item, index }) => (
                  <Text key={index} style={{ color: "white" }}>
                    {item}
                  </Text>
                )}
              />

              <Pressable
                style={styles.modalClose}
                onPress={() => closeModal(false, "Ok")}
              >
                <Text style={styles.text}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
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
    height: HEIGHT_MODAL - 25,
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
    bottom: -635,
    borderColor: colors.GoldBorder,
    borderWidth: 2,
    borderRadius: 13,
    paddingHorizontal: 153,
  },
});

export {BuildModal};