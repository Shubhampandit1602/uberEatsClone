import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5' 

export default function BottomTabs() {
  return (
    <View style = {{flexDirection: 'row', margin: 10, marginHorizontal: 30, justifyContent: 'space-between'}}>
      <Icon icon = 'home' text = 'Home' />
      <Icon icon = 'search' text = 'Browse' />
      <Icon icon = 'shopping-bag' text = 'Grocery' />
      <Icon icon = 'receipt' text = 'Orrders' />
      <Icon icon = 'user' text = 'Acount' />
      {/* <Text>Bottom</Text> */}
   
    </View>
  )
}


const Icon = (props) => (

    <View>
        <TouchableOpacity>
            <FontAwesome5 name = {props.icon} size = {25} style = {{
            marginBottom : 3, alignSelf: 'center', 
            }}/>  
            <Text>{props.text}</Text>   
        </TouchableOpacity>

    </View>
    
)