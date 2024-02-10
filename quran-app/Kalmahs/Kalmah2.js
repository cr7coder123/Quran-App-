import React, { Component } from 'react';
import { Text, Image, ScrollView, View,TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

import {Audio} from 'expo-av';


export default class Kalmah2 extends Component{
     playSound =() => { 
    Audio.setIsEnabledAsync(true);
    Audio.Sound.createAsync(
        require("../assets/Kalma2.mp3"),
      {
        shouldPlay: true,
        
      }
    );
  };
  render() {
    return(
      <ScrollView>
      <Text style={styles.title}>Second Kalmah</Text>

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

       <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>اَشْهَدُ اَنْ لَّآ اِلٰهَ اِلَّ للَّهُ وَهْدَهُ لَا شَرِيْكَ لَهُ وَ اَشْهَدُ اَنَّ مُهَمَّدً عَبْدُهُ وَرَسُوْلُمُ</Text>

       <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>I bear witness that there is none worthy of worship except Allah, the One alone, without partner, and I bear witness that Muhammad is His servant and Messenger.</Text>
      
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
