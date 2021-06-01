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
  ScrollView,
  ImageBackground,
  Modal,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// import {useDispatch} from 'react-redux';
import {getToken, getAuthToken} from '../redux/reducer';
import Logo from '../../assets/Logo/logo.svg';
import bg from '../../assets/Logo/bg.png';
import cancel from '../../assets/CreateProfile/cancel.png';
import axios from 'axios';
import {set} from 'react-native-reanimated';
import Loader from '../components/Loader';

export default function Signup(props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [bName, setBName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoaded, setLoaded] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [serverError, setServerError] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const [error, setError] = useState('');
  // // const [data, setData] = useState({});
  // const show = () => setModalVisible(true);

  // useEffect(() => {}, [modalVisible]);

  const dispatch = useDispatch();
  const {token} = useSelector(state => state);

  const list = () => {
    return serverError.map(e => {
      return (
        <Text style={{color: 'red'}} key={e}>
          {e}
        </Text>
      );
    });
  };

  const upload = data => {
    // try {
    axios
      .post('https://testyourapp.online/metag/api/register', {
        name: data.name,
        email: data.email,
        mobile: data.number,
        business_name: data.Bname,
        password: data.password,
      })
      .then(res => {
        setShowLoader(false);
        if (res.data.errors) {
          console.log('errr', res.data.errors);
          let e = [];

          if (res.data.errors.name) {
            e.push(res.data.errors.name);
          }
          if (res.data.errors.email) {
            e.push(res.data.errors.email);
          }
          if (res.data.errors.mobile) {
            e.push(res.data.errors.mobile);
          }
          if (res.data.errors.business_name) {
            e.push(res.data.errors.business_name);
          }
          if (res.data.errors.password) {
            e.push(res.data.errors.password);
          }
          console.log(modalVisible);
          setModalVisible(true);
          console.log(modalVisible);
          console.log(e);
          setServerError(e);
        } else {
          console.log('data', res.data.data);
          props.navigation.navigate('Login');
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
    if (fullName === '') {
      errorTemplate.name = "Name can't be empty";
    }
    if (email === '') {
      errorTemplate.email = "Email can't be empty";
    }
    if (number === '') {
      errorTemplate.number = "Number can't be empty";
    }
    if (bName === '') {
      errorTemplate.bName = "Business name can't be empty";
    }
    if (password === '') {
      errorTemplate.password = "Password can't be empty";
    }
    if (confirmPassword === '') {
      errorTemplate.confirmPassword = "Password can't be empty";
    }
    if (password !== confirmPassword) {
      errorTemplate.passwordMatch = 'Password and confirmPassword should match';
    }
    // if () {
    //   console.log(errorTemplate);
    // }
    const val = Object.entries(errorTemplate).length;
    if (val) {
      // console.log(errorTemplate);
      setError(errorTemplate);
    } else {
      (data.name = fullName),
        (data.email = email),
        (data.number = number),
        (data.Bname = bName),
        (data.password = password),
        (data.confirmPassword = confirmPassword),
        setShowLoader(true);
      upload(data);
    }
  };

  // const

  if (!isLoaded) {
    return null;
  } else {
    // const dispatch = useDispatch();
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        {/* {console.log(useSelector(state => state.token))} */}
        {/* {dispatch(getAuthToken('thisIsToken'))}
        {console.log(useSelector(state => state.token))} */}
        {/* <Button >Click</Button> */}
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
              <View
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}>
                {list()}
              </View>
            </View>
          </Modal>
          {/* {console.log({modalVisible})} */}
          <View style={styles.container}>
            {showLoader && <Loader />}
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent={true}
            />
            <View style={styles.headerBackground}>
              <Logo width={100} height={100} />
              <View style={styles.header}>
                <Text style={styles.text_metag}>meTAG</Text>
                <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                {/* <Text style={styles.text_metag}>
              meTag
              <Text style={styles.text_tagline}>{'\n'}I M ME,WHO ARE YOU</Text>
            </Text> */}
              </View>
            </View>

            <View style={styles.background}>
              <Text style={styles.signin}>Sign Up</Text>
              {/* <Image source={require('../../assets/signup/user.png')}></Image> */}

              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/user.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Full Name"
                  placeholderTextColor="white"
                  onChangeText={text => setFullName(text.trim())}
                  value={fullName}
                  underlineColorAndroid="transparent"
                />
              </View>
              {error.name && <Text style={{color: 'red'}}>{error.name}</Text>}
              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/email.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Email"
                  placeholderTextColor="white"
                  onChangeText={text => setEmail(text.trim())}
                  value={email}
                />
              </View>
              {error.email && <Text style={{color: 'red'}}>{error.email}</Text>}
              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/iphone.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  keyboardType="numeric"
                  placeholder="Mobile Number"
                  onChangeText={text => setNumber(text.trim())}
                  value={number}
                  placeholderTextColor="white"
                />
              </View>
              {error.number && (
                <Text style={{color: 'red'}}>{error.number}</Text>
              )}
              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/work.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Business Name"
                  placeholderTextColor="white"
                  onChangeText={text => setBName(text.trim())}
                  value={bName}
                />
              </View>
              {error.bName && <Text style={{color: 'red'}}>{error.bName}</Text>}
              <View style={styles.inputTextBg}
                >
                <Image
                  source={require('../../assets/signup/lock.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  style={styles.inputEmail}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="white"
                  onChangeText={text => setPassword(text.trim())}
                  value={password}
                />
              </View>
              {error.password && (
                <Text style={{color: 'red'}}>{error.password}</Text>
              )}
              <View style={styles.inputTextBg}>
                <Image
                  source={require('../../assets/signup/lock.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image>
                <TextInput
                  secureTextEntry={true}
                  style={styles.inputEmail}
                  placeholder="Confirm Password"
                  placeholderTextColor="white"
                  onChangeText={text => setConfirmPassword(text.trim())}
                  value={confirmPassword}
                />
              </View>
              {error.confirmPassword && (
                <Text style={{color: 'red'}}>{error.confirmPassword}</Text>
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
                }}>
                <TouchableOpacity
                  onPress={() => submit()}
                  // onPress={() => {
                  //   dispatch(getAuthToken('AuthToken'));
                  //   console.log('printing token', token);
                  // }}
                  // onPress={() => props.navigation.navigate('CreateProfile')}
                  style={styles.signin_btn}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                    }}>
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>

              {/* <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPassword')}
            style={styles.key_text_parent}>
            <Image
              source={require('../../assets/key.png')}
              style={styles.key_img}></Image>
            <Text style={styles.forgotpasword_text}>Forgot Password?</Text>
          </TouchableOpacity> */}
            </View>
            <View style={styles.icon_parent}>
              <Text style={styles.text}>Sign up with:</Text>
              <View
                style={{
                  width: 'auto',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/Login/instagram.png')}
                  style={styles.img_icon}></Image>
                <Image
                  source={require('../../assets/Login/linkedin.png')}
                  style={styles.img_icon}></Image>
                <Image
                  source={require('../../assets/Login/google.png')}
                  style={styles.img_icon}></Image>
              </View>
            </View>
            <View style={styles.footer}>
              <Text style={styles.footer_normal_text}>
                Alredy have an account?
              </Text>
              <Text
                onPress={() => props.navigation.navigate('Login')}
                style={styles.footer_bold_text}>
                SIGN IN
              </Text>
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
    // backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 16,
    // paddingBottom: 20,
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
    padding: 25,
    height: 'auto',
    // width: 300,
  },
  header: {
    // flex: 1,
    // flexDirection: "column",
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: -15,

    // paddingLeft: 20,
  },
  headerBackground: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: '10%',
    // paddingBottom: 20,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    padding: 30,
    fontSize: 16,
    color: 'black',
  },
  signin: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 28,
    // paddingBottom: 10,
  },
  text_metag: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 45,
    // backgroundColor: 'pink',
    // height: 40,
    // marginTop: -8,
    // alignContect: 'top',
    // textAlign: 'top',
    // padding: 0,
    // x: 0,
    // y: 0,
    // letterSpacing: 3,
    // lineSpacing: 42,
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
  inputEmail: {
    // borderBottomColor: 'white',
    // borderWidth: 1,
    // height: 41,
    fontSize: 20,
    color: 'white',

    // alignSelf: 'stretch',
    // flex: 1,
  },
  signin_btn: {
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
    // color: "white",
  },
  icon_parent: {
    display: 'flex',
    flexDirection: 'row',
    // alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  img_icon: {
    width: 45,
    height: 46,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    marginLeft: 5,
    // alignSelf: 'center',
    // margin: 10,
  },
  bg_img_icon: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    alignItems: 'flex-end',
    marginLeft: 'auto',
    marginRight: 'auto',
    // backgroundColor: 'yellow',
  },
  footer_normal_text: {
    fontFamily: 'Poppins-Regular',
  },
  footer_bold_text: {
    fontFamily: 'Poppins-ExtraBold',
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
    padding:15
  },
});
