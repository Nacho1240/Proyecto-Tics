import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { LinearGradient as BLinearGradient } from 'react-native-linear-gradient';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TableComponent from './Table';
import Svg, { G, Path, Defs, Stop, ClipPath, LinearGradient, Text as SvgText, Rect } from 'react-native-svg';

const GradientText = ({ text, style, gradientColors }) => {
  return (
    <Svg height="60" width="100%">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          {gradientColors.map((color, index) => (
            <Stop key={index} offset={`${(index / (gradientColors.length - 1)) * 100}%`} stopColor={color} />
          ))}
        </LinearGradient>
      </Defs>
      <SvgText
        fill="url(#grad)"
        fontSize="16"
        fontWeight="bold"
        x="50%"
        y="50%"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {text}
      </SvgText>
    </Svg>
  );
};

const Stack = createNativeStackNavigator();

function Metrics({ navigation }) {
  return (
    <View style={styles.Views}>
      <TableComponent />

      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Inicio')}>
          <GradientText text="Volver a Inicio" style={styles.ButtonText} gradientColors={['#B829AA', '#FD1D1D', '#FCB045']} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Calidad')}>
          <GradientText text="Ir a Calidad" style={styles.ButtonText} gradientColors={['#B829AA', '#FD1D1D', '#FCB045']} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Metrics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },

  Views: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    width: '100%',
    justifyContent: 'center',
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1.5,
    paddingTop:2,
    paddingLeft: 5,
    borderLeftColor: 'purple',
    borderRightColor: 'orange',
    borderBottomColor: 'red',
    borderTopColor: 'blue',
    marginHorizontal: 10,
    width: '40%',
  },
  ButtonText: {
    color: 'black',
    fontSize: 16,
  },
});
