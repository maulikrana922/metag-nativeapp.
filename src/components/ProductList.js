import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import close from '../../assets/close.png';
import {updateProduct} from '../redux/reducer';
import cancel from '../../assets/CreateProfile/cancel.png';

export default function ProductList({
  price,
  title,
  image,
  key,
  currency,
  id,
  purchase_status,
  description,
  owner_name,
}) {
  // useEffect(async () => {
  //   const val = await AsyncStorage.getItem('Key');
  //   console.log('AsyncStorege value', val);
  // }, []);

  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false);

  const checkDisable = () => {
    if (purchase_status === 0) {
      getProductImages(id);
      setShowModal(true);
      // setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // const {purchaseImage, products} = useSelector(state => state);
  // const [purchaseImage, setPurchaseImage] = useState(products);
  // useEffect(() => {
  //   console.log(
  //     '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
  //     purchaseImage,
  //   );
  // }, []);
  const {token, profile, link, flag, products} = useSelector(state => state);

  const getProductImages = async id => {
    // console.log("profile token ??????????",profile.api_token )
    let data = JSON.stringify({
      image_id: id,
    });

    var config = {
      method: 'post',
      url: 'https://testyourapp.online/metag-backend/api/purchase-image',
      headers: {
        Authorization: 'Bearer ' + profile.api_token,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        console.log(response);
        console.log(
          'jfhskjfjsjfgsjfjsjfjsjfgjsjfgjsg',
          JSON.stringify(response.data.data),
        );
        navigation.navigate('BuyProductWebViewScreen', {
          url: response.data.data,
        });

        // await dispatch(getPurchaseImage(response.data.data));
      })
      .catch(function (error) {
        console.log('skhijgsdgfugshudfgsufgusdgfsugfusu', error);
      });
  };

  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();

  console.log('Stripe Flag', profile.stripe_flag);

  // const Buy = () => {
  //   navigation.navigate('BuyProductWebViewScreen');
  // };

  console.log('in the list');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.productListView} Key={key}>
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{paddingVertical: 5}}>
                  <Image
                    source={{uri: image}}
                    style={styles.productView}
                    width={65}
                    height={65}></Image>
                </View>
                <View
                  style={{
                    flex: 1,
                    paddingLeft: '3%',
                  }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                    {title}
                  </Text>
                </View>
                <View style={{padding: 5}}>
                  {profile.stripe_flag === 0 ? (
                    <TouchableOpacity
                      style={[styles.buyBtnBg, {backgroundColor: '#40A41D'}]}
                      disabled={disabled}
                      onPress={() => {
                        // Alert.alert('Buy');

                        setShowModal(true);
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 16,
                          fontWeight: '500',
                        }}>
                        {/*purchase_status === 0 ? 'Buy' : 'Purchased'*/}
                        Buy
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={[styles.buyBtnBg, {backgroundColor: '#40A41D'}]}
                      disabled={disabled}
                      // onPress={() => {
                      //   // Alert.alert('Buy');
                      // getProductImages(id);
                      // setShowModal(true);
                      // }}
                      onPress={() => {
                        getProductImages(id);
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 16,
                          fontWeight: '500',
                        }}>
                        Buy
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: '#9FAA11', fontSize: 16, fontWeight: '400'}}>
                $ {price} USD
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
                Owner Name: {owner_name}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
                Description : {description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal statusBarTranslucent={true} transparent={true} visible={showModal}>
        <View
          style={{
            height: '100%',
            backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
          }}>
          <View
            style={{
              // backgroundColor: 'white',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 'auto',
              marginBottom: 'auto',
              width: '80%',
              height: 'auto',
              justifyContent: 'center',
              borderWidth: 1,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                // marginTop: '5%',
                paddingVertical: '0%',
                paddingHorizontal: '5%',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                display: 'flex',
                justifyContent: 'space-evenly',
              }}>
              <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity
                  onPress={() => setShowModal(!showModal)}
                  style={{
                    width: 20,
                    height: 20,
                    alignItems: 'flex-end',
                    // backgroundColor: 'red',
                  }}>
                  <Image
                    source={cancel}
                    resizeMode="contain"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}></Image>
                </TouchableOpacity>
              </View>
              <Image
                source={{uri: image}}
                resizeMode="contain"
                style={{
                  width: '50%',
                  height: '50%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderRadius: 8,
                }}></Image>
              <Text
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',

                  color: '#000000',
                  fontSize: 15,
                }}>
                Before Buying click on above to connect Your Stripe
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setShowModal(!showModal);
                  // navigation.navigate('MyOrders');
                }}
                // onPress={() => props.navigation.navigate('CreateProfile')}
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
                  Okay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productListView: {
    height: 'auto',
    width: 'auto',
    backgroundColor: '#000',
    // borderColor: 'red',
    padding: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  productView: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 5,
  },
  buyBtnBg: {
    width: 'auto',
    height: 'auto',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
