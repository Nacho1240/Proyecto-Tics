import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import axios from 'axios'; // Asegúrate de importar axios si aún no lo has hecho
import ProgressCircle from './Porcent';
import Svg, { LinearGradient, Stop, Text as SvgText } from 'react-native-svg';



 


const Secondscreen = ({ navigation }) => {
  const [sensorPh, setSensorPh] = useState(null);
  const [sensorTds, setSensorTds] = useState(null);
  const [progress, setProgress] = useState(0); // Estado para el progreso inicial
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga
  const [averageMode, setAverageMode] = useState(false); // Estado para el modo de promedio de mediciones

  const toggleAverageMode = () => {
    setAverageMode(!averageMode);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fastify-test-my-water.vercel.app/api/mediciones');
        if (response.data.length > 0) {
          const measurements = response.data.slice(0, 3); // Obtener las últimas tres mediciones
          const latestMeasurement = measurements[0];

          // Actualizar valores de pH y TDS
          setSensorPh(latestMeasurement.ph);
          setSensorTds(latestMeasurement.tds);

          // Calcular el índice de calidad
          const calidad = averageMode ? calcularCalidadPromedio(measurements) : calcularIndiceCalidad(latestMeasurement.ph, latestMeasurement.tds);
          setProgress(calidad); // Actualizar el progreso con el índice de calidad calculado
        } else {
          console.log('No se encontraron mediciones.');
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [averageMode]); // Asegúrate de actualizar cuando cambie el modo de promedio de mediciones

  // Función para calcular el índice de calidad basado en una única medición
const calcularIndiceCalidad = (ph, tds) => {
  // Asignación de puntos para pH
  let puntosPh = 0;
  if (ph >= 0 && ph < 2) {
    puntosPh = 10; // Muy ácido
  } else if (ph >= 2 && ph < 5) {
    puntosPh = 20; // Moderadamente ácido
  } else if (ph >= 5 && ph < 7) {
    puntosPh = 30; // Ligeramente ácido
  } else if (ph === 7) {
    puntosPh = 50; // Neutro
  } else if (ph > 7 && ph <= 9) {
    puntosPh = 40; // Ligeramente alcalino
  } else if (ph > 9 && ph <= 11) {
    puntosPh = 30; // Moderadamente alcalino
  } else if (ph > 11 && ph <= 14) {
    puntosPh = 20; // Muy alcalino
  }

  // Asignación de puntos para TDS
  let puntosTds = 0;
  if (tds < 300) {
    puntosTds = 50; // Excelente
  } else if (tds >= 300 && tds < 600) {
    puntosTds = 40; // Bueno
  } else if (tds >= 600 && tds < 900) {
    puntosTds = 30; // Regular
  } else if (tds >= 900 && tds < 1200) {
    puntosTds = 20; // Malo
  } else if (tds >= 1200) {
    puntosTds = 10; // Inaceptable
  }

  // Calcular el índice de calidad 
  const calidad = (puntosPh * 0.6) + (puntosTds * 0.4); 

  // Redondear el índice
  return parseFloat(calidad.toFixed(0));
};

  // Función para calcular el índice de calidad promedio basado en las últimas tres mediciones
  const calcularCalidadPromedio = (mediciones) => {

    let sumCalidad = 0;
    for (let i = 0; i < mediciones.length; i++) {
      const { ph, tds } = mediciones[i];
      const calidad = calcularIndiceCalidad(ph, tds);
      sumCalidad += calidad;
    }
    return sumCalidad / mediciones.length; // Retorna el promedio de las calidades calculadas
  };

  //Variar el color del círculo de progreso

  const interpolateColor = (percent) => {
    const r = percent < 50 ? 255 : Math.floor(255 - (percent * 2 - 100) * 255 / 100);
    const g = percent > 50 ? 255 : Math.floor((percent * 2) * 255 / 100);
    return `rgb(${r},${g},0)`;
  };

  // Función para obtener el texto dinámico basado en el progreso
  const getQualityText = () => {
    if (progress >= 85) {
      return 'Excelente Calidad del Agua!';
    } else if (progress >= 60) {
      return 'Buena Calidad del Agua!';
    } else if (progress >= 50) {
      return 'Calidad del Agua Regular!';
    } else if (progress <= 49) {
      return 'Mala Calidad de Agua!';
    } else {
      return 'Calidad del Agua Desconocida';
    }
  };

  const progressColor = interpolateColor(progress); // Color dinámico basado en el progreso

  return (
    <View style={styles.container}>
      <View style={styles.Views}>
        <ProgressCircle
          size={280}
          lineWidth={14}
          progress={progress}
          progressColor={progressColor}
          bgColor="whitesmoke"
          textColor={progressColor}
          textStyle={{ fontSize: 24 }}
          showPercentage={true}
          showPercentageSymbol={true}
        />
      </View>

      <View>
        <Text style={styles.Text}>{getQualityText()}</Text>
      </View>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Inicio')}>
          <GradientText text="Volver a Inicio" gradientColors={['#B829AA', '#FD1D1D', '#FCB045']} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Metricas')}>
          <GradientText text="Ir a Métricas" gradientColors={['#B829AA', '#FD1D1D', '#FCB045']} />
        </TouchableOpacity>
      </View>

      <View>

      <TouchableOpacity style={styles.ModeSelector} onPress={toggleAverageMode}>
      <GradientText text={averageMode ? 'Promedio' : 'Medición única'} gradientColors={['#B829AA', '#FD1D1D', '#FCB045']} />

    </TouchableOpacity>

        </View>


    </View>
  );
};

// Componente para texto con gradiente
const GradientText = ({ text, gradientColors }) => {
  return (
    <Svg height="60" width="100%">
      <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
        {gradientColors.map((color, index) => (
          <Stop key={index} offset={`${(index / (gradientColors.length - 1)) * 100}%`} stopColor={color} />
        ))}
      </LinearGradient>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Views: {
    flex: 1,
    backgroundColor: '#fff',
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
    paddingTop: 2,
    paddingLeft: 5,
    borderLeftColor: 'purple',
    borderRightColor: 'orange',
    borderBottomColor: 'red',
    borderTopColor: 'blue',
    marginHorizontal: 10,
    width: '40%',
  },
  Text: {
    fontSize: 22,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'monospace',
    bottom: 230,
    fontWeight: 'bold',
  },
  ModeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1.5,
    paddingTop: 2,
    paddingLeft: 5,
    borderLeftColor: 'purple',
    borderRightColor: 'orange',
    borderBottomColor: 'red',
    borderTopColor: 'blue',
    marginHorizontal: 10,
    width: '40%',

  },
});

export default Secondscreen;
