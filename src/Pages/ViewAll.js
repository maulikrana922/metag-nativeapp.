import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import ProductList from '../../src/components/ProductList.js';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

function ViewAll(props) {
  const [count, setCount] = useState('3');
  const [start, setStart] = useState('0');
  const {token, profile, link, flag, products} = useSelector(state => state);
  console.log('PRODUCTS >>>>>>>>>', products);

  return (
    <View
      style={{
        paddingTop: '10%',
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor: 'white',
        flex: 1,
      }}>
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
                image={element.upload_image}
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
