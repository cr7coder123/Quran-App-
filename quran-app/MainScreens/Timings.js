import * as React from 'react';
import { Text, View,ImageBackground, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class Timings extends React.Component {
  constructor() {
    super();
    this.state = {
      tim: '',
    };
  }

  getTimings = async () => {
    var url =
      'https://api.aladhan.com/v1/calendarByAddress/2024/02?address=Oakville&method=2&month=12&year=2023';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          tim: responseJson,
        })
      );
  };

  componentDidMount = () => {
    this.getTimings();
   
  };

  render() {
     var day=new Date().getDate()
    var month=new Date().getMonth()+1
    var year=new Date().getFullYear()
    var dat=day+"-"+month+"-"+year
    //console.log(this.state.tim.data)
    for (var i in this.state.tim.data){
        console.log(this.state.tim.data[day-1].timings.Fajr)
        var faj=this.state.tim.data[day-1].timings.Fajr
        var dhu=this.state.tim.data[day-1].timings.Dhuhr
        var asr=this.state.tim.data[day-1].timings.Asr
        var mag=this.state.tim.data[day-1].timings.Maghrib
        var ish=this.state.tim.data[day-1].timings.Isha
    }
    if (this.state.tim === '') {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    
    return (
    
        <View style={styles.subbox}>
         <ImageBackground style={{alignItems:"center", alignSelf: 'center',height: 700, width:400 }} source={require('../assets/Back.png')}>
          <Text style={styles.title}>Prayer Timings</Text>
          <View style={{backgroundColor:"rgba(255,255,255,0.6)", padding:15}}>
              <Text style={{ fontSize: 25 }}>
              Fajr: {faj}
            </Text>
             <Text style={{ fontSize: 25 }}>
              Dhuhr: {dhu}
            </Text>
             <Text style={{ fontSize: 25 }}>
              Asr: {asr}
            </Text>
             <Text style={{ fontSize: 25 }}>
              Maghrib: {mag}
            </Text>
             <Text style={{ fontSize: 25 }}>
              Isha: {ish}
            </Text>
          </View>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  subbox: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    fontSize: 30,
  },
});
