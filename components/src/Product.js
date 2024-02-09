//import liraries
import React, { Component, useState,  useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';
import { addToCart,removeFromCart } from '../redux/action';
import { useDispatch,useSelector } from 'react-redux';

// create a component
const Product = (props) => {
    const [isAdded, setIAdded] = useState(false)
    const item = props.item
    const dispatch = useDispatch();

    const cartItem = useSelector((state) => state.reducer)

    const HandleAddCart = () => {
        // console.warn('add to cart',item)
        dispatch(addToCart(item))
    }

    const handleRemoveCart =(item)=>{
        // console.warn(item)
        dispatch(removeFromCart(item.name))  // we can use id to remove bulk data
    }
    useEffect(() => {
        if (cartItem && cartItem.length) {
            cartItem.forEach(element => {
                // console.warn(element)
                if (element.name === item.name) {
                    setIAdded(true)
                }
            });
        }
    }, [cartItem])

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image style={{ height: 200, width: 200, alignSelf: 'center' }} resizeMode='contain' source={{ uri: item.image }} />
                <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.color}</Text>
                </View>
                {isAdded ? <Button title=' Remove to cart'
                    onPress={() => handleRemoveCart(item)}
                /> : <Button title=' Add to cart'
                    onPress={() => HandleAddCart(item)}
                />}

            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 20,
        marginBottom: 10,
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        paddingHorizontal: 10,


    },
});

//make this component available to the app
export default Product;
