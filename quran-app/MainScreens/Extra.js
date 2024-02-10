import React, { Component } from 'react';
import { Text, ImageBackground, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Extra extends Component {
 
  render() {
    return (
      <View>
        <Text style={styles.title}>Extra Stuff</Text>
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 700, width:400 }}
            source={require('../assets/Back.png')}>

           

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.extras}
            onPress={() => this.props.navigation.navigate('Tasbih')}>
            <Text style={{ fontSize: 20, color: 'black' }}>Tasbih</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.extras}
            onPress={() => this.props.navigation.navigate('Pillars of Islam')}>
            <Text style={{ fontSize: 20, color: 'black' }}>
              5 Pillars of Islam
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.extras}
            onPress={() => this.props.navigation.navigate('Wudu')}>
            <Text style={{ fontSize: 20, color: 'black' }}>How To Do Wudu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.extras}
            onPress={() => this.props.navigation.navigate('Praying')}>
            <Text style={{ fontSize: 20, color: 'black' }}>How to Pray</Text>
          </TouchableOpacity>

            <TouchableOpacity
            style={styles.extras}
            onPress={()=>this.props.navigation.navigate('Names')}>
            <Text style={{ fontSize: 20, color: 'black' }}>99 Names of Allah</Text>
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
  extras: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'lightblue',
    margin: 10,
    width: 200,
    height: 40,
  },
  title: {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
});
