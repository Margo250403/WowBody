import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from "../screens/MainScreen";
import {WeightScreen} from "../screens/WeightScreen";
import {HeightScreen} from "../screens/HeightScreen";
import {AgeScreen} from "../screens/AgeScreen";
import {ActiveLevelScreen} from "../screens/ActiveLevelScreen";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={MainScreen}
                              options={() => ({
                                  title: 'WowBody',
                                  headerTransparent: true,
                                  headerTintColor: '#fff',
                                  headerBackTitle: 'Назад'
                              })}/>
                <Stack.Screen
                    name="WeightScreen"
                    component={WeightScreen}
                    options={({route}) => ({
                        title: route.params.headerTitle,
                        headerBackTitle: 'Назад',
                    })}
                />
                <Stack.Screen
                    name="HeightScreen"
                    component={HeightScreen}
                    options={({route}) => ({
                        title: route.params.headerTitle,
                        headerBackTitle: 'Назад'
                    })}
                />
                <Stack.Screen
                    name="AgeScreen"
                    component={AgeScreen}
                    options={({route}) => ({
                        title: route.params.headerTitle,
                        headerBackTitle: 'Назад'
                    })}
                />
                <Stack.Screen
                    name="ActiveLevelScreen"
                    component={ActiveLevelScreen}
                    options={({route}) => ({
                        title: route.params.headerTitle,
                        headerBackTitle: 'Назад'
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
