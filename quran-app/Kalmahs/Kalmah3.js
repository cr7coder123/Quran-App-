import React, { Component } from 'react';
import { Text, Image, ScrollView, View,TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

import {Audio} from 'expo-av';

export default class Kalmah3 extends Component{
     playSound =() => { 
    Audio.setIsEnabledAsync(true);
    Audio.Sound.createAsync(
        require("../assets/kalma3.mp3"),
      {
        shouldPlay: true,
        
      }
    );
  };
  render() {
    return(
      <ScrollView>
      <Text style={styles.title}>Third Kalmah</Text>

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

      <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>سُبْهَنَ للَّهِ وَلْهَمْدُ لِلَّهِ ولَآ اِلٰهَ اِلَّا للَّهُ وللّٰهُ اَكْبَرُ. وَلَا هَوْلَ وَلَ قُوَّةَ اِلَّ بِللَّهِ لْعَلِيِّ لْعَظِيْمِ</Text>

        <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>Glory be to Allah and all praise be to Allah, there is none worthy of worship except Allah, and Allah is the Greatest. There is no might or power except from Allah, the Exalted, the Great One.</Text>

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
