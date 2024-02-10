import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

//MainScreen
import HomeScreen from './MainScreens/HomeScreen';
import Kalmahs from './MainScreens/Kalmahs';
import Quran from './MainScreens/Quran';
import Duas from './MainScreens/Duas';
import Ayatul_Kursi from './MainScreens/AyatulKursi';
import Masjid from './MainScreens/Masjid';
import Extra from './MainScreens/Extra';
import Login from './MainScreens/Login';

//Kalmahs
import Kalmah1 from './Kalmahs/Kalmah1';
import Kalmah2 from './Kalmahs/Kalmah2';
import Kalmah3 from './Kalmahs/Kalmah3';
import Kalmah4 from './Kalmahs/Kalmah4';
import Kalmah5 from './Kalmahs/Kalmah5';
import Kalmah6 from './Kalmahs/Kalmah6';

//Duas
import After_Eating from './Duas/After_Eating';
import After_Sneezing from './Duas/After_Sneezing';
import After_Waking_Up from './Duas/After_Waking_Up';
import Before_Anything from './Duas/Before_Anything';
import Before_Eating from './Duas/Before_Eating';
import Before_Sleeping from './Duas/Before_Sleeping';
import Entering_Masjid from './Duas/Entering_Masjid';
import Entering_Washroom from './Duas/Entering_Washroom';
import Hearing_Sneeze from './Duas/Hearing_sneeze';
import Increase_Knowledge from './Duas/Increase_Knowledge';
import Leaving_Home from './Duas/Leaving_Home';
import Leaving_Masjid from './Duas/Leaving_Masjid';
import Leaving_Washroom from './Duas/Leaving_Washroom';
import Travelling from './Duas/Travelling';
import When_Angry from './Duas/When_Angry';

//Masjids
import Aqsa from './Masjids/Aqsa'
import Al_Haram from './Masjids/Haram';
import Nabawi from './Masjids/Nabawi';
import Zayed from './Masjids/Zayed';
import Badshahi from './Masjids/Badshahi'
import Blue from './Masjids/Blue'
import Jamia from './Masjids/Jamia'
import Sultan from './Masjids/Sultan'

 //Tracker/Timings
 import Tracker from "./MainScreens/Track";
 import Timings from "./MainScreens/Timings";

//Extra
import Tasbih from './Extra/Tasbih';
import Pillars_Islam from './Extra/Pillars_Islam';
import Wudu from './Extra/Wudu';
import Pray from './Extra/Pray';
import Names from './Extra/Names';

 

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Quran App" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Kalmahs" component={Kalmahs}></Stack.Screen>
        <Stack.Screen name="Quran" component={Quran}></Stack.Screen>
        <Stack.Screen name="Duas" component={Duas}></Stack.Screen>
        <Stack.Screen name="Ayatul Kursi" component={Ayatul_Kursi}></Stack.Screen>
        <Stack.Screen name="Masjid" component={Masjid}></Stack.Screen>
        <Stack.Screen name="Extra" component={Extra}></Stack.Screen>
        <Stack.Screen name="First Kalmah" component={Kalmah1}></Stack.Screen>
        <Stack.Screen name="Second Kalmah" component={Kalmah2}></Stack.Screen>
        <Stack.Screen name="Third Kalmah" component={Kalmah3}></Stack.Screen>
        <Stack.Screen name="Fourth Kalmah" component={Kalmah4}></Stack.Screen>
        <Stack.Screen name="Fifth Kalmah" component={Kalmah5}></Stack.Screen>
        <Stack.Screen name="Sixth Kalmah" component={Kalmah6}></Stack.Screen>

        <Stack.Screen name="Aqsa" component={Aqsa}></Stack.Screen>
        <Stack.Screen name="Al Haram" component={Al_Haram}></Stack.Screen>
        <Stack.Screen name="Nabawi" component={Nabawi}></Stack.Screen>
        <Stack.Screen name="Zayed" component={Zayed}></Stack.Screen>
        <Stack.Screen name="Badshahi" component={Badshahi}></Stack.Screen>
        <Stack.Screen name="Blue" component={Blue}></Stack.Screen>
        <Stack.Screen name="Jamia" component={Jamia}></Stack.Screen>
        <Stack.Screen name="Sultan" component={Sultan}></Stack.Screen>

        <Stack.Screen name="Tracker" component={Tracker}></Stack.Screen>
        <Stack.Screen name="Timings" component={Timings}></Stack.Screen>

        <Stack.Screen name="Tasbih" component={Tasbih}></Stack.Screen>
        <Stack.Screen name="Names" component={Names}></Stack.Screen>
        <Stack.Screen name="Pillars of Islam" component={Pillars_Islam}></Stack.Screen>
        <Stack.Screen name="Wudu" component={Wudu}></Stack.Screen>
        <Stack.Screen name="Praying" component={Pray}></Stack.Screen>


        <Stack.Screen name="After Eating" component={After_Eating}></Stack.Screen> 
        <Stack.Screen name="After Sneezing" component={After_Sneezing}></Stack.Screen>
        <Stack.Screen name="After Waking Up" component={After_Waking_Up}></Stack.Screen>
        <Stack.Screen name="Before Anything" component={Before_Anything}></Stack.Screen>
        <Stack.Screen name="Before Eating" component={Before_Eating}></Stack.Screen>
        <Stack.Screen name="Before Sleeping" component={Before_Sleeping}></Stack.Screen>
        <Stack.Screen name="Entering Masjid" component={Entering_Masjid}></Stack.Screen>
        <Stack.Screen name="Entering Washroom" component={Entering_Washroom}></Stack.Screen>
        <Stack.Screen name="Hearing Sneeze" component={Hearing_Sneeze}></Stack.Screen>
        <Stack.Screen name="Increase Knowledge" component={Increase_Knowledge}></Stack.Screen>
        <Stack.Screen name="Leaving Home" component={Leaving_Home}></Stack.Screen>
        <Stack.Screen name="Leaving Masjid" component={Leaving_Masjid}></Stack.Screen>
        <Stack.Screen name="Leaving Washroom" component={Leaving_Washroom}></Stack.Screen>
        <Stack.Screen name="Travelling" component={Travelling}></Stack.Screen>
        <Stack.Screen name="When Angry" component={When_Angry}></Stack.Screen>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


