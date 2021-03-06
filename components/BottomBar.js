import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function BottomBar({handleLikePress, handleDissPress}) {
  return (
    <View style={styles.container}>
      <View />
      <TouchableOpacity style={styles.button}>
        <FontAwesome name='times' size={27} color='black' onPress={handleDissPress}></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name='heart' size={27} color='#bd1816' onPress={handleLikePress}></FontAwesome>
      </TouchableOpacity>
      <View />
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
     height: 75,
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center'
   },
   button: {
     width: 50,
     height: 50,
     backgroundColor: 'white',
     borderRadius: 25,
     justifyContent: 'center',
     alignItems: 'center',
     shadowOffset: {
      width: 0,
      height: 0,

    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 10
   }
})
