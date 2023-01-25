import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Notes from './Notes'

export default function NoteList(props) {
  return (
    <View>
    {props.NotesList.map((note, index) => (
  <Notes key={index} note={note} index={index}/>
    ))}
</View>
  )
}

const styles = StyleSheet.create({})