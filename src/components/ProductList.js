import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

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

export default function ProductList({price, title, image, key, currency}) {
  return (
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
        <TouchableOpacity style={styles.buyBtnBg}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
            Buy
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
