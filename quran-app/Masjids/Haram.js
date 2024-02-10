import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground, Image, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Al_Haram extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Masjid Al Haram</Text>
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 600, width:400 }}
            source={require('../assets/Back.png')}>


        <View style={styles.container}>

         <Text style={styles.words}>
        Location: Mecca, Saudia Arabia
          </Text>

           <Text style={styles.words}>
        Capacity:4,000,000 people
          </Text>


          <Text style={styles.words}>
        About: Masjid al-Haram, also called The Great Mosque was built to enclose the Kaʿbah. the holiest shrine in Islam. As one of the destinations of the hajj and ʿumrah pilgrimages, it receives millions of worshippers each year.
          </Text>

          <Image style={{ marginTop:20, width:400, height:300}}source={require('../assets/Haram.png')}>
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