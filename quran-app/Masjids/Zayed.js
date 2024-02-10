import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground, Image, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Zayed extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Sheikh Zayed Mosque</Text>
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 700, width:400 }}
            source={require('../assets/Back.png')}>


        <View style={styles.container}>

         <Text style={styles.words}>
      Location: Abu Dhabi, UAE
          </Text>

          <Text style={styles.words}>
      Capcity: 41,000 people
          </Text>
        
          <Text style={styles.words}>
       About:Sheikh Zayed Mosque is the biggest mosque in UAE. The Grand Mosque was constructed between 1994 and 2007. Covering an area of more than 12 hectares (30 acres), excluding exterior landscaping and vehicle parking.
          </Text>

          <Image style={{ marginTop:20, width:400, height:300}}source={require('../assets/Zayed.png')}>
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