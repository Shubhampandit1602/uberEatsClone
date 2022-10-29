import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ResturantDetail from "./screens/ResturantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
// import { store } from "./redux/store";


const store = configureStore();


export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown : false,

    };

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName = "Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="ResturantDetail" component={ResturantDetail} />

                </Stack.Navigator>

            </NavigationContainer>
        </ReduxProvider>
    );
}