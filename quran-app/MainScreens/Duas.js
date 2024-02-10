import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';

export default class Duas extends Component {

  render() {
    return (
      <ScrollView>
       <ImageBackground
            style={{alignSelf: 'center',height: 700, width:500 }}
            source={require('../assets/Dua.png')}>
      


        <Text style={styles.title}>Duas</Text>
        <ScrollView style={styles.container}>
          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('When Angry')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              When Angry
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('Before Anything')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              Before Doing Anything
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('Leaving Home')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              Before Leaving Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('Before Eating')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              Before Eating
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('After Eating')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              After Eating
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('Before Sleeping')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              Before Sleeping
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('After Waking Up')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              After Waking Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('Entering Masjid')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              When Entering Masjid
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('Leaving Masjid')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              When Leaving Masjid
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('Travelling')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              When Travelling
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() =>
              this.props.navigation.navigate('Increase Knowledge')
            }>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              For Increasing Knowledge
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('Entering Washroom')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              Entering Washroom
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('Leaving Washroom')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              Leaving Washroom
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Duas}
            onPress={() => this.props.navigation.navigate('After Sneezing')}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
              After Sneezing
            </Text>
          </TouchableOpacity>

        
        </ScrollView>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
  },
  Duas: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'purple',
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
