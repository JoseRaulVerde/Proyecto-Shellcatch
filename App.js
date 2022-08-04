
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dra from './Drawer';
import Drawer from './Drawer'
import Jokes from './JOKES';
import { Login } from './Login';





export default function App() {
  
  return (
    <View style={styles.container}>
      {/*  <Login/> */}
      <Jokes/>
        
    </View>

    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  btn: {
    color: 'black',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    
  }
});
