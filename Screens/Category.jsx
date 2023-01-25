import { StyleSheet, Text, ScrollView, View, Button, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NoteList from "../Components/NoteList";
import {NotesContext} from "../Data/NoteData";
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Category(props) {
  const navigation = useNavigation();
  const { notesArrContext } = useContext(NotesContext);
  const [catNotesArr, setcatNotesArr] = useState(notesArrContext);
  const { currentCat } = useContext(NotesContext);


  useEffect(() => {
      setcatNotesArr(notesArrContext.filter((note) => note.category === currentCat));
  }, []);

  return (
    <ScrollView>   
      <View>
        <Text></Text>
      <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>
                navigation.navigate("Note")
              }>
               <Text style={styles.textStyle}>Add Note</Text>
            </Pressable>
        {console.log(catNotesArr)}
        <NoteList NotesList={catNotesArr}></NoteList>
      </View>
    </ScrollView>
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
  buttonContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 50,
    padding: 10,
    height:50,
    elevation: 7,
    width:200,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:80

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
