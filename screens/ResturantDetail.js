import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { FontAwesome5IconButton } from 'react-native-vector-icons/FontAwesome5'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'


export const foods = [
  {
      title: "Masala Dosa",
      categories: ["South Indian"],
      price: "₹35",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?cs=srgb&dl=pexels-saveurs-secretes-5560763.jpg&fm=jpg"
  },
  {
      title: "Masala Toast Sandwich",
      categories: ["Sandwiches"],
      price: "₹50",
      image: "https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-1209029.jpg&fm=jpg"
  },
  {
      title: "Kesar Falooda",
      categories: ["Falooda"],
      price: "₹45",
      image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?cs=srgb&dl=pexels-lukas-1352281.jpg&fm=jpg"
  },
  {
      title: "Orange Juice",
      categories: ["Juice"],
      price: "₹30",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?cs=srgb&dl=pexels-photomix-company-96974.jpg&fm=jpg"

  },
  {
      title: "Red Velvet pastery",
      categories: ["Desert"],
      price: "₹45",
      image: "https://images.pexels.com/photos/3093479/pexels-photo-3093479.jpeg?cs=srgb&dl=pexels-erlian-zakia-3093479.jpg&fm=jpg"
  },
  {
    title: "Orange Juice",
    categories: ["Juice"],
    price: "₹30",
    image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?cs=srgb&dl=pexels-photomix-company-96974.jpg&fm=jpg"

},
{
    title: "Red Velvet pastery",
    categories: ["Desert"],
    price: "₹45",
    image: "https://images.pexels.com/photos/3093479/pexels-photo-3093479.jpeg?cs=srgb&dl=pexels-erlian-zakia-3093479.jpg&fm=jpg"
},
{
  title: "Kesar Falooda",
  categories: ["Falooda"],
  price: "₹45",
  image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?cs=srgb&dl=pexels-lukas-1352281.jpg&fm=jpg"
},


];
export default function ResturantDetail( {route, navigation} ) {
  return (
    <View>
      <About route = {route} />
      <Divider width={1.8} style={{marginVertical: 20}} />

      <MenuItems restaurantName={route.params.name} foods = {foods} />



      <ViewCart navigation={navigation}/>

      
    </View>

  

    
  );
}