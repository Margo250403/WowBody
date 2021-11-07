import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import {NextButton} from "../components/NextButton";
import InputRange from 'react-input-range';

export const ActiveLevelScreen = () => {
    const [val, setVal] = useState(1);
    return (
        <View style={styles.container}>
            <InputRange
                maxValue={4}
                minValue={1}
                value={val}
                onChange={value => setVal(value)}/>

            <NextButton text={'Дальше'}/>
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
    }
});
