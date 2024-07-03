import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const TableComponent = () => {
  const [mediciones, setMediciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fastify-test-my-water.vercel.app/api/mediciones');
        // Test de conexión con la base de datos
        console.log('Conexión con la base de datos aprobada');
        setMediciones(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Función para obtener las últimas 3 mediciones
  const obtenerUltimasMediciones = () => {
    // Ordenar las mediciones por fecha de creación de forma descendente
    const medicionesOrdenadas = [...mediciones].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Obtener las primeras 3 mediciones después de ordenar
    return medicionesOrdenadas.slice(0, 3);
  };

  const ajustarFecha = (fecha) => {
    const fechaAjustada = new Date(fecha);
    fechaAjustada.setDate(fechaAjustada.getDate() + 1);
    return fechaAjustada.toLocaleDateString();
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Medida N°{index + 1}</Text>
      <Text style={styles.cardText}>Ph: {item.ph}</Text>
      <Text style={styles.cardText}>Microcomponentes (TDS): {item.tds}</Text>
      <Text style={styles.cardText}>Fecha: {ajustarFecha(item.createdAt)}</Text>
    </View>
  );

  if (loading) {
    return <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />;
  }

  if (mediciones.length === 0) {
    return <Text style={styles.noDataText}>No hay datos disponibles</Text>;
  }

  // Obtener solo las últimas 3 mediciones
  const ultimasMediciones = obtenerUltimasMediciones();

  return (
    <FlatList
      data={ultimasMediciones}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
  },
});

export default TableComponent;
