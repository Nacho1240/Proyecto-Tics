import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import axios from 'axios';

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);
  const [tableHead, setTableHead] = useState(['Column 1', 'Column 2', 'Column 3', 'Column 4']);

  useEffect(() => {
    // Reemplaza 'https://api.example.com/data' con la URL de tu API
    axios.get('https://api.example.com/data')
      .then(response => {
        const data = response.data;
        // Transformar datos si es necesario
        const formattedData = data.map(item => [item.field1, item.field2, item.field3, item.field4]);
        setTableData(formattedData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} textStyle={styles.text}/>
        </Table>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

export default TableComponent;
