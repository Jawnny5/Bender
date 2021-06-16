import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

export default function TopBar() {
  return (
    <View style={styles.container}>
     <FontAwesome5 name='wine-bottle' size={27} color='#A38862' />
     <FontAwesome name='comments' size={27} color='#858585' />
     <FontAwesome name='user' size={27} color='#858585' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,

    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9
  }
})