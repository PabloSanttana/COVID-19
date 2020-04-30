import React,{ useState, useEffect} from 'react'
import {Text,TouchableOpacity, View, Image, ScrollView, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import {colors, countries} from '../../constants'
import SelectInput from '../../components/SelectInput'
import DataVirus from '../../components/DataVirus'
import api from '../../services/api'
import apiGlobal from '../../services/apiGlobal'
import Global from '../../components/Global'

export default function Home(){
    const navigation = useNavigation()
    const [value, setValue] = useState('Brazil')
    const [global, setGlobal] = useState('Brazil')
    const [loading,setLoading] = useState(false)
    const [datacountrie, setDataCountrie] = useState({
        'confirmed':'',
        'deaths':'',
        'recovered':'',
        'date':''
    })
    const [datas, setDatas] = useState({})

    useEffect(()=>{
        async function loadDataCoraranvirus(){
            const {data} = await api.get()
            setDatas(data)

            const getGlobal = await apiGlobal.get()
            setGlobal( getGlobal.data )

            const {confirmed,deaths,recovered, date} = data[value][data[value].length-1]

          /// console.log(confirmed,deaths,recovered)
        
        setDataCountrie({
        'confirmed':confirmed ,
        'deaths':deaths,
        'recovered':recovered,
        'date': date
        })
        setLoading(true)
        }  
     loadDataCoraranvirus()
    },[])

    function handleSelectcountrie(name){
        setValue(name)
       try {
        const {confirmed,deaths,recovered, date} = datas[name][datas[name].length-1]
        setDataCountrie({
        'confirmed':confirmed ,
        'deaths':deaths,
        'recovered':recovered,
        'date':date
        })
       } catch (error) {
          Alert.alert('Não encontrado')
       }
    }

    return (
       <LinearGradient 
            colors={[colors.primary,colors.secundary]} 
            start={{x:0,y:0.5}} 
            end={{x:1,y:0.5}} 
            style={styles.container}  >
                
           <TouchableOpacity onPress={()=> navigation.navigate('Detail')} style={styles.saibaMais}>
                <Icon name="info-with-circle" size={25} color='#fff'/>
            </TouchableOpacity>
           
           <Text style={styles.title}>All you need is stay at home.</Text>
           <Image resizeMode='contain'  source={require('../../assets/icons/Drcorona.png')} style={styles.coronadr}/>
           <ScrollView style={styles.scroll}>

              
               <Image source={require('../../assets/images/virus.png')} style={styles.virus}/>
               <Image source={require('../../assets/icons/border.png')} style={styles.border}  />
               <View style={styles.scrollContainer}>
                
                    <View style={styles.inputGroup} >
                        <Icon name='location-pin' size={25} color={colors.textBlue}/>
                        <SelectInput items={countries} value={value} select={handleSelectcountrie}  />
                    </View>

                 <Text style={styles.title2}>Case update</Text>

                 <View style={styles.infoContainer}>
                     <Text style={styles.last}>Latest update {datacountrie.date}</Text>
                     <Text style={styles.detail}>See details</Text>
                 </View>
               
                   <View style={{margin:20}}>
                        <DataVirus data={datacountrie} />
                   </View>


                 <Text style={{...styles.title2,marginTop:0}}>Cases global</Text>

                 <View style={styles.infoContainer}>
                     <Text style={styles.last}>Latest update {global.date}</Text>
                     <Text style={styles.detail}>See details</Text>
                 </View>

                 <View style={{margin:20}}>
                      { loading &&   <DataVirus data={global.result} /> } 
                   </View>

                    {
                        loading && <Global datas={global.result} />
                    }
                  

               </View>
              
           </ScrollView>
       </LinearGradient>
    )
}
