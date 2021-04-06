import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
  ImageBackground,
} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import AvtarImage from "../../assets/avtar.svg";

import Tick from '../../assets/CreateProfile/tick.svg';
import bg from '../../assets/Logo/bg.png';
import Logo from '../../assets/Logo/logo.svg';
import AvtarImage from '../../assets/work-suitcase.svg';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
// import facebook from "../../assets/icons8-facebook.svg"
import facebook from '../../assets/facebook.png';
import google from '../../assets/google-plus.png';
// import instagram  from "../../assets/icons8-instagram.svg"
import instagram from '../../assets/instagram.png';

import {TouchableOpacity} from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box';
// import bg from '../../assets/Logo/bg.png';

// import exampleImg from "../../assets/splash.png";

export default function CreateProfile(props) {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== 'web') {
  //       const {
  //         status,
  //       } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== 'granted') {
  //         alert('Sorry, we need camera roll permissions to make this work!');
  //       }
  //     }
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     // setImage(result.uri);
  //     setNewImage(result.uri);
  //   }
  // };

  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        <View style={styles.container}>
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
                onPress={() => props.navigation.navigate('Home')}
                style={styles.next}>
                Next
              </Text>
            </View>
            <Text style={styles.completeProfile}>Complete Profile</Text>
          </View>
          <View style={styles.avtar_parent}>
            <Text style={styles.upload_text}>
              Link your Social media accounts{' '}
            </Text>
            <View style={styles.avtar_bg}>
              {/* <Image
              // source={require("../../assets/avtar.svg")}
              source={newImage}
              style={styles.avtarImage}
            ></Image> */}
              {/* <View style={styles.camera_bg}>
              <View
                style={styles.white_bg}
                onStartShouldSetResponder={pickImage}
              >
                {/* {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                  />
                )} */}
              {/* // setNewImage(exampleImg)} */}
              {/* {image && setNewImage(exampleImg)} */}
              {/* <Image
                  source={require("../../assets/camera-icon.svg")}
                  style={styles.camera_img}
                ></Image> */}
              {/* </View>
            </View> */}

              <View style={styles.socialLogin}>
                <Image source={google} style={styles.logo}></Image>
                <Text style={styles.socialLoginText}>Jerry</Text>

                <TouchableOpacity
                  // checkBoxColor="orange"
                  // checkedCheckBoxColor="red"
                  // uncheckedCheckBoxColor="yellow"
                  style={{
                    borderRadius: 50,
                    width: 20,
                    height: 20,
                    // backgroundColor: 'black',
                    // backgroundColor: '#F5FCFF',
                    // checkedCheckBoxColor: 'pink',
                    // uncheckedCheckBoxColor: 'red',
                    // checkBoxColor: 'pink',

                    // color: 'black',
                    backgroundColor: 'white',
                    color: 'white',
                  }}
                  onPress={() => setChecked(!checked)}
                  // isChecked={checked}
                  // leftText={'CheckBox'}
                >
                  {checked ? (
                    <Tick
                      height={10}
                      width={10}
                      fill="black"
                      style={{
                        marginTop: 'auto',
                        marginRight: 'auto',
                        marginBottom: 'auto',
                        marginLeft: 'auto',
                        backgroundColor: 'white',
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.socialLogin}>
                <Image source={linkedin} style={styles.logo}></Image>
                {/* <Text style={styles.socialLoginText}>Jerry</Text> */}
                {/* <CheckBox
                style={{borderRadius: 100, backgroundColor: 'pink'}}
                //   value={isSelected}
                //   onValueChange={setSelection}
                //   style={styles.checkbox}
              /> */}
              </View>
              <View style={styles.socialLogin}>
                <Image source={twitter} style={styles.logo}></Image>
                {/* <Text style={styles.socialLoginText}>Jerry</Text> */}
              </View>
              <View style={styles.socialLogin}>
                <Image source={instagram} style={styles.logo}></Image>
                <Text style={styles.socialLoginText}>Jerry</Text>

                <TouchableOpacity
                  // checkBoxColor="orange"
                  // checkedCheckBoxColor="red"
                  // uncheckedCheckBoxColor="yellow"
                  style={{
                    borderRadius: 50,
                    width: 20,
                    height: 20,
                    // backgroundColor: 'black',
                    // backgroundColor: '#F5FCFF',
                    // checkedCheckBoxColor: 'pink',
                    // uncheckedCheckBoxColor: 'red',
                    // checkBoxColor: 'pink',

                    // color: 'black',
                    backgroundColor: 'white',
                  }}
                  onPress={() => setChecked2(!checked2)}
                  isChecked={checked2}
                  // leftText={'CheckBox'}
                >
                  <Tick
                    height={10}
                    width={10}
                    fill={checked2 ? 'black' : 'white'}
                    style={{
                      marginTop: 'auto',
                      marginRight: 'auto',
                      marginBottom: 'auto',
                      marginLeft: 'auto',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.socialLogin}>
                <Image source={facebook} style={styles.logo}></Image>
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
    alignSelf: 'center',
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
    marginTop: 50,
    // alignContent: "center",
    // marginTop: "right",
    // marginBottom: "right",
  },
  avtar_bg: {
    display: 'flex',
    // flex: 1,
    backgroundColor: 'black',
    height: 'auto',
    width: 250,
    // padding: 70,
    justifyContent: 'space-evenly',
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 18,
  },
  avtar_parent: {
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // marginTop: 30,
    // width: 'auto',
    // marginLeft: 60,
    // marginRight: 60,
    marginTop: 50,
    // paddingTop: "auto",
    // paddingBottom: "auto",
  },
  upload_text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: '700',
    color: 'black',
    // marginBottom: 14,
    // marginTop: 20,
    fontSize: 14,
    marginBottom: 10,
  },
  camera_img: {
    width: 20,
    height: 20,
    // alignContent: "flex-end",
    // justifyContent: "flex-end",
    backgroundColor: 'white',
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    // padding: 20,
    // marginTop: 40,
    // marginRight: 10,
    // borderRadius: 20,
  },
  camera_bg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 50,
    marginRight: 5,
    marginBottom: 10,
    // width: "auto",
    // borderRadius: 20,
    // backgroundColor: "white",
  },
  white_bg: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    // marginRight: 10,
    // padding: 10,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 34.69,
    height: 34.69,
    borderRadius: 20,
    // marginLeft: 10,
  },
  socialLogin: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
  },
  socialLoginText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    // paddingLeft: 20,
    // width: 70,
  },
  checkboxPadding: {
    paddingLeft: 50,
    paddingRight: 10,
  },
});
