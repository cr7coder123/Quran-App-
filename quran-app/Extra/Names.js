import React, { Component } from 'react';
import { Text, Button, ScrollView, ImageBackground, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

export default class Names extends Component {
   playSound =() => { 
    Audio.setIsEnabledAsync(true);
    Audio.Sound.createAsync(
        require("../assets/Names.mp3"),
      {
        shouldPlay: true,
        
      }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>The 99 Names of Allah</Text>

        
         <ImageBackground
            style={{alignItems:"center", alignSelf: 'center',height: 700, width:400 }}
            source={require('../assets/Back.png')}>


 <TouchableOpacity style={styles.play} onPress={this.playSound}>
 <Text style={{ fontSize:20, color:"white"}}>Play</Text>
 </TouchableOpacity>

<TouchableOpacity style={styles.play} onPress={()=>Audio.setIsEnabledAsync(false)}>
 <Text style={{ fontSize:20, color:"white"}}>Stop</Text>
 </TouchableOpacity>


            <ScrollView>
            <TouchableOpacity><Text style={styles.names}>1. (AR-RAHMAAN) الرَّحْمَنُ The Beneficent</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>2. (AR-RAHEEM) الرَّحِيمُ The Merciful</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>3. (AL-MALIK) الْمَلِكُ The Eternal Lord</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>4. (AL-QUDDUS) الْقُدُّوسُ The Most Sacred</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>5. (AS-SALAM) السَّلاَمُ The Embodiment of Peace</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>6. (AL-MU’MIN) الْمُؤْمِنُ The Infuser of Faith</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>7. (AL-MUHAYMIN) الْمُهَيْمِنُ The Preserver of Safety</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>8. (AL-AZIZ) الْعَزِيزُ All Mighty</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>9. (AL-JABBAR) الْجَبَّارُ The Compeller, The Restorer</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>10. (AL-MUTAKABBIR) الْمُتَكَبِّر The Supreme, The Majestic</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>11. (AL-KHAALIQ) الْخَالِقُ The Creator, The Maker</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>12. (AL-BAARI) الْبَارِئُ The Evolver</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>13. (AL-MUSAWWIR) الْمُصَوِّرُ The Fashioner</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>14. (AL-GHAFFAR) الْغَفَّارُ The Great Forgiver</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>15. (AL-QAHHAR) الْقَهَّارُ The All-Prevailing One</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>16. (AL-WAHHAAB) الْوَهَّابُ The Supreme Bestower</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>17. (AR-RAZZAAQ) الرَّزَّاقُ The Provider</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>18. (AL-FATTAAH) الْفَتَّاحُ The Supreme Solver</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>19. (AL-‘ALEEM) اَلْعَلِيْمُ The All-Knowing</Text></TouchableOpacity>
            
             <TouchableOpacity><Text style={styles.names}>20. (AL-QAABID) الْقَابِضُ The Withholder</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>21. (AL-BAASIT) الْبَاسِطُ The Extender</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>22. (AL-KHAAFIDH) الْخَافِضُ The Reducer</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>23. (AR-RAAFI’) الرَّافِعُ The Exalter, The Elevator</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>24. (AL-MU’IZZ) الْمُعِزُّ The Honourer, The Bestower</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>25. (AL-MUZIL) ٱلْمُذِلُّ The Dishonourer, The Humiliator</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>26. (AS-SAMEE’) السَّمِيعُ The All-Hearing</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>27. (AL-BASEER) الْبَصِيرُ The All-Seeing</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>28. (AL-HAKAM) الْحَكَمُ The Impartial Judge</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>29. (AL-‘ADL) الْعَدْلُ The Utterly Just</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>30. (AL-LATEEF) اللَّطِيفُ The Subtle One, The Most Gentle</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>31. (AL-KHABEER) الْخَبِيرُ The All-Aware</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>32. (AL-HALEEM) الْحَلِيمُ The Most Forbearing</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>33. (AL-‘AZEEM) الْعَظِيمُ The Magnificent, The Supreme</Text></TouchableOpacity>

<TouchableOpacity><Text style={styles.names}>34. (AL-GHAFOOR) الْغَفُور The Great Forgiver</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>35. (ASH-SHAKOOR) الشَّكُورُ The Most Appreciative</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>36. (AL-‘ALEE) الْعَلِيُّ The Most High, The Exalted</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>37. (AL-KABEER) الْكَبِيرُ The Preserver, The All-Heedful and All-Protecting</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>38. (AL-HAFEEDH) الْحَفِيظُ The Preserver</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>39. (AL-MUQEET) المُقيِت The Sustainer</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>40. (AL-HASEEB) الْحسِيبُ The Reckoner</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>41. (AL-JALEEL) الْجَلِيلُ The Majestic</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>42. (AL-KAREEM) الْكَرِيمُ The Most Generous, The Most Esteemed</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>43. (AR-RAQEEB) الرَّقِيبُ The Watchful</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>44. (AL-MUJEEB) ٱلْمُجِيبُ The Responsive One</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>45. (AL-WAASI’) الْوَاسِعُ The All-Encompassing, the Boundless</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>46. (AL-HAKEEM) الْحَكِيمُ The All-Wise</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>47. (AL-WADUD) الْوَدُودُ The Most Loving</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>48. (AL-MAJEED) الْمَجِيدُ The Glorious, The Most Honorable</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>49. (AL-BA’ITH) الْبَاعِثُ The Infuser of New Life</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>50. (ASH-SHAHEED) الشَّهِيدُ The All Observing Witnessing</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>51. (AL-HAQQ) الْحَقُ The Absolute Truth</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>52. (AL-WAKEEL) الْوَكِيلُ The Trustee, The Disposer of Affairs</Text></TouchableOpacity>
            
             <TouchableOpacity><Text style={styles.names}>53. (AL-QAWIYY) الْقَوِيُ The All-Strong</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>54. (AL-MATEEN) الْمَتِينُ The Firm, The Steadfast</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>55. (AL-WALIYY) الْوَلِيُّ The Protecting Associatey</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>56. (AL-HAMEED) الْحَمِيدُ The Praiseworthy</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>57. (AL-MUHSEE) الْمُحْصِي The All-Enumerating, The Counter</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>58. (AL-MUBDI) الْمُبْدِئُ The Originator, The Initiator</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>59. (AL-MUEED) ٱلْمُعِيدُ The Restorer, The Reinstate</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>60. (AL-MUHYI) الْمُحْيِي The Giver of Life</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>61. (AL-MUMEET) اَلْمُمِيتُ The Inflicter of Death</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>62. (AL-HAYY) الْحَيُّ The Ever-Living</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>63. (AL-QAYYOOM) الْقَيُّومُ The Sustainer, The Self-Subsisting</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>64. (AL-WAAJID) الْوَاجِدُ The Perceiver</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>65. (AL-MAAJID) الْمَاجِدُ The Illustrious, the Magnificent</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>66. (AL-WAAHID) الْواحِدُ The One</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>67. (AL-AHAD) اَلاَحَدُ The Unique, The Only One</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>68. (AS-SAMAD) الصَّمَدُ The Eternal, Satisfier of Needs</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>69. (AL-QADEER) الْقَادِرُ The Omnipotent One</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>70. (AL-MUQTADIR) الْمُقْتَدِرُ The Powerful</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>71. (AL-MUQADDIM) الْمُقَدِّمُ The Expediter, The Promoter</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>72. (AL-MU’AKHKHIR) الْمُؤَخِّرُ The Delayer</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>73. (AL-AWWAL) الأوَّلُ The First</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>74. (AL-AAKHIR) الآخِرُ The Last</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>75. (AZ-ZAAHIR) الظَّاهِرُ The Manifest</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>76. (AL-BAATIN) الْبَاطِنُ The Hidden One, Knower of the Hidden</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>77. (AL-WAALI) الْوَالِي The Governor, The Patron</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>78. (AL-MUTA’ALI) الْمُتَعَالِي The Self Exalted</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>79. (AL-BARR) الْبَرُّ The Source of All Goodness</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>80. (AT-TAWWAB) التَّوَابُ The Ever-Pardoning, The Relenting</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>81. (AL-MUNTAQIM) الْمُنْتَقِمُ The Avenger</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>82. (AL-‘AFUWW) العَفُوُ The Pardoner</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>83. (AR-RA’OOF) الرَّؤُوفُ The Most Kind</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>84. (MAALIK-UL-MULK) 	َمَالِكُ ٱلْمُلْكُ Master of the Kingdom, Owner of the Dominion</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>85. (DHUL-JALAALI WAL-IKRAAM) 	ذُوالْجَلاَلِ وَالإكْرَامِ Possessor of Glory and Honour, Lord of Majesty and Generosity, The Disposer of Affairs</Text></TouchableOpacity>
            
             <TouchableOpacity><Text style={styles.names}>86. (AL-MUQSIT) الْمُقْسِطُ The Just One</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>87. (AL-JAAMI’) الْجَامِعُ The Gatherer, the Uniter</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>88. (AL-GHANIYY) ٱلْغَنيُّ The Self-Sufficient, The Wealthy</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>89. (AL-MUGHNI) ٱلْمُغْنِيُّ The Enricher</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>90. (AL-MANI’) اَلْمَانِعُ The Withholder</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>91. (AD-DHARR) الضَّارَ The Distresser</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>92. (AN-NAFI’) النَّافِعُ The Propitious, the Benefactor</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>93. (AN-NUR) النُّورُ The Light, The Illuminator</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>94. (AL-HAADI) الْهَادِي The Guide</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>95. (AL-BADEE’) الْبَدِيعُ The Incomparable Originator</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>96. (AL-BAAQI) اَلْبَاقِي The Everlasting</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>97. (AL-WAARITH) الْوَارِثُ The Inheritor, The Heir</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>98. (AR-RASHEED) الرَّشِيدُ The Guide, Infallible Teacher</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.names}>99. (AS-SABOOR) الصَّبُورُ The Forbearing, The Patient</Text></TouchableOpacity>



            <TouchableOpacity><Text style={{marginTop:50,backgroundColor: 'cadetblue',color: 'white',textAlign: 'center', fontSize: 15, padding: 10, width:300}}></Text></TouchableOpacity>
</ScrollView>
</ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
  },
  title: {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    padding: 20,
  },
  names:{
    marginTop:5,
   backgroundColor: 'cadetblue',
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    padding: 10,
    width:300
    },
    play:{
    marginTop:10,
  alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor:"green",
    margin: 10,
    width: 60,
    height: 60,
    },
});