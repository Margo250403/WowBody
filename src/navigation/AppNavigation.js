import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from "../screens/MainScreen";
import {WeightScreen} from "../screens/WeightScreen";
import {HeightScreen} from "../screens/HeightScreen";
import {AgeScreen} from "../screens/AgeScreen";
import {ActiveLevelScreen} from "../screens/ActiveLevelScreen";
import {ProblemZoneScreen} from "../screens/ProblemZoneScreen";
import {IMTScreen} from "../screens/IMTScreen";
import {TrainingPlanScreen} from "../screens/TrainintPlanScreen";
import {TrainingScreen} from "../screens/TrainingScreen";

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
                    name="IMTScreen"
                    component={IMTScreen}
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
                <Stack.Screen
                    name="ProblemZoneScreen"
                    component={ProblemZoneScreen}
                    options={({route}) => ({
                        title: route.params.headerTitle,
                        headerBackTitle: 'Назад'
                    })}
                />
                <Stack.Screen
                    name="TrainingPlanScreen"
                    component={TrainingPlanScreen}
                    options={({route}) => ({
                        title: route.params.headerTitle,
                        headerBackTitle: 'Назад'
                    })}
                />
                <Stack.Screen
                    name="TrainingScreen"
                    component={TrainingScreen}
                    getId={({params})=> params.id}
                    options={({route}) => ({
                        title: route.params.headerTitle,
                        headerBackTitle: 'Назад',
                        headerTransparent: true,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
