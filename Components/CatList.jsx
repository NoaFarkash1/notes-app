import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cat from './Cat';
import {NotesContext} from "../Data/NoteData";
import { useContext } from 'react';


export default function CatList(props) {
  const { CategoryArrContext } = useContext(NotesContext);
  return (
    <View >
        {console.log(CategoryArrContext)}
    {CategoryArrContext.map((cat, index) => (
      <Cat key={index} cat={cat} />
    ))}

</View>
  )
}

const styles = StyleSheet.create({})