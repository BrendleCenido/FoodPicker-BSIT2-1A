import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HeaderImage from './HeaderImage';

export default function Header(props : any) {
    const { setModalVisible } = props;
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textHeader}>Food Picker</Text>
            <HeaderImage setModalVisible={setModalVisible}/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#6F1D1B',
        width: '100%',
        paddingTop: 60,
        borderBottomEndRadius: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        marginBottom: 20,
        marginTop: -25,
        fontSize: 25,
        fontWeight: "bold",
        letterSpacing: 5,
        color: "#BC412B"
    }
});