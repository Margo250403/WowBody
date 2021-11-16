import React from "react";
import {View, Text, StyleSheet, FlatList, Image, SafeAreaView} from "react-native";
import {useSelector} from "react-redux";

export const TrainingScreen = () => {
    const training = useSelector(state => state.main.problemZone);

    const hands = [
        {
            id: 1,
            description: 'Подъем рук перед собой с гантелями: 60 повторений 4 подхода',
            img: require('../../assets/gif/hands/gif-1.gif')
        },
        {
            id: 2,
            description: 'Разгибание рук в наклоне: 30 повторений',
            img: require('../../assets/gif/hands/gif-2.gif')
        },
        {
            id: 3,
            description: 'Разведение рук в наклоне: 30 повторений',
            img: require('../../assets/gif/hands/gif-3.gif')
        },
        {id: 4, description: '«Молотки» : 30 повторений', img: require('../../assets/gif/hands/gif-4.gif')},
        {
            id: 5,
            description: 'Жим гантелей параллельным хватом: 45 повторений',
            img: require('../../assets/gif/hands/gif-5.gif')
        },
        {id: 6, description: 'Обратные отжимания: 30 повторений', img: require('../../assets/gif/hands/gif-6.gif')},
        {id: 7, description: 'Тяга гантелей в планке: 20 повторений', img: require('../../assets/gif/hands/gif-7.gif')},
        {id: 8, description: 'Пулловер: 20 повторений', img: require('../../assets/gif/hands/gif-8.gif')},
        {
            id: 9,
            description: 'Круговые вращения рукой в планке: 24 повторения на каждую руку',
            img: require('../../assets/gif/hands/gif-9.gif')
        },
        {id: 10, description: '«Бабочка»: 24 повторения', img: require('../../assets/gif/hands/gif-10.gif')},
        {
            id: 11,
            description: 'Баттерфляй руками лежа на животе: 24 повторения',
            img: require('../../assets/gif/hands/gif-11.gif')
        },
        {
            id: 12,
            description: 'Подъемы рук вверх в позе молитвы: 45 повторений',
            img: require('../../assets/gif/hands/gif-12.gif')
        },
        {id: 13, description: 'Ходьба в планке: 45 повторений', img: require('../../assets/gif/hands/gif-13.gif')},
        {
            id: 14,
            description: 'Рука вперед и к поясу в планке на коленях: 30 повторений',
            img: require('../../assets/gif/hands/gif-14.gif')
        },
        {id: 15, description: 'Проходка в планку: 40 повторений', img: require('../../assets/gif/hands/gif-15.gif')},
    ];

    const ass = [
        {
            id: 1,
            description: 'Сумо-приседания с пульсом: 15 повторений',
            img: require('../../assets/gif/ass/gif-1.gif')
        },
        {
            id: 2,
            description: 'Выпады назад: 10 повторений на каждую ногу',
            img: require('../../assets/gif/ass/gif-2.gif')
        },
        {
            id: 3,
            description: 'Широкий присед + выпад по диагонали: 10 повторений на каждую ногу',
            img: require('../../assets/gif/ass/gif-3.gif')
        },
        {
            id: 4,
            description: 'Проходка: по 5 «проходок» в каждую сторону',
            img: require('../../assets/gif/ass/gif-4.gif')
        },
        {
            id: 5,
            description: 'Махи ногой вверх в мостике: 15 повторений на каждую ногу',
            img: require('../../assets/gif/ass/gif-5.gif')
        },
        {
            id: 6,
            description: 'Мах ногой вверх с пульсацией в мостике: 15 повторений на каждую ногу',
            img: require('../../assets/gif/ass/gif-6.gif')
        },
        {id: 7, description: 'Разведение ног в мостике: 20 повторений', img: require('../../assets/gif/ass/gif-7.gif')},
        {
            id: 8,
            description: 'Мостик на одной ноге: 10 повторений на каждую ногу',
            img: require('../../assets/gif/ass/gif-8.gif')
        },
        {
            id: 9,
            description: 'Пульсирующий выпад на месте: 10 повторений на каждую ногу',
            img: require('../../assets/gif/ass/gif-9.gif')
        },
        {
            id: 10,
            description: 'Махи вперед с пульсацией: 15 повторений на каждую ногу',
            img: require('../../assets/gif/ass/gif-10.gif')
        },
        {
            id: 11,
            description: 'Выпады вперед: 15 повторений на каждую ногу',
            img: require('../../assets/gif/ass/gif-11.gif')
        },
        {
            id: 12,
            description: 'Выпады с отведением ноги назад: 20 повторений на каждую ногу',
            img: require('../../assets/gif/ass/gif-12.gif')
        },
        {id: 13, description: 'Мостик: 20 повторений', img: require('../../assets/gif/ass/gif-13.gif')},
        {
            id: 14,
            description: 'Подъемы на носочки в плие-приседе: 10 повторений',
            img: require('../../assets/gif/ass/gif-14.gif')
        },
        {
            id: 15,
            description: 'Пульсирующее отведение ноги лежа на животе: 15 повторений на каждую ногу',
            img: require('../../assets/gif/ass/gif-15.gif')
        },
    ];

    const core = [
        {
            id: 1,
            description: 'Скрестные касания прямых ног: 10-15 повторений на каждую сторону',
            img: require('../../assets/gif/core/gif-1.gif')
        },
        {
            id: 2,
            description: 'Велосипед на предплечьях: 10-15 повторений на каждую сторону',
            img: require('../../assets/gif/core/gif-2.gif')
        },
        {
            id: 3,
            description: 'Шаги из планки в четвереньки (правая сторона, а потом левая сторона): 10-15 повторений',
            img: require('../../assets/gif/core/gif-3.gif')
        },
        {
            id: 4,
            description: 'Перекаты на полу: 15-20 повторений',
            img: require('../../assets/gif/core/gif-4.gif')
        },
        {
            id: 5,
            description: 'Велосипед с поднятым корпусом: 10-15 повторений на каждую сторону',
            img: require('../../assets/gif/core/gif-5.gif')
        },
        {
            id: 6,
            description: 'Подъемы корпуса к прямым ногам: 15-20 повторений',
            img: require('../../assets/gif/core/gif-6.gif')
        },
        {
            id: 7,
            description: 'Поочередные опускания ног: 10-15 повторений на каждую сторону',
            img: require('../../assets/gif/core/gif-7.gif')
        },
        {
            id: 8,
            description: 'Диагональная складка (правая сторона, а потом левая сторона): 10-15 повторений',
            img: require('../../assets/gif/core/gif-8.gif')
        },
        {
            id: 9,
            description: 'Планка-паук: 10-15 повторений на каждую сторону',
            img: require('../../assets/gif/core/gif-9.gif')
        },
        {
            id: 10,
            description: 'Двойные скручивания с пульсацией: 10-15 повторений',
            img: require('../../assets/gif/core/gif-10.gif')
        },
        {
            id: 11,
            description: 'Подъемы корпуса в позе бабочки: 10-15 повторений',
            img: require('../../assets/gif/core/gif-11.gif')
        },
        {
            id: 12,
            description: 'Сведения рук в уголке на полу: 20-25 повторений',
            img: require('../../assets/gif/core/gif-12.gif')
        },
        {
            id: 13,
            description: 'Планка с касанием стопы: 10-15 повторений на каждую сторону',
            img: require('../../assets/gif/core/gif-13.gif')
        },
        {
            id: 14,
            description: 'Подтягивание рук с пульсацией: 10-15 повторений',
            img: require('../../assets/gif/core/gif-14.gif')
        },
        {
            id: 15,
            description: '"Дворники" с согнутыми ногами: 10-15 повторений на каждую сторону',
            img: require('../../assets/gif/core/gif-15.gif')
        },
    ];

    const getUniqueRandomArray = (array) => {
        return array.sort(() => 0.5 - Math.random()).filter((item, index) => index < 5 ? item : null);
    }

    const Item = ({item}) => {
        return (
            <View style={styles.block}>
                <Image style={styles.img} source={item.img}/>
                <Text style={styles.subTitle}>
                    {item.description}
                </Text>
            </View>
        )
    }

    const trainingType = () => {
        switch (training) {
            case 1:
                return getUniqueRandomArray(hands);
            case 2:
                return getUniqueRandomArray(core);
            case 3:
                return getUniqueRandomArray(ass);
            default:
                return getUniqueRandomArray(hands);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Тренировка на сегодня</Text>
            <FlatList style={styles.list} data={trainingType()} renderItem={Item}
                      keyExtractor={item => item.id}/>
        </SafeAreaView>
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
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#696969',
        borderRadius: 8
    },
    subTitle: {
        flexWrap: 'wrap',
        width: '70%',
        paddingLeft: 15,
        fontSize: 16,
        color: '#fff'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20

    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    }

});
