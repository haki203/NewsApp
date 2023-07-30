import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemListView = (props) => {
    const { data, navigation } = props;
    const clickItem = () => {
        navigation.navigate('NewsDetail', { id: data._id });
    }


    return (
        <TouchableOpacity onPress={clickItem}>
            <View style={styles.container}>

                <Image style={styles.image} source={{ uri: data.image }} />

                <View style={styles.content}>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        color: '#000000'
                    }} numberOfLines={2}>Tên sản phẩm: {data.name}</Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        color: '#000000'
                    }} numberOfLines={1}>Loại: {data.category.name}</Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        color: '#000000'
                    }} numberOfLines={1}>Giá: {data.price} USD</Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        color: '#000000'
                    }} numberOfLines={1}>Số lượng: {data.quantity} USD</Text>
                    

                </View>

            </View>
        </TouchableOpacity>
    )
    // return (
    //     <TouchableOpacity onPress={clickItem}>
    //                 <View style={styles.container}>

    //         <Image style={styles.image} source={{ uri: dataNe.image }}/>

    //         <View style={styles.content}>
    //             <Text style={{
    //                 color: '#4E4B66',
    //                 fontFamily: 'Poppins',
    //                 fontStyle: 'normal',
    //                 fontSize: 13,
    //                 fontWeight: '400'
    //             }} numberOfLines={1}>Europe</Text>
    //             <Text style={{
    //                 fontSize: 16,
    //                 fontFamily: 'Poppins',
    //                 fontStyle: 'normal',
    //                 fontWeight: '400',
    //                 color: '#000000'
    //             }} numberOfLines={2}>{dataNe.name}</Text>
    //             <Text style={{
    //                 fontSize: 16,
    //                 fontFamily: 'Poppins',
    //                 fontStyle: 'normal',
    //                 fontWeight: '400',
    //                 color: '#000000'
    //             }} numberOfLines={1}>{dataNe.price}</Text>
    //                             <Text style={{
    //                 fontSize: 16,
    //                 fontFamily: 'Poppins',
    //                 fontStyle: 'normal',
    //                 fontWeight: '400',
    //                 color: '#000000'
    //             }} numberOfLines={1}>{dataNe.category}</Text>
    //             <View style={{ flexDirection: "row", alignItems: "center" }}>
    //                 <Image source={require("../images/Ellipse.png")} />
    //                 <Text style={[styles.label, {
    //                     color: '#4E4B66',
    //                     fontWeight: '600',
    //                     fontSize: 13,
    //                     fontStyle: 'normal',
    //                     fontFamily: 'Poppins'
    //                 }]}>BBC News</Text>
    //                 <Image style={{ marginLeft: 10 }} source={require("../images/oclock.png")} />
    //                 <Text style={styles.label}>14m ago</Text>
    //             </View>
    //         </View>

    //     </View>
    //     </TouchableOpacity>
    // )
}
export default ItemListView

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 10,

    },
    container: {
        flexDirection: 'row'
    },
    label: {
        marginLeft: 5,
    },
    content: {
        height: 96,
        width: 273,
        marginTop: 10,
        flexDirection: 'column'
        , justifyContent: 'space-evenly'

    }
})
const dataNe = [
    {
        "_id": '1',
        "image": "http://172.16.87.39:3000/images/image-1680488236416-97759635-Screenshot 2023-03-13 145117.png",
        "category": "Callean",
        "name": "kivungu",
        "price": "1100"

    },


]