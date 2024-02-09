import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View ,Button, ScrollView} from 'react-native';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Product from './components/src/Product';
import store from './components/redux/store';
export default function App() {

  const productitem =[
    {
      image:'https://freepngimg.com/thumb/smartphone/21890-2-smartphone-image.png',
      price:'9900',
      name:'Apple',
      color:'white'
    },
    {
      image:'https://freepngimg.com/thumb/smartphone/21890-2-smartphone-image.png',
      price:'500',
      name:'Samsung',
      color:'grey'
    },
    {
      image:'https://freepngimg.com/thumb/smartphone/21890-2-smartphone-image.png',
      price:'8800',
      name:'Mi',
      color:'black'
    }
  ]


  return (
    <Provider store={store}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <ScrollView>
      {
        productitem.map((item)=>
        <Product item={item}/>
  )
      }
      </ScrollView>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
