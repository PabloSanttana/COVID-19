import React from 'react'
import {Text,TouchableOpacity, View, Image, ScrollView, Alert } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Entypo'

import styles from './styles'
import {colors} from '../../constants'
export default function Detail(){
    const navigation = useNavigation()
    return (
     <LinearGradient 
        colors={[colors.primary,colors.secundary]} 
        start={{x:0,y:0.5}} 
        end={{x:1,y:0.5}} 
        style={styles.container}  >

            <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.saibaMais}>
                <Icon name="back" size={25} color='#fff'/>
            </TouchableOpacity>
            
       
       <Text style={styles.title}>Get to Know About Covid-19.</Text>
            <Image  source={require('../../assets/icons/coronadr.png')} style={styles.coronadr}/>
       <ScrollView style={styles.scroll}>

      
          
           <Image source={require('../../assets/images/virus.png')} style={styles.virus}/>
           <Image source={require('../../assets/icons/border.png')} style={styles.border}/>

           <View style={styles.scrollContainer}>
            
            <Text style={styles.text}>Symptomps</Text>

            <View style={styles.sympt}>
                <View style={styles.card}>
                    <Image style={styles.cardImg} source={require('../../assets/images/headache.png')}/>
                    <Text>Headache</Text>
                </View>
                <View style={styles.card}>
                    <Image style={styles.cardImg} source={require('../../assets/images/caugh.png')}/>
                    <Text>Caugh</Text>
                </View>
                <View style={styles.card}>
                    <Image style={styles.cardImg} source={require('../../assets/images/fever.png')}/>
                    <Text >Fever</Text>
                </View>
            </View>
          
            <Text style={styles.text}>Prevention</Text>
                <View style={styles.card2}>
                    <Image style={styles.card2Img} source={require('../../assets/images/wear_mask.png')} />
                    <View style={styles.card2_card}>
                        <Text style={styles.card2Title}>Wear face mask</Text>
                        <Text style={styles.card2Descrip}>Since the start of the coronavirus outbreak some places have fully embraced wearing face masks, and anyone caught without one risks becoming a social pariah.</Text>
                    </View>
                </View>
                <View style={styles.card2}>
                    <Image style={styles.card2Img} source={require('../../assets/images/wash_hands.png')} />
                    <View style={styles.card2_card}>
                        <Text style={styles.card2Title}>Wash you hands</Text>
                        <Text style={styles.card2Descrip}>These
diseases include gastrointestinal infections, such as Salmonella, and respiratory infections, such as influenza.
</Text>
                    </View>
                </View>
           </View>
          
       </ScrollView>
   </LinearGradient>
)
    
}

