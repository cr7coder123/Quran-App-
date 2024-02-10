import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground, Image, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Badshahi extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Badshahi Mosque</Text>
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 600, width:400 }}
            source={require('../assets/Back.png')}>


        <View style={styles.container}>

         <Text style={styles.words}>
      Location: Lahore, Pakistan
          </Text>

          <Text style={styles.words}>
      Capcity: 100,000 people
          </Text>
        
          <Text style={styles.words}>
         About: Badshahi Mosque is a Mughal-era mosque. The mosque is located west of Lahore Fort along the outskirts of the Walled City of Lahore, and is widely considered to be one of Lahore's most iconic landmarks. The Badshahi Mosque was built between 1671 and 1673.
          </Text>

          <Image style={{ marginTop:20, width:400, height:300}}source={require('../assets/Badshahi.png')}>
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