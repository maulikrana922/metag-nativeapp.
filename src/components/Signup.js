import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

function Signup(props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [bName, setBName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoaded, setLoaded] = useState(true);

  if (!isLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.headerBackground}>
          <Image
            source={require('../../assets/logo.jpg')}
            style={{width: 50, height: 'auto'}}
          />
          <View style={styles.header}>
            <Text style={styles.text_metag}>meTAG</Text>
            <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
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
              onChangeText={text => setFullName(text)}
              value={fullName}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputTextBg}>
            <Image
              source={require('../../assets/signup/email.png')}
              style={styles.icon}
              resizeMode="contain"></Image>
            <TextInput
              style={styles.inputEmail}
              placeholder="Email"
              placeholderTextColor="white"
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.inputTextBg}>
            <Image
              source={require('../../assets/signup/iphone.png')}
              style={styles.icon}
              resizeMode="contain"></Image>
            <TextInput
              style={styles.inputEmail}
              placeholder="Mobile Number"
              onChangeText={text => setNumber(text)}
              value={number}
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.inputTextBg}>
            <Image
              source={require('../../assets/signup/work.png')}
              style={styles.icon}
              resizeMode="contain"></Image>
            <TextInput
              style={styles.inputEmail}
              placeholder="Business Name"
              placeholderTextColor="white"
              onChangeText={text => setBName(text)}
              value={bName}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderBottomColor: 'white',
              borderWidth: 1,
              // justifyContent: 'space-between',
            }}>
            <Image
              source={require('../../assets/signup/lock.png')}
              style={styles.icon}
              resizeMode="contain"></Image>
            <TextInput
              style={styles.inputEmail}
              placeholder="Password"
              placeholderTextColor="white"
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>
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
            />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: 'auto',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('CreateProfile')}
              style={styles.signin_btn}>
              <Text style={{color: 'black'}}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPassword')}
            style={styles.key_text_parent}>
            <Image
              source={require('../../assets/key.png')}
              style={styles.key_img}></Image>
            <Text style={styles.forgotpasword_text}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.icon_parent}>
          <Text style={styles.text}>Sign up with:</Text>
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
        <View style={styles.footer}>
          <Text style={styles.footer_normal_text}>Alredy have an account?</Text>
          <Text
            onPress={() => props.navigation.navigate('Login')}
            style={styles.footer_bold_text}>
            SIGN IN
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 14,
    // paddingBottom: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  background: {
    // flex: 2,
    backgroundColor: 'black',
    // border-radius: 0% 25%,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 0,
    padding: 20,
    height: 'auto',
    // width: 300,
  },
  header: {
    // flex: 1,
    // flexDirection: "column",
    display: 'flex',
    flexDirection: 'column',

    paddingLeft: 20,
  },
  headerBackground: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
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
    fontSize: 30,
    paddingBottom: 20,
  },
  text_metag: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 35,
    letterSpacing: 3,
  },
  text_tagline: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 2,
    fontSize: 14,
    color: 'black',
  },
  inputEmail: {
    // borderBottomColor: 'white',
    // borderWidth: 1,
    // height: 41,
    fontSize: 14,
    color: 'white',

    // alignSelf: 'stretch',
    // flex: 1,
  },
  signin_btn: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 50,
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
    width: 50,
    height: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignSelf: 'center',
    // margin: 10,
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
    // paddingBottom: 20,
    // borderBottomColor: "#c2c2a3",
    // borderBottomWidth: 1,
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
  },
});

export default Signup;
