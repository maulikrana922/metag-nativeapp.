import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
// import {getAuthToken} from '../redux/reducer';
// import {useSelector, useDispatch} from 'react-redux';
import {
  getToken,
  getAuthToken,
  getProfile,
  getLink,
  getProduct,
} from '../redux/reducer';
import {useSelector, useDispatch} from 'react-redux';
import NfcManager from 'react-native-nfc-manager';

import wifi from '../../assets/mobile-phone-with-wifi.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import qrCode from '../../assets/qr-code.png';
import UserIcon from '../../assets/user.svg';
import SuitecaseIcon from '../../assets/work.svg';
import avtar from '../../assets/avatar-home.svg';
import contact from '../../assets/contact.svg';
import Menu from '../../src/components/Menu';
// import MyTabs from '../../Navigation/tabs/Tabs.js';
import ProductList from '../../src/components/ProductList.js';
import Logo from '../../assets/Logo/logo.svg';
import Scan from '../../assets/Home/scan.svg';
import Hotspot from '../../assets/Home/hotspot.svg';
import bg from '../../assets/Logo/bg.png';
import axios from 'axios';
import MyProfile from './MyOrders';
import NfcProxy from './NfcProxy';

import url from '../BaseURl/baseurl.json';

export default function CreateProfile(props) {
  // alert(JSON.stringify(props));
  const [isLoaded, setLoaded] = useState(true);
  const [count, setCount] = useState('3');
  const [start, setStart] = useState('0');
  const [supportsNfc, setSupportsNfc] = useState(false);
  // const [img,setImg] = usestate()
  const dispatch = useDispatch();
  const {token, profile, link, flag, products, check_update} = useSelector(
    state => state,
  );
  console.log('PRODUCTS >>>>>>>>>', products);
  // const [products, setProduct] = useState(data);
  const [image1, setImage] = useState('');

  console.log('flag value', typeof flag);

  useEffect(() => {
    console.log('PRODUCTS >>>>>>>>>', products);
  }, [products]);
  // const [apiToken, setToken] = useState(
  //   flag === true ? profile.data[0].api_token : profile.api_token,
  // );
  // console.log('linking0000', link.linkedin_link);

  // const removeValue = async () => {
  //   try {
  //     await AsyncStorage.removeItem('@storage_Key');
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   console.log('Done.');
  // };
  // removeValue;
  // console.log('flag in my profile', flag);
  // console.log('printing profile in my Home', profile.data[0].api_token);

  // const removeValue = async () => {
  //   try {
  //     await AsyncStorage.removeItem('@storage_Key');
  //     await AsyncStorage.removeItem('@flag_Key');
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   console.log('Done.');
  // };
  // removeValue();
  console.log('flag....................', flag);

  useEffect(async () => {
    const apiToken =
      profile && flag == 'true'
        ? profile && profile.data[0].api_token
        : profile && profile.api_token;
    NfcManager.isSupported().then(supported => {
      console.log('supported', supported);
      if (supported) {
        setSupportsNfc(true);
      } else {
        setSupportsNfc(false);
      }
    });

    //get Products

    //

    profile !== null && console.log('profile check>>>');

    let data = JSON.stringify({
      count: 10,
      strat: 0,
    });

    let config = {
      method: 'post',
      url: 'https://testyourapp.online/metag-backend/api/image-upload-data',
      headers: {
        Authorization: 'Bearer ' + profile.api_token,

        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log('Product api>>>>', JSON.stringify(response.data.data));
        console.log('Product api>>>>', response.data.data.length);
        dispatch(getProduct(response.data.data));
      })
      .catch(function (error) {
        console.log('Product Error >>>>', error);
      });

    //order_data

    // axios({
    //   method: 'post',
    //   url: `${url.baseurl}image-upload-data`,
    //   data: {
    //     count: count,
    //     start: start,
    //   },
    //   headers: {
    //     Authorization: 'Bearer ' + apiToken,
    //   },
    // })
    //   .then(response => {
    //     if (response.data.status == 200) {
    //       // console.log('200', response.data);
    //       // setProduct(response.data.data);
    //     } else {
    //       console.log('false in Home', response.data);
    //     }
    //     console.log('response', response.data);
    //   })
    //   .catch(e => console.log('error500', e));
  }, []);

  useEffect(async () => {
    console.log('In use effect for  image change');
    const val = await AsyncStorage.getItem('@Image');
    console.log('from storage', val);
    // Alert.alert(val);
    // alert('in home');
    setImage(val);

    console.log('home component.....................................', val);
  }, [check_update]);

  // axios({
  //   method: 'post',
  //   url: 'http://testyourapp.online/metag/api/productList',
  //   data: {
  //     count: count,
  //     start: start,
  //   },
  //   headers: {
  //     Authorization: 'Bearer ' + profile.api_token,
  //   },
  // }).then(response => {
  //   if (response.data.status === 200) {
  //     // console.log('200', response.data);
  //     setProduct(response.data.data);
  //   } else {
  //     console.log('false', response.data);
  //   }
  // });
  //   .catch(e => console.log('error500', e));

  //This checks if the phone supports nfc feature
  // useEffect(() => {
  //   NfcManager.isSupported()
  //     .then(supported => {
  //       console.log(supported);
  //       if (supported) {
  //         setSupportsNfc(true);
  //       } else {
  //         setSupportsNfc(false);
  //       }
  //     })
  // }, [])
  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('@storage_Key');
  //     await dispatch(getProfile(jsonValue));
  //     await console.log('json value', profile);
  //     setLoaded(false);

  //     // return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     // error reading value
  //     console.log('error occur', e);
  //   }
  // };
  // // console.log('pro...', profile);
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key');
  //     // if (value !== null) {
  //     //   // props.navigation.navigate('Home');
  //     //   console.log('val', value);
  //     // }
  //     if (value) {
  //       console.log('value from signup', value);
  //     } else {
  //       console.log('does not exist');
  //     }
  //   } catch (e) {
  //     console.log('e', e);
  //   }
  //   // console.log('no value is printes');
  // };
  // console.log('profile name', profile.name);

  // useEffect(async () => {
  // const val = await AsyncStorage.getItem('Key');
  // // Alert.alert(val);
  // setImage(val);

  // console.log('home component.....................................', val);

  // axios({
  //   method: 'post',
  //   url: `${url.baseurl}image-upload-data`,
  //   data: {
  //     count: 10,
  //     start: 0,
  //   },
  //   headers: {
  //     Authorization: 'Bearer ' + apiToken,
  //     // Content-Type:'application/json',
  //   },
  // });
  // .then(response => {
  //   if (response.data.status == 200) {
  //     // console.log('200', response.data);
  //     // setProduct(response.data.data);
  //     console.log('NEW DATA API CALL', response.data);
  //   } else {
  //     console.log('false in Home', response.data);
  //   }
  //   console.log('response', response.data);
  // })
  // .catch(e => console.log('error500', e));
  // }, []);

  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground
        source={{
          uri: image1,
        }}
        style={{
          resizeMode: 'contain',
          // backgroundColor: 'red',
          flex: 1,
        }}>
        {/* {console.log('products',products)} */}
        <View style={{}}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <View style={styles.header_parent}>
            <View>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                  style={{
                    height: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
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
              <View style={styles.completeProfileView}>
                <Text style={styles.completeProfile}>Home</Text>
              </View>
              <Text style={styles.connectedByProfile}>Connected by</Text>
              <View style={styles.iconFlex}>
                <View style={styles.backgroundIcon}>
                  <Scan height={40} width={40} fill="black" />
                </View>
                {true && (
                  <View style={styles.backgroundIcon2}>
                    <TouchableOpacity
                      onPress={() => {
                        // props.navigation.navigate('CreateProfile');
                        props.navigation.navigate('Nfc');
                      }}>
                      <Hotspot height={40} width={40} fill="black" />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <Text
                onPress={() => props.navigation.navigate('Interaction')}
                style={styles.underlineText}>
                Interaction History
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.infoBox}>
              <View
                style={styles.infoShadow}
                shadowOffset={{height: 2, width: 0}}
                shadowColor="#000"
                shadowOpacity={0.25}
                shadowRadius={3.84}
                elevation={5}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('MyProfile')}
                  style={styles.eachInfo}>
                  {/* <Image source={U} style={{width: 20, height: 20}}></Image> */}
                  <UserIcon height={30} width={30} fill="black" />
                  {profile !== null && (
                    <Text
                      style={{
                        color: 'black',
                        alignSelf: 'center',
                        marginLeft: 20,
                        fontSize: 18,
                      }}>
                      {console.log('TTTTTT', flag)}
                      {profile && flag == 'true'
                        ? profile && profile.data[0].name
                        : profile && profile.name}
                    </Text>
                  )}
                </TouchableOpacity>
                <View style={styles.eachInfo}>
                  {/* <Image
                source={suitecaseIcon}
                style={{width: 20, height: 20}}></Image> */}
                  <SuitecaseIcon width={30} height={30} fill="black" />
                  {profile !== null && (
                    <Text
                      style={{
                        color: 'black',
                        alignSelf: 'center',
                        marginLeft: 20,
                        fontSize: 18,
                      }}>
                      {flag == 'true'
                        ? profile.data[0].business_name
                        : profile.business_name}
                    </Text>
                  )}
                </View>
              </View>
              <View
                style={styles.infoShadow}
                shadowOffset={{height: 2, width: 0}}
                shadowColor="#000"
                shadowOpacity={0.25}
                shadowRadius={3.84}
                elevation={5}>
                <View style={styles.productTitle}>
                  <Text style={styles.productsText}>Products</Text>
                  <Text
                    onPress={() => props.navigation.navigate('ViewAll')}
                    style={styles.viewAllProduct}>
                    View all
                  </Text>
                </View>
              </View>
              <ScrollView>
                {/* <ProductList /> */}
                {/* {products.length !== 0 &&
                  products.map(element => {
                    return (
                      // <ScrollView>
                      <ProductList
                        // key={element.key}
                        title={element.title}
                        price={element.price}
                        image={element.image}
                        // key={element.id}
                      />
                      // </ScrollView>
                    );
                  })} */}
              </ScrollView>
            </View>
          </View>
          {/* <Menu /> */}
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  padding: {
    height: 40,
  },
  header: {
    // backgroundColor: '#000000',

    // backgroundColor: 'yellow',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowback: {
    // backgroundColor: "beige",
    width: 20,
    height: 20,
    alignSelf: 'center',
    // backgroundColor: 'pink',
    // color: 'white',
  },
  headerBackground: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    paddingBottom: 20,
    alignSelf: 'center',
    // backgroundColor: 'yellow',
    // borderBottomColor: 'white',
    // paddingRight: 40,
    paddingTop: '15%',
    justifyContent: 'space-around',
  },
  header_text: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // paddingLeft: 20,
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

    padding: 0,
    color: 'white',
  },
  next: {
    fontFamily: 'Poppins-ExtraBold',
    color: 'white',
    alignSelf: 'center',
  },
  completeProfileView: {
    // borderWidth: 1,
    borderBottomColor: 'white',
    alignSelf: 'center',
  },
  completeProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: '700',
    paddingBottom: 10,
    // backgroundColor: 'black',
    // borderWidth: 3,
    borderBottomColor: 'white',
    // alignContent:"center",
    textAlign: 'center',

    width: 230,

    // width: "auto",
  },
  connectedByProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    paddingTop: 10,
    fontFamily: 'Poppins-Regular',
    paddingBottom: 10,
    // backgroundColor: 'black',
    // borderWidth: 2,
    width: 'auto',
    margin: 1,
  },
  header_parent: {
    // backgroundColor: 'black',
    padding: 20,
    // height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backgroundIcon: {
    height: 'auto',
    width: 'auto',
    backgroundColor: 'white',
    padding: 20,
    marginRight: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    //   margin:"auto",
    alignItems: 'center',
  },
  backgroundIcon2: {
    width: 'auto',
    // backgroundIcon:"auto",
    height: 'auto',
    backgroundColor: 'white',
    padding: 20,
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
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginTop: 15,
    marginBottom: 10,
  },
  infoBox: {
    width: 'auto',
    // marginLeft: 20,
    // marginTop: 20,
    margin: 20,
    // marign: 30,
    // borderWidth: 1,
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
    marginLeft: 8,
    marginRight: 8,
    // justifyContent: 'space-between',
    marginTop: 8,
    width: '100%',
    // backgroundColor: 'red',
  },
  productsText: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 20,
    fontWeight: '600',
  },
  viewAll: {
    textDecorationLine: 'underline',
    fontSize: 14,
    paddingLeft: 120,
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
  infoShadow: {
    // shadowColor: '#000',
    // shadowOffset: {width: 5, height: 5},
    // shadowOpacity: 0.3,
    // shadowRadius: 1,
    // height: 'auto',
    // height: '100%',
    padding: 4,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    height: 100,
    alignItems: 'flex-start',
  },
  viewAllProduct: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    marginLeft: 'auto',
    marginRight: 8,
  },
});
