
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function Jokes() {
    const [pag, setPag] = useState()
  
    function getPag() {
      fetch('http://api.icndb.com/jokes/random')
        .then((res) => res.json())
        .then((ponse) => {
          setPag(ponse)
        })
    }
  
  
    useEffect(() => {
      getPag()
    }, []);
  
    if (pag == undefined) {
      return null
    }
    
  return (
    <View style={{flex: 1}}>
      
      <View style={styles.container}>

        <Text>JOKES</Text>
        <View>
          <Text>{pag.value.id}</Text>
          <Text>{pag.value.joke}</Text>
          <Button onPress={getPag} title='Actualizar' Color='blue'></Button>


        </View>


      </View>
    </View>
  );
  
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    btn: {
      color: 'black',
      alignSelf: 'flex-start',
      justifyContent: 'flex-start',
      
    }
  });