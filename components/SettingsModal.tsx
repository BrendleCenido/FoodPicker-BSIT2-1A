import React,  { useState, useEffect } from 'react';
import { Modal, Text, TextInput, View, Pressable, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import FoodOption from './FoodOption';
import { setData } from '../helper/db';

function renderFoodOptions(foodMap:any={}, deleteOption : any) {
    return Object.keys(foodMap || {}).map((option: string, i: number) => {
        return <FoodOption deleteOption={deleteOption} option={option} key={i}>
            {option}
        </FoodOption>;
    });
}

export default function SettingsModal(props : any) {
    const { modalVisible, setModalVisible } = props;
    const [foodMap, setFoodMap] = useState({});
    const [text, onChangeText] = useState('');

    useEffect(() => {
      setFoodMap(props.foodMap);
    }, [props.foodMap]); // Update child state, when props also updated

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
            setModalVisible(modalVisible);
        }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <KeyboardAvoidingView>
                    <ScrollView>
                    {renderFoodOptions(foodMap, (option : string) => {
                      delete foodMap[option];
                      const updatedFoodMap = {
                        ...foodMap
                      };
                      setFoodMap(updatedFoodMap);
                      props.setFoodMap(updatedFoodMap);
                      setData('foodMap', updatedFoodMap);
                    })}
                    <TextInput
                      onChangeText={onChangeText}
                      value={text}
                      placeholder='Add new food option' 
                      style={styles.input} 
                    />
                    </ScrollView>
                    <Pressable
                      style={[styles.button, styles.buttonOpen]}
                      onPress={() => {
                        const updatedFoodMap = {
                          ...foodMap,
                          [text]: true
                        };
                        setFoodMap(updatedFoodMap);
                        props.setFoodMap(updatedFoodMap);
                        setData('foodMap', updatedFoodMap);
                        onChangeText('');
                      }}
                    >
                    <Text style={styles.textStyle}>Add new option</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      margin: 40,
      width: 250,
      backgroundColor: "#d8d7d5",
      borderRadius: 20,
      padding: 10,
      alignItems: "center",
      shadowColor: "#ecf8f8",
      shadowOffset: {
        width: 0,
        height: 50
      },
      shadowOpacity: 100,
      shadowRadius: 250,
      elevation: 200
    },
    button: {
      borderRadius: 20,
      padding: 20,
      elevation: 2,
      margin: 5,
      alignSelf: 'stretch'
    },
    buttonOpen: {
      backgroundColor: '#5cb85c'
    },
    buttonClose: {
      backgroundColor: "#d9534f",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20
    },
    input: {
        height: 50,
        marginTop: 10,
        marginBottom: 5,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        alignSelf: 'stretch',
    }
  });