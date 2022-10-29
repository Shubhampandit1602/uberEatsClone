import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const localRestaurants = [
    {
        name: "BeachSide",
        image_url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80",
        categories: ["Cafe", "Bar"],
        price : "$$",
        reviews: 1223, 
        rating:4.5,
    },
    {
        name: "RestIndian",
        image_url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        categories: ["Indian", "Bar"],
        price : "$$$",
        reviews: 123, 
        rating:4.9,
    },
    {
        name: "Kebabs",
        image_url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        categories: ["Indian", "Bar", "Persian"],
        price : "$$$$",
        reviews: 1293, 
        rating:4.99,
    },
    {
    name: "Shawarma Palace",
    image_url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    categories: ["Indian", "Bar", "Persian"],
    price : "$$$$",
    reviews: 1293, 
    rating:4.99,   
    },
    
]



export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style = {{marginBottom: 30}}>
        {props.restaurantData.map((restaurant, index) =>(
            <View 
            key={index}
            style = {{marginTop: 10, padding: 15, backgroundColor: "white" }}>
            <RestaurantImage image = {restaurant.image_url}/>
            <RestaurantInfo name = {restaurant.name} rating = {restaurant.rating} />
        </View>
        ))}
    </TouchableOpacity>

  );
}

const RestaurantImage = (props) => (
    <>
    <Image source = {{uri : props.image}}
    style = {{width: "100%" , height: 180 }}
    />
    {/* <Image source = {uri=props.image_url}
    style = {{width: "100%" , height: 180 }}
    /> */}

    <TouchableOpacity style = {{position: "absolute" , right: 20, top: 20}}>
        <MaterialCommunityIcons name = "heart-outline" size = {25} color = "#fff"/>
    </TouchableOpacity>
    
    </>
    
);

const RestaurantInfo = (props) => (
    <View style = {{flexDirection: "row", justifyContent: "space-between" , alignItems: "center" , marginTop: 10}}>

        <View>
        <Text style = {{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
        <Text style = {{fontSize: 13 , color: "grey"}}>30-45 mins</Text>             
        </View>


        <View style = {{
            height : 30, 
            width: 30, 
            backgroundColor: "#eee" ,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center"
            }}>
        <Text>{props.rating}</Text>
        </View>
    </View>
    


);