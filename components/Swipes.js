import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { RectButton } from 'react-native-gesture-handler'
import SwipeableImage from './SwipeableImage'

export default function Swipes({users, currentIndex, handleLike, handleDiss}) {

  const [willLike, setWillLike] = useState(false)
  const [willDiss, setWillDiss] = useState(false)

  const renderLeftActions =  () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
      </RectButton>
    )
  }

  const renderRightActions =  () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
      </RectButton>
    )
  }

  return (
    <Swipeable 
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={() => {
        setWillLike(false)
        handleLike()
      }}
      onSwipeableRightOpen={() => {
        setWillDiss(false)
        handleDiss()
      }}
      onSwipeableLeftWillOpen={() => setWillLike(true)}
      onSwipeableRightWillOpen={() => setWillDiss(true)} 
    >
      <SwipeableImage user={users[currentIndex]} willLike={willLike} willDiss={willDiss} />
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

})
