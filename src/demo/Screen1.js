import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen1 = (props) => {
  const {navigation} = props;
  const Clickne =() =>{
    navigation.navigate('Screen2',{'name':'Nguyen Van A','old':'18'});
  }
  return (
    <View>
      <Text>Screen1</Text>
      <Pressable onPress={Clickne}  style={styles.pressable}>
        
        <Text>Go to Screen 2</Text>
      </Pressable>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    pressable:{
        borderWidth:1,
        backgroundColor:'blue'
    }
})