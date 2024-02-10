import React, { Component } from 'react';
import { Text, Image, ScrollView, View,TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

import {Audio} from 'expo-av';


export default class Kalmah4 extends Component{
      playSound =() => { 
    Audio.setIsEnabledAsync(true);
    Audio.Sound.createAsync(
        require("../assets/kalma4.mp3"),
      {
        shouldPlay: true,
        
      }
    );
  };
  render() {
    return(
      <ScrollView>
      <Text style={styles.title}>Fourth Kalmah</Text>

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

      <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>لَآ اِلٰهَ اِلَّ للَّهُ وَهْدَهُ لَا شَرِيْكَ لَهُ لَهُ لْمُلْكُ وَلَهُ لْهَمْدُ يُهْيٖ وَيُمِيْتُ وَهُوَ هَيُّ لَّايَمُوْتُ اَبَدً ابدً. ذُولْجَلَالِ وَلْاِكْرَمِ. بِيَدِهِ لْخَيْرُ. وَهُوَ عَلَ كُلِّ شَيْءٍ قَدِيْرُ. </Text>

      <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}> There is none worthy of worship except Allah. He is only One. There is no partners for Him. For Him is the Kingdom. And for Him is the Praise. He gives life and causes death. And He is Alive. He will not die, never, ever. Possessor of Majesty and Reverence. In His hand is the goodness. And He is the goodness. And He is on everything powerful. </Text>

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

