import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import {NextButton} from "../components/NextButton";
import {Input} from "../components/Input";
import {useDispatch} from "react-redux";
import {weight} from '../store/actions';

export const WeightScreen = ({navigation}) => {
    const [weightValue, setWeightValue] = useState();
    const [isDisabled, setIsDisabled] = useState(true);
    const dispatch = useDispatch();
    const toWeightScreen = () => {
        dispatch(weight(weightValue));
        navigation.navigate("AgeScreen", {
            headerTitle: 'Выберите ваш возраст'
        });
    }
    const onChange = (text) => {
        setWeightValue(text);
        if (text) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }
    return (
        <View style={styles.container}>
            <Input changeHandler={onChange} type={'кг'}/>

            <NextButton isDisabled={isDisabled} handler={toWeightScreen} text={'Дальше'}/>
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
