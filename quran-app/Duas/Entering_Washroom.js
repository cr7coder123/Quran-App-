import React, { Component } from 'react';
import { Text, Image, View,TouchableOpacity, StyleSheet } from 'react-native';

import {Audio} from 'expo-av';

export default class Entering_Washroom extends Component{
     playSound = async () => {
    await Audio.setIsEnabledAsync(true);
    await Audio.Sound.createAsync(
      {
        uri: '',
      },
      {
        shouldPlay: true,
        
      }
    );
  };
  render() {
    return(
      <View>
      <Text style={styles.title}>Dua When Entering Washroom</Text>
      <Text style={{textAlign:'center', backgroundColor:"cadetblue", padding:20, fontSize:27.5, marginTop:10}}>اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَاأِثِ.</Text>
      <View style={styles.container}>

      

 <TouchableOpacity 
 style={styles.Play}
 onPress={this.playSound}>

 <Text style={{ fontSize:20, color:"white"}}>Audio</Text>
 </TouchableOpacity>

      <TouchableOpacity 
      style={styles.Back} 
      onPress={()=> this.props.navigation.navigate('Duas')}>
      <Text style={{ fontSize:20, color:"white"}}>Back</Text>
      </TouchableOpacity>
      </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 20
    },
    Play:{
  alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor:"green",
    margin: 10,
    width: 60,
    height: 60,
    },
  Back:{
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"red",
    margin: 10,
    width: 100,
    height: 50,
  },
  title:{
backgroundColor:"green",
color:"white",
textAlign:'center',
fontSize:20,
padding:10
  }
})