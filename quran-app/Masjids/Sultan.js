import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground, Image, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Sultan extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Sultan Qaboos Grand Mosque</Text>
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 700, width:400 }}
            source={require('../assets/Back.png')}>


        <View style={styles.container}>

         <Text style={styles.words}>
      Location: Muscat, Oman
          </Text>

          <Text style={styles.words}>
      Capcity: 25,000 people
          </Text>
        
          <Text style={styles.words}>
       About:In 1992, the Sultan of Oman, Qaboos bin Said al Said, directed that his country should have a Grand Mosque. It took six years and seven months to build the mosque.
          </Text>

          <Image style={{ marginTop:20, width:400, height:300}}source={require('../assets/sultan.jpg')}>
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