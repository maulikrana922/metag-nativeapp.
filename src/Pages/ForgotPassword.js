import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Modal,
} from 'react-native';
// import { useFonts } from '@use-expo/font'
// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
// } from "@expo-google-fonts/poppins";
// import { AppLoading } from "expo";
// import AppLoading from 'expo-app-loading'
import bg from '../../assets/Logo/bg.png';
import Logo from '../../assets/Logo/logo.svg';
import axios from 'axios';
import cancel from '../../assets/CreateProfile/cancel.png';

import url from '../BaseURl/baseurl.json';

function ForgotPassword(props) {
  const [email, setEmail] = useState('');
  const [isLoaded, setLoaded] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [serverError, setServerError] = useState();
  const [error, setError] = useState('');
  const [disable, setDisable] = useState(false);
  const upload = data => {
    // try {
    axios
      .post(`${url.baseurl}forgot-password`, {
        email: data.email,
      })
      .then(res => {
        // console.log(res.data);
        if (res.data.errors) {
          setDisable(false);
          console.log('errr', res.data.errors.error);
          setServerError(res.data.errors.error);
          let e = [];
          if (res.data.errors.email) {
            e.push(res.data.errors.email);
          }

          console.log(modalVisible);
          setModalVisible(true);
          console.log(modalVisible);
          console.log(e);
          //setServerError(e);
        } else {
          // setTokenBack(res.data.data.token);
          setDisable(true);
          props.navigation.navigate('VerifyOTP', {
            email: data.email,
          });
        }
      });
    // .catch(error => {
    //   console.log(error);
    //   show();
    // });
  };

  const submit = () => {
    const data = {};

    const errorTemplate = {};
    if (email === '') {
      errorTemplate.email = "Email can't be empty";
      setDisable(false);
    }
    setDisable(false);
    // if () {
    //   console.log(errorTemplate);
    // }
    const val = Object.entries(errorTemplate).length;
    if (val) {
      // console.log(errorTemplate);
      setError(errorTemplate);
      setDisable(false);
    } else {
      setDisable(true);
      (data.email = email), upload(data);
      console.log('data email' + data.email);
      console.log('email' + email);
    }
  };

  if (!isLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
          <Modal
            statusBarTranslucent={true}
            transparent={true}
            visible={modalVisible}>
            <View
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  width: '80%',
                  height: '10%',
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{
                    // backgroundColor: 'red',
                    width: '17%',
                    height: '17%',
                    marginLeft: 'auto',
                    // marginRight: '5%',
                    marginTop: '3%',
                  }}>
                  <Image
                    source={cancel}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}></Image>
                </TouchableOpacity>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 20,
                    fontWeight: '700',
                    padding: 5,
                    textAlign: 'center',
                  }}>
                  {serverError}
                </Text>
              </View>
            </View>
          </Modal>
          <View style={styles.container}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent={true}
            />
            <View style={styles.headerBackground}>
              {/* <Image
            source={require('../../assets/logo.jpg')}
            style={{width: 50, height: 'auto'}}
          /> */}
              <Logo width={100} height={100} />
              <View style={styles.header}>
                <Text style={styles.text_metag}>meTAG</Text>
                <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
              </View>
            </View>
            <View style={styles.background}>
              <Text style={styles.forgot}>Forgot</Text>
              <Text style={styles.password}>password</Text>

              {/* <TextInput
            style={styles.inputEmail}
            onChangeText={text => setEmail(text)}
            value={email}
          /> */}
              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/email.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Email/Mobile number"
                  placeholderTextColor="white"
                  onChangeText={text => setEmail(text)}
                  value={email}
                />
              </View>
              {error.email && (
                <Text style={{color: 'red', paddingTop: 10}}>
                  {error.email}
                </Text>
              )}
              {/* <View style={styles.signin_btn}>
            <Button title="Sign in" color="white" />
          </View> */}
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  // width: 'auto',
                  // width: '100%',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={
                    disable === false
                      ? styles.signin_btn
                      : {...styles.signin_btn, backgroundColor: 'grey'}
                  }
                  onPress={() => {
                    submit();
                  }}
                  disabled={disable}
                  // onPress={() => props.navigation.navigate('VerifyOTP')}
                >
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Poppins-Regular',
                      // width: '100%',
                      fontSize: 14,
                    }}>
                    Send
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={styles.footer}>
                <Text
                  style={styles.footer_bold_text}
                  onPress={() => props.navigation.navigate('Login')}>
                  Back to Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#fff',
    padding: 16,
    // alignItems: "center",
    // justifyContent: "center",
  },
  background: {
    // flex: 2,
    backgroundColor: 'black',
    // border-radius: 0% 25%,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 80,
    borderTopLeftRadius: 0,
    paddingTop: 50,
    paddingBottom: 70,
    paddingHorizontal: 30,
    marginTop: 20,
    height: 'auto',
    // width: 300,
  },
  header: {
    // flex: 1,
    // flexDirection: "column",
    // paddingLeft: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  headerBackground: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingTop: '10%',
    // borderWidth: 1,
    paddingLeft: 15,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    padding: 30,
  },
  forgot: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 28,
    // paddingBottom: 20,
  },
  text_metag: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 45,
  },
  text_tagline: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 2,
    fontSize: 12,
    marginTop: -15,
    // backgroundColor: 'red',
    padding: 0,
    color: 'black',
  },
  signin_btn: {
    // paddingTop: 20,
    marginTop: 20,
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 20,
    width: 100,
  },
  key_text_parent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    paddingTop: 30,
  },
  forgotpasword_text: {
    color: 'white',
  },
  key_img: {
    width: 20,
    height: 20,
    color: 'white',
  },
  icon_parent: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  img_icon: {
    width: 50,
    height: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  bg_img_icon: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingTop: 60,
    // backgroundColor: 'yellow',
  },
  footer_normal_text: {
    fontFamily: 'Poppins-Regular',
    marginTop: 'auto',
  },
  footer_bold_text: {
    fontFamily: 'Poppins-ExtraBold',
    marginTop: 'auto',
    fontSize: 18,
    // backgroundColor: 'red',
  },
  password: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 28,
    paddingBottom: 20,
  },
  inputTextBg: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderWidth: 1,
    marginTop: 30,
    paddingBottom: 10,
  },
  icon: {
    // height: 20,
    alignSelf: 'center',
    marginRight: 10,
    // width: 25,
  },
  inputEmail: {
    // backgroundColor: 'red',
    fontSize: 20,
    color: 'white',
    width: '90%',

    // alignSelf: 'stretch',
    // flex: 1,
  },
  // footer_bg: {
  //   display: "flex",
  //   justifyContent: "center",
  // },
  // footer_text: {
  //   fontFamily: "Poppins_400Regular",
  //   color: "black",
  // },
});

export default ForgotPassword;
