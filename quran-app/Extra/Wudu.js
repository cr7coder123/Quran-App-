import React, { Component } from 'react';
import { Text, ImageBackground, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

export default class Wudu extends Component{

  render(){
    return(
      <ScrollView>
       <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 900, width:400 }}
            source={require('../assets/Back.png')}>

      <Text style={styles.title}>How To Do Wudu</Text>

    <Text style={styles.subtitle}>Step 1</Text>
    <Text style={styles.textfon}>Say bismillah and then wash your hands 3 times(start with right hand).</Text>

    <Text style={styles.subtitle}>Step 2</Text>
    <Text style={styles.textfon}>Wash your mouth 3 times.</Text>

    <Text style={styles.subtitle}>Step 3</Text>
    <Text style={styles.textfon}>Rinse your nose 3 times.</Text>

    <Text style={styles.subtitle}>Step 4</Text>
    <Text style={styles.textfon}>Wash your face 3 times.</Text>

    <Text style={styles.subtitle}>Step 5</Text>
    <Text style={styles.textfon}>Wash each arm 3 times(right arm first) all the way up to your elbows.</Text>

    <Text style={styles.subtitle}>Step 6</Text>
    <Text style={styles.textfon}>Wipe your head and your neck then your ear only once.</Text>

    <Text style={styles.subtitle}>Step 7</Text>
    <Text style={styles.textfon}>Wash your feet up to your ankle 3 times.</Text>

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
  },
  textfon:{
    marginRight:10,
    marginLeft:10,
    fontSize:20, 
    color:"black",
    alignSelf:"center",
    alignText:"center",
    backgroundColor:"rgba(255,255,255,0.5)",
    fontWeight:500

  },
})