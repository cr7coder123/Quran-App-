import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, Image, StyleSheet, ImageBackground} from 'react-native';
import {Audio} from 'expo-av';

export default class Pray extends Component{

  render(){
    return(
      
      <ScrollView>
      <Text style={styles.title}>How To Pray 2 Rakats</Text>

       <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 700, width:400 }}
            source={require('../assets/Back.png')}>
<ScrollView>
    <Text style={styles.subtitle}>Step 1</Text>
    <Text style={{fontSize:20}}>When the imam says اَللّٰهُاَكْبَرْ raise both your hands next to your ear(not touching your ear) and say اَللّٰهُاَكْبَرْ quietly.</Text>

    <Text style={styles.subtitle}>Step 2</Text>
    <Text style={{fontSize:20}}>Then place your hands on your chest and read dua al Istiftah.</Text>

    <Text style={styles.subtitle}>Step 3</Text>
    <Text style={{fontSize:20}}>Then read surah Fatiha plus any another surah.</Text>

    <Text style={styles.subtitle}>Step 4</Text>
    <Text style={{fontSize:20}}>Then the imam will say اَللّٰهُاَكْبَرْ again, you will put your arms on your knees and say اَللّٰهُاَكْبَرْ quietly(this is called Ruku).</Text>

    <Text style={styles.subtitle}>Step 5</Text>
    <Text style={{fontSize:20}}>While in Ruku you will say سُبْحَانَ رَبِّيَ الْعَظِيْمِ 3 times.</Text>

    <Text style={styles.subtitle}>Step 6</Text>
    <Text style={{fontSize:20}}>Then the imam will say سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ and go back to standing straight. Right after, you will say رَبَّنَ لَكَ الْحَمْدُ</Text>

    <Text style={styles.subtitle}>Step 7</Text>
    <Text style={{fontSize:20}}>Then the imam will say اَللّٰهُاَكْبَرْand go down to a sujud(your nose, forehead, and hands should be touching the ground) and you will say اَللّٰهُاَكْبَرْ quietly.</Text>

 <Text style={styles.subtitle}>Step 8</Text>
    <Text style={{fontSize:20}}>while in sujud you have to say سُبْحَانَ رَبِّى اٰلْأَعْلَى 3 times.</Text>

     <Text style={styles.subtitle}>Step 9</Text>
    <Text style={{fontSize:20}}>Then the imam will say اَللّٰهُاَكْبَرْ and you will have your hands on your knees and you will be sitting on your left foot and the right foot will be upright. You will also say اَللّٰهُاَكْبَرْ quietly.</Text>

   <Text style={styles.subtitle}>Step 10</Text>
    <Text style={{fontSize:20}}>Then you will go back to sujud(look back at steps 7 and 8)</Text>

     <Text style={styles.subtitle}>Step 11</Text>
    <Text style={{fontSize:20}}>When the imam says اَللّٰهُاَكْبَرْ Then you will go back to standing up with your hands on your chest(say اَللّٰهُاَكْبَرْ quietly)</Text>

     <Text style={styles.subtitle}>Step 12</Text>
    <Text style={{fontSize:20}}>Read surah Fatiha and any other surah.</Text>

     <Text style={styles.subtitle}>Step 13</Text>
    <Text style={{fontSize:20}}>Then repeat steps 4-10</Text>

     <Text style={styles.subtitle}>Step 14</Text>
    <Text style={{fontSize:20}}>Then the imam will say اَللّٰهُاَكْبَرْ and you will have your hands on your knees and you will be sitting on your left foot and the right foot will be upright. You will also say اَللّٰهُاَكْبَرْ quietly.</Text>

     <Text style={styles.subtitle}>Step 15</Text>
    <Text style={{fontSize:20}}>Then you will read Tashahud( you read Tashahhud in both your 2nd and last rakat). Tashahhud:اَتَّحِيَّاتُ لِلّٰهِ وَالصَّلَوَتُ وَالطَّيِّبَاتُ اَلسَّلَامُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَ كَاتُهُ اَلسَّلَا مُ عَلَيْنَا وَعَلٰ عِبَادِ اللّٰهِ الصَّلِحِيْنَ. اَشْهَدُ اَنْلَّآاِلٰهَ اِلَّا اللّٰهُ وَاَشْهَدُ اَنَّمُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ.</Text>

     <Text style={styles.subtitle}>Step 16</Text>
    <Text style={{fontSize:20}}>When you are done reading Tashahhud raise your pointer finger upwards.</Text>

    
<Text style={styles.subtitle}>Step 17</Text>
    <Text style={{fontSize:20}}>Because this is our last rakat we will also read Durood Ibrahim after Tashahhud. Durood Ibrahim: اَللَّهُمَّ صَلِّ عَلَ مُحَمَّدٍ، وَعَلَ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَ إِبْرَاهِيمَ، وَعَلَ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اَللَّهُمَّ بَرِكْ عَلَ مُحَمَّدٍ، وَعَلَ آلِ مُحَمَّدٍ، كَمَا بَرَكْتَ عَلَ إِبْرَاهِيمَ،  وَعَلَ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. </Text>

     <Text style={styles.subtitle}>Step 18</Text>
    <Text style={{fontSize:20}}>Then you will also read رَبِّ اجْعَلْنِىْ مُقِيْمَ الصَّلٰوتِ وَمِنْ ذُرِّيَّتِىْ. رَبَّنَا وَتَقَبَّلْ دُعَآ. رَبَّنَا اغْفِرْ لِىْوَلِوَالِدَىَّ وَلِلْمُءْ مِنِيْنَ يَوْمَ يَةُوْمُ الْحِسَابُ.</Text>

     <Text style={styles.subtitle}>Step 19</Text>
    <Text style={{fontSize:20}}>When the imam says اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَتُ اللّٰهِ you will turn your head to the right(quietly say اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَتُ اللّٰهِ). When the imam says اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَتُ اللّٰهِ again you will turn your head to the left(quietly say اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَتُ اللّٰهِ).</Text>


  
       <TouchableOpacity 
      style={styles.Back} 
      onPress={()=> this.props.navigation.navigate('Extra')}>
      <Text style={{ fontSize:20, color:"white"}}>Back</Text>
      </TouchableOpacity>


</ScrollView>

</ImageBackground>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  Back:{
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor:"red",
    margin: 10,
    width: 60,
    height: 50,
  },
  subtitle:{
    marginTop:20,
 backgroundColor:"cadetblue",
color:"white",
textAlign:'center',
fontSize:20,
padding:10
  },
  title:{
backgroundColor:"green",
color:"white",
textAlign:'center',
fontSize:20,
padding:10
  }
})