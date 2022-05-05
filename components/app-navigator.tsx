import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './WelcomeScreen';
import MainScreen from './MainScreen';

const { Navigator, Screen} = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator headerMode='none' initialRouteName="WelcomeScreen">
            <Screen name="WelcomeScreen" component={WelcomeScreen}></Screen>
            <Screen name="Home" component={MainScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;