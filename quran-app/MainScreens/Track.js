import React, { Component } from 'react';
import {
  Button,
  ScrollView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import db from '../Config';
import { CheckBox } from '@rneui/themed';

export default class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fajr: false,
      dhuhr: false,
      asr: false,
      maghrib: false,
      isha: false,
      uname: this.props.route.params.username,
    };
  }
  updateDb = () => {
    db.ref('users/' + this.state.uname + '/').update({
      fajr: this.state.fajr,
      dhuhr: this.state.dhuhr,
      asr: this.state.asr,
      maghrib: this.state.maghrib,
      isha: this.state.isha,
    });
  };

  resetDb = () => {
    console.log('bye');
    db.ref('users/' + this.state.uname + '/').set({
      fajr: false,
      dhuhr: false,
      asr: false,
      maghrib: false,
      isha: false,
    });
  };
  componentDidMount() {
    db.ref('users/' + this.state.uname + '/').on('value', (data) => {
      var prayerDet = data.val();
      console.log(prayerDet)
      this.setState({
        fajr: prayerDet.fajr,
        dhuhr: prayerDet.dhuhr,
        asr: prayerDet.asr,
        maghrib: prayerDet.maghrib,
        isha: prayerDet.isha,
      });
    });
  }
  render() {
    return (
      <ScrollView style={{ alignItems: 'center' }}>
      <ImageBackground style={{alignItems:"center", alignSelf: 'center',height: 700, width:400 }} source={require("../assets/Back.png")}>
      <View style={{alignItems:'center'}}>
          <TouchableOpacity
            onPress={() => this.setState({ fajr: true })}
            style={{
             alignItems:'center',
              marginBottom: 20,
              flexDirection: 'row',
              flex: 1,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: 'cadetblue',
                width:100,
                height:30,
              }}>
              Fajr
            </Text>
            <CheckBox
              style={{ width: 10, height: 10, marginLeft: 20, marginTop: 5 }}
              checked={this.state.fajr}
            />
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => this.setState({ dhuhr: true })}
            style={{
             alignItems:'center',
              marginBottom: 20,
              flexDirection: 'row',
              flex: 1,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: 'cadetblue',
                width:100,
                height:30
              }}>
              Dhuhr
            </Text>
            <CheckBox
              style={{ width: 10, height: 10, marginLeft: 20, marginTop: 5 }}
              checked={this.state.dhuhr}
            />
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => this.setState({ asr: true })}
            style={{
             alignItems:'center',
              marginBottom: 20,
              flexDirection: 'row',
              flex: 1,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: 'cadetblue',
                width:100,
                height:30
              }}>
              Asr
            </Text>
            <CheckBox
              style={{ width: 10, height: 10, marginLeft: 20, marginTop: 5 }}
              checked={this.state.asr}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({ maghrib: true })}
            style={{
             alignItems:'center',
              marginBottom: 20,
              flexDirection: 'row',
              flex: 1,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: 'cadetblue',
               width:100,
                height:30
              }}>
              Maghrib
            </Text>
            <CheckBox
              style={{ width: 10, height: 10, marginLeft: 20, marginTop: 5 }}
              checked={this.state.maghrib}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({ isha: true })}
            style={{
             alignItems:'center',
              marginBottom: 20,
              flexDirection: 'row',
              flex: 1,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: 'cadetblue',
                width:100,
                height:30
              }}>
              Isha
            </Text>
            <CheckBox
              style={{ width: 10, height: 10, marginLeft: 20, marginTop: 5 }}
              checked={this.state.isha}
            />
          </TouchableOpacity>
          </View>


        <Button title="Sumbit" onPress={this.updateDb}>
        </Button>

        <Button title="Reset" onPress={this.resetDb}>
        </Button>
        </ImageBackground>
      </ScrollView>
    );
  }
}
