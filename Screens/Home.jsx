import { Modal, StyleSheet, Text,ScrollView, View, Pressable } from "react-native";
import React, { useState} from "react";
import {  Input } from "@rneui/themed";
import CatList from "../Components/CatList";
import { useContext } from 'react';
import {NotesContext} from "../Data/NoteData";
import { useNavigation } from '@react-navigation/native';



export default function Home(props) {
    const navigation = useNavigation();
  const [text, setText] = useState("");
  const { notesArrContext } = useContext(NotesContext);
  const { SetCategoryArrContext } = useContext(NotesContext);
  const [modalVisible, setModalVisible] = useState(false);


  const countType = (categoryType) => {
    const countTypes = notesArrContext.filter((note) => note.category === categoryType);
    return countTypes.length;
  };

  const addCategory = () => {
    SetCategoryArrContext((prev) => [...prev, text])
    setModalVisible(!modalVisible)
  };

  return (
    <ScrollView>
 <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Category</Text>
            <Text>
          {" "}
          <Input
            placeholder="Category"
            onChangeText={(newText) => setText(newText)}
          />{" "}
        </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={addCategory}>
              <Text style={styles.textStyle}>Add & Save</Text>
            </Pressable>
            <Text></Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>{ setModalVisible(!modalVisible)}}>
              <Text style={styles.textStyle}>Close & Not save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add Category</Text>
      </Pressable>
      
    </View>
    <View>
      <CatList/>
      
    </View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#FAAB78',
    },
    buttonClose: {
      backgroundColor: '#FAAB78',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });