import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import {getAuthToken} from '../redux/reducer';
import {useSelector, useDispatch} from 'react-redux';
import NfcManager from 'react-native-nfc-manager';

import wifi from '../../assets/mobile-phone-with-wifi.png';
import qrCode from '../../assets/qr-code.png';
import UserIcon from '../../assets/user.svg';
import SuitecaseIcon from '../../assets/work.svg';
import avtar from '../../assets/avatar-home.svg';
import contact from '../../assets/contact.svg';
import Menu from '../../src/components/Menu';
import ProductList from '../../src/components/ProductList.js';
import Logo from '../../assets/Logo/logo.svg';
import Scan from '../../assets/Home/scan.svg';
import Hotspot from '../../assets/Home/hotspot.svg';
import bg from '../../assets/Logo/bg.png';
import axios from 'axios';
export default function CreateProfile(props) {
  const [isLoaded, setLoaded] = useState(true);
  const [count, setCount] = useState('3');
  const [start, setStart] = useState('0');
  const [products, setProduct] = useState([]);
  const [supportsNfc, setSupportsNfc] = useState(false);
  const {token, profile} = useSelector(state => state);

  useEffect(() => {
    NfcManager.isSupported().then(supported => {
      console.log(supported);
      if (supported) {
        setSupportsNfc(true);
      } else {
        setSupportsNfc(false);
      }
    });
    axios({
      method: 'post',
      url: 'https://testyourapp.online/metag/api/productList',
      data: {
        count: count,
        start: start,
      },
      headers: {
        Authorization: 'Bearer ' + profile.api_token,
      },
    }).then(response => {
      if (response.data.status === 200) {
        console.log('200', response.data);
        setProduct(response.data.data);
      } else {
        console.log('false', response.data);
      }
    });
  }, [count, start]);

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

  if (!isLoaded) {
    return null;
  } else {
    return (
      <ImageBackground source={bg} style={{flex: 1, resizeMode: 'contain'}}>
        {/* {console.log('products',products)} */}
        <View style={{flex: 1, backgroundColor: 'white'}}>
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
              <Text style={styles.completeProfile}>Home</Text>
              <Text style={styles.connectedByProfile}>Connected by</Text>
              <View style={styles.iconFlex}>
                <View style={styles.backgroundIcon}>
                  <Scan height={40} width={40} fill="black" />
                </View>
                {true && (
                  <View style={styles.backgroundIcon2}>
                    <TouchableOpacity
                      onPress={() => {
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
                Interaction History{' '}
              </Text>
            </View>
          </View>
          <View style={styles.infoBox}>
            <View style={styles.infoShadow}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('MyProfile')}
                style={styles.eachInfo}>
                {/* <Image source={U} style={{width: 20, height: 20}}></Image> */}
                <UserIcon height={20} width={20} fill="black" />
                <Text
                  style={{color: 'black', alignSelf: 'center', marginLeft: 10}}>
                  {profile.name}
                </Text>
              </TouchableOpacity>
              <View style={styles.eachInfo}>
                {/* <Image
                source={suitecaseIcon}
                style={{width: 20, height: 20}}></Image> */}
                <SuitecaseIcon width={20} height={20} fill="black" />
                <Text
                  style={{color: 'black', alignSelf: 'center', marginLeft: 10}}>
                  {profile.business_name}
                </Text>
              </View>
            </View>
            <View
              style={{
                borderRadius: 1,
                shadowColor: 'black',
                elevation: 4,
                marginTop: 8,
                padding: 8,
                // backgroundColor: 'yellow',
              }}>
              <View style={styles.productTitle}>
                <Text style={styles.productsText}>Products</Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text>count</Text>
                  <TextInput
                    keyboardType="numeric"
                    // placeholder="Password"
                    // placeholderTextColor="white"
                    // onChangeText={text => setPassword(text)}
                    onChangeText={text => setCount(text.trim())}
                    value={count}
                    style={{marginTop: -12}}
                  />
                  <Text>start</Text>

                  <TextInput
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: 'black',
                    }}
                    keyboardType="numeric"
                    onChangeText={text => setStart(text.trim())}
                    value={start}
                    style={{marginTop: -12}}
                  />

                  <Text
                    onPress={() => props.navigation.navigate('ViewAll')}
                    // onPress={() => props.navigation.navigate('MyOrders')}
                    style={styles.viewAll}>
                    View All
                  </Text>
                </View>
              </View>
              <View>
                <ScrollView>
                  {/* <ProductList /> */}
                  {products.length !== 0 &&
                    products.map(element => {
                      return (
                        // <ScrollView>
                        <ProductList
                          // key={element.key}
                          title={element.title}
                          price={element.price}
                          image={element.image}
                        />
                        // </ScrollView>
                      );
                    })}
                </ScrollView>
              </View>
            </View>
          </View>
          <Menu />
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
    backgroundColor: '#000000',
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
    fontFamily: 'Poppins-Reguler',
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
  completeProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: '700',
    paddingBottom: 10,
    // backgroundColor: 'black',
    borderWidth: 1,
    borderBottomColor: 'white',
    // alignContent:"center",
    textAlign: 'center',
    width: 230,

    // width: "auto",
  },
  connectedByProfile: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    paddingTop: 10,
    fontFamily: 'Poppins-Regular',
    // fontWeight: '700',
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
    padding: 20,
    // height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    fontSize: 12,
    fontFamily: 'Poppins-Reguler',
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
  infoShadow: {
    // padding: 8,
    borderRadius: 1,
    shadowColor: 'black',
    elevation: 4,
    padding: 4,
  },
});
