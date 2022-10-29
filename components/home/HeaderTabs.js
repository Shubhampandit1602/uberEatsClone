import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export default function HeaderTabs() {
    const [activeTab, SetActiveTab] = useState("Delivery");
  return (
    <View style = {{flexDirection: "row", alignSelf : "center"}}>
        <HeaderButton text = "Delivery" btnColor = "black" textColor = "white" activeTab = {activeTab} SetActiveTab = {SetActiveTab} />
        <HeaderButton text = "Pickup" btnColor = "white" textColor = "black" activeTab = {activeTab} SetActiveTab = {SetActiveTab} />
    </View>
  );
}
const HeaderButton = (props) => (
    
        <TouchableOpacity style = {{
            backgroundColor: props.activeTab == props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
            }}
            onPress = {() => props.SetActiveTab(props.text) }
            
            >

            <Text style = {{
                color: props.activeTab == props.text ? "white" : "black",
                fontSize: 15,
                fontWeight: "900",
            }}>{props.text}</Text>
        </TouchableOpacity>
    
);