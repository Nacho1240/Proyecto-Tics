import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const TableComponent = () => {
  const [mediciones, setMediciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.9:3000/mediciones');
        console.log('Datos recibidos:', response.data);
        setMediciones(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'column' }}>
      <Text>Ph:{item.ph}</Text>
      <Text>{item.microcomponentes.join(', ')}</Text>
      <Text>{new Date(item.timestamp).toLocaleDateString()}</Text>
    </View>
  );

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (mediciones.length === 0) {
    return <Text>No hay datos disponibles</Text>;
  }

  return (
    <FlatList
      data={mediciones}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  );
};

export default TableComponent;
