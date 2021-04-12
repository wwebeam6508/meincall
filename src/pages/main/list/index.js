import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native';

class List extends Component {
   render(){
      return (
         <TouchableOpacity style = {{ margin: 128 }}>
            <Text>This is List! and {this.props.state.language}</Text>
         </TouchableOpacity>
      )
   }
}
export default List