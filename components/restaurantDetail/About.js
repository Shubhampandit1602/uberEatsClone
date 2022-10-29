import { View, Text, Image} from 'react-native'
import React from 'react'




export default function About(props) {
  const{name, image, address } = 
  props.route.params;


  return (
    <View>
      <RestaurantImage image = {image}/> 
      <RestaurantTitle name = {name}/>
      <RestaurantAddress address = {address}/>
    </View>
  );
}

const RestaurantImage = (props) => (
    <Image source = {{uri: props.image}} style = {{width : "100%", height : 180}} />

);


const RestaurantTitle = (props) => (
    <Text style = {{fontSize : 25, fontWeight: "500", marginTop: 10, marginHorizontal: 15}} >{props.name}</Text>

);

const RestaurantAddress = (props) => (
    <Text style={{marginTop: 10, marginHorizontal: 15, fontWeight: "400", fontSize: 14}} >{props.address}</Text>

);