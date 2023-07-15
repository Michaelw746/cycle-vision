import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function LockTab({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Pressed!')}>
        <Image source={require("../../assets/lock.png")} />
        </TouchableOpacity>
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
