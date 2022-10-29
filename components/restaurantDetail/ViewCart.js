import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

export default function ViewCart(navigation) {
    
    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
      );
        
    const total = items
    .map((item) => Number(item.price.replace("₹", "")))
    .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    console.log(totalUSD);
  
    return (

    <View style = {{
        // flex: 1,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        top: 300,
        bottom: 70,
        // zIndex: 999,
    }}>
        <View style= {{
            flexDirection: 'row',
            justifyContent: 'center',
            width: "100%",
            // elevation: 3,

        }}>
            <TouchableOpacity style = {{
                marginTop: 20, 
                backgroundColor: 'black',
                alignItems: 'center',
                padding: 15,
                borderRadius: 30,  
                width: 300,
                position: "relative",
                // elevation: 2,

                }}
            >
                <Text style = {{color: "white", fontSize: 20, marginRight: 10 }} >View Cart</Text>
            </TouchableOpacity>
        </View>
    </View>
);
}