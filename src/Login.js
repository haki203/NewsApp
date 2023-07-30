import {Image,ScrollView, Button, Pressable, StyleSheet, Text, TextInput, View ,ToastAndroid, Alert} from 'react-native'
import React, { useContext } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';
import AxiosIntance from './ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from './AppContext';



const Login = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const {navigation} = props;
    const [emailUser,setemailUser]=useState("");
    const [passwordUser,setpasswordlUser]=useState("");
    const {setIsLogin,setinfoUser} = useContext(AppContext);
    const {passwordNe,setpasswordNe} = useContext(AppContext);
    const [hidePass, setHidePass] = useState(true);
    const dangKy = ()=>{
        
        navigation.navigate('Signup');
    }
    const hidePassWord = () =>{
        setHidePass(!hidePass);
        console.log("cc");
    }
    const signin = async ()=>{
        if(emailUser==""){
            
            Alert.alert('Thông Báo', 'Tên đăng nhập không được để trống', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
        else if(passwordUser==""){
            Alert.alert('Thông Báo', 'Password không được để trống', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
        else{
            console.log(emailUser, passwordUser);
            ToastAndroid.show("Login....",ToastAndroid.SHORT);
            try{
                const res = await AxiosIntance().post("/user/login",{email:emailUser,password:passwordUser});
                
                if(res.result==true){
                    await AsyncStorage.setItem("token",res.token);
                    console.log(res.token);
                    ToastAndroid.show("Dang nhap thanh cong",ToastAndroid.SHORT);
                    setIsLogin(true);
                    setpasswordNe(passwordUser); 
                    setinfoUser(res.user);
                }else{
                    ToastAndroid.show("Dang nhap that baii",ToastAndroid.SHORT);
                }
            }catch(err){
                console.log(err);
                ToastAndroid.show("Dang nhap that bại",ToastAndroid.SHORT);
            }
        }
    }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textHello}>Hello</Text>
      <Text style={[styles.textHello,{color:'#1877F2'}]}>Again!</Text>
      <Text style={styles.textWelcome}>Welcome back you've {'\n'}been missed</Text>
{/* Username va input cua Username -------------------------------------*/}
        <View style={[{flexDirection:'row'}]}>

            <Text style={[styles.textUsername,{marginBottom:3,marginTop:19}]}>Username</Text>
            <Text style={[{color:'red',marginTop:19}]}> *</Text>
        </View>
        <TextInput onChangeText={setemailUser} style={styles.textInput}></TextInput>

{/* --------------------------------------------------------- */}
      <View style={[{flexDirection:'row'}]}>
        <Text style={[styles.textUsername,{marginBottom:10}]}>Password</Text>
        <Text style={[{color:'red',marginTop:10}]}> *</Text>
      </View>
      <View style={[{flexDirection:'row',width:355   ,     borderWidth:1,borderRadius:8}]}>
      <TextInput secureTextEntry={hidePass} onChangeText={setpasswordlUser} style={[{width:200}]}></TextInput>
        <Pressable onPress={hidePassWord}>
            <Image style={[{position:'absolute',marginStart:100,marginTop:13}]}  source={require('../images/hidePass.png')}/>
        </Pressable>
      </View>
      
{/* --------------------------------------------------------- */}
      <View style={[styles.textRemember, {justifyContent:'space-between'}]}>
        <View style={styles.textRemember}> 
        <CheckBox style={styles.cbRemember}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: '#1877F2', false: '#1877F2'}}
          />
            <Text >Remember me</Text>
        </View>
        <Text style={[styles.textRemember,{color:'#5890FF'}]}>Forgot the password?</Text>
      </View>
      <Pressable onPress={signin} style={styles.press}>
        <Text style={styles.textNut}>Login</Text>
      </Pressable>
      <Text style={styles.textContWith}>or continue with</Text>
        <View style={styles.viewMXH}>
            <Pressable style={styles.pressMXH}>
                <Image style={styles.hinhMXH} source={require('../images/fb.png')}/>
                <Text style={styles.nameMxh}>Facebook</Text>
            </Pressable>
            <Pressable style={styles.pressMXH}>
                <Image style={styles.hinhMXH} source={require('../images/gg.png')}/>
                <Text style={styles.nameMxh}>Google</Text>
            </Pressable>

        </View>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={styles.textEnd}>don't have an account?</Text>
        {/* <Text style={styles.textSignup}>Sign Up</Text> */}
        <Pressable onPress={dangKy}>
            <Text style={styles.textSignup}>Sign Up</Text>
        </Pressable>
    </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginStart:25,
        marginEnd:24,
        flexDirection:'column'
    },
    imgHide:{
        marginStart:100,
        marginTop:13
    },
    password:{
        flexDirection:'row'
        ,width:341   ,     
        borderWidth:1,
        borderRadius:8
    },
    textHello:{
        fontSize:48,
        fontFamily:'Poppins',
        color:'#050505',
        fontWeight:'bold'
    },
    textWelcome:{
        marginTop:4,
        fontSize:20
    },
    textUsername:{
        marginTop:10
    },
    textInput:{
        height:48
        ,width:355,
        marginTop:8,
        borderWidth:1,
        borderRadius:8
    },
    textRemember:{
        marginTop:8.5,
        flexDirection:'row'
    },
    press:{
        marginTop:10,
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
    },
    pressMXH:{
        marginTop:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center', // căn giữa ngang
        alignItems:'center',        // căn giữa dọc 
        height:48,
        width:160,
        backgroundColor:'#E5E5E5',
        
        
    },
    viewMXH:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:12,
        flexDirection:'row'
    },
    hinhMXH:{
        width:21,
        height:21,
        justifyContent:'center',
        alignContent:'center',
        marginEnd:10,
        
    }, 
    nameMxh:{
        fontSize:16
    },

    cbRemember:{
        marginTop:-5,
        marginStart: -7
    },
    textContWith:{
        textAlign:'center',
        fontSize:14,
        marginTop: 16
    },
    textEnd:{
        marginTop:20
    },
    textSignup:{
        marginTop:20,
        marginStart:10,
        fontWeight:'bold',
        color:'#5890FF',marginBottom:10

    }

})