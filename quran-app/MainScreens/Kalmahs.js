import React, { Component } from 'react';
import { Text, ImageBackground, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Kalmahs extends Component {

  render() {
    return (
      <View>
        <Text style={styles.title}>Kalmahs</Text>
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 700, width:400 }}
            source={require('../assets/Back.png')}>



        <View style={styles.container}>
        
          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('First Kalmah')}>
            <Text style={{ fontSize: 20, color: 'white' }}>1st Kalmah</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Second Kalmah')}>
            <Text style={{ fontSize: 20, color: 'white' }}>2nd Kalmah</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Third Kalmah')}>
            <Text style={{ fontSize: 20, color: 'white' }}>3rd Kalmah</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Fourth Kalmah')}>
            <Text style={{ fontSize: 20, color: 'white' }}>4th Kalmah</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Fifth Kalmah')}>
            <Text style={{ fontSize: 20, color: 'white' }}>5th Kalmah</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Kalmah}
            onPress={() => this.props.navigation.navigate('Sixth Kalmah')}>
            <Text style={{ fontSize: 20, color: 'white' }}>6th Kalmah</Text>
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
    width: 200,
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
