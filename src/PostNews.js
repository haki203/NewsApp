import { Button, StyleSheet, Text, TextInput, View, Image, ToastAndroid, Alert } from 'react-native'
import React, {useState} from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './ultil/AxiosIntance'


const PostNews = () => {
  const [imageNe, setimageNe] = useState(null);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const capture = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);

    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    const respone = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
    console.log(respone);

    if(respone.error == false){
      setimageNe(respone.data.path);
      ToastAndroid.show("Upload ảnh thành công", ToastAndroid.SHORT);

    }else{
      ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
    }
  }

  const getImageLibrary = async () =>{
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);

    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    const respone = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
    console.log(respone);

    if(respone.error == false){
      setimageNe(respone.data.path);
      ToastAndroid.show("Upload ảnh thành công", ToastAndroid.SHORT);


    }else{
      ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
    }
  }

  const dangTin = async () =>{
    if(imageNe==null){
      Alert.alert('Thông Báo', 'Bạn chưa chụp ảnh', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    else if(title==""){
      Alert.alert('Thông Báo', 'Tiêu đề không được để trống ', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }

    else if(content==""){
      Alert.alert('Thông Báo', 'Nội dung không được để trống ', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    else{
      const response = await AxiosIntance().post("/articles", {title : title, content : content, image : imageNe});
      if(response.error==false){
        ToastAndroid.show("Đăng tin thành công", ToastAndroid.SHORT)
      }else{
        ToastAndroid.show("Đăng tin thất bại", ToastAndroid.SHORT)
      }
      setimageNe(null);
      settitle(null);
      setcontent(null);
  
    }

  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:29,color:"black",textAlign:'center',margin:20,fontWeight:'bold'}}>Đăng tin</Text>
      <Image style={styles.image} source={{uri: imageNe}}></Image>
      <Button title='Chụp Ảnh' onPress={capture}></Button>
      <Button title='Chọn Ảnh' onPress={getImageLibrary}></Button>
      <TextInput style={{borderRadius:10,borderWidth:1,marginTop:10}} placeholder='Tiêu đề' onChangeText={settitle}></TextInput>
      <TextInput style={{borderRadius:10,borderWidth:1,marginTop:10,marginBottom:10}} placeholder='Nội dung' onChangeText={setcontent}></TextInput>
      <Button title='Đăng tin' onPress={dangTin}></Button>
    </View>
  )
}

export default PostNews

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    padding:10
  },
  image:{
    width: 150,
    height:180,
    marginLeft:120
    ,marginBottom:10
    ,borderRadius:10
  }
})