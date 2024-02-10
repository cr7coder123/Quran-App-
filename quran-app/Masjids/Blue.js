import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground, Image, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Blue extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Blue Mosque</Text>
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 600, width:400 }}
            source={require('../assets/Back.png')}>


        <View style={styles.container}>

         <Text style={styles.words}>
      Location: Istanbul, Turkey
          </Text>

          <Text style={styles.words}>
      Capcity: 10,000 people
          </Text>
        
          <Text style={styles.words}>
        About: The Blue Mosque also known by its official name, the Sultan Ahmed Mosque, is an Ottoman-era historical imperial mosque. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. 
          </Text>

          <Image style={{ marginTop:20, width:400, height:300}}source={require('../assets/Blue.png')}>
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