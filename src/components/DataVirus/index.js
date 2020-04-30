import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

import {colors} from '../../constants'
import  styles from './styles'

const DataVirus = ({data}) => {
    return (
        <View style={styles.container}>

            <View style={styles.info}>
                <View style={{...styles.circule, backgroundColor:colors.lightOrange}}>
                    <Icon name='genderless' size={35} color={colors.darkOrange} />
                </View>
                <Text style={{...styles.text,color:colors.darkOrange}}>{data.confirmed}</Text>
                <Text>Infected</Text>
            </View>

            <View style={styles.info}>
                <View style={{...styles.circule, backgroundColor:colors.lightRed}}>
                    <Icon name='genderless' size={35} color={colors.darkRed} />
                </View>
                <Text style={{...styles.text,color:colors.darkRed}}>{data.deaths}</Text>
                <Text>Deaths</Text>
            </View>

            <View style={styles.info}>
                <View style={{...styles.circule, backgroundColor:colors.lightGreen}}>
                    <Icon name='genderless' size={35} color={colors.darkGreen} />
                </View>
                <Text style={{...styles.text,color:colors.darkGreen}}>{data.recovered}</Text>
                <Text>Recovered</Text>
            </View>
           
        </View>
    )
}

export default DataVirus
