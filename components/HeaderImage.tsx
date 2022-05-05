import React from 'react';
import { TouchableOpacity, View, StyleSheet, ImageBackground, Text } from 'react-native';

export default function HeaderImage(props : any) {
    const { setModalVisible } = props;
    return (
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
            <View style={styles.wrapper}>
                <ImageBackground 
                    source={require('../assets/foodoptions.jpg')} 
                    resizeMode="cover" 
                    style={styles.image}
                    imageStyle={styles.src}>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: -125,
    },
    image: {
        height: 250,
        width: 250
    },
    src: {
        borderRadius: 90,
        borderColor: '#99582A',
        borderWidth: 5
    }
});