import React, {useState} from "react";
import { StyleSheet, Text, View, Pressable, Dimensions, FlatList } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT_MODAL = 600;


const SetsModal = (props) => {
    const [Items, setItems] = useState([
      { Key: "Angelic Raiment", name: "Angelic Wing" },
      { Key: "Aldur's Watchtower", name: "Aldur's Rhythm" },
    ]);

    const pureSetName = props.itemClicked;

    closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }
    const renderSet = () => {
        return (
            <FlatList
            data={Items}
            renderItem={({item}) => (
                <View Key={item.Key}>
                    <Text style={styles.text}>{item.Key}</Text>
                </View>
            )}/>
        )
    }

    return (
      <Pressable
        disabled={true}
        style={styles.container}
        onPress={() => {
          console.log("Click");
        }}
      >
        <View style={styles.modal}>
          <View style={styles.textView}>
            <Text style={[styles.text, { fontSize: 22, color: "#00C400"}]}>
              {props.itemClicked}
            </Text>
            {renderSet()}
          </View>
          <View style={styles.buttonsView}>
            <Pressable style={styles.modalBtns} onPress={() => closeModal(false, "Cancel")}>
              <Text style={styles.text}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.modalBtns} onPress={() => closeModal(false, pureSetName)}>
              <Text style={styles.text}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 80,
    paddingTop: 10,
    backgroundColor: "#000",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#00C400",
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
  },
  modalBtns: {
    flex:1,
    paddingVertical: 10,
    alignItems: "center",
  },
});

export {SetsModal};