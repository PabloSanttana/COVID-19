import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:20,
        paddingVertical:15,
        elevation:3,
        borderRadius: 25,
    },
    info:{
        alignItems:'center'
    },
    circule:{
        width:45,
         height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:23,
        marginBottom:15
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        marginBottom:10
    }

})