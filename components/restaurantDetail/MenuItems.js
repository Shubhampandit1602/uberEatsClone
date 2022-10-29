import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from 'react-redux';

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

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    
  },

  titleStyle: {
    fontSize: 17,
    fontWeight: "600",
  },
});




export default function MenuItems({restaurantName, marginLeft }) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
  dispatch({
    type: "ADD_TO_CART",
    payload: {...item, restaurantName: restaurantName, checkboxValue: checkboxValue},
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      {foods.map ((food, index) => (
        <View key = {index}>
          <View style = {styles.menuItemStyle}>
            <BouncyCheckbox iconStyle = {{borderColor: "lightgray", borderRadius: 0}}
            fillColor = "green"
            onPress={(checkboxValue) => selectItem(food, checkboxValue) }
            
            />
            <FoodInfo food = {food}/>
            <FoodImage food = {food} marginLeft = {marginLeft ? marginLeft:0} />
          </View>
          <Divider width={0.5} orientation = "vertical" style= {{marginHorizontal: 20}} />
        </View>
      ) ) }
  
    </ScrollView >

  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.categories}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 70,
        height: 70,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);