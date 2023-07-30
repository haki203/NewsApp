import { Image, ScrollView, StyleSheet, Text, View, FlatList, Pressable, ActivityIndicator, TextInput } from 'react-native'
import { React, useState, useEffect } from 'react'
import ItemListNew from './ItemListNews'
import AxiosIntance from './ultil/AxiosIntance'
import { launchCamera } from 'react-native-image-picker';
const NewsDetail = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { params } = route;
    const [name, setname] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [quantity, setquantity] = useState("");
    const [image, setimage] = useState("");
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        const getDetail = async () => {
            const response = await AxiosIntance().get("/product/" + params.id);
            console.log(response.product);
            if (response.result == true) {
                setprice(response.product.price);
                setimage(response.product.image);
                setname(response.product.name);
                setquantity(response.product.quantity);
                setcategory(response.product.category.name);
                setisLoading(false);

            }
        }
        getDetail();

        return () => {

        }
    }, [])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                isLoading == true ? (
                    <View>
                        <ActivityIndicator size='large' color='#fff00' />
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Loading...</Text>
                    </View>
                ) : (
                    <ScrollView style={styles.container}>
                        <View style={[{ flexDirection: 'row', marginTop: 20, marginBottom: 10, justifyContent: 'space-between' }]}>

                            <Pressable style={[{ marginLeft: 320, marginTop: -2 }]}>
                                <Image source={require('../images/share.png')} />
                            </Pressable>
                            <Pressable style={[{}]}>
                                <Image source={require('../images/baCham.png')} />
                            </Pressable>
                        </View>

                        <View style={[{ flexDirection: 'row' }]}>
                            <Image style={[{ width: 50, height: 50 }]} source={require('../images/BBC.png')} />
                            <View style={[{ marginLeft: 5 }]}>
                                <Text style={[{ fontSize: 16, fontWeight: 'bold', color: '#000000' }]}>BBC News</Text>
                                <Text>14m ago</Text>
                            </View>
                            <Pressable style={[{ width: 102, height: 32, backgroundColor: '#1877F2', borderRadius: 9, marginLeft: 105 }]}>
                                <Text style={[{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 3 }]}>Following</Text>
                            </Pressable>
                        </View>


                        <Image style={[styles.image, { borderRadius: 20, width: 350, marginBottom: 10, fontSize: 14 }]} source={{ uri: image }} />
                        <Text style={styles.title}>Tên sản phẩm: {name}   </Text>
                        <Text style={[{ marginBottom: 10, fontSize: 19, fontWeight: 'bold' }]}>Giá: {price} USD</Text>
                        <Text style={[{ marginBottom: 10, fontSize: 19, fontWeight: 'bold' }]}>Loại: {category}</Text>
                        <Text style={[{ marginBottom: 10, fontSize: 19, fontWeight: 'bold' }]}>Số lượng: {quantity}</Text>

                        <View style={[{ flexDirection: 'row', marginTop: 40, marginBottom: 20 }]}>
                            <Image source={require('../images/hearth.png')} />
                            <Text style={[{ marginLeft: 10 }]}>24.5K</Text>
                            <Image style={[{ marginLeft: 20 }]} source={require('../images/comment.png')} />
                            <Text style={[{ marginLeft: 10 }]}>1K</Text>
                            <Image style={[{ marginLeft: 200 }]} source={require('../images/save.png')} />
                        </View>

                    </ScrollView>
                )
            }

        </View>
    )
}

export default NewsDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginStart: 16,
        marginEnd: 16,
        flexDirection: 'column'
    },
    nameChange:{
        color: 'black', fontSize: 15,marginTop:10 
    },
    image: {
        width: 500,
        height: 300
    }
    , content: {
        fontSize: 16
    }
    , title: {
        fontWeight: 'bold',
        fontSize: 27
        , color: '#000000'
        , marginBottom: 16
    },
    textInput: {
        height: 48,
        width: 330,
        marginTop: 4,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: -5
    },
})

