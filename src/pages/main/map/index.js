import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

class Map extends Component {
   render(){
      return (
         <View style={styles.page}>
            <View style={styles.container}>
               <Text>sadsadsa</Text>
            </View>
         </View>
      )
   }
}
export default Map

const styles = StyleSheet.create({
   page: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#F5FCFF"
   },
   container: {
     height: 300,
     width: 300,
     backgroundColor: "tomato"
   },
   map: {
     flex: 1
   }
 });