import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component{
   render(){
      const gotoMain = () => {
         Actions.main()
      }
      return (
         <TouchableOpacity style = {{ margin: 128 }} onPress = {gotoMain}>
            <Text>This is Login!</Text>
         </TouchableOpacity>
      )
   }
}
export default Login