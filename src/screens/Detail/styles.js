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
        width:230,
        height: height/1.2,
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
    saibaMais:{
        position:'relative',
        top: 50 + getStatusBarHeight(true),
        left: width -40,
        zIndex:5
    },
    scrollContainer:{
        backgroundColor:'#fff',
        flex:1,
        paddingHorizontal:20
    },
    title:{
        position:'absolute',
        top: 80 + getStatusBarHeight(true),
        width:190,
        left: width/2 ,
        fontSize:25,
        color:'#fff'
    },
    text:{
       marginVertical:30,
        fontSize:17,
        fontWeight:'bold',
        color:colors.black,
    },
    sympt:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20
    },
    card:{
        backgroundColor:'#fff',
        width: width/3 -25,
        height: 120,
        borderRadius:10,
        elevation:5,
        alignItems:'center',
        justifyContent:'center'
    },
    card2:{
        backgroundColor:'#fff',
        height: 130,
        width:'100%',
        marginVertical:30,
        justifyContent:'center',
        elevation:10,
        borderRadius:30
    },
    card2Img:{
            position:'absolute',
            zIndex:2
    },
    card2_card:{
        backgroundColor:'#fff',
        marginVertical:12,
        alignItems:'center',
        paddingLeft:100,
        width:'100%',
        height:135,   
        borderRadius:30
    },
    card2Title:{
            fontWeight:'bold',
            color:colors.black,
            marginTop:10,
            fontSize:15
    },
    card2Descrip:{
       paddingLeft:30,
        width:235,
        padding:10,
        fontSize:12,
        color:colors.black
    }
})
