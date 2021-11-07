import React from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";

export const NextButton = ({text, handler, isDisabled}) => {
    return (
        <TouchableOpacity disabled={isDisabled} style={isDisabled ? styles.buttonDisabled : styles.button} onPress={handler}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#b13fee",
        color: '#ffffff',
        padding: 15,
        borderRadius: 5,
        margin: 20,
        width: '80%',
        position: 'absolute',
        bottom: 50,
    },
    buttonDisabled:{
        alignItems: "center",
        backgroundColor: "#b13fee50",
        color: '#ffffff',
        padding: 15,
        borderRadius: 5,
        margin: 20,
        width: '80%',
        position: 'absolute',
        bottom: 50,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    }
});
