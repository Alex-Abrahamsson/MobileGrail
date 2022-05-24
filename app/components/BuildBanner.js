import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = 100;

const BuildBanner = (props) => {
    return (
      <Pressable style={[styles.buildBtns, {borderColor:"orange"}]}>
        <View style={styles.bannerView}>
          <View style={styles.tierView}>
            <Text style={styles.tierLetter}>{props.tierLetter}</Text>
            <Text style={styles.tierText}>Tier</Text>
          </View>
          <View style={styles.spellView}>
            {props.skillPix.map((itemz) => {<Image style={styles.spellImage} source={require({itemz})}/>})}
          </View>
          <View style={{ alignItems: "center", flexDirection:"row",marginHorizontal:5}}>
              <Text style={{color: 'white'}}>{props.build}</Text>
          </View>
        </View>
      </Pressable>
    );
}


export {BuildBanner};


const styles = StyleSheet.create({
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