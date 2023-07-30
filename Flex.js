import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flex = () => {
  return (
    <View style={styleFlex.container}>
      <View style={styleFlex.view1}></View>
      <View style={styleFlex.view2}></View>
      <View style={styleFlex.view3}></View>
      <View style={styleFlex.view4}></View>

    </View>
    
    
  )
}

export default Flex

const styleFlex = StyleSheet.create({
    view1:{
        width:50,
        height:50,
        backgroundColor:'yellow'
    },
    view2:{
        width:50,
        height:50,
        backgroundColor:'blue'
    },
    view3:{
        width:50,
        height:50,
        backgroundColor:'red',
        alignSelf:'flex-end'
    },
    view4:{
        width:50,
        height:50,
        backgroundColor:'pink'
    },
    container:{
        backgroundColor:'green',
        flex: 1,
        flexDirection:'row',
        // justifyContent:'flex-end'
        justifyContent:'flex-start',  //căn cùng hướng so với flexDirection 
        alignItems:'center',             //căn ngược hướng so với flexDirection,
        //flexWrap:'wrap' // tự động xuống hàng khi ko đủ chỗ trống hoặc no-wrap 
    },
    text:{
        fontSize:50
    }
})