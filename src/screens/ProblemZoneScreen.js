import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {NextButton} from "../components/NextButton";
import {Ionicons} from '@expo/vector-icons';
import {useDispatch} from "react-redux";
import {problemZone} from "../store/actions";

export const ProblemZoneScreen = ({navigation}) => {
    const [trainingType, setTrainingType] = useState([
        {type: 'Руки', id: 1, className: ''},
        {type: 'Пресс', id: 2, className: ''},
        {type: 'Ягодицы и Бедра', id: 3, className: ''},
    ])
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();
    const toHeightScreen = () => {
        navigation.navigate("TrainingPlanScreen", {
            headerTitle: ''
        });
    }
    const chooseZone = (id) => {
        setTrainingType(prevState => {
            return prevState.map(item => {
                item.className = '';
                if (item.id === id) {
                    dispatch(problemZone(item.id));
                    item.className = 'active';
                }
                return item;
            })
        });
        setDisabled(false);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Выберите проблемную зону
            </Text>
            <Text style={styles.subTitle}>
                Наша программа тренировок будет сосредоточена на этой зоне
            </Text>
            <View style={styles.chooseWrap}>
                <View>
                    {trainingType.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => chooseZone(item.id)}
                                              style={[styles.buttonBlock, item.className === 'active' ? styles.buttonActive : null]}
                                              key={item.id}>
                                <Text style={styles.buttonText}>
                                    {item.type}
                                </Text>
                                {item.className === 'active' ?
                                    <Ionicons name="ios-checkmark" size={16} color="white"/> : null}
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Image style={styles.img} source={require('../../assets/img/girl-bg.jpeg')}/>
            </View>

            <NextButton handler={toHeightScreen} isDisabled={disabled} text={'Дальше'}/>
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
    img: {
        width: 150,
        height: 300,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 26,
        width: '80%',
        textAlign: 'center',
        color: '#000',
        marginBottom: 5,
        marginTop: 50,
        fontWeight: "bold"
    },
    subTitle: {
        fontSize: 16,
        width: '80%',
        textAlign: 'center',
        color: '#999',
    },
    chooseWrap: {
        flexDirection: 'row',
        marginTop: 50,
        width: '100%',
        justifyContent: 'space-around'
    },
    buttonBlock: {
        backgroundColor: '#b13fee',
        padding: 25,
        margin: 15,
        width: 200,
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonActive: {
        backgroundColor: '#560081',
    }
});
