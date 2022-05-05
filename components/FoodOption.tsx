import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FoodOption(props : any) {
    const { option, deleteOption } = props;
    return (
        <View style={styles.wrapper}>
            <Text style={styles.optionText}>
                {props.children} <Ionicons onPress={() => {
                    deleteOption(option);
                }} style={styles.icon} name="md-close-circle" size={30} color="#d42b1e" />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#808080',
        padding: 15,
        borderRadius: 10,
        marginBottom: 5,
        alignSelf: 'stretch'
    },
    optionText: {
        fontSize: 20,
        textAlign: 'left',
        color: '#f9f9f9'
    },
    icon: {
        position: 'absolute',
        top: 5,
        right: 5,
    }
});