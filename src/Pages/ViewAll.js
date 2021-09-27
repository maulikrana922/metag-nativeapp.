import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import ProductList from '../../src/components/ProductList.js';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-navigation';
function ViewAll(props) {
  const [count, setCount] = useState('3');
  const [start, setStart] = useState('0');
  const {token, profile, link, flag, products} = useSelector(state => state);
  const [product, setProduct] = useState(products);
  console.log('-------------------8888888888888888', profile);
  const navigation = useNavigation();
  console.log('PRODUCTS >>>>>>>>>', products);
  useEffect(() => {
    console.log('changed>>>>>>>>>123', product);
    setProduct(products);
  }, [products]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          paddingTop: '10%',
          paddingLeft: '5%',
          paddingRight: '5%',
          backgroundColor: 'white',
          flex: 1,
        }}>
        <View
          style={{
            height: 'auto',
            width: 'auto',
            paddingBottom: 4,
            // backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              {/* <Text style={{ fontSize: 20, fontWeight: '700' }}>Back</Text> */}
              <Image
                source={require('../../assets/CreateProfile/leftarrow.png')}
                style={{width: 35, height: 20}}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              width: 150,

              height: 50,
              backgroundColor: '#d4d4d4',
              borderRadius: 8,
            }}
            onPress={() => {
              navigation.navigate('StripeWebViewScreen');
            }}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>
              Stripe Connect
            </Text>
            {/*
           <Image
            source={require('../../assets/CreateProfile/leftarrow.png')}
            style={{width: 30, height: 20, alignSelf: 'flex-start'}}
          />
            */}
          </TouchableOpacity>
        </View>
        <ScrollView>
          {/* <ProductList /> */}
          {product.length !== 0 &&
            product.map(element => {
              // console.log('**', element);

              return (
                // <ScrollView>
                <ProductList
                  // key={element.key}
                  title={element.title}
                  price={element.price}
                  image={element.upload_image}
                  id={element.id}
                  purchase_status={element.purchase_status}
                  owner_name={element.owner_name}
                  description={element.description}

                  // key={element.id}
                />
                // </ScrollView>
              );
            })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default ViewAll;
