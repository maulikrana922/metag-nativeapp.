import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native'
import { useFonts } from '@use-expo/font'
// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
// } from "@expo-google-fonts/poppins";
// import { AppLoading } from "expo";
import AppLoading from 'expo-app-loading'

function Signup() {
  let [isLoaded] = useFonts({
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  })
  const [fullName, setFullName] = useState('Full Name')
  const [email, setEmail] = useState('Email')
  const [number, setNumber] = useState('Mobile Number')
  const [bName, setBName] = useState('Business Name')
  const [password, setPassword] = useState('Password')
  const [confirmPassword, setConfirmPassword] = useState('Confirm Password')

  if (!isLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.headerBackground}>
          <Image
            source={require('../../assets/logo.jpg')}
            style={{ width: 50, height: 'auto' }}
          />
          <View style={styles.header}>
            <Text style={styles.text_metag}>meTAG</Text>
            <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
          </View>
        </View>
        <View style={styles.background}>
          <Text style={styles.signin}>Sign Up</Text>

          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
          />

          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setNumber(text)}
            value={number}
          />
          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setBName(text)}
            value={bName}
          />
          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: 'auto',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity style={styles.signin_btn}>
              <Text style={{ color: 'black' }}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.key_text_parent}>
            <Image
              source={require('../../assets/key.png')}
              style={styles.key_img}
            ></Image>
            <Text style={styles.forgotpasword_text}>Forgot Password?</Text>
          </View>
        </View>
        <View style={styles.icon_parent}>
          <Text style={styles.text}>Sign up with:</Text>
          <Image
            source={require('../../assets/Login/instagram.png')}
            style={styles.img_icon}
          ></Image>
          <Image
            source={require('../../assets/Login/linkedin.png')}
            style={styles.img_icon}
          ></Image>
          <Image
            source={require('../../assets/Login/google.png')}
            style={styles.img_icon}
          ></Image>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footer_normal_text}>Alredy have an account?</Text>
          <Text style={styles.footer_bold_text}>SIGN IN</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    margin: 20,
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
    padding: 30,
    height: 'auto',
    // width: 300,
  },
  header: {
    // flex: 1,
    // flexDirection: "column",
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
  },
  signin: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 30,
    paddingBottom: 20,
  },
  text_metag: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 40,
    letterSpacing: 3,
  },
  text_tagline: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 2,
    fontSize: 15,
    color: 'black',
  },
  inputEmail: {
    borderBottomColor: 'white',
    borderWidth: 1,
    height: 40,
    color: 'white',
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
    alignSelf: 'center',
    margin: 10,
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
    // borderBottomColor: "#c2c2a3",
    // borderBottomWidth: 1,
  },
  footer_normal_text: {
    fontFamily: 'Poppins-Regular',
  },
  footer_bold_text: {
    fontFamily: 'Poppins-ExtraBold',
  },
})

export default Signup
