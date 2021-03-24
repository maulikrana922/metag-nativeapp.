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
import AppLoading from 'expo-app-loading'
// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
// } from "@expo-google-fonts/poppins";
// import { AppLoading } from "expo";
import { useFonts } from '@use-expo/font'
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  Svg,
  Path,
  Defs,
  RadialGradient,
  Stop,
  Circle,
  LinearGradient,
} from 'react-native-svg'

export default function Login() {
  let [isLoaded] = useFonts({
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  })
  const [email, setEmail] = useState('Email')
  const [password, setPassword] = useState('Password')

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
          <Text style={styles.signin}>Sign in</Text>

          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setPassword(text)}
            value={password}
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
              <Text style={{ color: 'black' }}>Sign in</Text>
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
          <Text style={styles.text}>Sign in with:</Text>
          {/* <View style={styles.bg_img_icon}> */}
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
          {/* </View> */}
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
    fontFamily: 'Poppins-ExtraBold',
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
    height: 43,
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
  },
  icon_parent: {
    flexDirection: 'row',
    alignContent: 'space-between',
    // backgroundColor: 'orange',
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
    justifyContent: 'space-between',
    // width: 'auto',
    backgroundColor: 'pink',
  },
})
