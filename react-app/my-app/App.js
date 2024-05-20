import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import Svg, {Path,Defs, LinearGradient, Stop} from 'react-native-svg';

export default function App() {

function SvgTop() {
  return(
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={756}
    height={372}
    fill="none"
  
    
   >
    <Path fill="url(#a)" d="M756 0H0v372h756V0Z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        x2={756}
        y1={186}
        y2={186}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E213F5" />
        <Stop offset={0.5} stopColor="#FD1D1D" />
        <Stop offset={1} stopColor="#FCB045" />
      </LinearGradient>
    </Defs>
  </Svg>);

}





  return (
    <View style={styles.container}>
      <View style={styles.Svg}>
      <SvgTop />
      </View>
      <Text style={styles.Title}>Bienvenido!</Text>
     
      <Text style={styles.Detalle}>Detalles</Text>
      <Text style={styles.Home}>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}







const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
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
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 21,
    Top: windowHeight/2,
    fontWeight: 'bold',
    
  },
  Detalle: {
    backgroundColor: 'whitesmoke',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    fontSize: 21,
    marginTop: windowHeight/3,
    flexDirection: 'row', 
    bottom: 0,
    width: windowWidth/3.7,
    borderColor: 'black',
    borderWidth: 1,    
    position: 'absolute',
    borderRadius: 30,
    right: 50,
    padding: 8,
    paddingLeft: 15,
  },
 Home : {
    backgroundColor: 'whitesmoke',
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
    left: 0,
    right: 0,
    height: windowHeight/2,
    width: windowWidth,
  },
});
