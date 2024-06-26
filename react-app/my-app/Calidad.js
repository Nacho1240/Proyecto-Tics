import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,Image,Button,Alert,Pressable} from 'react-native';
import {Dimensions} from 'react-native';
import {LinearGradient as BLinearGradient} from 'react-native-linear-gradient';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Svg, { G, Path, Defs, Stop, ClipPath, LinearGradient, Text as SvgText, Rect } from 'react-native-svg';
import ProgressCircle from './Porcent';

const Stack = createNativeStackNavigator();
// Variacion de color del circulo de porcentaje
const interpolateColor = (percent) => {
  const r = percent < 50 ? 255 : Math.floor(255 - (percent * 2 - 100) * 255 / 100);
  const g = percent > 50 ? 255 : Math.floor((percent * 2) * 255 / 100);
  return `rgb(${r},${g},0)`;
};


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


function Secondscreen({navigation}){
  const progress = 50;
  const progressColor = interpolateColor(progress);

return (
  <View style={styles.Views}>
         <View style={styles.Views}>
         <ProgressCircle
          size={280}  
          lineWidth={14}
          progress={progress}
          progressColor={progressColor}  // Color dinámico 
          bgColor="whitesmoke"  // Color de fondo 
          textColor={progressColor}  // Color del texto 
          textStyle={{ fontSize: 24 }}
          showPercentage={true}
          showPercentageSymbol={true}
        />


         </View>
    






     

      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Inicio')}>
          <GradientText text="Volver a Inicio" style={styles.ButtonText} gradientColors={['#B829AA', '#FD1D1D', '#FCB045']} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Metricas')}>
          <GradientText text="Ir a Metricas" style={styles.ButtonText} gradientColors={['#B829AA', '#FD1D1D', '#FCB045']} />
        </TouchableOpacity>
      </View>
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
    display: 'flex',
  },

  Views: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
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
  //configuracion del circulo.
  progressCircleContainer: {  
    alignItems: 'center',
  },
});
