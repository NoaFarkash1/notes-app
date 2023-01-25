import { SafeAreaView, StyleSheet, TextInput, Pressable, Text } from "react-native";
import React from "react";
import { useState } from "react";
import {NotesContext} from "../Data/NoteData";
import { useContext } from 'react';

export default function Note(props) {
  const [title, SetTitle] = useState("Title");
  const [desc, SetDesc] = useState("Description");
 const { notesArrContext } = useContext(NotesContext);
 const { SetNotesArrContext } = useContext(NotesContext);
 const { currentCat } = useContext(NotesContext);



  const addNote = () => {
    const Note = {
      id: notesArrContext.length +1,
      title: title,
      description: desc,
      category: currentCat,
    };    

    SetNotesArrContext((prev) => [...prev, Note])
    props.navigation.navigate("Home");

  }


  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={newText => SetTitle(newText)}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={newText => SetDesc(newText)}
        placeholder="Description"
      />
  <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={addNote}   >
               <Text style={styles.textStyle}>Add Note</Text>
            </Pressable>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
  button: {
    borderRadius: 50,
    padding: 10,
    height:50,
    elevation: 7,
    width:90,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:130

  },
  buttonClose: {
    backgroundColor: '#FFC300',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

