import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import  Constants  from 'expo-constants';
import TopBar from './components/TopBar'
import axios from 'axios'


export default function App() {

  const [users, setUsers] = useState([])

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
  
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>

      </View>
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
