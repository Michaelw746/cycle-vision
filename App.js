import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  onPress,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Lock from "./src/Tabs/Lock";
import Track from "./src/Tabs/Track";
import  {createStackNavigator} from "@react-navigation/stack"
import Home from "./src/Tabs/Home";



export default function App({ navigation }) {

  const Stack = createStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  style={styles.button} />
        <Stack.Screen name="Track" component={Track}  style={styles.button} />
        <Stack.Screen name="Lock" component={Lock}  style={styles.button} />
      </Stack.Navigator>
      
    </NavigationContainer>
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
