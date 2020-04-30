import React from 'react'
import {View, Text} from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import {colors} from '../../constants'

export default function Glabal({datas}) {
   
        const arrayData = [datas.confirmed,datas.deaths,datas.recovered]
        const randomColor =[colors.darkOrange,colors.darkRed,colors.darkGreen]
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const total = arrayData.reduce(reducer)
        const pieData = arrayData
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor[index],
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
           
        return (
                <View>

                     <PieChart style={{ height: 300,marginBottom:10}} data={pieData}/>
                    <View style={{width:'100%', height:80, marginBottom:20, flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20}}>
                        <Text style={{color:colors.darkOrange,fontWeight:'bold',fontSize:15}}>Infected: {((arrayData[0]/total)*100).toFixed(2)}%</Text>
                        <Text style={{color:colors.darkRed,fontWeight:'bold',fontSize:15}}>Deaths: {((arrayData[1]/total)*100).toFixed(2)}%</Text>
                        <Text style={{color:colors.darkGreen,fontWeight:'bold',fontSize:15}}>Recovered: {((arrayData[2]/total)*100).toFixed(2)}%</Text>
                
                    </View>
                </View>
                )
}
