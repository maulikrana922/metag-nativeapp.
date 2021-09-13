import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  Platform,
  StatusBar,
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';
// import AvtarImage from "../../assets/avtar.svg";
//
import bg from '../../assets/Logo/bg.png';
import Logo from '../../assets/Logo/logo.svg';
import AvtarImage from '../../assets/CreateProfile/work.png';
import exampleImg from '../../assets/splash.png';
import Loader from '../components/Loader';
import close from '../../assets/close.png';

// import {TouchableOpacity} from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {getToken, getAuthToken, getProfile} from '../redux/reducer';
import loginFail from '../../assets/loginFail.png';

import url from '../BaseURl/baseurl.json';

export default function CreateProfile(props) {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);
  const [next, setNext] = useState(false);
  const {profile} = useSelector(state => state);
  const [showLoader, setShowLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  console.log(modalVisible);

  const handleUploadPhoto = imgResponse => {
    let formData = new FormData();
    formData.append('file_type', 'BUSINESS_LOGO');
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
      url: `${url.baseurl}profile-pic`,
      data: formData,
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: 'Bearer ' + profile.api_token,
      },
    })
      .then(response => {
        if (response.data.status === 200) {
          // setShowLoader(false),
          setNext(true);
          console.log('settignNext', next);
          console.log(showLoader);
          console.log('true', next);
        } else {
          console.log('false', next);
          // setNext(false);
        }
      })
      .catch(error => {
        console.log('error', error);
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
    setShowLoader(true);
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, imgResponse => {
      console.log('response', imgResponse);
      if (imgResponse.didCancel) {
        setShowLoader(false);
      }
      if (imgResponse.uri) {
        setImage(imgResponse.uri);
        // console.log('token', token);
        // setShowLoader(false),
        handleUploadPhoto(imgResponse);
        setShowLoader(false);
        setNext(true);
      }
    });
  };
  // useEffect(() => {
  //   ;(async () => {
  //     if (Platform.OS !== 'web') {
  //       const {
  //         status,
  //       } = await ImagePicker.requestMediaLibraryPermissionsAsync()
  //       if (status !== 'granted') {
  //         alert('Sorry, we need camera roll permissions to make this work!')
  //       }
  //     }
  //   })()
  // }, [])

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   })

  //   console.log(result)

  //   if (!result.cancelled) {
  //     // setImage(result.uri);
  //     setNewImage(result.uri)
  //   }
  // }
  console.log('log next', next);
  console.log('modalClose123', modalVisible);
  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        {console.log('body', next)}

        <View style={styles.container}>
          {showLoader && <Loader />}

          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />
          {/* -- */}
          {/* <View style={styles.header_parent}>
          <View>
            <View style={styles.header}> */}
          {/* <View style={styles.arrowback}></View> */}
          {/* <Image
                source={require("../../assets/arrow-back.svg")}
                style={styles.arrowback}
              ></Image> */}
          {/* <View style={styles.headerBackground}>
                <Image
                  source={require("../../assets/logo.jpg")}
                  style={{ width: 50, height: "auto" }}
                />
                <View style={styles.header_text}>
                  <Text style={styles.text_metag}>meTAG</Text>
                  <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                </View>
              </View> */}
          {/* <Text style={styles.next}>Next</Text> */}
          {/* </View>
            <Text style={styles.completeProfile}>Complete Profile</Text>
          </View>
        </View> */}

          {/* -- */}
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
                <Logo width={54} height={54} />
                <View style={styles.header_text}>
                  <Text style={styles.text_metag}>meTAG</Text>
                  <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                </View>
                {/* <Text style={styles.next}>Next</Text> */}
              </View>
              <Text
                // onPress={() => props.navigation.navigate('Location')}
                // disabled={true}
                onPress={
                  () => {
                    props.navigation.navigate('MediaAccount');
                  }
                  // () => {
                  //   next === true
                  //     ? props.navigation.navigate('Location')
                  //     : setModalVisible(true);
                  // }
                }
                style={styles.next}>
                Next
              </Text>
            </View>
            <Text style={styles.completeProfile}>Complete Profile</Text>
          </View>
          <View style={styles.avtar_parent}>
            <Text style={styles.upload_text}>Upload Business Logo</Text>
            <View style={styles.avtar_bg}>
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
                  {/* {image && setNewImage(exampleImg)} */}
                  <Image
                    source={require('../../assets/CreateProfile/cam.png')}
                    style={styles.camera_img}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <Modal
          // style={{
          //   backgroundColor: 'yellow',
          //   // margin: '30%',
          //   // width: '60%',
          //   // height: '60%',
          //   // margin: '40%',
          // }}
          statusBarTranslucent={true}
          transparent={true}
          visible={modalVisible}>
          <View
            style={{
              height: '100%',
              backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
            }}>
            <View
              style={{
                // backgroundColor: 'white',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 'auto',
                marginBottom: 'auto',
                width: '80%',
                height: 'auto',
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  // backgroundColor: 'red',
                  // width: '15%',
                  // height: '15%',
                  // marginLeft: 'auto',
                  // // marginRight: '5%',
                  // marginTop: 'auto',
                  // marginBottom: '5%',
                  width: '8%',
                  height: '8%',
                  marginLeft: 'auto',
                  // marginRight: '5%',
                  marginTop: '3%',
                }}>
                <Image
                  source={close}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}></Image>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: 'white',
                  // marginTop: '5%',
                  padding: '5%',
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  source={loginFail}
                  resizeMode="contain"
                  style={{
                    width: '50%',
                    height: '50%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}></Image>
                <Text
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    // marginTop: 'auto',
                    // marginBottom: 'auto',
                    color: '#000000',
                    fontSize: 17,
                  }}>
                  Oops! something went wrong.
                </Text>
                <Text
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    // marginTop: 'auto',
                    // marginBottom: 'auto',
                    color: '#808080',
                    fontSize: 16,
                    textAlign: 'center',
                  }}>
                  Please upload Business Logo to complete your Profile.
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  // onPress={() => props.navigation.navigate('CreateProfile')}
                  style={{
                    // marginTop: 20,
                    alignItems: 'center',
                    padding: 8,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundColor: 'black',
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 50,
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                    }}>
                    Got it!
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
    // backgroundColor: '#000000',
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
    alignSelf: 'center',
    paddingTop: '10%',
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
    fontFamily: 'Poppins-Regular',
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
    fontSize: 16,
  },
  completeProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: '700',
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
    fontSize: 18,
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
