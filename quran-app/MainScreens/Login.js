import React,{Component} from 'react';
import {
  Button, 
  ImageBackground,
  View, Text, TouchableOpacity, TextInput
} from 'react-native'

export default class Login extends Component{
  constructor(){
    super();
    this.state={
      username:""
    }
  }
render() {

   const {username}=this.state
  return(
<View>
<ImageBackground style={{alignSelf:"center", width:"100%", height:375}}source={require('../assets/Masjid.png')}>
<View style={{alignItems:"center"}}>
<TextInput onChangeText={text=>this.setState({username:text})}placeholder="Enter Username"style={{width:150, height:30, borderWidth:2, backgroundColor:"white", marginTop:250}}></TextInput>
<TouchableOpacity style={{borderRadius:10, borderColor:"black", borderWidth:2, marginTop:10, width:100, height:30, backgroundColor:"cadetblue"}}onPress={()=> this.props.navigation.navigate('Quran App', {username})}><Text style={{fontSize:20,textAlign:"center"}}>Start</Text></TouchableOpacity>
{console.log(this.state.username)}
</View>
</ImageBackground>
</View>
  )
  }
}