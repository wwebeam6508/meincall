import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
class Map extends Component {
   render(){
      return (
         <View style={styles.page}>
            <View style={styles.container}>
               <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={styles.map}
                  region={{
                     latitude: 37.78825,
                     longitude: -122.4324,
                     latitudeDelta: 0.015,
                     longitudeDelta: 0.0121,
                  }}
               >
               </MapView>
            </View>
         </View>
      )
   }
}
export default Map

const styles = StyleSheet.create({
   container: {
      ...StyleSheet.absoluteFillObject,
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   map: {
      ...StyleSheet.absoluteFillObject,
   },
});