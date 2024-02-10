import React, { Component } from 'react';
import { Text, Image, ScrollView, View,TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

import {Audio} from 'expo-av';

export default class Kalmah1 extends Component{
    playSound =() => { 
    Audio.setIsEnabledAsync(true);
    Audio.Sound.createAsync(
        require("../assets/kalma1.mp3"),
      {
        shouldPlay: true,
        
      }
    );
  }; 
  render() {
    return(
      <ScrollView>
      <Text style={styles.title}>First Kalmah</Text>

<ImageBackground
            style={{alignSelf: 'center',height: 700, width:400 }}
            source={require('../assets/Back.png')}>

      <ScrollView>

       <TouchableOpacity style={styles.play} onPress={this.playSound}>
 <Text style={styles.text}>Play</Text>
 </TouchableOpacity>

 <TouchableOpacity style={styles.play} onPress={()=>Audio.setIsEnabledAsync(false)}>
 <Text style={styles.text}>Stop</Text>
 </TouchableOpacity>

      <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>لَآ اِلٰهَ اِلَّ للَّهُ مُهَمَّدُ رَّسُوْلُ للَّهِ</Text>
      <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>There is none worthy of worship except Allah and Muhammad(SAW) is the messenger of Allah.</Text>


      </ScrollView>
      </ImageBackground>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
    play:{
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor:"cadetblue",
    margin: 10,
    width: 60,
    height: 60,
    },
    text:{
    fontSize:20, 
    color:"white",
    alignSelf:'center'
    },
  title:{
backgroundColor:"green",
textAlign:'center',
fontSize:20,
padding:10
  }
})
