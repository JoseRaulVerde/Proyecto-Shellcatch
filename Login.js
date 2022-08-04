import React from "react";
import { View,Text, Button, SafeAreaView, StyleSheet, TextInput } from "react-native";






 export function Login() {
    return(
    <View style={styles.vista}>
        <Text>NOMBRE</Text>
        <TextInput style={styles.input}></TextInput>
        <Text >COMTRASEÑA</Text> 
        <TextInput style={styles.input} ></TextInput> 
        <Button title="LOG IN"></Button>
    </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: '80%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

    vista:{
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    }
})
