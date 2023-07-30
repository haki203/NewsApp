import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const ItemNhanVien = (props) => {
    const { data } = props;
    return (
        <View style={styles.container}>
            <Text style={[{marginTop:20,color:'black'}]}>ID nhân viên: {data.id}</Text>
            <Text style={[{fontWeight:'bold',fontSize:18,marginBottom:10}]}>{data.name}</Text>
            <Image style={[{width:200,height:200,borderRadius:10}]} source={{uri: data.image }}/>
            <Text>Số điện thoại: {data.sdt}</Text>
            <Text>Địa chỉ: {data.diachi}</Text>
        </View>
    )
}

export default ItemNhanVien

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
})