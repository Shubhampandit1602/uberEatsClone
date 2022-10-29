import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    Text : "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    Text: "SoftDrinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    Text: "Bakery",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    Text: "FastFood",
  },
  {
    image: require("../../assets/images/deals.png"),
    Text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    Text: "Coffee or Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    Text: "Desserts",
  }

]


export default function categories() {
  return (

    <View style = {{
      marginTop: 5,
      backgroundColor: "#fff",
      paddingVertical: 10, 
      paddingLeft: 20
    }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((items, index) => ( 
        <View key={index} style = {{alignItems: "center" , marginRight: 30}}>
          <Image 
            source = {items.image} 
            style = {{
              height: 40,
              width: 50, 
              resizeMode: "contain",
            }} 
          />
              <Text 
                style = {{
                  fontSize: 15, 
                  fontWeight: "900",
                  }}>{items.Text}
              </Text>
        </View>
      ))} 
    </ScrollView>
    </View>

  );
}