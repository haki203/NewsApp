import {Image,  StyleSheet, Text, View,FlatList, Pressable } from 'react-native';
import React, {useEffect, useState } from 'react';
import ItemNhanVien from './ItemNhanVien';
import axios from 'axios';

const ListNhanVien = () => {
    const [data,setdata]= useState([]);
    useEffect(() => {
        const getNews = async () => {
            console.log('aaaaaas');
            const res = await axios.get('https://63e44bca4474903105e94f0a.mockapi.io/NhanVien');
            if(res != ""){
                setdata(res.data);
            }
        }
        getNews();
        return ()=>{}
        }, []);
  return (
    <FlatList
    data={data}
    renderItem={({item}) => <ItemNhanVien data={item}/>}
    keyExtractor={item => item.id}
/>
  )
}

export default ListNhanVien

const styles = StyleSheet.create({})