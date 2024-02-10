import React, { Component } from 'react';
import { Text, View,TouchableOpacity,ImageBackground, Button, Image, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

export default class Tasbih extends Component{
constructor(){
  super();
  this.state={
    counter:0,
 buttonColor:"brown"
  }
}
increment_counter=()=>{
this.setState({
  counter:this.state.counter+1
})
}
  render(){
    return(
      <View>
      <ImageBackground style={{width:"100%", height:400}} source={require('../assets/Back.png')}>
      <View style={{backgroundColor:"rgba(255,255,255,0.6)",alignItems: 'center',justifyContent: 'center',marginTop: 20}}>
      <Text style={{fontSize:20}}>{this.state.counter}</Text>
     <Button title="PRESS ME" color={this.state.buttonColor} onPress={this.increment_counter}></Button>
      </View>
      </ImageBackground>
      </View>
    )
  }
}

