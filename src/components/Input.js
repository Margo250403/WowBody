import React from "react";
import {View, TextInput, StyleSheet, Text} from "react-native";

export const Input = ({changeHandler, type}) => {

    return (
        <View style={styles.inputContainer}>
            <TextInput onChangeText={changeHandler} returnKeyType="done" keyboardType={'number-pad'}
                       style={styles.input}/>
            <Text style={styles.inputLabel}>
                {type}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        width: 100,
        textAlign: 'center',
        padding: 10,
        fontSize: 38
    },
    inputLabel: {
        fontSize: 24
    }
});
