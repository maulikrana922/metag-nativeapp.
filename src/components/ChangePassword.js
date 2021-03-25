import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Svg, Path, Defs} from 'react-native-svg';
// import AvtarImage from "../../assets/avtar.svg";
//
import AvtarImage from '../../assets/work-suitcase.svg';
import applePay from '../../assets/orderDetails/apple_pay_1170221.png';
import wifi from '../../assets/mobile-phone-with-wifi.png';
import qrCode from '../../assets/qr-code.png';
import exampleImg from '../../assets/splash.png';
import userIcon from '../../assets/user.svg';
import suitecaseIcon from '../../assets/work.svg';
import avtar from '../../assets/avatar-home.svg';
import contact from '../../assets/contact.svg';
import list from '../../assets/list.svg';
import home from '../../assets/home-run.svg';

// import {
//   useFonts,
//   Poppins_800ExtraBold_Italic,
//   Poppins_400Regular,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import { AppLoading, ImagePicker } from "expo";

export default function CreateProfile() {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);

  // useEffect(() => {
  //   ;(async () => {
  //     if (Platform.OS !== 'web') {
  //       const {
  //         status,
  //       } = await ImagePicker.requestMediaLibraryPermissionsAsync()
  //       if (status !== 'granted') {
  //         alert('Sorry, we need camera roll permissions to make this work!')
  //       }
  //     }
  //   })()
  // }, [])

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   })

  //   console.log(result)

  //   if (!result.cancelled) {
  //     // setImage(result.uri);
  //     setNewImage(result.uri)
  //   }
  // }

  if (!isLoaded) {
    return null;
  } else {
    return (
      <View>
        <View style={styles.header_parent}>
          <View>
            <View style={styles.header}>
              {/* <View style={styles.arrowback}></View> */}
              {/* <Text
                style={{ color: 'white', alignSelf: 'center', padding: 10 }}
              >
                Back
              </Text> */}
              {/* <Image
                source={require('../../assets/arrow-back.svg')}
                style={styles.arrowback}
              ></Image> */}
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                height={24}
                viewBox="0 0 24 24"
                width={24}
                style={styles.arrowback}
                // {...props}
              >
                <Path d="M0 0h24v24H0z" />
                <Path
                  d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                  stroke="#f9f9fa"
                  fill="#fff"
                />
              </Svg>
              <View style={styles.headerBackground}>
                {/* <Text style={{ alignSelf: 'center' }}>Back</Text> */}
                <Image
                  source={require('../../assets/logo.jpg')}
                  style={{
                    width: 40,
                    height: 50,
                    // height: 'auto',
                    // marginTop: 'auto',
                    // marginBottom: 'auto',
                    alignSelf: 'center',
                    // resizeMode: 'contain',
                  }}
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
              }}>
              <View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    paddingBottom: 5,
                  }}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14.784}
                    height={19.561}
                    viewBox="0 0 14.784 19.561">
                    <Defs></Defs>
                    <Path
                      fill="#fff"
                      d="M13.647 7.506H1.137A1.139 1.139 0 000 8.643v9.78a1.139 1.139 0 001.137 1.137h12.51a1.139 1.139 0 001.137-1.137V8.641a1.139 1.139 0 00-1.137-1.135zm-.227 10.69H1.365V8.871H13.42v9.325z"
                    />
                    <Path
                      fill="#fff"
                      d="M7.392 0A5.6 5.6 0 001.82 5.618v2.343h1.36V5.618a4.208 4.208 0 118.416 0v2.343h1.365V5.618A5.6 5.6 0 007.392 0zM7.278 12.742a.682.682 0 00-.682.682v1.592a.682.682 0 001.365 0v-1.592a.682.682 0 00-.683-.682z"
                    />
                  </Svg>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 10,
                    }}>
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
                  }}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14.784}
                    height={19.561}
                    viewBox="0 0 14.784 19.561">
                    <Defs></Defs>
                    <Path
                      fill="#fff"
                      d="M13.647 7.506H1.137A1.139 1.139 0 000 8.643v9.78a1.139 1.139 0 001.137 1.137h12.51a1.139 1.139 0 001.137-1.137V8.641a1.139 1.139 0 00-1.137-1.135zm-.227 10.69H1.365V8.871H13.42v9.325z"
                    />
                    <Path
                      fill="#fff"
                      d="M7.392 0A5.6 5.6 0 001.82 5.618v2.343h1.36V5.618a4.208 4.208 0 118.416 0v2.343h1.365V5.618A5.6 5.6 0 007.392 0zM7.278 12.742a.682.682 0 00-.682.682v1.592a.682.682 0 001.365 0v-1.592a.682.682 0 00-.683-.682z"
                    />
                  </Svg>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 10,
                    }}>
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
                  }}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14.784}
                    height={19.561}
                    viewBox="0 0 14.784 19.561">
                    <Defs></Defs>
                    <Path
                      fill="#fff"
                      d="M13.647 7.506H1.137A1.139 1.139 0 000 8.643v9.78a1.139 1.139 0 001.137 1.137h12.51a1.139 1.139 0 001.137-1.137V8.641a1.139 1.139 0 00-1.137-1.135zm-.227 10.69H1.365V8.871H13.42v9.325z"
                    />
                    <Path
                      fill="#fff"
                      d="M7.392 0A5.6 5.6 0 001.82 5.618v2.343h1.36V5.618a4.208 4.208 0 118.416 0v2.343h1.365V5.618A5.6 5.6 0 007.392 0zM7.278 12.742a.682.682 0 00-.682.682v1.592a.682.682 0 001.365 0v-1.592a.682.682 0 00-.683-.682z"
                    />
                  </Svg>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 10,
                    }}>
                    Confirm New Password
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* here */}
        <View style={{margin: 40}}>
          <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
            Manage Card
          </Text>
          <View
            style={{
              backgroundColor: 'black',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 39,
                  margin: 10,
                  padding: 10,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={29.787}
                  height={35.288}
                  viewBox="0 0 29.787 35.288">
                  <Path d="M0 11.181v24.107h18.469v-19.2L13.9 11.181zm16.4 22.04H2.068V13.249H13l3.406 3.658zm0 0M17.863 9.062a9.494 9.494 0 00-3.458-1.16l-.2 2.058a6.313 6.313 0 015.623 5.627l2.057-.212a7.875 7.875 0 00-4.022-6.313zm0 0" />
                  <Path d="M20.092 5.684a13.378 13.378 0 00-4.872-1.638l-.195 2.059a11.306 11.306 0 014.043 1.376 8.981 8.981 0 014.616 7.29l2.057-.211a11.067 11.067 0 00-5.65-8.876zm0 0" />
                  <Path d="M22.272 2.186A17.818 17.818 0 0015.78 0l-.195 2.059a15.839 15.839 0 015.663 1.924 12.6 12.6 0 016.482 10.229L29.787 14a14.727 14.727 0 00-7.516-11.814zm0 0M4.835 24.889h8.544v-8.706H4.835zm2.068-6.638h4.4v4.57h-4.4zm0 0" />
                </Svg>
              </View>
              <View style={{alignSelf: 'center'}}>
                <Text style={{color: 'white'}}>Product title</Text>
                <Text style={{color: '#9FAA11'}}>Currently in use</Text>
              </View>
            </View>
            <CheckBox style={{alignSelf: 'center', marginRight: 10}}></CheckBox>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    height: 'auto',
    width: 'auto',
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
    // marginTop: 'auto',
    // marginBottom: 'auto',
    marginLeft: 20,
    // backgroundColor: 'white',
  },
  headerBackground: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
    alignSelf: 'center',
    // backgroundColor: 'pink',
    width: 200,
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
});
