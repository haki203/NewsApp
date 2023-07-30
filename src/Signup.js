import { Image, ScrollView, Button, Pressable, StyleSheet, Text, TextInput, View, ToastAndroid, Alert } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CheckBox from '@react-native-community/checkbox';
import { useState, useContext } from 'react';
import { AppContext } from './AppContext';
import AxiosIntance from './ultil/AxiosIntance';
import { NavigationContainer } from '@react-navigation/native';
const Login = (props) => {
    const { navigation } = props;
    const goLogin = () => {
        navigation.navigate('Login');
    }
    const { passwordNe, setpasswordNe } = useContext(AppContext);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [emailUser, setemailUser] = useState("");
    const [name, setName] = useState("");
    const [passwordUser, setpasswordUser] = useState("");
    const [cpasswordUser, setcpasswordUser] = useState("");
    const [hidePass, setHidePass] = useState(true);
    const hidePassWord = () => {
        setHidePass(!hidePass);
        console.log("cc");
    }
    const register = async () => {
        if (emailUser == "") {

            Alert.alert('Thông Báo', 'Tên đăng nhập không được để trống', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
        if (name == "") {

            Alert.alert('Thông Báo', 'Tên không được để trống', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
        else if (passwordUser == "") {

            Alert.alert('Thông Báo', 'Password không được để trống', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
        else {
            try {
                console.log("Press Register");
                const res = await AxiosIntance().post("/user/register", { email: emailUser, password: passwordUser,name:name,confirm_password:cpasswordUser });
                console.log(emailUser,passwordUser,name,cpasswordUser);
                console.log(res.result);
                if (res.result == true) {
                    navigation.navigate("Login");
                    try {
                        const res = await AxiosIntance().post("/user/sendmail", { email: emailUser, subject:"Dang ky thanh cong" });
                        if(res.result){

                        }
                    } catch (error) {
                        console.log("error sendmail",error);
                    }
                    ToastAndroid.show("Dang ky thanh cong", ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show("Dang ky that bai", ToastAndroid.SHORT);
                }

            } catch {
                ToastAndroid.show("Dang ky that bai", ToastAndroid.SHORT);
            }
        }


    }
    return (
        <ScrollView style={styles.container}>
            <Text style={[styles.textHello, { color: '#1877F2', marginTop: 30 }]}>Hello!</Text>
            <Text style={styles.textWelcome}>Signup to get Started</Text>
            <View style={[{ flexDirection: 'row' }]}>
                <Text style={[styles.textUsername, { marginBottom: 3 }]}>Username</Text>
                <Text style={[{ color: 'red', marginTop: 30 }]}> *</Text>
            </View>
            <TextInput style={styles.textInput} onChangeText={setemailUser}></TextInput>
            <View style={[{ flexDirection: 'row' }]}>
                <Text style={[styles.textUsername, { marginBottom: 3 }]}>Name</Text>
                <Text style={[{ color: 'red', marginTop: 30 }]}> *</Text>
            </View>
            <TextInput style={styles.textInput} onChangeText={setName}></TextInput>
            {/* password ne -------------------------- */}
            <View style={[{ flexDirection: 'row' }]}>
                <Text style={[styles.textUsername, { marginBottom: 10, marginTop: 10 }]}>Password</Text>
                <Text style={[{ color: 'red', marginTop: 10 }]}> *</Text>
            </View>
            <View style={[{ flexDirection: 'row', width: 355, borderWidth: 1, borderRadius: 8 }]}>
                <TextInput secureTextEntry={hidePass} onChangeText={setpasswordUser} style={[{ width: 200 }]}></TextInput>
                <Pressable onPress={hidePassWord}>
                    <Image style={[{ position: 'absolute', marginStart: 100, marginTop: 13 }]} source={require('../images/hidePass.png')} />
                </Pressable>
            </View>
            {/* /> password */}
            {/* cpassword ne -------------------------- */}
            <View style={[{ flexDirection: 'row' }]}>
                <Text style={[styles.textUsername, { marginBottom: 10, marginTop: 10 }]}>Confirm Password</Text>
                <Text style={[{ color: 'red', marginTop: 10 }]}> *</Text>
            </View>
            <View style={[{ flexDirection: 'row', width: 355, borderWidth: 1, borderRadius: 8 }]}>
                <TextInput secureTextEntry={hidePass} onChangeText={setcpasswordUser} style={[{ width: 200 }]}></TextInput>
                <Pressable onPress={hidePassWord}>
                    <Image style={[{ position: 'absolute', marginStart: 100, marginTop: 13 }]} source={require('../images/hidePass.png')} />
                </Pressable>
            </View>
            {/* /> cpassword */}
            <View style={[styles.textRemember, { justifyContent: 'space-between' }]}>
                <View style={styles.textRemember}>
                    <CheckBox style={styles.cbRemember}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={newValue => setToggleCheckBox(newValue)}
                        tintColors={{ true: '#1877F2', false: '#1877F2' }}
                    />
                    <Text >Remember me</Text>
                </View>
                <Text style={[styles.textRemember, { color: '#5890FF' }]}>Forgot the password?</Text>
            </View>
            <Pressable onPress={register} style={styles.press}>
                <Text style={styles.textNut}>Sign Up</Text>
            </Pressable>
            <Text style={styles.textContWith}>or continue with</Text>
            <View style={styles.viewMXH}>
                <Pressable style={styles.pressMXH}>
                    <Image style={styles.hinhMXH} source={require('../images/fb.png')} />
                    <Text style={styles.nameMxh}>Facebook</Text>
                </Pressable>
                <Pressable style={styles.pressMXH}>
                    <Image style={styles.hinhMXH} source={require('../images/gg.png')} />
                    <Text style={styles.nameMxh}>Google</Text>
                </Pressable>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textEnd}>Already have an account?</Text>
                <Pressable onPress={goLogin}>
                    <Text style={styles.textSignup}>Sign In</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginStart: 25,
        marginEnd: 24,
        flexDirection: 'column',
    },
    password: {
        flexDirection: 'row'
        , width: 340,
        borderWidth: 1,
        borderRadius: 8
    },
    imgHide: {
        marginStart: 260,
        marginTop: 13,

    },
    textHello: {
        fontSize: 48,
        fontFamily: 'Poppins',
        color: '#050505',
        fontWeight: 'bold'
    },
    textWelcome: {
        marginTop: 4,
        fontSize: 20
    },
    textUsername: {
        marginTop: 30
    },
    textInput: {
        height: 48,
        width: 355,
        marginTop: 4,
        borderWidth: 1,
        borderRadius: 8
    },
    textRemember: {
        marginTop: 8.5,
        flexDirection: 'row'
    },
    press: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#1877F2',
        borderRadius: 10,
        width: 355,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textNut: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressMXH: {
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center', // căn giữa ngang
        alignItems: 'center',        // căn giữa dọc 
        height: 48,
        width: 160,
        backgroundColor: '#E5E5E5',



    },
    viewMXH: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        flexDirection: 'row',

    },
    hinhMXH: {
        width: 21,
        height: 21,
        justifyContent: 'center',
        alignContent: 'center',
        marginEnd: 10,

    },
    nameMxh: {
        fontSize: 16
    },

    cbRemember: {
        marginTop: -5,
        marginStart: -7
    },
    textContWith: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: 16
    },
    textEnd: {
        marginTop: 10
    },
    textSignup: {
        marginTop: 10,
        marginStart: 10,
        fontWeight: 'bold',
        color: '#5890FF'

    }

})