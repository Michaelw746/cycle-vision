import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function  Home({navigation}) {
  return (
    <View style={styles.container}>
      
      <Pressable title="Go back to Track"  style={styles.button}  onPress={() => navigation.navigate('Track')}>
        <Text style={styles.text}>Track the bike</Text>
      </Pressable>
      <Pressable title="Go back to Track"  style={styles.button}  onPress={() => navigation.navigate('Lock')}>
        <Text style={styles.text}>Lock the bike</Text>
      </Pressable>
      
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        color: "White",
      },
      button: {
        backgroundColor: "#000",
        color: "White",
        margin: 25,
        padding: 16,
        textAlign: "center",
        height:60 ,
      },
      text: {
        color: "white",
        fontSize: 24,
      },
    });
