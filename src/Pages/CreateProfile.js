import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import { useFonts } from '@use-expo/font'
// import * as ImagePicker from 'expo-image-picker'
// import AppLoading from 'expo-app-loading'
import AvtarImage from '../../assets/CreateProfile/avatar.png';
import Logo from '../../assets/Logo/logo.svg';
import exampleImg from '../../assets/splash.png';
import bg from '../../assets/Logo/bg.png';
// import {getToken, getAuthToken} from '../redux/reducer';
import {getToken, getAuthToken, getProfile} from '../redux/reducer';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import * as ImagePicker from 'react-native-image-picker';

// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import { AppLoading, ImagePicker } from "expo";

export default function CreateProfile(props) {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);
  const dispatch = useDispatch();
  const {profile} = useSelector(state => state);

  // console.log(profile.api_token);
  const handleUploadPhoto = imgResponse => {
    let formData = new FormData();
    formData.append('file_type', 'PROFILE_PIC');
    formData.append('file', {
      uri: imgResponse.uri,
      type: imgResponse.type,
      name: imgResponse.fileName,
      // data: imgResponse.data,
    });

    // fetch('http://testyourapp.online/metag/api/profile-pic', {
    //   method: 'POST',
    //   body: formData,
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //     Authorization: 'Bearer ' + token,
    //   },
    // })
    axios({
      method: 'post',
      url: 'http://testyourapp.online/metag/api/profile-pic',
      data: formData,
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: 'Bearer ' + profile.api_token,
      },
    })
      .then(response => {
        console.log('uploaded', response.data);
        dispatch(
          getProfile({...profile, profile_pic: response.data.data[0].file_url}),
        );
        console.log('print url', response.data.data[0].file_url);
        // if (response.data.status === 200) {
        //   console.log('uploade done ', response.data);
        // } else {
        //   console.log('Not upload', response.data);
        // }
      })
      .catch(error => {
        console.log('error...', error);
      });
    // .then(response => {
    //   console.log('upload succes', JSON.parse(response));
    //   // alert('Upload success!');

    //   // this.setState({photo: null});
    // })
    // .catch(error => {
    //   console.log('upload error', error);
    //   // alert('Upload failed!');
    // });
  };

  let handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, imgResponse => {
      console.log('response', imgResponse);
      if (imgResponse.uri) {
        setImage(imgResponse.uri);
        // console.log('token', token);
        // dispatch(getProfile({...profile,profile_pic:imageResponse.uri}));

        handleUploadPhoto(imgResponse);
      }
    });
  };

  console.log('profile...', profile);

  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <View style={styles.header_parent}>
            <View style={styles.header}>
              {/* <View style={styles.arrowback}></View> */}
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{
                  height: 'auto',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}>
                <Image
                  source={require('../../assets/CreateProfile/back.png')}
                  style={styles.arrowback}></Image>
              </TouchableOpacity>
              <View style={styles.headerBackground}>
                {/* <Image
                  source={require('../../assets/CreateProfile/back.png')}
                  style={styles.arrowback}
                ></Image> */}
                {/* <Image
                  source={require('../../assets/logo.jpg')}
                  style={{width: 50, height: 'auto'}}
                /> */}
                <Logo width={54} height={54} />
                <View style={styles.header_text}>
                  <Text style={styles.text_metag}>meTAG</Text>
                  <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                </View>
                {/* <Text style={styles.next}>Next</Text> */}
              </View>
              <Text
                onPress={() => props.navigation.navigate('UploadBusinessLogo')}
                style={styles.next}>
                Next
              </Text>
            </View>
            <Text style={styles.completeProfile}>Complete Profile</Text>
          </View>
          {/* <Text style={styles.upload_text}>Upload Profile Photo</Text> */}
          <View style={styles.avtar_parent}>
            <Text style={styles.upload_text}>Upload Profile Photo</Text>
            {/* <Text style={styles.upload_text}>Upload Profile Photo</Text> */}
            <View style={styles.avtar_bg}>
              {/* <Text style={styles.upload_text}>Upload Profile Photo</Text> */}
              {image ? (
                (console.log('image', image),
                (
                  <Image
                    // source={require("../../assets/avtar.svg")}
                    source={{uri: image}}
                    style={styles.avtarImage}></Image>
                ))
              ) : (
                <Image
                  // source={require("../../assets/avtar.svg")}
                  source={newImage}
                  style={styles.avtarImage}></Image>
              )}
              {/* <Image
                // source={require("../../assets/avtar.svg")}
                source={newImage}
                style={styles.avtarImage}></Image> */}

              {console.log(newImage)}
              <View style={styles.camera_bg}>
                <TouchableOpacity
                  onPress={handleChoosePhoto}
                  style={styles.white_bg}
                  // onStartShouldSetResponder={pickImage}
                >
                  {/* {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                  />
                )} */}
                  {/* // setNewImage(exampleImg)} */}

                  <Image
                    source={require('../../assets/CreateProfile/cam.png')}
                    style={styles.camera_img}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'white',
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: '#000000',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    // padding: 10,
    // backgroundColor: 'black ',
  },
  arrowback: {
    // backgroundColor: "beige",
    width: 20,
    height: 20,
    // alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    // marginLeft: 20,
    // color: "white",
  },
  headerBackground: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // flexWrap: 'wrap',
    paddingBottom: 20,
    paddingTop: '10%',
    alignSelf: 'center',
    // paddingRight: 40,
    // backgroundColor: 'black',
  },
  header_text: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // width: 30,
    // width: 30,
    // backgroundColor: 'pink',
    // paddingLeft: 20,
  },
  text_metag: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 34,
    color: 'white',
  },
  text_tagline: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 2,
    fontSize: 10,
    marginTop: -3,
    // backgroundColor: 'red',
    padding: 0,
    color: 'white',
  },
  next: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    alignSelf: 'center',
    fontSize: 14,
  },
  completeProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-ExtraBold',
    // fontWeight: '700',
    // paddingBottom: 10,
    // backgroundColor: "black",
    // width: "auto",
  },
  header_parent: {
    backgroundColor: '#000000',
    padding: 20,
    // height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avtarImage: {
    height: 100,
    width: 100,
    flexDirection: 'column',
    backgroundColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginTop: 50,
    margin: 80,
    // alignContent: "center",
    // marginTop: "right",
    // marginBottom: "right",
  },
  avtar_bg: {
    display: 'flex',
    backgroundColor: '#000000',
    // height: 240,
    // width: 200,
    // width: 'auto',
    // paddingLeft: 'auto',
    // paddingRight: 'auto',
    justifyContent: 'center',
    // marginTop: 'auto',
    // marginBottom: 'auto',
    borderRadius: 20,
    // paddingBottom: 5,
  },
  avtar_parent: {
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // marginTop: 30,
    // width: 'auto',
    marginLeft: 60,
    marginRight: 60,
    marginTop: 50,
    // paddingTop: "auto",
    // paddingBottom: "auto",
  },
  // upload_text: {
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   fontFamily: 'Poppins-ExtraBold',
  //   fontWeight: '700',
  // },
  upload_text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: '700',
    color: 'black',
    // marginBottom: 14,
    // marginTop: 20,
    fontSize: 14,
    marginBottom: 15,
  },
  camera_img: {
    width: 40,
    height: 40,
    // alignContent: "flex-end",
    // justifyContent: "flex-end",
    backgroundColor: 'white',
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 20,
    // padding: 20,
    // marginTop: 40,
    // marginRight: 10,
    // borderRadius: 20,
  },
  camera_bg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // paddingTop: 50,
    paddingBottom: 10,

    marginRight: 5,
    // marginBottom: 10,
    // width: "auto",
    // borderRadius: 20,
    // backgroundColor: "white",
  },
  white_bg: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
    // merginBottom: 10,
    // padding: 10,
    justifyContent: 'flex-end',
  },
  header_padding: {
    // backgroundColor: 'black',
    // padding: 10,
  },
});
