import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { NotesContext } from "../Data/NoteData";
import { useContext } from "react";

export default function Cat(props) {
  const navigation = useNavigation();
  const { setCurrentCat } = useContext(NotesContext);
  const { notesArrContext } = useContext(NotesContext);

  const setParams = () => {
    setCurrentCat(props.cat);
    navigation.navigate("Category");
  };
  return (
    <Card containerStyle={{ marginTop: 15 }}>
      <View>
        <TouchableOpacity onPress={setParams}>
          <Card.Title>
            <Text style={styles.catText}>{props.cat}</Text>
          </Card.Title>
       
        <Text style={styles.counter}>
          {notesArrContext.filter((note) => note.category === props.cat).length}
        </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  counter: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color:"#FAAB78",
    marginTop: 0,
    marginLeft: 50,
    width: 200,
  },
  catText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color:"#99bbff",
    marginTop: 0,
    marginLeft: 50,
    width: 200,
  }
});
