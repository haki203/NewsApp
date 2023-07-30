import { StyleSheet, Text, View,Image,Ionicons } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListNews from './ListNews';
import Screen2 from './demo/Screen2';
import Screen1 from './demo/Screen1';
import { AppContext } from './AppContext';
import Login from './Login';
import Signup from './Signup';
import NewsDetail from './NewsDetail';
import FillProfile from './FillProfile';
import PostNews from './PostNews';
import ChangePass from './ChangePass';
const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();
const Users = () =>{
    // login va dang ky (stack)
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            
        </Stack.Navigator>
    )
}
const Main = () =>{
    // doc tin tuc, search,profile (bottom tab)
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="ListNews" component={ListNews}/>
            <Stack.Screen name="NewsDetail" component={NewsDetail}/>
            <Stack.Screen name="ChangePass" component={ChangePass}/>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

const News = () =>{
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({ }) => {
              if (route.name === 'Main') {
                return <Image source={require('../images/home.png')} />
              } else if (route.name === 'PostNews') {
                return <Image source={require('../images/explore.png')} />

              }
              else if (route.name === 'FillProfile') {
                return <Image source={require('../images/profile.png')} />
              }
  
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'black',
            headerShown: false
          })}
          >
            <Tab.Screen name="Main" options={{title:"Home"}} component={Main} />
            <Tab.Screen name="PostNews" component={PostNews} />

            <Tab.Screen name="FillProfile" component={FillProfile} />
        </Tab.Navigator>
    )
}
const AppNavigator = () => {
    const {isLogin} = useContext(AppContext);
  return (
    <>
    
    {isLogin==false ?<Users/> : <News/>}
    </>

  )
}

export default AppNavigator

const styles = StyleSheet.create({})