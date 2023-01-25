import { StyleSheet, Text, View, TouchableOpacity, Button, Pressable } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";
import {NotesContext} from "../Data/NoteData";
import { useContext } from 'react';

export default function Notes(props) {
  const { notesArrContext } = useContext(NotesContext);
  const { SetNotesArrContext } = useContext(NotesContext);

  const DeleteNote = (id) => {
    SetNotesArrContext(notesArrContext.filter((note) => note.id !== id));
    console.log("deleted")
  }; 

  return (
    <View>
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>{props.note.title}</Card.Title>
        <Card.Divider />
        <Text style={styles.fonts} h1>
          {props.note.description}
        </Text>
        <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => DeleteNote(props.note.id)}   >
               <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:90,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:105

  },
  buttonClose: {
    backgroundColor: '#FF0000',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
