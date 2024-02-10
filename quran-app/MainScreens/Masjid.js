import React, { Component } from 'react';
import { Text, ImageBackground, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Masjid extends Component {

  render() {
    return (
      <View>
        <Text style={styles.title}>Famous Masjids</Text>
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 700, width:400 }}
            source={require('../assets/Back.png')}>



        <View style={styles.container}>
          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Al Haram')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Masjid Al Haram</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Nabawi')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Masjid An Nabawi</Text>
          </TouchableOpacity>

           <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Jamia')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Grand Jamia Mosque</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Aqsa')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Masjid Al Aqsa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Badshahi')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Badshahi Mosque</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Zayed')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Sheikh Zayed Mosque</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Sultan')}>
            <Text style={{fontSize: 20, color: 'white', alignSelf:"center" }}>Sultan Qaboos Grand Mosque</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Blue')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Blue Mosque</Text>
          </TouchableOpacity>

        
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  Kalmah: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'navy',
    margin: 10,
    width: 300,
    height: 50,
  },
  title: {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    padding: 20,
  },
});