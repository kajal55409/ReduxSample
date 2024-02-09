//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
// create a component
const Header = () => {
    const [cartItems, setCartItem] = useState(0)
    const cartData = useSelector((state) => state.reducer);

    

    useEffect(() => {
        setCartItem(cartData.length)
    }, [cartData])
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold' }}>{cartItems}</Text>
            
        </View>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 80,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10

    },
});

//make this component available to the app
export default Header;
