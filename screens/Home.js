import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SafeViewAndroid from "../components/SafeViewAndroid";
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ResturantItems from '../components/ResturantItems';
// import ResturantItems from '../components/ResturantItems';





export default function Home() {
  return (
  <SafeAreaView style = {SafeViewAndroid.AndroidSafeArea}>
    <View style = {{backgroundColor : "white" , padding: 15}}>
      <HeaderTabs/> 
      <SearchBar/>
    </View>

    <ScrollView showsVerticalScrollIndicator={false}>
      <Categories/>
      <ResturantItems/>
    </ScrollView>
    
    
       
  </SafeAreaView>
  )
};

