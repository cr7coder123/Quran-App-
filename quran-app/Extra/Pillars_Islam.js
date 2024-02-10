import React, { Component } from 'react';
import { Text, ImageBackground, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

export default class Pillars_Islam extends Component{

  render(){
    return(
      <ScrollView>
      <ImageBackground
            style={{alignSelf: 'center'}}
            source={require('../assets/Kabah.png')}>

      <Text style={styles.title}>5 Pillars of Islam</Text>

     <Text style={styles.subtitle}>Testimony</Text>
     <Text style={{backgroundColor:"cadetblue", padding:10, fontSize:15, alignSelf:'center', alignText:'center'}}>The Testimony is لَآ اِلٰهَ اِلَّ للَّهُ مُهَمَّدُ رَّسُوْلُ للَّهِ</Text>

     <Text style={styles.subtitle}>Prayers</Text>
     <Text style={{backgroundColor:"cadetblue", padding:10, fontSize:15, alignSelf:'center', alignText:'center'}}>Fajir, Zuhr,  Asr,  Maghrib,  Isha,</Text>

     <Text style={styles.subtitle}>Zakat</Text>
     <Text style={{backgroundColor:"cadetblue", padding:10, fontSize:15, alignSelf:'center', alignText:'center'}}>Zakat is an obligation to Muslims in which you give to the poor.</Text>

     <Text style={styles.subtitle}>Fasting</Text>
     <Text style={{backgroundColor:"cadetblue", padding:10, fontSize:15, alignSelf:'center', alignText:'center'}}>Fasting is another obligation for Muslims in which you don't eat for a whole day continous for a month.</Text>

     <Text style={styles.subtitle}>Haji</Text>
     <Text style={{backgroundColor:"cadetblue", padding:10, fontSize:15, alignSelf:'center', alignText:'center'}}>Haji is when you pilgrimage to Mecca. You should do Haji at least once in a lifetime.</Text>
    

       <TouchableOpacity 
      style={styles.Back} 
      onPress={()=> this.props.navigation.navigate('Extra')}>
      <Text style={{ fontSize:20, color:"white"}}>Back</Text>
      </TouchableOpacity>
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
alignSelf:'center',
backgroundColor:"yellow",
color:"black",
textAlign:'center',
fontSize:20,
padding:10,
width:120,
  },
  title:{
backgroundColor:"green",
color:"white",
textAlign:'center',
fontSize:20,
padding:10
  }
})