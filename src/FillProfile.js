import { StyleSheet, Text,TextInput, Image,View, Pressable,ScrollView, ToastAndroid, Alert } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import AxiosIntance from './ultil/AxiosIntance';
import { launchCamera } from 'react-native-image-picker';

const FillProfile = (props) => {
    const {infoUser,setinfoUser} = useContext(AppContext);
    const {isLogin,setIsLogin} = useContext(AppContext);
    const { navigation } = props;
    const goChangePass = () =>{
        navigation.navigate("ChangePass",{infoUser});
    }
    const uploadAvatar = async () => {

        const result = await launchCamera();
        console.log(result.assets[0].uri)
    
        //upload anh
        const formdata = new FormData();
        formdata.append('image', {
          uri: result.assets[0].uri,
          type: 'image/jpeg',
          name: 'image.jpg',
        });
    
        // const respone = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
        // setinfoUser({...infoUser, avatar: respone.data.path});
        console.log(formdata);
      }
    const updateProfile = async()=>{
        const respone = await AxiosIntance().post("/users/update-profile",{name:infoUser.name,address:infoUser.address,dob:infoUser.dob,phone:infoUser.phone,avatar:infoUser.avatar});
        console.log(respone);
        if(respone.error==false){
            Alert.alert('Thông Báo', 'Cập nhật thành công', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
        else{
            Alert.alert('Thông Báo', 'Cập nhật thất bại', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
    }
    const logout = async() =>{
        const respone = await AxiosIntance().get("user/logout");
        console.log(respone.data.logout);
        if(respone.data.logout){
            
            setIsLogin(false);

            navigation.navigate('Login');
            setinfoUser(null);
            ToastAndroid.show("Đăng xuất thành công",ToastAndroid.SHORT);
            
        }
        else{
            ToastAndroid.show("Đăng xuất không thành công",ToastAndroid.SHORT);
        }
    }
  return (
    <ScrollView style={styles.container}>

        <Text style={[{textAlign:'center',marginTop:20,fontWeight:'bold',color:'#000000',fontSize:16}]}>Fill your Profile</Text>

        {/* ------------------------------ */}
    <View style={[{flexDirection:'row'}]}>
        <Text style={[styles.textUsername,{marginBottom:3,marginTop:19}]}>Username</Text>
        <Text style={[{color:'red',marginTop:19}]}  > *</Text>
    </View>
    <TextInput style={styles.textInput} value={infoUser.email} placeholder="Email"  ></TextInput>
        {/* ------------------------------ */}

    <View style={[{flexDirection:'row'}]}>
        <Text style={[styles.textUsername,{marginBottom:3,marginTop:19}]} >Full name</Text>
        <Text style={[{color:'red',marginTop:19}]}  > *</Text>
    </View>
    <TextInput style={styles.textInput} value={infoUser.name} onChangeText={(text)=>setinfoUser({...infoUser,name:text})}></TextInput>



        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <Pressable style={{marginTop:10,marginBottom:-30}} onPress={goChangePass}>
            <Text style={{color:"#5890FF",fontWeight:'bold',fontSize:18}}>Change Password</Text>
            </Pressable>
            <Pressable style={{marginTop:10,marginBottom:-30}} onPress={logout}>
                <Text style={{color:"#5890FF",fontWeight:'bold',fontSize:18}}>Logout</Text>
            </Pressable>
        </View>
    <Pressable style={styles.press} onPress={updateProfile}>
        <Text style={styles.textNut}>Save</Text>
      </Pressable>
    </ScrollView>
  )
}

export default FillProfile

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginStart:25,
        marginEnd:24,
        flexDirection:'column'
    },    textUsername:{
        marginTop:10
    },
    textInput:{
        height:48,
        width:330,
        marginTop:4,
        borderWidth:1,
        borderRadius:8,
        marginBottom:-5
    },
    press:{
        marginTop:50,
        height:45,
        backgroundColor:'#1877F2',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50
        
    },
    textNut:{
        color:'#FFFFFF',
        fontSize:17,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
    },
})