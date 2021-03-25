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

export default function CreateProfile() {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== 'web') {
  //       const {
  //         status,
  //       } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== 'granted') {
  //         alert('Sorry, we need camera roll permissions to make this work!');
  //       }
  //     }
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     // setImage(result.uri);
  //     setNewImage(result.uri);
  //   }
  // };

  if (!isLoaded) {
    return null;
  } else {
    return (
      <View>
        <View style={styles.header_parent}>
          <View>
            <View style={styles.header}>
              {/* <View style={styles.arrowback}></View> */}
              <Image
                source={require('../../assets/arrow-back.svg')}
                style={styles.arrowback}></Image>
              <View style={styles.headerBackground}>
                <Image
                  source={require('../../assets/logo.jpg')}
                  style={{width: 50, height: 'auto'}}
                />
                <View style={styles.header_text}>
                  <Text style={styles.text_metag}>meTAG</Text>
                  <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                </View>
              </View>
              <Text style={styles.next}></Text>
            </View>
            <Text style={styles.completeProfile}>Interaction History</Text>
            {/* <View style={styles.iconFlex}>
              <View style={styles.backgroundIcon}>
                <Image
                  source={qrCode}
                  style={{ backgroundColor: 'white', height: 40, width: 40 }}
                ></Image>
              </View>
              <View style={styles.backgroundIcon2}>
                <Image
                  source={wifi}
                  style={{ backgroundColor: 'white', height: 40, width: 40 }}
                ></Image>
              </View>
            </View>
            <Text style={styles.underlineText}>Interaction History </Text> */}
          </View>
        </View>

        {/* here */}
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#B8B8B8',
              padding: 10,
              margin: 10,
              width: 49,
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
            }}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35.484"
              height="35.484"
              viewBox="0 0 35.484 35.484">
              <path d="M2.079,2.079H8.317V0H0V8.317H2.079Zm0,0" />
              <path
                d="M392,0V2.079h6.237V8.317h2.079V0Zm0,0"
                transform="translate(-364.832)"
              />
              <path
                d="M398.237,398.237H392v2.079h8.317V392h-2.079Zm0,0"
                transform="translate(-364.832 -364.832)"
              />
              <path
                d="M2.079,392H0v8.317H8.317v-2.079H2.079Zm0,0"
                transform="translate(0 -364.832)"
              />
              <path
                d="M61,60V70.4H71.4V64.158h2.079V62.079H71.4V60Zm8.317,8.317H63.079V62.079h6.237Zm0,0"
                transform="translate(-56.772 -55.842)"
              />
              <path
                d="M283.475,282.475v-10.4h-4.158V270h-2.079v2.079H271v2.079h2.079v2.079H271v2.079h2.079v4.158Zm-8.317-8.317H281.4V280.4h-6.237Zm0,0"
                transform="translate(-252.218 -251.288)"
              />
              <path
                d="M67.237,242.079H71.4V240H61v2.079h4.158v2.079H63.079v2.079h2.079V250.4H63.079v2.079h2.079v2.079h10.4v-2.079H73.475V250.4H71.4v2.079H67.237V250.4h2.079v-2.079H67.237Zm0,0"
                transform="translate(-56.772 -223.367)"
              />
              <path
                d="M121,120h2.079v2.079H121Zm0,0"
                transform="translate(-112.614 -111.683)"
              />
              <path
                d="M361,120h2.079v2.079H361Zm0,0"
                transform="translate(-335.981 -111.683)"
              />
              <path
                d="M307.237,70.4H311.4V60H301V70.4h4.158v2.079h2.079Zm-4.158-2.079V62.079h6.237v6.237Zm0,0"
                transform="translate(-280.139 -55.842)"
              />
              <path
                d="M395.158,242.079V240H391v2.079Zm0,0"
                transform="translate(-363.902 -223.367)"
              />
              <path
                d="M361,360h2.079v2.079H361Zm0,0"
                transform="translate(-335.981 -335.05)"
              />
              <path
                d="M241,330h2.079v2.079H241Zm0,0"
                transform="translate(-224.297 -307.129)"
              />
              <path
                d="M181,304.158h2.079V300H181Zm0,0"
                transform="translate(-168.456 -279.208)"
              />
              <path
                d="M211,270h2.079v2.079H211Zm0,0"
                transform="translate(-196.377 -251.288)"
              />
              <path
                d="M63.079,330H61v4.158h2.079Zm0,0"
                transform="translate(-56.772 -307.129)"
              />
              <path
                d="M61,420h2.079v2.079H61Zm0,0"
                transform="translate(-56.772 -390.892)"
              />
              <path
                d="M241,60h2.079v2.079H241Zm0,0"
                transform="translate(-224.297 -55.842)"
              />
              <path
                d="M241,124.158h2.079V120H241Zm0,0"
                transform="translate(-224.297 -111.683)"
              />
              <path
                d="M243.079,212.079V210H241v4.158h8.317v-2.079Zm0,0"
                transform="translate(-224.297 -195.446)"
              />
            </svg> */}
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={{fontFamily: 'Poppins-Reguler', fontSize: 14}}>
              Contact/Device name
            </Text>
            <Text style={{fontFamily: 'Poppins-Reguler', color: '#9E9E9E'}}>
              By: QR Code
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginRight: 10,
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#B8B8B8',
                padding: 10,
                margin: 10,
                width: 49,
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
              }}>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29.787"
                height="35.288"
                viewBox="0 0 29.787 35.288">
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
              </svg> */}
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text style={{fontFamily: 'Poppins-Reguler', fontSize: 14}}>
                Contact/Device name
              </Text>
              <Text style={{fontFamily: 'Poppins-Reguler', color: '#9E9E9E'}}>
                By: QR Code
              </Text>
            </View>
          </View>
          <Text
            style={{
              alignSelf: 'flex-end',
              fontFamily: "'Poppins-SemiBold",
              fontSize: 11,
            }}>
            12:35 AM
          </Text>
        </View>
      </View>
    );
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
