import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import {Audio} from 'expo-av';

export default class Ayatul_Kursi extends Component {
 playSound =() => { 
    Audio.setIsEnabledAsync(true);
    Audio.Sound.createAsync(
        require("../assets/Ayatulkursi.mp3"),
      {
        shouldPlay: true,
        
      }
    );
  }; 
  render() {
    return (
      
      <ScrollView>
        <Text style={styles.title}>Ayatul Kursi</Text>

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

        <Text
          style={{
            textAlign: 'center',
            backgroundColor: 'cadetblue',
            padding: 20,
            fontSize: 27,
            marginTop: 10,
          }}>
          اَللَّهُ لَآ اِلٰهَ اِلَّا هُوَ آلْهَىُّ لْقَيُّوْمُ. لَا تَاْخُذُهُ
          سِنَتٌ وَّلَا نَوْمٌ. لَهُ مَا فِ سَّمٰوٰتِ وَمَا فِ لْاَرْضِ. مَنْ ذَ
          لَّذِىْ يَشْفَعُ عِنْدَهُاِلَّا بِاِذْنِهِ يَعْلَمُ مَابَيْنَ
          اَيْدِيْهِمْ وَمَا خَلْفَهُمْ. وَلَ يُهِيْطُوْنَ بِشَىْءٍ مِّنْ
          عِلْمِهٖ اِلَّا بِمَا شَآءَ. وَسِعَكُرْسِيُّهُ سَّمٰٰتِوَلْاَرْضَ.
          وَلَ يَءُوْدُهٌ هِفْظُهُمَ. وَهُوَلْعَلِىُّ لْعَظِيْمُ.
        </Text>
        <Text
          style={{
            textAlign: 'center',
            backgroundColor: 'cadetblue',
            padding: 20,
            fontSize: 27,
            marginTop: 10,
          }}>
       Allah! There is no god but He – the Living, The Self-subsisting, Eternal. No slumber can seize Him Nor Sleep. His are all things In the heavens and on earth. Who is there can intercede In His presence except As he permitteth? He knoweth What (appeareth to His creatures As) Before or After or Behind them. Nor shall they encompass Aught of his knowledge Except as He willeth. His throne doth extend Over the heavens And on earth, and He feeleth No fatigue in guarding And preserving them, For He is the Most High. The Supreme (in glory).
        </Text>


</ScrollView>
        </ImageBackground>
      </ScrollView>
    );
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
  title: {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
});
