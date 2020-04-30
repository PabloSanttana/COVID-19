import {StyleSheet, Dimensions} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

import {colors} from '../../constants'
const {width,height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
    },
    coronadr:{
        ...StyleSheet.absoluteFill,
        marginTop: 50 + getStatusBarHeight(true),
        width:200,
        height: height/1.7,
        left:30
    },
    scroll:{
        backgroundColor:'transparent',
        flex:1
    },
    virus:{
        marginTop: 20 + getStatusBarHeight(true),
        height: 190,
        width: width
    },
    border:{
        width: width,
        height: 40,
    },
    scrollContainer:{
        backgroundColor:'#fff',
        flex:1
    },
    inputGroup:{
        marginTop:20,
        marginHorizontal:20,
        borderWidth:0.5,
        borderRadius: 100,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        height:40
    },
    saibaMais:{
        position:'relative',
        top: 50 + getStatusBarHeight(true),
        left: width -40,
        zIndex:5
    },
    title:{
        position:'absolute',
        top: 80 + getStatusBarHeight(true),
        width:170,
        left: width/2 -30,
        fontSize:25,
        color:'#fff'
    },
    title2:{
        marginLeft:20,
        marginTop:40,
        fontSize:17,
        fontWeight:'bold',
        color:colors.black
    },
    infoContainer:{
        marginHorizontal:20,
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    last:{
        color:colors.gray
    },
    detail:{
        color:colors.textBlue
    }
})