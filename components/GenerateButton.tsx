import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function GenerateButton(props : any) {
    const { setRandomFood, getNextMealIdea } = props;
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                setRandomFood();
            }}
        >
        <Text style={styles.text}>Pick My Food</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 90,
        width: '70%',
        backgroundColor: "#FFF",
        borderRadius: 50,
        padding: 15,
        borderColor: '#BB9457',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontFamily: "normal",
        fontWeight: 'bold',
        letterSpacing: 1.5
    }
});