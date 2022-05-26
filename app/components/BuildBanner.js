import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
  ImageBackground,
  Dimensions,
  Image,
  FlatList
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = 100;

const BuildBanner = (props) => {

  const getBorderColor = (letter) => {
    switch (letter) {
      case "S":
        return { borderColor: "#C80A16" };
      case "A":
        return { borderColor: "#E94111" };
      case "B":
        return {borderColor: "yellow"};
      case "C":
        return {borderColor: "green"};
      default:
        return {borderColor: "black"};
    }
  }

    return (
      <Pressable style={[styles.A, getBorderColor(props.tierLetter)]}>
        <View style={styles.bannerView}>
          <View style={styles.tierView}>
            <Text style={styles.tierLetter}>{props.tierLetter}</Text>
            <Text style={styles.tierText}>Tier</Text>
          </View>
          <View style={styles.spellView}>
            <FlatList 
              data={props.skillPix}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item}) => (
                <Image 
                  source={item.src} 
                  style={styles.spellImage}/>
                  )}
                  keyExtractor={item => item.src.toString()}/>
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
  A: {
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "#0007",
    width: WIDTH - 30,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: "row",
  },
  bannerView: {
    flexDirection: "row",
    flex: 1,
  },
  tierText: {
    color: "white",
    fontSize: 12,
  },
  tierLetter: {
    color: "white",
    fontSize: 14,
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
    height: 22,
    width: 22,
    marginHorizontal:2,
    borderRadius:4
  },
});