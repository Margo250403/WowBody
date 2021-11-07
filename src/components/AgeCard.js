import React from "react";
import {TouchableOpacity, StyleSheet, Text, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';

export const AgeCard = ({selectHandler, title, subTitle}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={selectHandler}>
            <View>
                <Text style={styles.text}>
                    {title}
                </Text>
                <Text style={[styles.text, styles.subTitle]}>
                    {subTitle}
                </Text>
            </View>
            <Ionicons name="md-arrow-forward" size={32} color="white"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 100,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#b13fee',
        paddingLeft: 30,
        paddingRight: 30,
        margin: 10
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 12,
        marginTop: 10
    }
});
