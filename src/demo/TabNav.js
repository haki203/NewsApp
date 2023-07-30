import { StyleSheet,Tab, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const TabNav = () => {
  return (
    
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Screen1" component={Screen1} />
            <Tab.Screen name="Screen2" component={Screen2} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNav

const styles = StyleSheet.create({

})