import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View
} from 'react-native';

import AppHeader from '../components/AppHeader';
import {Audio} from 'expo-av';
import db from "../Config"

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      name:this.props.route.params.username
    }
  }
    playSound =() => { 
    Audio.setIsEnabledAsync(true);
    Audio.Sound.createAsync(
        require("../assets/Bismillah.mp3"),
      {
        shouldPlay: true,
        
      }
    );
  };
  componentDidMount(){
    var urname={}
   db.ref('users/').on("value", data=>{
urname=data.val()
    })
  }

  render() {
    return (
      <ScrollView>
        <AppHeader/>

         <ImageBackground
            style={{alignSelf: 'center',height: 800, width:500 }}
            source={require('../assets/Masjid.png')}>

 <TouchableOpacity onPress={this.playSound()}></TouchableOpacity>

        <Text style={{textAlign:"center", fontSize:17}}>*you can swipe from left to right to go back*</Text>
        <View style={styles.buttonsContainer}>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('Quran')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Quran</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('Kalmahs')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Kalmahs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('Duas')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Duas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('Ayatul Kursi')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Ayatul Kursi</Text>
          </TouchableOpacity>

          <TouchableOpacity
           style={styles.buttons}
          onPress={() => this.props.navigation.navigate('Masjid')}>
          <Text style={{ fontSize: 20, color: 'white' }}>Famous Masjids</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
          style={styles.buttons}
          onPress={()=>this.props.navigation.navigate('Tracker', {username:this.state.name})}>
          <Text style={{ fontSize: 20, color: 'white' }}>Prayer Tracker</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
          style={styles.buttons}
          onPress={()=>this.props.navigation.navigate('Timings')}>
          <Text style={{ fontSize: 20, color: 'white' }}>Prayer Timings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('Extra')}>
            <Text style={{ fontSize: 20, color: 'white' }}>Extra</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 0
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderRadius: 10,
    backgroundColor: 'blue',
    margin: 20,
    width: 200,
    height: 50,
  },
  
});
