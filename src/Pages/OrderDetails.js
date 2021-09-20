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
  ImageBackground,
  Modal,
} from 'react-native';
import Logo from '../../assets/Logo/logo.svg';
// import AvtarImage from "../../assets/avtar.svg";
import bg from '../../assets/Logo/bg.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import {useSelector, useDispatch} from 'react-redux';
import url from '../BaseURl/baseurl.json';
import axios from 'axios';
import {check_update} from '../redux/reducer';
import close from '../../assets/close.png';
import {useNavigation} from '@react-navigation/native';

export default function OrderDetails(props) {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);
  const dispatch = useDispatch();
  const {updateImg} = useSelector(state => state);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    console.log('SELECTOR ', updateImg);
  });

  const element = props.route.params.element;

  const setImageInRedux = async () => {
    console.log('string>>>>>>>>>>>>>>>', element.image_uploads.url);
    try {
      const bgImage = await AsyncStorage.setItem(
        '@Image',
        element.image_uploads.url,
      );
      await dispatch(check_update());
      console.log('Image store//', bgImage);
    } catch (e) {
      console.log('ERROR while storing', e);
    }
  };

  const userUpdateImageAPICall = () => {
    let data = JSON.stringify({
      image_id: 99,
    });

    var config = {
      method: 'post',
      url: 'https://testyourapp.online/metag-backend/api/user-purchase-image',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NDY2YzFhZS0wZTA4LTRmNjctOGZiYy1kNTMyMDI5MzEzNDQiLCJqdGkiOiIxNTZlMDBiNDUzODRlNDdkMmJmMWI0YWU3YjgyOThjYzVkY2NiZjM0YjEzMjMyMmRiYTE2M2NhOGFmNzIyN2FhMmVkNmY5YTFiZGVhMjBiZiIsImlhdCI6MTYzMTc4MjA0OSwibmJmIjoxNjMxNzgyMDQ5LCJleHAiOjE2NjMzMTgwNDksInN1YiI6IjI0NiIsInNjb3BlcyI6W119.dS_sehmOIOLEFqDxfHBND0LMfg8Zvs4dMvC2-4LqiI20bjw0y4rN6oWpYn4pVbowfoh6pPzmBk1wSUclaEA4khFpGlX_bW0y3DfQZqVWXy3wCUYkQN3MBsegc1d-OOqaEb-gUM02a-9UL7CCOTgd5Fmz3sDHOHh_sAhpuzg7WkIu4MFRg-NPBLrbsP8Nq37m2v-AwOLO36f_ELvgIQB0OyiivFzcJGgz6gbXTYNIlUyeM-QCAjhUM3ft9sShMmbZNA7E6ruIJyOLERxOUYVqHZwSHKtq_zPiAi7_bUtRiS8KAYBBTcRj15_-5P1Kh10gkbuyr0NuFtpdXD6Evxku_DZ3x7RR92LMk9wCxCsZUacwtjVYOIyv9JGoYOxGIbBOIncyXK1aQacuXubeJdLSp5SsE_c8ErC6m2mMAPA1K0KhMWfCXXbLHmwbrdy1x7Pix6mSSpIuo4A2eOUG-Z9AD7UePF4JioLTjR-gOFjHpHUg4cIjuiZu_nTc5901CbPTro5d-OsxEFTSjRKWuG2arMqF1_ur4qamMc7Itobr29_YZWuca60xsnNejykWckyLIGNRaeGkTbYC67ybJWXnIkJH84wrDgVlegjOz8x2X0dLScPeH4jmTjVYPK8aqEA0Gxrfxv38fgKphAPAQm8E1woyHfrB8D_IhWRjtAsUP0w',
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(
          'API CALL........................',
          JSON.stringify(response.data.data),
        );
        // dispatch(check_update());
        // dispatch(updateIMAGE(response.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log('.....element.....', element);
  }, []);

  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
          }}>
          <View style={styles.header_parent}>
            <View>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                  style={{
                    height: 'auto',
                    marginTop: 'auto',
                    marginBottom: 41,
                  }}>
                  <Image
                    source={require('../../assets/CreateProfile/back.png')}
                    style={styles.arrowback}></Image>
                </TouchableOpacity>
                <View style={styles.headerBackground}>
                  <Logo width={54} height={54} />
                  <View style={styles.header_text}>
                    <Text style={styles.text_metag}>meTAG</Text>
                    <Text style={styles.text_tagline}>I M ME,WHO ARE YOU</Text>
                  </View>
                </View>
                <Text style={styles.next}></Text>
              </View>
              <View style={{paddingBottom: 15}}>
                <Text style={styles.completeProfile}>Order Successful</Text>
              </View>
            </View>
          </View>

          {/* here */}
          <View style={{margin: 25}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',

                height: 160,
              }}>
              <View>
                <View style={{paddingBottom: 1}}>
                  <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 16}}>
                    Product Title
                  </Text>
                </View>
                <View style={{paddingBottom: 2}}>
                  <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 16}}>
                    Order No {element.image_uploads.title}
                  </Text>
                </View>
                <View style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
                  <Text>{element.creted_at}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}>
                <View
                  style={{
                    color: 'pink',
                    right: 0,
                    borderRadius: 10,
                    marginBottom: 20,
                  }}>
                  <Image
                    style={styles.productView}
                    width={100}
                    height={100}
                    source={{uri: `${element.image_uploads.url}`}}
                  />
                </View>
                <View
                  style={{
                    height: '25%',
                    marginRight: 5,
                  }}>
                  <TouchableOpacity
                    style={styles.buyBtnBg}
                    onPress={() => {
                      userUpdateImageAPICall();
                      setShowModal(true);
                      setImageInRedux();
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        flex: 1,
                        fontSize: 16,
                      }}>
                      Buy Image
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                paddingBottom: 20,
                borderBottomWidth: 1,
                // borderWidth: 1,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  borderBottomColor: 'black',
                  borderWidth: 0,
                  lineHeight: 20,
                  fontSize: 14,
                  padding: 1,
                }}>
                {element.response}
              </Text>
            </View>
            <View
              style={{
                paddingTop: 15,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 16,
                }}>
                Payment Mode
              </Text>
            </View>
            <View
              style={{
                paddingTop: 10,
              }}>
              <Text
                style={{
                  fontFamily: "'Poppins-Regular",
                  fontSize: 16,
                }}>
                Apple pay
              </Text>
            </View>
            <View
              style={{
                paddingTop: 10,
              }}>
              <Text
                style={{
                  fontFamily: "'Poppins-Regular",
                  fontSize: 14,
                }}>
                Transaction ID: 12345678441654
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                // backgroundColor: 'white',
                paddingTop: 10,
              }}>
              <Image
                resizeMode="contain"
                source={applePay}
                style={{width: 60, height: 60}}></Image>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  alignSelf: 'center',
                }}>
                $ {element.image_uploads.price}
              </Text>
            </View>
          </View>
          <Modal
            statusBarTranslucent={true}
            transparent={true}
            visible={showModal}>
            <View
              style={{
                height: '100%',
                backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
              }}>
              <View
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  width: '80%',
                  height: 'auto',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setShowModal(!showModal);
                  }}
                  style={{
                    width: '8%',
                    height: '8%',
                    marginLeft: 'auto',
                    marginTop: '3%',
                  }}>
                  <Image
                    source={close}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}></Image>
                </TouchableOpacity>
                <View
                  style={{
                    backgroundColor: 'white',
                    // marginTop: '5%',
                    padding: '5%',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    display: 'flex',
                    justifyContent: 'space-evenly',
                  }}>
                  <Image
                    source={{uri: `${element.image_uploads.url}`}}
                    resizeMode="contain"
                    style={{
                      width: '50%',
                      height: '50%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}></Image>
                  <Text
                    style={{
                      marginLeft: 'auto',
                      marginRight: 'auto',

                      color: '#000000',
                      fontSize: 15,
                    }}>
                    Thank you for using this image.
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setShowModal(!showModal);
                      // navigation.navigate('Home');
                    }}
                    style={{
                      // marginTop: 20,
                      alignItems: 'center',
                      padding: 8,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      backgroundColor: 'black',
                      borderBottomLeftRadius: 50,
                      borderBottomRightRadius: 50,
                      borderTopRightRadius: 0,
                      borderTopLeftRadius: 50,
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 16,
                      }}>
                      Thank You
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  arrowback: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  headerBackground: {
    flexDirection: 'row',
    paddingBottom: 20,
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  header_text: {
    display: 'flex',
    flexDirection: 'column',
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
    fontSize: 20,
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: '700',
    backgroundColor: 'black',
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
    paddingTop: '10%',
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
  productView: {
    backgroundColor: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 5,
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
  buyBtnBg: {
    backgroundColor: '#40A41D',
    color: 'white',
    marginVertical: 5,
    // alignItems: 'baseline',
    borderTopLeftRadius: 10,
    flex: 1,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
