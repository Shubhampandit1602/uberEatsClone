import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import SafeViewAndroid from '../components/home/SafeViewAndroid';
import LottieView from "lottie-react-native";
import { useEffect } from 'react';
import firebase from "../firebase"
import MenuItems from '../components/restaurantDetail/MenuItems';
import { useState } from 'react';

export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState ({
        items: [
            {
                title: "Masala Dosa",
                categories: ["South Indian"],
                price: "₹35",
                image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?cs=srgb&dl=pexels-saveurs-secretes-5560763.jpg&fm=jpg"
            },
        ],
    });
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

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection("orders")
        .orderBy('createdAt', 'desc')
        .limit(1)
        .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data())
            } );
        } );
        return () => unsubscribe();
    },[] );
  return (
    <SafeAreaView style = {SafeViewAndroid.AndroidSafeArea}>
        <View 
        style = {{ 
            margin: 15,
            alignItems: "center",
            height: "100%",
            backgroundColor: "white"
            }} >

        <LottieView 
        style = {{height: 100, alignSelf: "center", marginBottom: 30}}
        source = {require('../assets/animations/check-mark.json')}
        autoPlay
        speed={0.5}
        loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }} >Your Order at {restaurantName} has been placed for {totalUSD}</Text>
        <ScrollView>
        <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft = {10} />
        
        <LottieView 
        style = {{height: 100, alignSelf: "center", marginBottom: 30}}
        source = {require('../assets/animations/cooking.json')}
        autoPlay
        speed={0.5}
        loop={false}
        />
        </ScrollView>
            
        </View>

    </SafeAreaView>
  );
}