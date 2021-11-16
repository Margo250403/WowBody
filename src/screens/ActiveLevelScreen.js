import React, {useState} from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import {NextButton} from "../components/NextButton";
import Slider from 'react-native-slider';

export const ActiveLevelScreen = ({navigation}) => {
    const [val, setVal] = useState(1);
    const [text, setText] = useState('Сидячая работа, сижу в течении дня');
    const [title, setTitle] = useState('Нет активности');

    const toProblemZoneScreen = () => {
        navigation.navigate("ProblemZoneScreen", {
            headerTitle: ''
        });
    }

    const changeText = (val) => {
        switch (val) {
            case 1:
                setText('Сидячая работа, сижу в течении дня');
                setTitle('Нет активности');
                break;
            case 2:
                setText('Стоячая работа, двигаюсь в течении дня');
                setTitle('Легкая активность');
                break;
            case 3:
                setText('Активный образ жизни, занимаюсь 2-3 раза в неделю');
                setTitle('Высокая активность');
                break;
            case 4:
                setText('Спортсмен, занимаюсь каждый день');
                setTitle('Супер активность');
                break;
            default:
                setText('Сидячая работа, сижу в течении дня');
                setTitle('Нет активности');
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Какой уровень вашей активности?
            </Text>
            <Image style={styles.img} source={require('../../assets/img/slider-bg.jpeg')}/>
            <View style={styles.textWrap}>
                <Text style={styles.text}>Пассивный</Text>
                <Text style={styles.text}>Очень активный</Text>
            </View>
            <Slider
                style={{width: 300, height: 80}}
                value={val}
                maximumTrackTintColor='#b13fee'
                minimumTrackTintColor='#b13fee'
                thumbStyle={styles.thumb}
                minimumValue={1}
                maximumValue={4}
                thumbTintColor='#b13fee'
                step={1}
                onValueChange={(value) => changeText(value)}/>
            <Text style={styles.titleDesc}>{title}</Text>
            <Text style={styles.textDesc}>{text}</Text>
            <NextButton handler={toProblemZoneScreen} text={'Дальше'}/>
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
    textWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        width: '80%',
        textAlign: 'center',
        marginTop: 50
    },
    text: {
        fontWeight: 'bold',

    },
    img: {
        width: '60%',
        marginTop: -250,
        marginBottom: -200,
        resizeMode: 'contain'

    },
    textDesc: {
        fontSize: 16,
        color: '#999999',
        textAlign: 'center'
    },
    titleDesc: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
});
