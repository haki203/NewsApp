import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'

const Screen2 = (props) => {
    const {navigation,route} = props;
    const {params} = route;

    const ClickVe =() =>{
        //navigation.navigate('Screen1');]
        navigation.goBack();
    }
  return (
    <View>
      <Text>Sreen2</Text>
      <Text>{params?.name}</Text>
      <Text>{params?.old}</Text>
      <Text>{params?.cc}</Text>
        {/* 
              <Text>{params?.cc}</Text>
                thêm dấu ? nếu ko thấy thì sẽ ko hiển thị */}
      <Pressable onPress={ClickVe} style={styles.pressable}>
        <Text>Go to Screen 1</Text>
      </Pressable>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    pressable:{
        borderWidth:1,
        backgroundColor:'blue'
    }
})