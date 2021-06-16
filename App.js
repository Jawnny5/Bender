import React, { useState, useEffect, useRef } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import  Constants  from 'expo-constants';
import TopBar from './components/TopBar'
import axios from 'axios'
import SwipeableImage from './components/SwipeableImage';
import BottomBar from './components/BottomBar';
import Swipes from './components/Swipes';

export default function App() {

  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipesRef = useRef(null)

  async function fetchUsers(){
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=500')
      setUsers(data.results)
      console.log(data.results)
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting users','',[{text: 'Retry', onPress: () => fetchUsers()}])
    }
  }
  
  useEffect(() => {
    fetchUsers()
  }, [])

  function handleLike(){
    nextUser()
  }

  function handleDiss(){ 
    nextUser()
  }

  function handleDissPress(){ 
    swipesRef.current.openRight()
  }

  function handleLikePress(){ 
    swipesRef.current.openLeft()
  }

  function nextUser(){
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }
  
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 1 && users.map((u,i) => 
        currentIndex === i &&(
          <Swipes ref={swipesRef} key={i} currentIndex={currentIndex} users={users} handleLike={handleLike} handleDiss={handleDiss}/>
        ))}
      </View>
      <BottomBar handleDissPress={handleDissPress} handleLikePress={handleLikePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  swipes: {
    flex: 1, 
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0, 
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 7
  }
});

