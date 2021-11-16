import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {NextButton} from "../components/NextButton";
import {useSelector} from "react-redux";

export const IMTScreen = ({navigation}) => {
    const toAgeScreen = () => {
        navigation.navigate("AgeScreen", {
            headerTitle: ''
        });
    }
    const IMT = useSelector(state => state.main.itmIndex);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Ваш ИМТ = <Text style={styles.imt}>{IMT.toFixed(1)}</Text>
            </Text>
            <Text style={styles.text}>
                Индекс массы тела (ИМТ) — величина, позволяющая оценить степень соответствия массы человека и его роста
                и тем самым косвенно судить о том, является ли масса недостаточной, нормальной или избыточной.
            </Text>
            {IMT < 25 ?
                (<Text style={styles.recommendation}>
                    У Вас нормальный вес
                </Text>) :
                (<Text style={styles.recommendation}>
                    Вам рекомендовано сбросить вес
                </Text>)}
            <NextButton handler={toAgeScreen} text={'Дальше'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%"
    },
    title: {
        marginTop: 100,
        marginBottom: 50,
        fontSize: 24,
        fontWeight: 'bold'
    },
    text: {
        width: '80%',
        textAlign: 'center'
    },
    recommendation: {
        width: '80%',
        textAlign: 'center',
        marginTop: 150,
        fontWeight: 'bold',
        fontSize: 24
    },
    imt:{
        color: '#d92626'
    }

});
