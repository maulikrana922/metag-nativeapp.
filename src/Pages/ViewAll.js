import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import ProductList from '../../src/components/ProductList.js';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

function ViewAll(props) {
  const [count, setCount] = useState('10');
  const [start, setStart] = useState('0');
  const [products, setProduct] = useState([]);
  const {token, profile} = useSelector(state => state);

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://testyourapp.online/metag/api/productList',
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
  return (
    <View style={{marginTop: '10%'}}>
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
  );
}

export default ViewAll;
