import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground, Image, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Nabawi extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Masjid An Nabawi</Text>
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 800, width:400 }}
            source={require('../assets/Back.png')}>


        <View style={styles.container}>

         <Text style={styles.words}>
        Location: Medina, Saudia Arabia
          </Text>

           <Text style={styles.words}>
        Capacity:1,500,000 people
          </Text>

          <Text style={styles.words}> About: Masjid An Nabawi is  known in English as the "Prophet's Mosque", and is the second mosque built by the prophet Muhammad(SAW). He was involved in the construction of the mosque. At the time, the mosque's land belonged to two young orphans, Sahl and Suhayl, and when they learned that Muhammad wished to acquire their land to erect a mosque, they went to Muhammad and offered the land to him as a gift; Muhammad insisted on paying a price for the land because they were orphaned children.
          </Text>

          <Image style={{ marginTop:20, width:400, height:300}}source={require('../assets/Nabawi.png')}>
          </Image>
        
        </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:20,
    marginRight:20
  },
  title: {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    padding: 20,
  },
   words:{
   color:"black", 
   fontSize:"20",
    justifyContent:"center", 
    textAlign:"center", 
    alignSelf:"center",
    marginTop:10
    }
});