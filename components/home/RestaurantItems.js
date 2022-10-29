import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const localRestaurants = [
    {
        name: "Mukesh Patel School Of Technology Management & Engineering",
        image_url: "https://qph.cf2.quoracdn.net/main-qimg-fff6bcb40f114e3e79521cc8df682876-lq",
        categories: ["Cafe", "Bar"],
        price : "$$",
        reviews: 1223, 
        rating:4.5,
        address: "Bhaktivedanta, Swami Vivekananda Rd, near Cooper Hospital, JVPD Scheme, Vile Parle West, Mumbai, Maharashtra 400056",
    },
    {
        name: "NMIMS Deemed-to-be-University",
        image_url: "https://www.nmims.edu/images/home-slide/m-school-1.jpg",
        categories: ["Indian", "Bar", "Persian"],
        price : "$$$$",
        reviews: 1293, 
        rating:4.99,   
        address: "V. L, Pherozeshah Mehta Rd, Vile Parle West, Mumbai, Maharashtra 400056",

    },
    {
        name: "SVKM's Dwarkadas J. Sanghvi College of Engineering",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/3/38/Apollo..jpg",
        categories: ["Indian", "Bar"],
        price : "$$$",
        reviews: 123, 
        rating:4.9,
        address: "No. U, 15, Bhaktivedanta Swami Rd, opp. Cooper Hospital, Navpada, JVPD Scheme, Vile Parle, Mumbai, Maharashtra 400056",
    },
    {
        name: "SVKM's Mithibai College of Arts Chauhan Institute Of Science And Amrutben Jivanlal College Of Commerce And Economics",
        image_url: "https://mithibai.ac.in/Common/Uploads/ContentTemplate/57_header_College%20Building.jpg",
        categories: ["Indian", "Bar", "Persian"],
        price : "$$$$",
        reviews: 1293, 
        rating:4.99,
        address: "Bhaktivedanta Swami Marg, Gulmohar Road, Suvarna Nagar, Vile Parle (W), Mumbai, Maharashtra 400056",
    },

    
]



export default function RestaurantItems( {navigation, ...props}) {
  return (
    <>
        {props.restaurantData.map((restaurant, index) =>(
            < TouchableOpacity key={index}
             activeOpacity={1} 
             style = {{marginBottom: 30}} 
             onPress= {() => navigation.navigate("ResturantDetail" , {
        
                name: restaurant.name,
                image: restaurant.image_url,
                address: restaurant.address,
            }) }  >
                <View
                   
                    style = {{marginTop: 10, padding: 15, backgroundColor: "white" }}
                >
                    <RestaurantImage image = {restaurant.image_url}/>
                    <RestaurantInfo name = {restaurant.name} rating = {restaurant.rating} />
                </View>

            </TouchableOpacity>
        ))}

    </>

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