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
  AsyncStorage,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function ProductList({price, title, image, key, currency}) {
  // useEffect(async () => {
  //   const val = await AsyncStorage.getItem('Key');
  //   console.log('AsyncStorege value', val);
  // }, []);

  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  console.log('in the list');
  return (
    <ScrollView>
      <View style={styles.productListView} Key={key}>
        {console.log(price, title, image)}
        {/* <View style={styles.productView}></View> */}
        <Image
          source={{uri: image}}
          style={styles.productView}
          width={40}
          height={40}></Image>
        <View
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            marginLeft: 10,
          }}>
          <View style={{paddingBottom: 5}}>
            <Text style={{color: 'white', fontSize: 22, fontWeight: '500'}}>
              {title}
            </Text>
          </View>
          <Text style={{color: '#9FAA11', fontSize: 16, fontWeight: '400'}}>
            $ {price} USD
          </Text>
        </View>
        <View
          style={{
            width: 'auto',
            marginLeft: 'auto',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={styles.buyBtnBg}
            onPress={() => {
              // Alert.alert('Buy');

              setShowModal(true);
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
              Buy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowModal(false);
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: '40%',
            marginLeft: '23%',
            padding: 20,
            zIndex: 999,
            width: '40%',
            position: 'absolute',
            borderWidth: 1,
            backgroundColor: 'lightpink',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Buy Clicked
          </Text>
          <Pressable
            onPress={() => setShowModal(!showModal)}
            style={{marginTop: 20}}>
            <View
              style={{
                borderRadius: 5,
                backgroundColor: 'black',
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Okay</Text>
            </View>
          </Pressable>
        </View>
      </Modal> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productListView: {
    height: 'auto',
    width: 'auto',
    backgroundColor: 'black',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 5,
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
  },
});
