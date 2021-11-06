import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MainScreen} from "../screens/MainScreen";
import {WeightScreen} from "../screens/WeightScreen";
import {HeightScreen} from "../screens/HeightScreen";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={MainScreen}/>
                <Stack.Screen
                    name="WeightScreen"
                    component={WeightScreen}
                    options={({route}) => ({title: route.params.headerTitle})}
                />
                <Stack.Screen
                    name="HeightScreen"
                    component={HeightScreen}
                    options={({route}) => ({title: route.params.headerTitle})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
