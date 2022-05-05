import LottieView from 'lottie-react-native';
import React from 'react';
import { View, StyleSheet, Text, Alert, ImageBackground, Image} from 'react-native';
import { Button } from 'react-native-paper';

interface LoginScreenProps {
    navigation: any;
}

const WelcomeScreen = (props: LoginScreenProps) => {

    const home = () => props.navigation.navigate("Home")
    
      return (
        <View style = {styles.container}>
          <Text style = {styles.text}>Food Picker</Text>
          <Image style = {styles.image} source={require('../assets/Y3ie.gif')} />
          <Button 
            mode="contained" 
            onPress={home} 
            icon="arrow-right-bold"
            color={'#BC412B'}
            contentStyle = {{ height: 70, width: 200, }}
            labelStyle = {{ color: 'white'}}
            style = {styles.button}
          >
            Let's go!
          </Button>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b8d5b8"
  },
  text : {
    marginBottom: 100,
    marginTop: 25,
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 5,
    color: "#BC412B"
  },
  image: {
    height: 250,
    width: 250,
    padding: 0
  },
  button: {
    marginTop: 100
  }
});

export default WelcomeScreen;
