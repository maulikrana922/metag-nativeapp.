import React, {useEffect, useState} from 'react';
import * as Svg from 'react-native-svg';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import AvtarImage from '../../assets/work-suitcase.svg';
import More from '../../assets/myProfile/more.svg';

import Logo from '../../assets/Logo/logo.svg';
import bg from '../../assets/Logo/bg.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSelector, useDispatch} from 'react-redux';
import {
  getSocialFlag,
  getRemoveProfile,
  getOrderhistory,
} from '../redux/reducer';

import url from '../BaseURl/baseurl.json';

export default function MyProfile(props) {
  const dispatch = useDispatch();
  const {token, profile, link, flag, orders} = useSelector(state => state);
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(AvtarImage);
  const [isLoaded, setLoaded] = useState(true);
  const [show, setShow] = useState(false);

  const LoaderIndicator = () => {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  };

  console.log(flag);

  useEffect(() => {
    console.log(
      '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
      orders,
    );
  }, [orders]);

  const apiToken =
    profile !== null && flag === 'true'
      ? profile.data[0].api_token
      : profile !== null && profile.api_token;

  useEffect(() => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', orders);

    let data = JSON.stringify({
      count: 10,
      strat: 0,
    });

    let config = {
      method: 'post',
      url: 'https://testyourapp.online/metag-backend/api/order-history',
      headers: {
        Authorization: 'Bearer ' + profile.api_token,

        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(
          'Order History api>>>>',
          JSON.stringify(response.data.data.order_data),
        );
        console.log(
          'Order History api >>>>',
          response.data.data.order_data.length,
        );
        dispatch(getOrderhistory(response.data.data.order_data));
        setLoaded(false);
      })
      .catch(function (error) {
        console.log('Order history >>>>', error);
      });
  }, []);

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      await AsyncStorage.setItem('@flag_key', 'false');
      // await AsyncStorage.removeItem('@flag_Key')
      props.navigation.navigate('Login');
      await dispatch(getSocialFlag('false'));
      // dispatch(getSocialFlag('false'));
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // dispatch(getProfile(null));
      dispatch(getRemoveProfile(true));
      //props.navigation.navigate('Login');
      // dispatch(getProfile(null));

      // props.navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }

    console.log('Done.');
  };

  const logout = () => {
    axios({
      method: 'POST',
      url: `${url.baseurl}logout`,
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    })
      .then(response => {
        if (response.data.status === 200) {
          // setNext(true);true
          removeValue();
          console.log('success', response.data);

          // removeData();
        } else {
          console.log('Failed', response.data);
        }
      })
      .catch(error => console.log('logout data', error));
  };
  if (isLoaded) {
    return <LoaderIndicator />;
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
          <View style={{flex: 1}}>
            <View style={styles.header_parent}>
              <View>
                <View style={styles.header}>
                  {/* <View style={styles.arrowback}></View> */}
                  {/* <Image
                    source={require('../../assets/arrow-back.svg')}
                    style={styles.arrowback}></Image> */}

                  {/* here */}
                  <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={{
                      top: -8,
                      // height: 'auto',
                      // marginTop: 'auto',
                      // marginBottom: 'auto',
                      // backgroundColor: 'red',
                      // position: 'absolute',
                      // padding: 4,
                      // textAlign: 'left',
                      // zIndex: 100,
                    }}>
                    <Image
                      source={require('../../assets/CreateProfile/back.png')}
                      style={styles.arrowback}></Image>
                  </TouchableOpacity>
                  <View style={styles.headerBackground}>
                    <Logo width={60} height={70} />
                    <View style={styles.header_text}>
                      <Text style={styles.text_metag}>meTAG</Text>
                      <Text style={styles.text_tagline}>
                        I M ME,WHO ARE YOU
                      </Text>
                    </View>
                  </View>
                  {/* <Text style={styles.next}>  </Text> */}
                  {/* <Image source={more} style={{ height: 60, width: 30 }}></Image> */}
                  <View
                    style={
                      {
                        // alignSelf: 'center',
                        // marginLeft: '30%',
                        // position: 'absolute',
                        // left: 60,
                        // right: 0,
                        // backgroundColor: 'yellow',
                      }
                    }>
                    {/* <Image source={more}></Image> */}
                    <TouchableOpacity
                      // onPress={() => props.navigation.navigate('Contact')}
                      onPress={() => setShow(!show)}
                      style={{
                        // alignSelf: 'center',
                        padding: 10,
                        // backgroundColor: 'red',
                        marginBottom: 30,
                        // paddingLeft: 40,
                      }}>
                      <More />
                    </TouchableOpacity>
                  </View>
                </View>
                {show && (
                  <View
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: 'auto',
                      height: 'auto',
                      borderRadius: 10,
                      marginLeft: 'auto',
                      marginRight: 16,
                      marginTop: -30,
                    }}>
                    <View
                      style={{
                        transform: [{rotate: '-45deg'}],
                        backgroundColor: '#FFFFFF',
                        width: 15,
                        height: 15,
                        position: 'relative',
                        bottom: 5,
                        marginLeft: 'auto',
                        marginRight: 10,
                      }}></View>
                    <View
                      style={{
                        paddingRight: 10,
                        paddingLeft: 10,
                        paddingBottom: 10,
                        width: 120,
                      }}>
                      <View
                        style={{
                          borderBottomColor: '#E5E5E5',
                          borderBottomWidth: 1,
                          padding: 1,
                          paddingBottom: '10%',
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            borderBottomColor: '#E5E5E5',
                            // borderBottomWidth: 1,
                            paddingBottom: '2%',
                            fontFamily: 'Poppins-Regular',
                          }}
                          onPress={() =>
                            props.navigation.navigate('ChangePassword')
                          }>
                          Settings
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingTop: '10%',
                          padding: 1,
                        }}>
                        <Text
                          onPress={() => {
                            logout();
                          }}
                          style={{
                            fontSize: 16,
                            paddingTop: '2%',
                            fontFamily: 'Poppins-Regular',
                          }}>
                          Logout
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
                <View style={styles.completeProfileView}>
                  <Text style={styles.completeProfile}>My Orders</Text>
                </View>
              </View>
            </View>
            {/* list  */}

            {orders === null || orders === undefined || orders === 'null' ? (
              <LoaderIndicator />
            ) : (
              <ScrollView>
                <View style={{padding: 15}}>
                  {orders.map(element => {
                    return (
                      <View
                        style={{backgroundColor: '#fff'}}
                        shadowOffset={{height: 2, width: 0}}
                        shadowColor="#000"
                        shadowOpacity={0.25}
                        shadowRadius={3.84}
                        elevation={5}>
                        <TouchableOpacity
                          style={styles.shadow}
                          onPress={() =>
                            props.navigation.navigate('OrderDetails', {
                              element: element,
                            })
                          }>
                          <View
                            style={{
                              paddingLeft: 15,
                              paddingRight: 15,
                              paddingTop: 15,
                            }}>
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingBottom: 3,
                              }}>
                              <Text style={styles.orderTitleFont}>
                                Order No
                              </Text>
                              <Text style={styles.orderTitleFont}>
                                $ {element.image_uploads.price}
                              </Text>
                            </View>
                            <Text
                              style={{
                                fontFamily: 'Poppins-Regular',
                                fontSize: 16,
                                // backgroundColor: 'red',
                              }}>
                              {element.creted_at}
                              {/* 09:13 PM 10 Jun 2019 */}
                            </Text>
                          </View>
                          <View style={styles.productListView}>
                            <Image
                              style={styles.productView}
                              source={{
                                uri: `${element.image_uploads.url}`,
                              }}
                            />

                            <View
                              style={{
                                marginTop: 'auto',
                                marginBottom: 'auto',
                                marginLeft: 10,
                                display: 'flex',
                                flex: 1,
                                //backgroundColor: 'red',
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                              }}>
                              <Text
                                style={{
                                  color: 'black',
                                  fontSize: 14,
                                  width: 100,
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  flexDirection: 'row',
                                  // borderWidth: 1,
                                  // borderColor: 'yellow',

                                  fontFamily: 'Poppins-Bold',
                                }}>
                                {element.status}

                                {/* Successful */}
                              </Text>
                              <Text
                                numberOfLines={2}
                                ellipsizeMode="tail"
                                style={{
                                  color: 'black',
                                  fontFamily: 'Poppins-Regular',
                                  marginRight: 10,
                                  // backgroundColor: 'red',
                                  // width: 100,
                                }}>
                                {element.response}
                                {/* Lorem Ipsum is simply dummy {`\n`}text of the printing and
                      type
                      {'\n'}setting industry. */}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            )}

            {/* <Menu /> */}
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    // backgroundColor: 'pink',
    // height: 100,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    // justifyContent: 'space-around',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  arrowback: {
    // backgroundColor: "beige",
    width: 25,
    height: 20,
    alignSelf: 'center',
    // marginLeft: 20,
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
    // flex: 1,
    flexDirection: 'column',
    marginBottom: 6,
    // paddingLeft: 20,
    marginLeft: 5,
  },
  text_metag: {
    fontFamily: 'Poppins-Regular',
    fontSize: 34,
    color: 'white',
  },
  text_tagline: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 2,
    fontSize: 10,
    marginTop: -3,
    // backgroundColor: 'red',
    padding: 0,
    color: 'white',
  },
  next: {
    fontFamily: 'Poppins-ExtraBold',
    color: 'white',
    alignSelf: 'center',
  },
  completeProfileView: {
    paddingBottom: 30,
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
    paddingTop: '10%',
    backgroundColor: '#000',
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
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // marginTop: 'auto',
    // alignItems: 'flex-end',
  },
  productView: {
    width: 70,
    height: 70,
    backgroundColor: '#b8b8b8',
    // backgroundColor: 'red',
    color: 'pink',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 5,
    // position:"absolute",
  },
  productListView: {
    height: 'auto',
    backgroundColor: '#fff',
    //width: '100%',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    display: 'flex',
    flex: 1,
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
  orderTitleFont: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: '600',
  },
  shadow: {
    borderRadius: 1,
    shadowColor: 'black',
    elevation: 4,
    padding: 0,
    margin: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
