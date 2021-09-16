import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import ProductList from '../../src/components/ProductList.js';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

const data = [
  {
    title: 'abc',
    price: '$13',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jkywKMQLRDYYuMkiOJLSHAHaFj%26pid%3DApi&f=1',
    id: 1,
  },
  {
    title: 'xyz',
    price: '$13',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jkywKMQLRDYYuMkiOJLSHAHaFj%26pid%3DApi&f=1',
    id: 2,
  },
  {
    title: 'xyz',
    price: '$13',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jkywKMQLRDYYuMkiOJLSHAHaFj%26pid%3DApi&f=1',
    id: 3,
  },
];

function ViewAll(props) {
  const [count, setCount] = useState('3');
  const [start, setStart] = useState('0');
  const [products, setProduct] = useState(data);
  const {token, profile} = useSelector(state => state);

  // useEffect(() => {
  //   axios({
  //     method: 'post',
  //     url: 'http://testyourapp.online/metag/api/productList',
  //     data: {
  //       count: count,
  //       start: start,
  //     },
  //     headers: {
  //       Authorization: 'Bearer ' + profile.api_token,
  //     },
  //   }).then(response => {
  //     if (response.data.status === 200) {
  //       console.log('200', response.data);
  //       setProduct(response.data.data);
  //     } else {
  //       console.log('false', response.data);
  //     }
  //   });
  // }, [count, start]);
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
                image={element.image}
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
