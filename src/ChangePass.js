import { Pressable, StyleSheet, Text, TextInput, ToastAndroid, View ,Alert} from 'react-native'
import React, { useState } from 'react'
import { useContext } from 'react';
import { AppContext } from './AppContext'
import AxiosIntance from './ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ChangePass = (props) => {
    const { navigation } = props;
    const {passwordNe,setpasswordNe} = useContext(AppContext);
    const [Pass,setPass] = useState("");
    const [newPass,setnewPass] = useState("");
    const [CFnewPass,setCFnewPass] = useState("");
    const [hidePass, setHidePass] = useState(true);
    const {setIsLogin,setinfoUser} = useContext(AppContext);
    const clickOK = () =>{
        navigation.nagivate("FillProfile");
    }
    const doiMatKhau = async () =>{
        console.log(passwordNe);
        console.log(newPass);
        if(newPass==""){
          Alert.alert('Thông Báo', 'Bạn chưa nhập Password mới', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
        else if(CFnewPass==""){
          Alert.alert('Thông Báo', 'Bạn chưa nhập lại Password', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
        else if(passwordNe==newPass){
          Alert.alert('Thông Báo', 'Password mới không được trùng', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);}
        else if(newPass==CFnewPass){
          Alert.alert('Thông Báo', 'Password không khớp', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
        else{
            const res = await AxiosIntance().post("/users/change-password",{password:newPass});
            console.log(res.error);
            if(res.error == false){
              ToastAndroid.show("Đổi mật khẩu thanh cong",ToastAndroid.SHORT);
              setIsLogin(false);
            }
            else{
                Alert.alert('Thông Báo', 'Đổi mật khẩu thất bại ', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);
            }
            
        }

    }
  return (
    <View style={{flex:1,marginLeft:25,marginTop:10}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Change Password</Text>
      <Text style={styles.title}>Password</Text>
      <TextInput onChangeText={setPass} style={styles.textInput} value={passwordNe}></TextInput>
      <Text style={styles.title}>New Password</Text>
      <TextInput onChangeText={setnewPass} style={styles.textInput}></TextInput>
      <Text style={styles.title}>Confirm New Password</Text>
      <TextInput onChangeText={setCFnewPass} style={styles.textInput}></TextInput>
      <Pressable onPress={doiMatKhau}  style={styles.press}>
        <Text style={styles.textNut}>Save</Text>
      </Pressable>
    </View>
  )
}

export default ChangePass

const styles = StyleSheet.create({
    textInput:{
        height:48
        ,width:355,
        marginTop:8,
        borderWidth:1,
        borderRadius:8
    },
    title:{
        fontSize:16,
        marginTop:20
    },
    press:{
        marginTop:20,
        height:50,
        width:355,
        backgroundColor:'#1877F2',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    textNut:{
        color:'#FFFFFF',
        fontSize:17,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
    }
})