import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import HeaderTabs from '../components/home/HeaderTabs'
import SafeViewAndroid from "../components/home/SafeViewAndroid";
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, {
  localRestaurants
} from "../components/home/RestaurantItems";
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';






export default function Home( {navigation} ) {
  const [restaurantData, setRestaurantData]= React.useState(localRestaurants) 
  return (
  <SafeAreaView style = {SafeViewAndroid.AndroidSafeArea}>
    <View style = {{backgroundColor : "white" , padding: 15}}>
      <HeaderTabs/> 
      <SearchBar/>
    </View>

    <ScrollView showsVerticalScrollIndicator={false}>
      <Categories/>
      <RestaurantItems restaurantData = {restaurantData} navigation = {navigation} />
    </ScrollView>
    
    <Divider width={1} />
    <BottomTabs />

    
    
       
  </SafeAreaView>
  )
};

