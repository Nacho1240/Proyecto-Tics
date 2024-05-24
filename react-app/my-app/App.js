import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import {Dimensions} from 'react-native';

import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';


export default function App() {

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
        <Path fill="url(#c)" d="M488 0H-29.554L-33 357h521V0Z" />
      </G>
      <G filter="url(#d)">
        <Path
          fill="#E9E3E3"
          fillOpacity={0.97}
          d="M-33 356.397c416.8 1.012 521-35.843 521-54.397v64h-64.866L-33 356.397Z"
        />
      </G>
      <Path
        stroke="#fff"
        d="M-33 356.397c416.8 1.012 521-35.843 521-54.397v64m-521-9.603L423.134 366H488m-521-9.603L488 366"
      />
      <Path
        stroke="#FFE1E1"
        d="M-33 356.397c416.8 1.012 521-35.843 521-54.397v64m-521-9.603L423.134 366H488m-521-9.603L488 366"
      />
      <Path
        fill="url(#e)"
        d="M221 98c-1.333 0-2.665.605-3.333 1.805-6.081 10.992-12.363 19.831-17.906 27.627-9.57 13.466-17.137 24.099-17.137 37.044-.007 20.793 17.218 37.714 38.376 37.714 21.158 0 38.376-16.921 38.376-37.714 0-12.945-7.552-23.578-17.122-37.044-5.543-7.796-11.847-16.635-17.921-27.627-.668-1.2-2-1.805-3.333-1.805Zm0 11.15c5.195 8.712 10.362 15.988 15.019 22.547 9.153 12.877 15.773 22.181 15.773 32.779.008 16.694-13.813 30.261-30.792 30.261s-30.792-13.567-30.792-30.261c0-10.598 6.62-19.902 15.773-32.779 4.657-6.559 9.832-13.835 15.019-22.547Zm-48.67 61.046a3.866 3.866 0 0 0-1.51.059c-25.943 6.096-40.82 16.367-40.82 28.209C130 220.247 176.888 232 221 232s91-11.753 91-33.536c0-11.842-14.884-22.121-40.834-28.209-2.056-.485-4.077.768-4.562 2.765-.486 2.005.767 3.999 2.799 4.483 21.271 4.986 35.014 13.217 35.014 20.961 0 12.334-34.262 26.083-83.417 26.083s-83.417-13.749-83.417-26.083c0-7.744 13.736-15.967 34.999-20.961 2.04-.477 3.307-2.493 2.814-4.497-.364-1.498-1.603-2.57-3.066-2.81Zm6.221 13.261c-17.366 3.42-25.801 8.329-25.801 15.007 0 14.711 42.899 18.631 68.25 18.631s68.25-3.92 68.25-18.631c0-6.678-8.428-11.587-25.786-15.007-2.033-.418-4.056.898-4.473 2.925-.417 2.027.922 3.972 2.977 4.382 15.705 3.092 19.547 6.873 19.713 7.671-.728 3.808-22.795 11.207-60.681 11.207-37.886 0-59.946-7.386-60.667-11.149.16-.842 4.001-4.637 19.714-7.729 2.055-.41 3.372-2.355 2.962-4.382-.409-2.027-2.441-3.335-4.458-2.925Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={-33}
        x2={488}
        y1={178.5}
        y2={178.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E213F5" />
        <Stop offset={0.5} stopColor="#FD1D1D" />
        <Stop offset={1} stopColor="#FCB045" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={130}
        x2={281.667}
        y1={165.002}
        y2={165.002}
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


function Adbuton() {
  return(

    <TouchableOpacity style={styles.connect}>
      <LinearGradient>
        colors={['#e213f5','#fd1d1d','#fcb045']}
        start={{x:1, y:0}}
        end={{x:0, y:1}}
        
      </LinearGradient>
    <Text style={styles.Title}>Conectar</Text>

</TouchableOpacity>
  );
}





  return (
    <View style={styles.container}>
      <View style={styles.Svg}>
      <SvgTop />
      </View>
      
      <Adbuton />
     
      <Text style={styles.Detalle}>Detalles</Text>
      
        {/* <LinearGradient  colors={['#e213f5','#fd1d1d','#fcb045']}
        start={{x:1, y:0}}
        end={{x:0, y:1}}
        </LinearGradient>
        > */}
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
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E3E3',
    borderColor: 'black',
    borderWidth: 9,
    height:150,
    top: windowHeight/1.8,
    width:150,
  },
});
