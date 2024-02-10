import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground, Image, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Jamia extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Grand Jamia Mosque</Text>
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 600, width:400 }}
            source={require('../assets/Back.png')}>


        <View style={styles.container}>

         <Text style={styles.words}>
        Location: Karachi, Pakistan
          </Text>

           <Text style={styles.words}>
        Capacity:800,000 people
          </Text>


          <Text style={styles.words}>
        About: The design is a blend of Mughal and Persian architecture. An area of 50 acres at the top of a 60 ft hill was selected so that the mosque would be visible from miles away.
          </Text>

          <Image style={{ marginTop:20, width:400, height:300}}source={require('../assets/Jamia.png')}>
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