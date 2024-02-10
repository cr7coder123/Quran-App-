import React, { Component } from 'react';
import { Text, Image, ScrollView, View,TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

import {Audio} from 'expo-av';

export default class Kalmah6 extends Component{
     playSound =() => { 
    Audio.setIsEnabledAsync(true);
    Audio.Sound.createAsync(
        require("../assets/kalma6.mp3"),
      {
        shouldPlay: true,
        
      }
    );
  };
  render() {
    return(
      <ScrollView>
      <Text style={styles.title}>Sixth Kalmah</Text>

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

      <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>اَللّٰهُمَّ اِنِّىْ اَعُوْذُبِكَ مِنْ اَنْ اُشْرِكَ بِكَ شَيْءً وَّاَنَ اَعْلَمُ بِهٖ وَاَسْتَغْفِرُكَ لِمَا لَآ اَعْلَمُ بِهٖ تُبْتُ عَنْهُ وتَبَرَّتُ مِنَ لْكُفْرِ وَشِّرْكِ وَلْكِذْبِ وَلْغِيْبَةِ وَلْبِدْعَةِ وَنَّمِيْمَةِ وَلْفَوَ حِشِ وَلْبُهْتَنِ وَلْمَعَصِىْ كُلِّهَ وَاَسْلَمْتُ وَاَقُوْلُ لَآ اِلٰهَ اِلَّا للَّهُ مُهَمَّدٌ رَّسُوْلُ للّٰهِ.</Text>

        <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>O Allah! I seek refuge in You from that I should ascribe any partner with You knowingly. I seek Your forgiveness for the sin of which I have no knowledge. I repent from it. And becoming disgusted of disbelief and idolatry, lying and backbiting, innovation and slander, lewdness and abomination and all other acts of disobedience, I submit to Your will. I believe and I declare that there is none worthy of worship except Allah and Muhammad is the Messenger of Allah.</Text>

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
