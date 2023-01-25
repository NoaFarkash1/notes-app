import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Notes App</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
header:{
    width:"100%",
    height:"14%",
    backgroundColor:"#FAAB78",
    paddingTop:30
},
title:{
    color:"white",
    fontSize:30,
    fontWeight:"bold",
    padding:10,
    marginTop:10,
    textAlign:"center"
}

})