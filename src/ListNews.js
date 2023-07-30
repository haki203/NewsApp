import {Image,  StyleSheet, Text, View,FlatList, Pressable,ActivityIndicator, ToastAndroid, TextInput, TouchableOpacity } from 'react-native';
import React, {useEffect, useState } from 'react';
import ItemListNews from './ItemListNews';
import axios from 'axios';
import AxiosIntance from './ultil/AxiosIntance';
const ListNews = (props) => {
    const {navigation} = props;
    const [dataNe,setdataNe]= useState([]);
    const [isLoading,setisLoading]= useState(true);
    useEffect(()=>{
        const getNews = async ()=>{
            const respone = await AxiosIntance().get("/product");
            console.log(respone.product);
            if(respone.result==true){
                // lay du lieu ok
                setdataNe(respone.product);
                console.log(respone.image);
                setisLoading(false);
            }
            else{
                ToastAndroid.show("Lay du lieu that bai",ToastAndroid.SHORT);
            }
        }
        getNews();

        return()=>{
        }
    },[]);
        const getMy = async () =>{
            getNews();
        }
        let timeout = null;
        const countDownSearch = (searchText) =>{
            if(timeout){
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                search(searchText);
            }, 3000);
        }
        const search = async (searchText)=>{
            setisLoading(true);                        ///api/product/search/name?keyword=Banh
            const respone = await AxiosIntance().get("/product/search/name?keyword="+searchText);
            console.log("kq tim kiem: ",respone.result);
            if(respone.result == true){
                // lay du lie
                console.log("kq tim kiem: ",respone.product);
                setdataNe(respone.product);
                setisLoading(false);
            }
            else{
                ToastAndroid.show("Lay du lieu that bai",ToastAndroid.SHORT);
            }
        }
  return (

    <View style={styles.container}>

        <View style={[{flexDirection:'row',marginTop:30,justifyContent:'space-between'}]}>
            <Image  source={require('../images/KaBar.png')}/> 
            <Pressable onPress={getMy} style={[{}]}>
                <Image source={require('../images/nofication.png')}/>
            </Pressable>  
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
            <TextInput onChangeText={(text) => countDownSearch(text)} style={{width:388,borderRadius:7,borderWidth:1,borderColor:'#c7c7c7'}} placeholder='Search' />
            <TouchableOpacity onPress={search} style={{position:'absolute',marginLeft:350,marginTop:5}}>
                <Image style={{marginTop:10}} source={require("../images/search.png")}/>
            </TouchableOpacity>
        </View>
        <View style={[{flexDirection:'row',marginTop:20,justifyContent:'space-between'}]}>
            <Text style={[{color:'#000000',fontSize:16,fontWeight:'bold'}]}>Latest</Text>
            <Pressable>
                <Text style={[{marginTop:2}]}>See all</Text>
            </Pressable>
        </View>

        <View style={[{flexDirection:'row',marginTop:10,marginBottom:10,marginLeft:19}]}>
            <Pressable style={[{marginRight:20}]}>
                <Text style={[{marginTop:2,color:'#000000',}]}>All</Text>
            </Pressable>
            <Pressable style={[{marginRight:20}]}>
                <Text style={[{marginTop:2,color:'#4E4B66',}]}>Sports</Text>
            </Pressable  >
            <Pressable style={[{marginRight:20}]}>
                <Text style={[{marginTop:2,color:'#4E4B66',}]}>Politics</Text>
            </Pressable>
            <Pressable style={[{marginRight:20}]}>
                <Text style={[{marginTop:2,color:'#4E4B66',}]}>Business</Text>
            </Pressable>
            <Pressable style={[{marginRight:20}]}>
                <Text style={[{marginTop:2,color:'#4E4B66',}]}>Health</Text>
            </Pressable>
            <Pressable style={[{marginRight:20}]}>
                <Text style={[{marginTop:2,color:'#4E4B66',}]}>Travel</Text>
            </Pressable>
        </View>
        
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        {
            isLoading==true ? (
                <View>
                    <ActivityIndicator size='large' color='#fff00'/>
                    <Text style={{color:'black',fontSize:14,fontWeight:'600'}}>Loading...</Text>
                </View>
            ):(
                <FlatList
                data={dataNe}
                renderItem={({item}) => <ItemListNews data={item} navigation={navigation}/>}
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator={false}
            />
            )
        }
    </View>
    </View>
  )
}

export default ListNews

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginStart:10,
        marginEnd:20,
        flexDirection:'column'
    },
})
