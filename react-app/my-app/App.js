import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,Image,Button,Alert,Pressable} from 'react-native';
import {Dimensions} from 'react-native';
import {LinearGradient as BLinearGradient} from 'react-native-linear-gradient';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Secondscreen from './Second';
import Metrics from './Metrics';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TableComponent from './Table';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      

      <View style={styles.Svg}>
      <SvgTop />
      </View>
      
      <Adbuton />
      
     {/* <TouchableOpacity style={styles.Detalle} onPress={() => Alert.alert('Simple Button pressed')}> */}
     <GradientButton text="Detalles"   onPress={() => navigation.navigate('Second')} />
      
    
      
      
        {/* <LinearGradient  colors={['#e213f5','#fd1d1d','#fcb045']}
        start={{x:1, y:0}}
        end={{x:0, y:1}}
        </LinearGradient>
        > */}
      
        
        
        
      <StatusBar style="auto" />
    </View>
  );
}








import Svg, {
  G,
  Path,
  Defs,
  Stop,
  ClipPath,
  LinearGradient,
  Text as SvgText,
  Rect,
} from 'react-native-svg';





function SvgTop() {
  return(
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={456}
    height={401}
    fill="none"
  >
    <G clipPath="url(#a)">
      <G
        filter="url(#b)"
        style={{
          mixBlendMode: "screen",
        }}
      >
        <Path fill="url(#c)" d="M509 0H-8.554L-12 357h521V0Z" />
      </G>
      <G filter="url(#d)">
        <Path
          fill="#E9E3E3"
          fillOpacity={0.97}
          d="M-33 355.397c391.2 1.012 489-35.843 489-54.397v64h-60.882L-33 355.397Z"
        />
      </G>
      <Path
        fill="url(#e)"
        d="M228 82c-1.465 0-2.929.704-3.662 2.101-6.683 12.797-13.586 23.088-19.678 32.163-10.517 15.677-18.831 28.056-18.831 43.126-.009 24.206 18.921 43.906 42.171 43.906s42.171-19.7 42.171-43.906c0-15.07-8.298-27.449-18.815-43.126-6.092-9.075-13.019-19.365-19.694-32.163C230.929 82.704 229.465 82 228 82Zm0 12.98c5.708 10.143 11.387 18.614 16.504 26.249 10.058 14.992 17.334 25.824 17.334 38.161.008 19.434-15.18 35.23-33.838 35.23s-33.838-15.796-33.838-35.23c0-12.337 7.276-23.169 17.334-38.161 5.117-7.635 10.804-16.106 16.504-26.249Zm-53.483 71.07a3.998 3.998 0 0 0-1.66.067C144.348 173.214 128 185.171 128 198.958 128 224.318 179.525 238 228 238s100-13.682 100-39.042c0-13.787-16.356-25.752-44.873-32.841-2.258-.564-4.48.895-5.013 3.22-.533 2.334.843 4.655 3.076 5.219 23.375 5.804 38.477 15.387 38.477 24.402 0 14.359-37.65 30.366-91.667 30.366s-91.667-16.007-91.667-30.366c0-9.015 15.094-18.589 38.461-24.402 2.241-.555 3.634-2.902 3.092-5.236-.4-1.744-1.762-2.992-3.369-3.27Zm6.836 15.437C162.27 185.469 153 191.184 153 198.958c0 17.126 47.142 21.69 75 21.69 27.858 0 75-4.564 75-21.69 0-7.774-9.262-13.489-28.337-17.471-2.233-.486-4.457 1.046-4.915 3.406-.458 2.36 1.013 4.623 3.272 5.1 17.258 3.601 21.48 8.002 21.663 8.931-.8 4.433-25.05 13.048-66.683 13.048-41.633 0-65.875-8.599-66.667-12.98.175-.981 4.397-5.398 21.664-8.999 2.258-.477 3.705-2.74 3.255-5.1-.45-2.36-2.682-3.883-4.899-3.406Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={-12}
        x2={509}
        y1={178.5}
        y2={178.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B829AA" />
        <Stop offset={0.8} stopColor="#FD1D1D" />
        <Stop offset={1} stopColor="#FCB045" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={128}
        x2={294.667}
        y1={160.002}
        y2={160.002}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.5} stopColor="#70A9FF" />
        <Stop offset={1} stopColor="#999" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h456v401H0z" />
      </ClipPath>
    </Defs>
  </Svg>);

}

const GradientButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.Detalle} onPress={onPress}>
      <Svg height="60" width="110%" style={styles.svg}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0%" stopColor="#B829AA" />
            <Stop offset="50%" stopColor="#FD1D1D" />
            <Stop offset="100%" stopColor="#FCB045" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" rx="0" ry="0" />
      </Svg>
      <Text style={styles.Detalle}>{text}</Text>
    </TouchableOpacity>
  );
};

function Adbuton() {
  return(

    <TouchableOpacity style={styles.connect} onPress={() => Alert.alert('Simple Button pressed')}>
   

    <GradientText text="Conectar" style={styles.Title} gradientColors={['#B829AA', '#FD1D1D', '#FCB045']} />

      

</TouchableOpacity>
  );
}
const GradientText = ({ text, style, gradientColors }) => {
  return (
    <Svg height="60" width="200">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          {gradientColors.map((color, index) => (
            <Stop key={index} offset={`${(index / (gradientColors.length - 1)) * 100}%`} stopColor={color} />
          ))}
        </LinearGradient>
      </Defs>
      <SvgText
        fill="url(#grad)"
        fontSize="27"
        fontWeight="bold"
        x="10"
        y="40"
      >
        {text}
      </SvgText>
    </Svg>
  );
};



export default function App() {

  
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Second" component={Secondscreen} />
      <Stack.Screen name="Metrics" component={Metrics} />
    </Stack.Navigator>
  </NavigationContainer>
);


 
}







const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    backgroundColor: '#E9E3E3',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 21,
    Top: windowHeight/2,
    fontWeight: 'bold',
    
  },
  Detalle: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    fontSize: 25,
    marginTop: windowHeight/3,
    bottom: 0,
    width: windowWidth,    
    position: 'absolute',
    height: 50,
    padding: 10,
    paddingLeft: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
 Home : {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    fontSize: 21,
    marginTop: windowHeight/3,
    flexDirection: 'row', 
    bottom: 0,
    left: 50,
    width: windowWidth/4,
    borderColor: 'black',
    borderWidth: 1,    
    position: 'absolute',
    borderRadius: 30,
    padding: 8,
    marginLeft: 15,
    paddingLeft: 15,
  },
  Svg: {
    position: 'absolute',
    top: 0,
  
    zIndex: -1,
    flex : 1,
  },
  connect: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E3E3',
    borderLeftColor: 'purple',
    borderRightColor: 'orange',
    borderBottomColor: 'red',
    borderTopColor: 'blue',
    borderWidth: 6,
    height:150,
    top: windowHeight/1.8,
    width:150,
    paddingLeft: 70,
    left: windowWidth/3.4,
  },
  svg: {
    position: 'absolute',
    top: 0,
    flex: 1,
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    bottom: 0,
    width: windowWidth,
    height: 50,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  buttonText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    right: 120,
  },
});
