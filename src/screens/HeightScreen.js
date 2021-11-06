import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const HeightScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                HeightScreen
            </Text>
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
    text: {
        color: "#000"
    }
});
