import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import {NextButton} from "../components/NextButton";
import {Input} from "../components/Input";
import {useDispatch, useSelector} from "react-redux";
import {weight, itmIndex} from '../store/actions';

export const WeightScreen = ({navigation}) => {

    const [weightValue, setWeightValue] = useState();
    const [imtValue, setImtValue] = useState();
    const [isDisabled, setIsDisabled] = useState(true);
    const [errorContent, setErrorContent] = useState(null);
    const dispatch = useDispatch();
    const height = useSelector(state => state.main.height);
    const MIN_IMT = 18.5;

    const checkImtIndex = () => {
        const IMT = parseInt(weightValue) / Math.pow(smToMeters(height), 2)
        setImtValue(IMT);
        return IMT >= MIN_IMT;
    }

    const smToMeters = (sm) => {
        return parseInt(sm) / 100;
    }

    const toWeightScreen = () => {
        dispatch(weight(weightValue));
        dispatch(itmIndex(imtValue));
        if (checkImtIndex()) {
            navigation.navigate("AgeScreen", {
                headerTitle: 'Выберите ваш возраст'
            });
        } else {
            setErrorContent(
                <View style={styles.error}>
                    <Text style={styles.errorText}>К сожалению, на основе введенного вами роста и веса, наше приложение
                        не предназначено для людей с ИМТ ниже {MIN_IMT}, поскольку мы следуем рекомендациям Всемирной
                        организации здравоохронения (ВОЗ).
                    </Text>
                    <Text style={styles.errorTitle}>Измените свой вес, что бы продолжить</Text>
                </View>
            )
        }

    }
    const onChange = (text) => {
        setErrorContent(null);
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
            {errorContent}
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
    },
    error: {
        backgroundColor: '#ff1c1c20',
        padding: 20,
        borderRadius: 5,
        marginTop: 50,
        alignItems: 'center',
        width: '80%'
    },
    errorTitle: {
        color: '#ff1f1f',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center'
    },
    errorText: {
        color: '#ff1f1f',
        fontSize: 12,
        textAlign: 'center'
    }
});
