import React, { Component } from 'react'
import { Text
   ,TouchableOpacity
   ,TextInput
   ,StyleSheet
   ,View
   ,Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component{
   state={
      phone_no:"",
      password:""
   }
   render(){
      const gotoMain = () => {
         Actions.main()
      }
      return (
         <View  style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/Capture.png")}/>
            <View style={styles.inputView} >
               <TextInput  
                  style={styles.inputText}
                  placeholder="PhoneNumber..." 
                  placeholderTextColor="#003f5c"
                  onChangeText={text => this.setState({phone_no:text})}/>
            </View>
            <View style={styles.inputView} >
               <TextInput  
                  style={styles.inputText}
                  placeholder="Password..." 
                  placeholderTextColor="#003f5c"
                  onChangeText={text => this.setState({password:text})}/>
            </View>
            <TouchableOpacity>
               <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={gotoMain}>
               <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#66B2FF",
   },
   forgot_button: {
      height: 30,
      marginTop: 20,
   },
   logo:{
      marginBottom: 40,
   },
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
   },
   inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    }
 });

export default Login