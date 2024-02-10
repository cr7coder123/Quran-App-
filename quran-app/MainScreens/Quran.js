import React, { Component } from 'react';
import {
  ScrollView,
  ImageBackground,
  Button
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';


export default class Quran extends Component {
 
  render() {
    return (
      <ScrollView>
       <ImageBackground
            style={{alignSelf: 'center',height: 700, width:500 }}
            source={require('../assets/Quran.png')}>
      
        <ScrollView style={{  alignItems: 'center'}}>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Fatiha"
              onPress={this._Fatiha}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Baqarah"
              onPress={this._Baqarah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ali Imran"
              onPress={this._Imran}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah An Nisa"
              onPress={this._Nisa}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Maidah"
              onPress={this._Maidah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al An'am"
              onPress={this._Anam}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al A'raf"
              onPress={this._Araf}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Anfal"
              onPress={this._Anfal}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah At Tawbah"
              onPress={this._Tawbah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Yunus"
              onPress={this._Yunus}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Hud"
              onPress={this._Hud}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Yusuf"
              onPress={this._Yusuf}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ar Ra'd"
              onPress={this._Rad}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ibrahim"
              onPress={this._Ibrahim}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Hijr"
              onPress={this._Hijr}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah An Nahl"
              onPress={this._Nahl}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Isra"
              onPress={this._Isra}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Kahf"
              onPress={this._Kahf}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Maryam"
              onPress={this._Maryam}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ta-Ha"
              onPress={this._Taha}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Anbiya"
              onPress={this._Anbiya}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Hajj"
              onPress={this._Hajj}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Mu'minun"
              onPress={this._Muminun}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah An Nur"
              onPress={this._Nur}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Furqan"
              onPress={this._Furqan}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ash Shu'ara"
              onPress={this._Shuara}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah An Naml"
              onPress={this._Naml}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Qasas"
              onPress={this._Qasas}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Ankabut"
              onPress={this._Ankabut}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ar Rum"
              onPress={this._Rum}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Luqman"
              onPress={this._Luqman}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah As Sajdah"
              onPress={this._Sajdah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Ahzaab"
              onPress={this._Ahzaab}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Saba"
              onPress={this._Saba}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Fatir"
              onPress={this._Fatir}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Yaseen"
              onPress={this._Yaseen}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah As Saffat"
              onPress={this._Saffat}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Sad"
              onPress={this._Sad}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Az Zumar"
              onPress={this._Zumar}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ghafir"
              onPress={this._Ghafir}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Fussilat"
              onPress={this._Fussilat}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ash Shura"
              onPress={this._Shura}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Az Zukhruf"
              onPress={this._Zukhruf}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ad Dukhan"
              onPress={this._Dukhan}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Jathiya"
              onPress={this._Jathiya}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Ahqaf"
              onPress={this._Ahqaf}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Muhammad"
              onPress={this._Muhammad}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Fath"
              onPress={this._Fath}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Hujurat"
              onPress={this._Hujurat}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Qaf"
              onPress={this._Qaf}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Adh Dhariyat"
              onPress={this._Dhariyat}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah At Tur"
              onPress={this._Tur}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah An Najm"
              onPress={this._Najm}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Qamar"
              onPress={this._Qamar}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ar Rahman"
              onPress={this._Rahman}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Waqi'ah"
              onPress={this._Waqiah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Al Hadid"
              onPress={this._Hadid}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Mujadila"
              onPress={this._Mujadila}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Hashr"
              onPress={this._Hashr}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Mumtahanah"
              onPress={this._Mumtahanah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah As Saff"
              onPress={this._Saff}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Jumu'ah"
              onPress={this._Jumuah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Munafiqun"
              onPress={this._Munafiqun}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah At Taghabun"
              onPress={this._Taghabun}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah At Talaq"
              onPress={this._Talaq}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah At Tahrim"
              onPress={this._Tahrim}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Mulk"
              onPress={this._Mulk}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Qalam"
              onPress={this._Qalam}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Haqqah"
              onPress={this._Haqqah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Ma'arij"
              onPress={this._Maarij}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Nooh"
              onPress={this._Nooh}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Jinn"
              onPress={this._Jinn}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Muzammil"
              onPress={this._Muzammil}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Mudassir"
              onPress={this._Mudassir}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Qiyamah"
              onPress={this._Qiyamah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Insan"
              onPress={this._Insan}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Mursalat"
              onPress={this._Mursalat}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah An Naba"
              onPress={this._Naba}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah An Nazi'at"
              onPress={this._Naziat}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Abasa"
              onPress={this._Abasa}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah At Takwir"
              onPress={this._Takwir}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Infitar"
              onPress={this._Infitar}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Mutaffifin"
              onPress={this._Mutaffifin}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Inshiqaq"
              onPress={this._Inshiqaq}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Buruj"
              onPress={this._Buruj}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah At Tariq"
              onPress={this._Tariq}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al A'la"
              onPress={this._Ala}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Ghashiya"
              onPress={this._Ghashiya}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Fajr"
              onPress={this._Fajr}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Balad"
              onPress={this._Balad}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ash Shams"
              onPress={this._Shams}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Lail"
              onPress={this._Lail}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ad Duha"
              onPress={this._Duha}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Ash Sharh"
              onPress={this._Sharh}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah At Tin"
              onPress={this._Tin}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Alaq"
              onPress={this._Alaq}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Qadr"
              onPress={this._Qadr}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Bayyinah"
              onPress={this._Bayyinah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Az Zalzalah"
              onPress={this._Zalzalah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Adiyat"
              onPress={this._Adiyat}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Qari'ah"
              onPress={this._Qariah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah At Takathur"
              onPress={this._Takathur}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Asr"
              onPress={this._Asr}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Humazah"
              onPress={this._Humazah}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Fil"
              onPress={this._Fil}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Quraish"
              onPress={this._Quraish}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Ma'un'"
              onPress={this._Maun}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Kauthar"
              onPress={this._Kauthar}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Kafirun"
              onPress={this._Kafirun}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah An Nasr"
              onPress={this._Nasr}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Masad"
              onPress={this._Masad}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Ikhlas"
              onPress={this._Ikhlas}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah Al Falaq"
              onPress={this._Falaq}
            />
          </ScrollView>

          <ScrollView style={{ backgroundColor:"rgba(255,255,255,0.5)", marginTop: 20 }}>
            <Button
              color="black"
              title="Surah An Nas"
              onPress={this._Nas}
            />
          </ScrollView>
        </ScrollView>
        </ImageBackground>
      </ScrollView>
    );
  }

  _Fatiha = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Fatiha-in-Arabic.pdf'
    );
  };

  _Baqarah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Baqarah-in-Arabic.pdf'
    );
  };

  _Imran = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Al-Imran-in-Arabic.pdf'
    );
  };

  _Nisa = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Nisa-in-Arabic.pdf'
    );
  };

  _Maidah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Maidah-in-Arabic.pdf'
    );
  };

  _Anam = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Anam-in-Arabic.pdf'
    );
  };

  _Araf = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Araf-in-Arabic.pdf'
    );
  };

  _Anfal = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Anfal-in-Arabic.pdf'
    );
  };

  _Tawbah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Taubah-in-Arabic.pdf'
    );
  };

  _Yunus = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Yunus-in-Arabic.pdf'
    );
  };

  _Hud = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Hud-in-Arabic.pdf'
    );
  };

  _Yusuf = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Yusuf-in-Arabic.pdf'
    );
  };

  _Rad = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Ar-Rad-in-Arabic.pdf'
    );
  };

  _Ibrahim = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Ibrahim-in-Arabic.pdf'
    );
  };

  _Hijr = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Hijr-in-Arabic.pdf'
    );
  };

  _Nahl = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Nahl-in-Arabic.pdf'
    );
  };

  _Isra = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Isra-in-Arabic.pdf'
    );
  };

  _Kahf = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Kahf-in-Arabic.pdf'
    );
  };

  _Maryam = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Maryam-in-Arabic.pdf'
    );
  };

  _Taha = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Taha-in-Arabic.pdf'
    );
  };

  _Anbiya = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Anbiya-in-Arabic.pdf'
    );
  };

  _Hajj = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Hajj-in-Arabic.pdf'
    );
  };

  _Muminun = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Muminun-in-Arabic.pdf'
    );
  };

  _Nur = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Noor-in-Arabic.pdf'
    );
  };

  _Furqan = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Furqan-in-Arabic.pdf'
    );
  };

  _Shuara = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Ash-Shuara-in-Arabic.pdf'
    );
  };

  _Naml = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Naml-in-Arabic.pdf'
    );
  };

  _Qasas = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Qasas-in-Arabic.pdf'
    );
  };

  _Ankabut = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Ankabut-in-Arabic.pdf'
    );
  };

  _Rum = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Rum-in-Arabic.pdf'
    );
  };

  _Luqman = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Luqman-in-Arabic.pdf'
    );
  };

  _Sajdah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Sajdah-in-Arabic.pdf'
    );
  };

  _Ahzaab = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Ahzab-in-Arabic.pdf'
    );
  };

  _Saba = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Saba-in-Arabic.pdf'
    );
  };

  _Fatir = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Fatir-in-Arabic.pdf'
    );
  };

  _Yaseen = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Yaseen-in-Arabic.pdf'
    );
  };

  _Saffat = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Saffat-in-Arabic.pdf'
    );
  };

  _Sad = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Sad-in-Arabic.pdf'
    );
  };

  _Zumar = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Zumar-in-Arabic.pdf'
    );
  };

  _Ghafir = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Ghafir-in-Arabic.pdf'
    );
  };

  _Fussilat = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Fussilat-in-Arabic.pdf'
    );
  };

  _Shura = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Shura-in-Arabic.pdf'
    );
  };

  _Zukhruf = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Zukhruf-in-Arabic.pdf'
    );
  };

  _Dukhan = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Dukhan-in-Arabic.pdf'
    );
  };

  _Jathiya = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Jathiya-in-Arabic.pdf'
    );
  };

  _Ahqaf = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Al-Ahqaf-in-Arabic.pdf'
    );
  };

  _Muhammad = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Muhammad-in-Arabic.pdf'
    );
  };

  _Fath = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Fath-in-Arabic.pdf'
    );
  };

  _Hujurat = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Hujurat-in-Arabic.pdf'
    );
  };

  _Qaf = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Qaf-in-Arabic.pdf'
    );
  };

  _Dhariyat = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Dhariyat-in-Arabic.pdf'
    );
  };

  _Tur = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Tur-in-Arabic.pdf'
    );
  };

  _Najm = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Najm-in-Arabic.pdf'
    );
  };

  _Qamar = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Qamar-in-Arabic.pdf'
    );
  };

  _Rahman = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Rahman-in-Arabic.pdf'
    );
  };

  _Waqiah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Waqiah-in-Arabic.pdf'
    );
  };

  _Hadid = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Hadid-in-Arabic.pdf'
    );
  };

  _Mujadila = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Mujadila-in-Arabic.pdf'
    );
  };

  _Hashr = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Hashr-in-Arabic.pdf'
    );
  };

  _Mumtahanah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Mumtahanah-in-Arabic.pdf'
    );
  };

  _Saff = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Saff-in-Arabic.pdf'
    );
  };

  _Jumuah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Jumuah-in-Arabic.pdf'
    );
  };

  _Munafiqun = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Munafiqun-in-Arabic.pdf'
    );
  };

  _Taghabun = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Taghabun-in-Arabic.pdf'
    );
  };

  _Talaq = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Talaq-in-Arabic.pdf'
    );
  };

  _Tahrim = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Tahrim-in-Arabic.pdf'
    );
  };

  _Mulk = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Mulk-in-Arabic.pdf'
    );
  };

  _Qalam = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Qalam-in-Arabic.pdf'
    );
  };

  _Haqqah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Haqqah-in-Arabic.pdf'
    );
  };

  _Maarij = () => {
    WebBrowser.openBrowserAsync(
      "https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-ma'arij-in-Arabic.pdf"
    );
  };

  _Nooh = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Nooh-in-Arabic.pdf'
    );
  };

  _Jinn = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Jinn-in-Arabic.pdf'
    );
  };

  _Muzammil = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Muzammil-in-Arabic.pdf'
    );
  };

  _Mudassir = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Mudassir-in-Arabic.pdf'
    );
  };

  _Qiyamah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Qiyamah-in-Arabic.pdf'
    );
  };

  _Insan = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Insan-in-Arabic.pdf'
    );
  };

  _Mursalat = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Mursalat-in-Arabic.pdf'
    );
  };

  _Naba = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Naba-in-Arabic.pdf'
    );
  };

  _Naziat = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Naziat-in-Arabic.pdf'
    );
  };

  _Abasa = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Abasa-in-Arabic.pdf'
    );
  };

  _Takwir = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Takwir-in-Arabic.pdf'
    );
  };

  _Infitar = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Infitar-in-Arabic.pdf'
    );
  };

  _Mutaffifin = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Mutaffifin-in-Arabic.pdf'
    );
  };

  _Inshiqaq = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/inco/Surah-Inshiqaq-in-Arabic.pdf'
    );
  };

  _Buruj = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Buruj-in-Arabic.pdf'
    );
  };

  _Tariq = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Tariq-in-Arabic.pdf'
    );
  };

  _Ala = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Ala-in-Arabic.pdf'
    );
  };

  _Ghashiya = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Ghashiya-in-Arabic.pdf'
    );
  };

  _Fajr = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Fajr-in-Arabic.pdf'
    );
  };

  _Balad = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Balad-in-Arabic.pdf'
    );
  };

  _Shams = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Shams-in-Arabic.pdf'
    );
  };

  _Lail = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Lail-in-Arabic.pdf'
    );
  };

  _Duha = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Duha-in-Arabic.pdf'
    );
  };

  _Sharh = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Shuara-in-Arabic.pdf'
    );
  };

  _Tin = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Tin-in-Arabic.pdf'
    );
  };

  _Alaq = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Alaq-in-Arabic.pdf'
    );
  };

  _Qadr = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Qadr-in-Arabic.pdf'
    );
  };

  _Bayyinah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Bayyinah-in-Arabic.pdf'
    );
  };

  _Zalzalah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Zalzalah-in-Arabic.pdf'
    );
  };

  _Adiyat = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Adiyat-in-Arabic.pdf'
    );
  };

  _Qariah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Qariah-in-Arabic.pdf'
    );
  };

  _Takathur = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Takathur-in-Arabic.pdf'
    );
  };

  _Asr = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Asr-in-Arabic.pdf'
    );
  };

  _Humazah = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Humazah-in-Arabic.pdf'
    );
  };

  _Fil = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Fil-in-Arabic.pdf'
    );
  };

  _Quraish = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Quraish-in-Arabic.pdf'
    );
  };

  _Maun = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Maun-in-Arabic.pdf'
    );
  };

  _Kauthar = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Kauthar-in-Arabic.pdf'
    );
  };

  _Kafirun = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Kafirun-in-Arabic.pdf'
    );
  };

  _Nasr = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Nasr-in-Arabic.pdf'
    );
  };

  _Masad = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Masad-in-Arabic.pdf'
    );
  };

  _Ikhlas = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Ikhlas-in-Arabic.pdf'
    );
  };

  _Falaq = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Falaq-in-Arabic.pdf'
    );
  };

  _Nas = () => {
    WebBrowser.openBrowserAsync(
      'https://cdn69.urdupoint.com/islam/quran-pdf/arabic/Surah-Nas-in-Arabic.pdf'
    );
  };
}
