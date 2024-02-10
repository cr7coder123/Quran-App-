import React, { Component } from 'react';
import { Text, Image, ScrollView, View,TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

import {Audio} from 'expo-av';

export default class Kalmah5 extends Component{
     playSound =() => { 
    Audio.setIsEnabledAsync(true);
    Audio.Sound.createAsync(
        require("../assets/kalma5.mp3"),
      {
        shouldPlay: true,
        
      }
    );
  };
  render() {
    return(
      <ScrollView>
      <Text style={styles.title}>Fifth Kalmah</Text>

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
 
      <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>اَسْتَغْفِرُ للّٰهَ رَبِّىْ مِنْ كُلِّ ذَمْبٍ اَذْنَبْتُهُ عَمَدً اَوْ خَطَأً سِرًّ اَوْ عَلَانِيَةً وَّاَتُوْبُ اِلَيْهِ مِنَ ذَّمْبِ  لَّذِىْ اَعْلَمُ وَمِنَ لذَّمْبِ لَّذِىْ لَآ اَعْلَمُ اِنَّكَ اَنْتَ عَلَّمُ لْغُيُبِ وَسَتَّارُ لْعُيُوْبِ وَغَفَّارُ الذُّنُوْبِ وَلَ هَوْلَ وَلَ قُوَّةَ  اِلَّ بِ للّٰهِ لْعَلِىِّ لْعَظِيْمِ.</Text>

<Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>
I seek forgiveness from Allah, my Lord, from every sin I committed knowingly or unknowingly, secretly or openly, and I turn towards Him from the sin that I know and from the sin that I do not know. Certainly You, You are the knower of the hidden things and the Concealer of the mistakes and the Forgiver of the sins. And there is no power and no strength except from Allah, the Most High, the Most Great.</Text>

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
