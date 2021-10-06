import React, {useState} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {getVerifyKey, getId} from '../redux/reducer';
import Logo from '../../assets/Logo/logo.svg';
import bg from '../../assets/Logo/bg.png';
import axios from 'axios';
import cancel from '../../assets/CreateProfile/cancel.png';
import url from '../BaseURl/baseurl.json';

function ResetPassword(props) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [serverError, setServerError] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [isLoaded, setLoaded] = useState(true);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  // const [serverError, setServerError] = useState([]);

  const {verifyKey, id} = useSelector(state => state);

  const upload = data => {
    // try {
    axios
      .post(`${url.baseurl}reset-password`, {
        newpassword: data.newPassword,
        confirm_password: data.confirmPassword,
        verify_key: data.verify_key,
        id: data.id,
      })
      .then(res => {
        // console.log('data', res.data);
        // console.log(data);
        if (res.data.errors) {
          console.log('errr', res.data.errors);
          let e = [];
          if (res.data.errors.user_not_found) {
            e.push(res.data.data.errors.user_not_found);
          }
          console.log(modalVisible);
          setModalVisible(true);
          console.log(modalVisible);
          console.log(e);
          setServerError(e);
        } else {
          console.log('data>>>>>>', res.data);

          // setVerifyKey(res.data.data.verify_key, res.data.data.id);
          props.navigation.navigate('Login');
        }
      });
  };

  const submit = () => {
    const data = {};

    const errorTemplate = {};
    if (newPassword === '') {
      errorTemplate.newPassword = "New Password can't be empty";
    }
    if (newPassword.length < 8) {
      errorTemplate.passwordLength =
        'Password should be at least 8 characters long';
    }
    if (/[a-z]/.test(newPassword) === false) {
      errorTemplate.lowerCase = 'Must contain lowercase';
    }
    if (/[A-Z]/.test(newPassword) === false) {
      errorTemplate.upperCase = 'Must contain uppercase';
    }
    if (/\d/g.test(newPassword) === false) {
      errorTemplate.passwordNumber = 'Must conain number';
    }
    if (
      /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(newPassword) === false
    ) {
      errorTemplate.specialSymbol = 'Must contain special symbol';
    }

    if (confirmPassword === '') {
      errorTemplate.confirmPassword = "Confirm Password can't be empty";
    }
    if (newPassword !== confirmPassword) {
      errorTemplate.passwordMatch =
        'Password and Confirm Password should match';
    }
    const val = Object.entries(errorTemplate).length;
    if (val) {
      // console.log(errorTemplate);
      setError(errorTemplate);
    } else {
      (data.newPassword = newPassword),
        (data.confirmPassword = confirmPassword),
        (data.verify_key = verifyKey),
        (data.id = id),
        upload(data);
    }
  };

  if (!isLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
          <Modal
            // style={{
            //   backgroundColor: 'yellow',
            //   // margin: '30%',
            //   // width: '60%',
            //   // height: '60%',
            //   // margin: '40%',
            // }}
            transparent={true}
            visible={modalVisible}>
            <View
              style={{
                backgroundColor: '#eeeeee',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 'auto',
                marginBottom: 'auto',
                width: '80%',
                height: '80%',
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  // backgroundColor: 'red',
                  width: '5%',
                  height: '5%',
                  marginLeft: 'auto',
                  marginRight: '5%',
                  marginTop: '3%',
                }}>
                <Image
                  source={cancel}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}></Image>
              </TouchableOpacity>
              <Text
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}>
                {serverError}
              </Text>
            </View>
          </Modal>
          {/* {console.log(verifyKey)} */}
          {console.log('printID', id)}
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
              <Text style={styles.forgot}>Reset</Text>
              <Text style={styles.password}>Password</Text>

              {/* <TextInput
            style={styles.inputEmail}
            onChangeText={text => setNewPassword(text)}
            value={newPassword}
          />
          <TextInput
            style={styles.inputEmail}
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
          /> */}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  borderBottomColor: 'white',
                  borderWidth: 1,
                  paddingBottom: 5,
                  // marginTop: 20,
                  marginBottom: 40,
                  // justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../../assets/signup/lock.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="New Password"
                  placeholderTextColor="white"
                  onChangeText={text => setNewPassword(text)}
                  value={newPassword}
                  secureTextEntry={true}
                />
              </View>
              {error.newPassword && (
                <Text
                  style={{
                    color: 'red',
                    borderWidth: 1,
                    // borderColor: 'yellow',
                    marginBottom: 5,
                    marginTop: 5,
                    fontSize: 14,
                  }}>
                  {error.newPassword}
                </Text>
              )}
              {error.passwordLength && (
                <Text style={{color: 'red'}}>{error.passwordLength}</Text>
              )}
              {error.lowerCase && (
                <Text style={{color: 'red'}}>{error.lowerCase}</Text>
              )}
              {error.upperCase && (
                <Text style={{color: 'red'}}>{error.upperCase}</Text>
              )}
              {error.passwordNumber && (
                <Text style={{color: 'red'}}>{error.passwordNumber}</Text>
              )}
              {error.specialSymbol && (
                <Text style={{color: 'red'}}>{error.specialSymbol}</Text>
              )}
              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/lock.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Confirm Password"
                  placeholderTextColor="white"
                  onChangeText={text => setConfirmPassword(text)}
                  value={confirmPassword}
                  secureTextEntry={true}
                />
              </View>
              {error.confirmPassword && (
                <Text
                  style={{
                    color: 'red',
                    borderWidth: 1,
                    // borderColor: 'yellow',
                    marginBottom: 5,
                    marginTop: 5,
                    fontSize: 14,
                  }}>
                  {error.confirmPassword}
                </Text>
              )}
              {error.passwordMatch && (
                <Text style={{color: 'red'}}>{error.passwordMatch}</Text>
              )}
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: 'auto',
                  flexDirection: 'row',
                  marginBottom: 40,
                }}>
                <TouchableOpacity
                  style={styles.signin_btn}
                  onPress={() => submit()}>
                  <Text
                    style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={styles.footer}>
                <Text
                  style={styles.footer_bold_text}
                  onPress={() => {
                    props.navigation.navigate('Login');
                  }}>
                  Back to Login
                </Text>
              </View>
            </View>
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
    // backgroundColor: 'white',
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
    padding: 30,
    height: 'auto',
    // width: 300,
  },
  header: {
    // flex: 1,
    // flexDirection: "column",
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
    paddingBottom: 10,
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
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
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
    paddingBottom: 4,
    // borderColor: 'red',
    // borderWidth: 1,

    // paddingTop: 60,
  },
  footer_normal_text: {
    fontFamily: 'Poppins-Regular',
    marginTop: 'auto',
  },
  footer_bold_text: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 18,
  },
  password: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 28,
    paddingBottom: 20,
  },
  // footer_bg: {
  //   display: "flex",
  //   justifyContent: "center",
  // },
  // footer_text: {
  //   fontFamily: "Poppins_400Regular",
  //   color: "black",
  // },
  inputEmail: {
    // backgroundColor: 'red',
    borderWidth: 1,
    padding: 5,
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    width: '90%',
  },

  icon: {
    // height: 20,
    alignSelf: 'center',
    marginRight: 10,
    // width: 25,
  },
  inputTextBg: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderWidth: 1,
    paddingBottom: 10,
  },
});

export default ResetPassword;
