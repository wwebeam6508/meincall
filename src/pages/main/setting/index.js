import React , {Component} from 'react'
import { render } from 'react-dom';
import { TouchableOpacity, Text } from 'react-native';

class Setting extends Component {
   render(){
      return (
         <TouchableOpacity style = {{ margin: 128 }}>
            <Text>This is Setting!</Text>
         </TouchableOpacity>
      )
   }
}
export default Setting