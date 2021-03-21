import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
  CheckBox,
} from 'react-native'
import { useFonts } from '@use-expo/font'
import * as ImagePicker from 'expo-image-picker'
import AppLoading from 'expo-app-loading'
// import AvtarImage from "../../assets/avtar.svg";
//
import AvtarImage from '../../assets/work-suitcase.svg'
import applePay from '../../assets/orderDetails/apple_pay_1170221.png'
import wifi from '../../assets/mobile-phone-with-wifi.png'
import qrCode from '../../assets/qr-code.png'
import exampleImg from '../../assets/splash.png'
import userIcon from '../../assets/user.svg'
import suitecaseIcon from '../../assets/work.svg'
import avtar from '../../assets/avatar-home.svg'
import contact from '../../assets/contact.svg'
import list from '../../assets/list.svg'
import home from '../../assets/home-run.svg'

// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import { AppLoading, ImagePicker } from "expo";

export default function CreateProfile() {
  let [isLoaded] = useFonts({
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  })

  const [image, setImage] = useState(null)
  const [newImage, setNewImage] = useState(AvtarImage)

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      // setImage(result.uri);
      setNewImage(result.uri)
    }
  }

  if (!isLoaded) {
    return <AppLoading />
  } else {
    return (
      <View>
        <View style={styles.header_parent}>
          <View>
            <View style={styles.header}>
              {/* <View style={styles.arrowback}></View> */}
              <Image
                source={require('../../assets/arrow-back.svg')}
                style={styles.arrowback}
              ></Image>
              <View style={styles.headerBackground}>
                <Image
                  source={require('../../assets/logo.jpg')}
                  style={{ width: 50, height: 'auto' }}
                />
                <View style={styles.header_text}>
                  <Text style={styles.text_metag}>meTAG</Text>
                  <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                </View>
              </View>
              <Text style={styles.next}></Text>
            </View>
            <Text style={styles.completeProfile}>Change Password</Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: 250,
                padding: 50,
              }}
            >
              <View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    paddingBottom: 5,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.784"
                    height="19.561"
                    viewBox="0 0 14.784 19.561"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <g transform="translate(0 7.506)">
                      <g transform="translate(0)">
                        <path
                          fill="#fff"
                          d="M76.159,196.465H63.649a1.139,1.139,0,0,0-1.137,1.137v9.78a1.139,1.139,0,0,0,1.137,1.137h12.51a1.139,1.139,0,0,0,1.137-1.137V197.6A1.139,1.139,0,0,0,76.159,196.465Zm-.227,10.69H63.877V197.83H75.932v9.325Z"
                          transform="translate(-62.512 -196.465)"
                        />
                      </g>
                    </g>
                    <g transform="translate(1.82)">
                      <g transform="translate(0)">
                        <path
                          fill="#fff"
                          d="M115.712,0a5.6,5.6,0,0,0-5.572,5.618V7.961H111.5V5.618a4.208,4.208,0,1,1,8.416,0V7.961h1.365V5.618A5.6,5.6,0,0,0,115.712,0Z"
                          transform="translate(-110.14)"
                        />
                      </g>
                    </g>
                    <g transform="translate(6.596 12.737)">
                      <g transform="translate(0)">
                        <path
                          fill="#fff"
                          d="M235.845,333.4a.682.682,0,0,0-.682.682v1.592a.682.682,0,0,0,1.365,0v-1.592A.682.682,0,0,0,235.845,333.4Z"
                          transform="translate(-235.163 -333.395)"
                        />
                      </g>
                    </g>
                  </svg>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 10,
                    }}
                  >
                    Old Password
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    paddingBottom: 5,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.784"
                    height="19.561"
                    viewBox="0 0 14.784 19.561"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <g transform="translate(0 7.506)">
                      <g transform="translate(0)">
                        <path
                          fill="#fff"
                          d="M76.159,196.465H63.649a1.139,1.139,0,0,0-1.137,1.137v9.78a1.139,1.139,0,0,0,1.137,1.137h12.51a1.139,1.139,0,0,0,1.137-1.137V197.6A1.139,1.139,0,0,0,76.159,196.465Zm-.227,10.69H63.877V197.83H75.932v9.325Z"
                          transform="translate(-62.512 -196.465)"
                        />
                      </g>
                    </g>
                    <g transform="translate(1.82)">
                      <g transform="translate(0)">
                        <path
                          fill="#fff"
                          d="M115.712,0a5.6,5.6,0,0,0-5.572,5.618V7.961H111.5V5.618a4.208,4.208,0,1,1,8.416,0V7.961h1.365V5.618A5.6,5.6,0,0,0,115.712,0Z"
                          transform="translate(-110.14)"
                        />
                      </g>
                    </g>
                    <g transform="translate(6.596 12.737)">
                      <g transform="translate(0)">
                        <path
                          fill="#fff"
                          d="M235.845,333.4a.682.682,0,0,0-.682.682v1.592a.682.682,0,0,0,1.365,0v-1.592A.682.682,0,0,0,235.845,333.4Z"
                          transform="translate(-235.163 -333.395)"
                        />
                      </g>
                    </g>
                  </svg>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 10,
                    }}
                  >
                    New Password
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    paddingBottom: 5,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.784"
                    height="19.561"
                    viewBox="0 0 14.784 19.561"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <g transform="translate(0 7.506)">
                      <g transform="translate(0)">
                        <path
                          fill="#fff"
                          d="M76.159,196.465H63.649a1.139,1.139,0,0,0-1.137,1.137v9.78a1.139,1.139,0,0,0,1.137,1.137h12.51a1.139,1.139,0,0,0,1.137-1.137V197.6A1.139,1.139,0,0,0,76.159,196.465Zm-.227,10.69H63.877V197.83H75.932v9.325Z"
                          transform="translate(-62.512 -196.465)"
                        />
                      </g>
                    </g>
                    <g transform="translate(1.82)">
                      <g transform="translate(0)">
                        <path
                          fill="#fff"
                          d="M115.712,0a5.6,5.6,0,0,0-5.572,5.618V7.961H111.5V5.618a4.208,4.208,0,1,1,8.416,0V7.961h1.365V5.618A5.6,5.6,0,0,0,115.712,0Z"
                          transform="translate(-110.14)"
                        />
                      </g>
                    </g>
                    <g transform="translate(6.596 12.737)">
                      <g transform="translate(0)">
                        <path
                          fill="#fff"
                          d="M235.845,333.4a.682.682,0,0,0-.682.682v1.592a.682.682,0,0,0,1.365,0v-1.592A.682.682,0,0,0,235.845,333.4Z"
                          transform="translate(-235.163 -333.395)"
                        />
                      </g>
                    </g>
                  </svg>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 10,
                    }}
                  >
                    Confirm New Password
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* here */}
        <View style={{ margin: 40 }}>
          <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>
            Manage Card
          </Text>
          <View
            style={{
              backgroundColor: 'black',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  width: 39,
                  margin: 10,
                  padding: 10,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.787"
                  height="35.288"
                  viewBox="0 0 29.787 35.288"
                >
                  <path
                    d="M.5,162.223V186.33H18.969v-19.2L14.4,162.223Zm16.4,22.04H2.568V164.291H13.5l3.406,3.658Zm0,0"
                    transform="translate(-0.5 -151.042)"
                  />
                  <path
                    d="M210.259,115.808a9.494,9.494,0,0,0-3.458-1.16l-.2,2.058a6.313,6.313,0,0,1,5.623,5.627l2.057-.212A7.875,7.875,0,0,0,210.259,115.808Zm0,0"
                    transform="translate(-192.396 -106.746)"
                  />
                  <path
                    d="M223.567,60.338a13.378,13.378,0,0,0-4.872-1.638l-.195,2.059a11.306,11.306,0,0,1,4.043,1.376,8.981,8.981,0,0,1,4.616,7.29l2.057-.211a11.067,11.067,0,0,0-5.65-8.876Zm0,0"
                    transform="translate(-203.475 -54.654)"
                  />
                  <path
                    d="M233.312,2.186A17.818,17.818,0,0,0,226.82,0l-.195,2.059a15.839,15.839,0,0,1,5.663,1.924,12.6,12.6,0,0,1,6.482,10.229L240.827,14a14.727,14.727,0,0,0-7.516-11.814Zm0,0"
                    transform="translate(-211.04)"
                  />
                  <path
                    d="M70.656,243.506H79.2V234.8H70.656Zm2.068-6.638h4.4v4.57h-4.4Zm0,0"
                    transform="translate(-65.821 -218.617)"
                  />
                </svg>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <Text style={{ color: 'white' }}>Product title</Text>
                <Text style={{ color: '#9FAA11' }}>Currently in use</Text>
              </View>
            </View>
            <CheckBox
              style={{ alignSelf: 'center', marginRight: 10 }}
            ></CheckBox>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    justifyContent: 'space-around',
  },
  arrowback: {
    // backgroundColor: "beige",
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginLeft: 20,
    // color: "white",
  },
  headerBackground: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
    alignSelf: 'center',
    // borderBottomColor: 'white',
    // paddingRight: 40,
  },
  header_text: {
    flex: 1,
    flexDirection: 'column',
    // paddingLeft: 20,
  },
  text_metag: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 30,
    letterSpacing: 3,
    color: 'white',
  },
  text_tagline: {
    fontFamily: '',
    letterSpacing: 2,
    fontSize: 10,
    color: 'white',
  },
  next: {
    fontFamily: 'Poppins-ExtraBold',
    color: 'white',
    alignSelf: 'center',
  },
  completeProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '700',
    paddingBottom: 20,
    backgroundColor: 'black',
    // borderWidth: 2,
    // borderBottomColor: 'white',
    // alignContent:"center",
    textAlign: 'center',
    width: 150,

    // width: "auto",
  },
  connectedByProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    paddingBottom: 10,
    backgroundColor: 'black',
    borderWidth: 2,
    // borderBottomColor: 'white',
    // // alignContent:"center",
    // textAlign:"center",
    // width:150,

    // width: "auto",
  },
  header_parent: {
    backgroundColor: '#000000',
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
    backgroundColor: 'black',
    height: 240,
    width: 200,
    justifyContent: 'center',
    borderRadius: 20,
  },
  avtar_parent: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    // paddingTop: "auto",
    // paddingBottom: "auto",
  },
  upload_text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: '700',
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
  backgroundIcon: {
    width: 70,
    // backgroundIcon:"auto",
    height: 'auto',
    backgroundColor: 'white',
    padding: 10,
    marginRight: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    //   margin:"auto",
    alignItems: 'center',
  },
  backgroundIcon2: {
    width: 70,
    // backgroundIcon:"auto",
    height: 'auto',
    backgroundColor: 'white',
    padding: 10,
    // marginRight: 15,
    //   margin:"auto",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
    alignItems: 'center',
  },
  iconFlex: {
    display: 'flex',
    //   justifyContent:"column"
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    justifyContent: 'center',
    // width:500
  },
  underlineText: {
    textDecorationLine: 'Underline',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  infoBox: {
    width: 'auto',
    // marginLeft: 20,
    // marginTop: 20,
    margin: 20,
    // marign: 30,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  eachInfo: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    // marign: 10,
  },
  productTitle: {
    display: 'flex',
    flexDirection: 'row',
    margin: 8,
    justifyContent: 'space-between',
  },
  productsText: {
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: '700',
  },
  viewAll: {
    textDecorationLine: 'Underline',
  },
  buyBtnBg: {
    backgroundColor: '#40A41D',
    width: 'auto',
    height: 'auto',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // alignSelf: 'flex-end',
  },
  productView: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 10,
  },
  productListView: {
    height: 'auto',
    width: 'auto',
    backgroundColor: 'black',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
})
