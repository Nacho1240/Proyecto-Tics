import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,Image,Button,Alert,Pressable} from 'react-native';
import {Dimensions} from 'react-native';
import {LinearGradient as BLinearGradient} from 'react-native-linear-gradient';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Secondscreen from './Second';


const Stack = createNativeStackNavigator();


function Metrics ({navigation}){
return (
  <View style={styles.container}>
    <Text>Metrics Screen</Text>
    <Button title="Go to Home" onPress={()=>navigation.navigate('Home')}/>
    <Button title="Go to Second" onPress={()=>navigation.navigate('Second')}/>

  </View>
);


};

export default Secondscreen;




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
    });