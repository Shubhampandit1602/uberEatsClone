import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SafeViewAndroid from "../components/SafeViewAndroid";
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, {
  localRestaurants
} from "../components/RestaurantItems";
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/BottomTabs';






export default function Home() {
  const [restaurantData, setRestaurantData]= React.useState(localRestaurants) 
  return (
  <SafeAreaView style = {SafeViewAndroid.AndroidSafeArea}>
    <View style = {{backgroundColor : "white" , padding: 15}}>
      <HeaderTabs/> 
      <SearchBar/>
    </View>

    <ScrollView showsVerticalScrollIndicator={false}>
      <Categories/>
      <RestaurantItems restaurantData = {restaurantData} />
    </ScrollView>
    
    <Divider width={1} />
    <BottomTabs />

    
    
       
  </SafeAreaView>
  )
};

