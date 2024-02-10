import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground, Image, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Aqsa extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Masjid Al Aqsa</Text>
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 700, width:400 }}
            source={require('../assets/Back.png')}>


        <View style={styles.container}>
        
         <Text style={styles.words}>
      Location: Palestine
          </Text>

          <Text style={styles.words}>
      Capcity: 400,000 people
          </Text>

          <Text style={styles.words}>
      About: Masjid Al Aqsa was the first Qiblah before the Kabbah, hence why its also called Qibli Mosque.
          </Text>
       

          <Image style={{ marginTop:20, width:400, height:300}}source={require('../assets/Aqsa.png')}>
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