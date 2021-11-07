import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import {NextButton} from "../components/NextButton";
import {useDispatch} from "react-redux";
import {age} from '../store/actions';

export const AgeScreen = () => {
    const [ageValue, setAgeValue] = useState();
    const dispatch = useDispatch();
    const toWeightScreen = () => {
        dispatch(age(ageValue));
    }
    return (
        <View style={styles.container}>
            <Text>

            </Text>

            <NextButton handler={toWeightScreen} text={'Дальше'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    }
});
