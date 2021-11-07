import React from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {AgeCard} from "../components/AgeCard";

export const AgeScreen = ({navigation}) => {
    const toActiveLevelScreen = () => {
        navigation.navigate("ActiveLevelScreen", {
            headerTitle: ''
        });
    }
    const ageList = [
        {title: '20 и более', subTitle: '18-29', id: 1},
        {title: '30 и более', subTitle: '30-39', id: 2},
        {title: '40 и более', subTitle: '40-49', id: 3},
        {title: '50 и более', subTitle: '50+', id: 4},
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Сколько вам лет?</Text>
            {ageList.map(item => {
                return <AgeCard key={item.id}
                                selectHandler={toActiveLevelScreen}
                                subTitle={item.subTitle}
                                title={item.title}/>
            })}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    }
});
