import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"


export default function App() {

function SvgTop() {
  return(
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={530}
    height={401}
    fill="none"
   
  >
    <G
      filter="url(#a)"
      style={{
        mixBlendMode: "screen",
      }}
    >
      <Path fill="url(#b)" d="M529 0H4.492L1 357h528V0Z" />
    </G>
    <G filter="url(#c)">
      <Path
        fill="#E9E3E3"
        fillOpacity={0.97}
        d="M1 355.397c422.4 1.012 528-35.843 528-54.397v64h-65.738L1 355.397Z"
      />
    </G>
    <Path
      stroke="#fff"
      d="M1 355.397c422.4 1.012 528-35.843 528-54.397v64M1 355.397 463.262 365H529M1 355.397 529 365"
    />
    <Path
      stroke="#FFE1E1"
      d="M1 355.397c422.4 1.012 528-35.843 528-54.397v64M1 355.397 463.262 365H529M1 355.397 529 365"
    />
    <Path
      fill="url(#d)"
      d="M291.906 116.865c0 19.362-15.711 34.991-35.068 34.991-19.358 0-35.068-15.629-35.068-34.991h70.136Z"
    />
    <Path
      fill="url(#e)"
      d="M319.65 116.672H193.405c-3.873 0-7.014 5.223-7.014 11.664S189.532 140 193.405 140h22.368c4.566 20.33 20.811 34.991 40.755 34.991 19.943 0 36.188-14.661 40.755-34.991h22.367c3.873 0 7.014-5.223 7.014-11.664s-3.141-11.664-7.014-11.664Zm-63.122 34.991c-10.329 0-18.98-5.097-23.836-11.663h47.672c-4.857 6.566-13.507 11.663-23.836 11.663Zm-33.014 26.745-14.027 23.328c-2.739 4.556-2.739 11.936 0 16.493 1.37 2.277 3.164 3.417 4.959 3.417 1.795 0 3.589-1.14 4.958-3.418l14.028-23.327c2.739-4.556 2.739-11.937 0-16.494-2.74-4.557-7.178-4.556-9.918.001Zm33.014 8.247c-3.873 0-7.014 5.223-7.014 11.663v23.328c0 6.44 3.141 11.663 7.014 11.663s7.013-5.223 7.013-11.663v-23.328c0-6.44-3.14-11.663-7.013-11.663Zm33.013-8.247c-2.74-4.556-7.178-4.556-9.918 0-2.74 4.556-2.74 11.937 0 16.494l14.027 23.327c1.371 2.277 3.165 3.417 4.959 3.417 1.795 0 3.589-1.14 4.959-3.418 2.74-4.556 2.74-11.936 0-16.493l-14.027-23.327Z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={1}
        x2={529}
        y1={178.5}
        y2={178.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E213F5" />
        <Stop offset={0.5} stopColor="#FD1D1D" />
        <Stop offset={1} stopColor="#FCB045" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={256.838}
        x2={256.838}
        y1={116.865}
        y2={151.856}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#999" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={256.528}
        x2={256.528}
        y1={116.672}
        y2={233.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#999" />
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
});
