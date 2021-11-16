import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export const TrainingPlanScreen = ({navigation}) => {
    const toHeightScreen = (id) => {
        navigation.navigate("TrainingScreen", {
            id,
            headerTitle: ''
        });
    }
    const planOfWeek = [
        {title: '1 - й День', subTitle: '5 Упражнений', isDayOff: false, id: 1},
        {title: '2 - й День', subTitle: '5 Упражнений', isDayOff: false, id: 2},
        {title: '3 - й День', subTitle: '5 Упражнений', isDayOff: false, id: 3},
        {title: '4 - й День', subTitle: 'Сегодня можно отдохнуть', isDayOff: true, id: 4},
        {title: '5 - й День', subTitle: '5 Упражнений', isDayOff: false, id: 5},
        {title: '6 - й День', subTitle: '5 Упражнений', isDayOff: false, id: 6},
        {title: '7 - й День', subTitle: '5 Упражнений', isDayOff: false, id: 7},
    ];
    const Item = ({item}) => {
        return (
            <TouchableOpacity style={styles.block} onPress={() => toHeightScreen(item.id)} key={item.id}>
                <View>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <Text style={styles.subTitle}>
                        {item.subTitle}
                    </Text>
                </View>
                {item.isDayOff ? <Ionicons name="ios-ice-cream" size={24} style={styles.icon}/> : null}
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>План тренировок на неделю</Text>
            <FlatList style={styles.list} data={planOfWeek} renderItem={Item} keyExtractor={item => item.id}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e9e9e9",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",

    },
    block: {
        borderRadius: 8,
        padding: 25,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    list: {
        width: '90%',
        marginBottom: 20
    },
    title: {
        fontSize: 18,
        fontWeight: '700'
    },
    subTitle: {
        color: '#696969',
        marginTop: 5
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10
    },
    icon: {
        color: '#ff5f29'
    }

});
