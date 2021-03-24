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
              <View style={{ alignSelf: ' center' }}>
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
            <Text style={styles.completeProfile}>My Profile</Text>
          </View>
          {/*three View*/}
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <View style={{ padding: 20 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.941"
                height="26.118"
                viewBox="0 0 23.941 26.118"
              >
                <defs>
                  <style></style>
                </defs>
                <g transform="translate(0 0)">
                  <path
                    fill="#fff"
                    d="M321.741,19.537A3.537,3.537,0,1,1,318.2,16,3.537,3.537,0,0,1,321.741,19.537Zm0,0"
                    transform="translate(-298.616 -15.184)"
                  />
                  <path
                    fill="#fff"
                    d="M303.021,8.706a4.353,4.353,0,1,1,4.353-4.353A4.357,4.357,0,0,1,303.021,8.706Zm0-7.074a2.721,2.721,0,1,0,2.721,2.721,2.724,2.724,0,0,0-2.721-2.721Zm0,0"
                    transform="translate(-283.432 0)"
                  />
                  <path
                    fill="#fff"
                    d="M321.741,360.869a3.537,3.537,0,1,1-3.537-3.537A3.537,3.537,0,0,1,321.741,360.869Zm0,0"
                    transform="translate(-298.616 -339.104)"
                  />
                  <path
                    fill="#fff"
                    d="M303.021,350.038a4.353,4.353,0,1,1,4.353-4.353A4.357,4.357,0,0,1,303.021,350.038Zm0-7.074a2.721,2.721,0,1,0,2.721,2.721A2.724,2.724,0,0,0,303.021,342.964Zm0,0"
                    transform="translate(-283.432 -323.92)"
                  />
                  <path
                    fill="#fff"
                    d="M23.074,190.2a3.537,3.537,0,1,1-3.537-3.537A3.537,3.537,0,0,1,23.074,190.2Zm0,0"
                    transform="translate(-15.184 -177.146)"
                  />
                  <path
                    fill="#fff"
                    d="M4.353,179.374a4.353,4.353,0,1,1,4.353-4.353,4.357,4.357,0,0,1-4.353,4.353Zm0-7.074a2.721,2.721,0,1,0,2.721,2.721A2.724,2.724,0,0,0,4.353,172.3Zm0,0"
                    transform="translate(0 -161.962)"
                  />
                  <path
                    fill="#fff"
                    d="M115.438,98.149a1.088,1.088,0,0,1-.54-2.034L125,90.358a1.088,1.088,0,1,1,1.077,1.891l-10.1,5.757A1.081,1.081,0,0,1,115.438,98.149Zm0,0"
                    transform="translate(-108.515 -85.612)"
                  />
                  <path
                    fill="#fff"
                    d="M125.556,274.153a1.081,1.081,0,0,1-.538-.143l-10.1-5.757A1.088,1.088,0,0,1,116,266.362l10.1,5.757a1.088,1.088,0,0,1-.54,2.034Zm0,0"
                    transform="translate(-108.537 -252.638)"
                  />
                </g>
              </svg>
            </View>
            <View
              style={{
                backgroundColor: '#f2f2f2',
                padding: 20,
                width: 100,
                height: 100,
                borderRadius: 100,
                alignItems: 'center',
                position: 'absolute',
                top: 20,
                left: 135,
                // marginLeft: 'auto',
                // marginRight: 'auto',
                // top: 100,
                // z-index:-1
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74.203"
                height="74.203"
                viewBox="0 0 74.203 74.203"
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
            <View style={{ padding: 20 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24.006"
                viewBox="0 0 24 24.006"
              >
                <defs></defs>
                <path
                  fill="#fff"
                  d="M8.636,21,3.191,15.557,16.36,2.388,21.8,7.833ZM2.682,16.516l4.995,4.995L.188,24ZM23.48,6.165l-.944.944L17.083,1.657l.944-.944a2.435,2.435,0,0,1,3.445,0L23.48,2.72a2.449,2.449,0,0,1,0,3.445Zm0,0"
                  transform="translate(-0.188 0.001)"
                />
              </svg>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 60 }}>
          <Text
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              fontFamily: 'Poppins-Regular',
            }}
          >
            John Copeland
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            margin: 20,
          }}
        >
          <View>
            <Image source={google} style={styles.logo}></Image>
          </View>
          <View>
            <Image source={linkedin} style={styles.logo}></Image>
          </View>
          <View>
            <Image source={twitter} style={styles.logo}></Image>
          </View>
          <View>
            <Image source={instagram} style={styles.logo}></Image>
          </View>
          <View>
            <Image source={facebook} style={styles.logo}></Image>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
            height: 150,
          }}
        >
          <View style={styles.info}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.204"
              height="17.24"
              viewBox="0 0 18.204 17.24"
            >
              <path
                d="M17.675,2.3H12.836V1.724A1.667,1.667,0,0,0,11.236,0H6.969a1.667,1.667,0,0,0-1.6,1.724V2.3H.534A.557.557,0,0,0,0,2.873V15.516A1.667,1.667,0,0,0,1.6,17.24h15a1.667,1.667,0,0,0,1.6-1.724V2.883c-.02-.377-.236-.582-.53-.584ZM6.436,1.724a.556.556,0,0,1,.533-.575h4.267a.556.556,0,0,1,.533.575V2.3H6.436Zm10.5,1.724L15.275,8.8a.537.537,0,0,1-.506.393h-3V8.62a.555.555,0,0,0-.533-.575H6.969a.555.555,0,0,0-.533.575v.575h-3A.537.537,0,0,1,2.93,8.8L1.274,3.448ZM10.7,9.194v1.149H7.5V9.194Zm6.436,6.321a.556.556,0,0,1-.533.575H1.6a.556.556,0,0,1-.533-.575v-9.1l.851,2.751a1.613,1.613,0,0,0,1.518,1.179h3v.575a.555.555,0,0,0,.533.575h4.267a.555.555,0,0,0,.533-.575v-.575h3a1.613,1.613,0,0,0,1.518-1.179l.851-2.751Zm0,0"
                transform="translate(0)"
              />
            </svg>
            <Text style={styles.infoPadding}>Aqua System LLC</Text>
          </View>
          <View style={styles.info}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.204"
              height="17.24"
              viewBox="0 0 19.5 15.758"
            >
              <defs>
                <style></style>
              </defs>
              <path
                fill="#020202"
                d="M17.672,59.882H1.828A1.905,1.905,0,0,0,0,61.852V73.67a1.9,1.9,0,0,0,1.828,1.97H17.672A1.9,1.9,0,0,0,19.5,73.67V61.852A1.905,1.905,0,0,0,17.672,59.882Zm0,1.313a.568.568,0,0,1,.234.051L9.75,68.862,1.595,61.246a.569.569,0,0,1,.234-.051Zm0,13.132H1.828a.635.635,0,0,1-.609-.657V62.633l8.132,7.594a.578.578,0,0,0,.8,0l8.132-7.594V73.67A.635.635,0,0,1,17.672,74.327Z"
                transform="translate(0 -59.882)"
              />
            </svg>
            <Text style={styles.infoPadding}>Johncopaland@domain.com</Text>
          </View>
          <View style={styles.info}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.204"
              height="17.24"
              viewBox="0 0 12.667 20.267"
            >
              <g transform="translate(-99)">
                <path d="M109.767,0H100.9A1.9,1.9,0,0,0,99,1.9V18.367a1.9,1.9,0,0,0,1.9,1.9h8.867a1.9,1.9,0,0,0,1.9-1.9V1.9A1.9,1.9,0,0,0,109.767,0ZM100.9,1.267h8.867a.634.634,0,0,1,.633.633V15.2H100.267V1.9A.634.634,0,0,1,100.9,1.267ZM109.767,19H100.9a.634.634,0,0,1-.633-.633v-1.9H110.4v1.9A.634.634,0,0,1,109.767,19Z" />
                <path
                  d="M248.58,445.685a.633.633,0,1,1-.9,0,.633.633,0,0,1,.9,0"
                  transform="translate(-142.799 -428.4)"
                />
              </g>
            </svg>
            <Text style={styles.infoPadding}>+004 4567979820</Text>
          </View>
          <View style={styles.info}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.204"
              height="17.24"
              viewBox="0 0 16.782 23.905"
            >
              <defs>
                <style></style>
              </defs>
              <path
                stroke="#000"
                strokeWidth="1.5px"
                fill="none"
                d="M1.391,0A7.65,7.65,0,0,0-6.25,7.641c0,5.3,7.649,14.342,7.649,14.342S9.032,12.677,9.032,7.641A7.65,7.65,0,0,0,1.391,0ZM3.7,9.879A3.26,3.26,0,0,1-.914,5.268a3.238,3.238,0,0,1,2.305-.955A3.261,3.261,0,0,1,3.7,9.879Zm0,0"
                transform="translate(7 0.75)"
              />
            </svg>
            <Text style={styles.infoPadding}>
              9 Bow Ridge,Lakeland,FL 33801
            </Text>
          </View>
        </View>

        {/* here */}
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
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
    textDecorationLine: 'underline',
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
    textDecorationLine: 'underline',
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
})
