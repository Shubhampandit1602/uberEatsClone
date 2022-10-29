import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import OrderItem from "./OrderItem";

export default function ViewCart(navigation) {
    const [modalVisible, setModalVisible] = useState(false);
    
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

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1, 
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
        },
        modalCheckoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1,
        },
        restaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10,
        },

        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
        },
        subTotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10,

        },


    });

    const checkoutModalContent = () => {
        return (
            <>
            <View style = {styles.modalContainer} >
                <View style = {styles.modalCheckoutContainer}>
                    <Text style = {styles.restaurantName}>{restaurantName}</Text>
                    {items.map ((item,index) => (
                        <OrderItem key = {index} item = {item} />
                    ))}

                    <View style = {styles.subtotalContainer}>
                        <Text style = {styles.subTotalText}>SubTotal</Text> 
                        <Text>{totalUSD}</Text>
                    </View>

                    <View style = {{
                        flexDirection: "row",
                        justifyContent: "center"
                    }} >
                        <TouchableOpacity style = {{
                            marginTop: 20,
                            backgroundColor: "black",
                            alignItems: "center",
                            padding: 13,
                            borderRadius: 30, 
                            width: 300,
                            position: 'relative',
                        }} 
                        onPress = {() => setModalVisible(false) }
                        >
                            <Text style = {{color: "white", fontSize: 20}}>Checkout</Text>
                            <Text style = {{position: 'absolute', right: 20, color: 'white', fontSize: 15, top: 17 }} >{total ? totalUSD: ""}</Text>

                        </TouchableOpacity>

                    </View>

                
                
                
                </View>
            </View>
 
            
            
            
            
            
            </>

        );

    };
  
    return (
        <>
        <Modal 
        animationType="slide" 
        visible= {modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false) }
        >
            {checkoutModalContent()}
        </Modal>
            {total ? (


                <View style = {{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
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
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            padding: 15,
                            borderRadius: 30,  
                            width: 300,
                            position: "relative",
                            // elevation: 2,

                            }}
                            onPress = {() => setModalVisible (true) }
                        >
                            <Text style = {{color: "white", fontSize: 20, marginRight: 10  }}>
                                View Cart
                            </Text>
                            <Text style = {{color: "white", fontSize: 20, marginRight: 70}}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                ) : (
                    <></>
                )}
                </>
               
    );
}