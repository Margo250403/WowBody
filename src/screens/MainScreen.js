import React from "react";
import {View, Text, StyleSheet, ImageBackground} from "react-native";
import {NextButton} from "../components/NextButton";

export const MainScreen = ({navigation}) => {
    const toHeightScreen = () => {
        navigation.navigate("HeightScreen", {
            headerTitle: ''
        });
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.img} source={require('../../assets/img/fit-bd.jpeg')} resizeMode="cover">
                <Text style={styles.text}>
                    LOSE WEIGHT IN 7 DAYS
                </Text>
                <NextButton handler={toHeightScreen} text={'НАЧАЛО'} />
            </ImageBackground>
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
    img: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    text: {
        fontSize: 46,
        width: '80%',
        textAlign: 'center',
        color: '#fff',
        fontWeight: "bold"
    },

});
