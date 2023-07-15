import { Button, StyleSheet, Text, View, ReactNativeZoomableView } from 'react-native';
//this file is using for creating a tracker and to use expo map api for the map
import React, {useState,useEffect} from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';

export default function  Track({navigation}) {
  let [mapRegion,setMapRegion] = useState({
    latitude: 34.034411637144196,
    longitude: -118.45671197410529,
    latitudeDelta: 0.0922,
    longitudeDelta:0.0421,
  });
  {/*Log of initial data*/}
  console.log('Initial lat', mapRegion.latitude)
  console.log('Initial Long', mapRegion.longitude)

  const [location,setLocation] = useState(null);
{/*Request user location info*/}
  const userLocation = async () =>{
    let{status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      setErrorMsg('Permission to access location was denied');
    }
    {/*Gets current position and then sets the latitude and longitude*/}
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true, timeInterval: 1});
     
    setLocation(location);
    setMapRegion({ 
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log('This is lat',location.coords.latitude)
    console.log('This is long',location.coords.longitude)
  }
  useEffect(() =>{
    userLocation();
  },[]);
  return (
    
    <View style={styles.zoomWrapper}>
          
      <Text>track</Text>
      <Button title="Go back to Lock" onPress={() => navigation.navigate('Lock')}/>
      <MapView style={styles.map} region = {mapRegion}>
      <Marker coordinate={mapRegion} title ='Marker'/>
      </MapView>

      
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
    margin: 57,
    padding: 17,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})