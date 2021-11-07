import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import {NextButton} from "../components/NextButton";
import {Input} from "../components/Input";
import {useDispatch} from "react-redux";
import {height} from '../store/actions';

export const HeightScreen = ({navigation}) => {
    const [heightValue, setHeightValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const dispatch = useDispatch();
    const toWeightScreen = () => {
        dispatch(height(heightValue));
        navigation.navigate("WeightScreen", {
            headerTitle: 'Введите ваш вес'
        });
    }
    const onChange = (text) => {
        setHeightValue(text);
        if (text) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }
    return (
        <View style={styles.container}>
            <Input changeHandler={onChange} type={'см'}/>

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
