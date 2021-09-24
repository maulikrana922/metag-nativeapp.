import React, {useEffect, useState} from 'react';
import {View, ScrollView, Button, Text} from 'react-native';
import ProductList from '../../src/components/ProductList.js';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

function ViewAll(props) {
  const [count, setCount] = useState('3');
  const [start, setStart] = useState('0');
  const {token, profile, link, flag, products} = useSelector(state => state);
  const [product, setProduct] = useState(products);
  console.log('PRODUCTS >>>>>>>>>', products);
  useEffect(() => {
    console.log('changed>>>>>>>>>123', product);
    setProduct(products);
  }, [products]);
  return (
    <View
      style={{
        paddingTop: '10%',
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={{height: 'auto', width: 'auto', backgroundColor: 'red'}}>
        {/* <Icon name="facebook" size={20} /> */}
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
  );
}

export default ViewAll;
