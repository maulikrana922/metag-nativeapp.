import React, { useEffect, useState } from 'react'
import * as Svg from 'react-native-svg'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { useFonts } from '@use-expo/font'
import * as ImagePicker from 'expo-image-picker'
import AppLoading from 'expo-app-loading'
// import AvtarImage from "../../assets/avtar.svg";
//
import AvtarImage from '../../assets/work-suitcase.svg'
import wifi from '../../assets/mobile-phone-with-wifi.png'
import qrCode from '../../assets/qr-code.png'
import exampleImg from '../../assets/splash.png'
import userIcon from '../../assets/user.svg'
import suitecaseIcon from '../../assets/work.svg'
import avtar from '../../assets/avatar-home.svg'
import contact from '../../assets/contact.svg'
import list from '../../assets/list.svg'
import home from '../../assets/home-run.svg'
import more from '../../assets/myProfile/more.svg'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google-plus.png'
import instagram from '../../assets/instagram.png'

// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import { AppLoading, ImagePicker } from "expo";

export default function MyProfile() {
  let [isLoaded] = useFonts({
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
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
      <View style={{ flex: 1 }}>
        <View style={styles.header_parent}>
          <View>
            <View style={styles.header}>
              {/* <View style={styles.arrowback}></View> */}
              {/* <Image
                source={require('../../assets/arrow-back.svg')} 
                style={styles.arrowback}
              ></Image> */}
              <View style={{ alignSelf: 'center' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30.802"
                  height="30.802"
                  viewBox="0 0 30.802 30.802"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <path fill="#fff" d="M1.8,1.8H7.219V0H0V7.219H1.8Zm0,0" />
                  <path
                    fill="#fff"
                    d="M392,0V1.8h5.414V7.219h1.8V0Zm0,0"
                    transform="translate(-368.418)"
                  />
                  <path
                    fill="#fff"
                    d="M397.414,397.414H392v1.8h7.219V392h-1.8Zm0,0"
                    transform="translate(-368.418 -368.418)"
                  />
                  <path
                    fill="#fff"
                    d="M1.8,392H0v7.219H7.219v-1.8H1.8Zm0,0"
                    transform="translate(0 -368.418)"
                  />
                  <path
                    fill="#fff"
                    d="M61,60v9.024h9.024V63.61h1.8V61.8h-1.8V60Zm7.219,7.219H62.8V61.8h5.414Zm0,0"
                    transform="translate(-57.33 -56.39)"
                  />
                  <path
                    fill="#fff"
                    d="M281.829,280.829V271.8h-3.61V270h-1.8v1.8H271v1.8h1.8v1.8H271v1.8h1.8v3.61Zm-7.219-7.219h5.414v5.414H274.61Zm0,0"
                    transform="translate(-254.697 -253.757)"
                  />
                  <path
                    fill="#fff"
                    d="M66.414,241.8h3.61V240H61v1.8h3.61v1.8H62.8v1.8h1.8v3.61H62.8v1.8h1.8v1.8h9.024v-1.8h-1.8v-1.8h-1.8v1.8h-3.61v-1.8h1.8v-1.8h-1.8Zm0,0"
                    transform="translate(-57.33 -225.562)"
                  />
                  <path
                    fill="#fff"
                    d="M121,120h1.8v1.8H121Zm0,0"
                    transform="translate(-113.721 -112.781)"
                  />
                  <path
                    fill="#fff"
                    d="M361,120h1.8v1.8H361Zm0,0"
                    transform="translate(-339.283 -112.781)"
                  />
                  <path
                    fill="#fff"
                    d="M306.414,69.024h3.61V60H301v9.024h3.61v1.8h1.8Zm-3.61-1.8V61.8h5.414v5.414Zm0,0"
                    transform="translate(-282.892 -56.39)"
                  />
                  <path
                    fill="#fff"
                    d="M394.61,241.8V240H391v1.8Zm0,0"
                    transform="translate(-367.478 -225.562)"
                  />
                  <path
                    fill="#fff"
                    d="M361,360h1.8v1.8H361Zm0,0"
                    transform="translate(-339.283 -338.343)"
                  />
                  <path
                    fill="#fff"
                    d="M241,330h1.8v1.8H241Zm0,0"
                    transform="translate(-226.502 -310.147)"
                  />
                  <path
                    fill="#fff"
                    d="M181,303.61h1.8V300H181Zm0,0"
                    transform="translate(-170.111 -281.952)"
                  />
                  <path
                    fill="#fff"
                    d="M211,270h1.8v1.8H211Zm0,0"
                    transform="translate(-198.306 -253.757)"
                  />
                  <path
                    fill="#fff"
                    d="M62.8,330H61v3.61h1.8Zm0,0"
                    transform="translate(-57.33 -310.147)"
                  />
                  <path
                    fill="#fff"
                    d="M61,420h1.8v1.8H61Zm0,0"
                    transform="translate(-57.33 -394.733)"
                  />
                  <path
                    fill="#fff"
                    d="M241,60h1.8v1.8H241Zm0,0"
                    transform="translate(-226.502 -56.39)"
                  />
                  <path
                    fill="#fff"
                    d="M241,123.61h1.8V120H241Zm0,0"
                    transform="translate(-226.502 -112.781)"
                  />
                  <path
                    fill="#fff"
                    d="M242.8,211.8V210H241v3.61h7.219v-1.8Zm0,0"
                    transform="translate(-226.502 -197.367)"
                  />
                </svg>
              </View>
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
              {/* <Text style={styles.next}>  </Text> */}
              {/* <Image source={more} style={{ height: 60, width: 30 }}></Image> */}
              <View style={{ alignSelf: 'center' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.269"
                  height="25.077"
                  viewBox="0 0 6.269 25.077"
                >
                  <defs></defs>
                  <g transform="translate(-193.334 0)">
                    <path
                      fill="white"
                      d="M198.685.918a3.135,3.135,0,1,1-4.433,0,3.135,3.135,0,0,1,4.433,0"
                    />
                    <path
                      fill="white"
                      d="M198.685,194.252a3.135,3.135,0,1,1-4.433,0,3.135,3.135,0,0,1,4.433,0"
                      transform="translate(0 -183.93)"
                    />
                    <path
                      fill="white"
                      d="M198.685,387.584a3.135,3.135,0,1,1-4.433,0,3.135,3.135,0,0,1,4.433,0"
                      transform="translate(0 -367.858)"
                    />
                  </g>
                </svg>
              </View>
            </View>
            <Text style={styles.completeProfile}>Contacts</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 'auto',
              justifyContent: 'space-around',
              marginLeft: 40,
              marginRight: 40,
            }}
          >
            <TouchableOpacity style={styles.choiceMenu}>
              <Text style={{ color: 'black', textAlign: 'center' }}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.choiceMenu}>
              <Text style={{ color: 'black', textAlign: 'center' }}>
                Recived
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.choiceMenu}>
              <Text style={{ color: 'black', textAlign: 'center' }}>Sent</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* list  */}
        <View style={{ margin: 20 }}>
          <View style={{ display: 'flex' }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10,
              }}
            >
              <View style={styles.avatarBg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40.203"
                  height="40.203"
                  viewBox="0 0 60.203 60.203"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    margin: 10,
                  }}
                >
                  <defs>
                    <style></style>
                  </defs>
                  <g transform="translate(-10.532 -10.267)">
                    <path
                      fill="#bfbfbf"
                      d="M61.041,55.791,49.2,52.829,48.189,48.8a21.317,21.317,0,0,0,5.983-11.869,4.646,4.646,0,0,0,3.351-3.889l.773-6.184a4.629,4.629,0,0,0-2.959-4.9l.284-5.822,1.156-1.159c1.741-1.852,3.184-5.027.167-9.634C54.626,1.8,50.687,0,45.233,0A20.378,20.378,0,0,0,33.515,3.1c-13.171.275-14.964,6.394-14.964,12.361,0,1.388.337,4.514.56,6.4a4.643,4.643,0,0,0-3.2,5l.773,6.184A4.652,4.652,0,0,0,20.4,37.021a21.451,21.451,0,0,0,5.686,11.508l-1.076,4.307L13.165,55.8A17.34,17.34,0,0,0,0,72.657,1.547,1.547,0,0,0,1.546,74.2H72.657A1.552,1.552,0,0,0,74.2,72.651,17.352,17.352,0,0,0,61.041,55.791Z"
                      transform="translate(10.532 10.267)"
                    />
                  </g>
                </svg>
              </View>
              <View
                style={{
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  paddingLeft: 10,
                }}
              >
                <Text style={{ fontFamily: 'Poppins-ExtraBold' }}>
                  James wink
                </Text>
                <Text style={{ fontFamily: 'Poppins-Regular' }}>
                  Aqua system LLC
                </Text>
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10,
              }}
            >
              <View style={styles.avatarBg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40.203"
                  height="40.203"
                  viewBox="0 0 60.203 60.203"
                  style={{ marginLeft: 'auto', marginRight: 'auto' }}
                >
                  <defs>
                    <style></style>
                  </defs>
                  <g transform="translate(-10.532 -10.267)">
                    <path
                      fill="#bfbfbf"
                      d="M61.041,55.791,49.2,52.829,48.189,48.8a21.317,21.317,0,0,0,5.983-11.869,4.646,4.646,0,0,0,3.351-3.889l.773-6.184a4.629,4.629,0,0,0-2.959-4.9l.284-5.822,1.156-1.159c1.741-1.852,3.184-5.027.167-9.634C54.626,1.8,50.687,0,45.233,0A20.378,20.378,0,0,0,33.515,3.1c-13.171.275-14.964,6.394-14.964,12.361,0,1.388.337,4.514.56,6.4a4.643,4.643,0,0,0-3.2,5l.773,6.184A4.652,4.652,0,0,0,20.4,37.021a21.451,21.451,0,0,0,5.686,11.508l-1.076,4.307L13.165,55.8A17.34,17.34,0,0,0,0,72.657,1.547,1.547,0,0,0,1.546,74.2H72.657A1.552,1.552,0,0,0,74.2,72.651,17.352,17.352,0,0,0,61.041,55.791Z"
                      transform="translate(10.532 10.267)"
                    />
                  </g>
                </svg>
              </View>
              <View
                style={{
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  paddingLeft: 10,
                }}
              >
                <Text style={{ fontFamily: 'Poppins-ExtraBold' }}>
                  James wink
                </Text>
                <Text style={{ fontFamily: 'Poppins-Regular' }}>
                  Aqua system LLC
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#676767',
                  padding: 8,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  borderRadius: 100,
                  marginLeft: 40,
                  // height: 'auto',
                  // width: 'auto',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24.006"
                  viewBox="0 0 24 24.006"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <path
                    fill="#fff"
                    d="M8.636,21,3.191,15.557,16.36,2.388,21.8,7.833ZM2.682,16.516l4.995,4.995L.188,24ZM23.48,6.165l-.944.944L17.083,1.657l.944-.944a2.435,2.435,0,0,1,3.445,0L23.48,2.72a2.449,2.449,0,0,1,0,3.445Zm0,0"
                    transform="translate(-0.188 0.001)"
                  />
                </svg>
              </View>
              <View
                style={{
                  backgroundColor: '#E61D1D',
                  padding: 8,
                  // paddingLeft: 11,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  borderRadius: 100,
                  marginLeft: 10,
                  // height: 'auto',
                  // width: 'auto',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ marginLeft: 'auto', marginRight: 'auto' }}
                >
                  <defs>
                    <style></style>
                  </defs>
                  <g transform="translate(-52.016)">
                    <g transform="translate(52.016)">
                      <path
                        fill="#fff"
                        d="M74.779,115.013a1.1,1.1,0,0,0,1.1,1.058H86.194a1.1,1.1,0,0,0,1.1-1.058l.736-15.545H74.043Zm8.592-11.684a.449.449,0,0,1,.449-.449h.718a.449.449,0,0,1,.449.449v8.881a.449.449,0,0,1-.449.449H83.82a.449.449,0,0,1-.449-.449Zm-3.14,0a.449.449,0,0,1,.449-.449H81.4a.449.449,0,0,1,.449.449v8.881a.449.449,0,0,1-.449.449H80.68a.449.449,0,0,1-.449-.449v-8.881Zm-3.14,0a.449.449,0,0,1,.449-.449h.718a.449.449,0,0,1,.449.449v8.881a.449.449,0,0,1-.449.449H77.54a.449.449,0,0,1-.449-.449Z"
                        transform="translate(-72.86 -94.124)"
                      />
                      <path
                        fill="#fff"
                        d="M67.681,1.131H62.924v-.9A.231.231,0,0,0,62.693,0h-5a.231.231,0,0,0-.231.231v.9H52.709a.693.693,0,0,0-.693.693V4H68.374V1.824A.693.693,0,0,0,67.681,1.131Z"
                        transform="translate(-52.016)"
                      />
                    </g>
                  </g>
                </svg>
              </View>
            </View>
          </View>
        </View>
        {/* here */}
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: '#EEEEEE',
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <View>
              <Image source={home} style={styles.menuIcon}></Image>
            </View>
            <View>
              <Image source={contact} style={styles.menuIcon}></Image>
            </View>
            <View>
              <Image source={list} style={styles.menuIcon}></Image>
            </View>
            <View>
              <Image source={avtar} style={styles.menuIcon}></Image>
            </View>
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
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: '700',
    paddingBottom: 10,
    backgroundColor: 'black',
    borderWidth: 2,
    borderBottomColor: '#808080',
    // alignContent:"center",
    textAlign: 'center',
    width: 200,

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
  logo: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoPadding: {
    paddingLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  choiceMenu: {
    width: 90,
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  avatarBg: {
    backgroundColor: '#f2f2f2',
    width: 70,
    height: 70,
    // padding: 20,
    // alignItems: 'center',
    justifyContent: 'center',
    // selfAlign: 'center',
    display: 'flex',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    borderRadius: 100,
  },
})
