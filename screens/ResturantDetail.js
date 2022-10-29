import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { FontAwesome5IconButton } from 'react-native-vector-icons/FontAwesome5'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

export default function ResturantDetail( {route, navigation} ) {
  return (
    <View>
      <About route = {route} />
      <Divider width={1.8} style={{marginVertical: 20}} />

      <MenuItems restaurantName={route.params.name}  />



      <ViewCart navigation={navigation} restaurantName = {route.params.name} />

      
    </View>

  

    
  );
}