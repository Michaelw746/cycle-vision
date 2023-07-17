import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  render,
  flagImage,
  Switch,
      
} from "react-native";

import React, { useState } from 'react';

import { TouchableOpacity } from "react-native";

export default function LockTab({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [imageSource, setImageSource] = useState(require("../../assets/bi_unlock-fill.png"));

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setImageSource(isEnabled ? require("../../assets/bi_unlock-fill.png") : require("../../assets/vector3.png"));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Pressed!')}>
        <Image source={imageSource} />
      </TouchableOpacity>
      <Switch
        trackColor={{ false: '#ffffff', true: '#2E3A53' }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
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
    margin: 57,
    padding: 17,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});
