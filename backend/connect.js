const express = require('express');
const { MongoClient } = require('mongodb');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

async function conectarMongoDB() {
  const password = process.env.MONGOPASS;
  const uri = `mongodb+srv://gonzalogaete:${password}@clusterproyectos.yazmt42.mongodb.net/`;
  const client = new MongoClient(uri, {
    tlsAllowInvalidCertificates: true
  });
  
  try {
    await client.connect();
    console.log("Conexión a MongoDB establecida correctamente");
    return client;
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    throw error;
  }
}

async function main() {
  let client;

  try {
    client = await conectarMongoDB();

    io.on('connection', (socket) => {
      console.log('Cliente conectado');

      socket.on('disconnect', () => {
        console.log('Cliente desconectado');
      });

      socket.on('/mediciones', async (datos) => {
        console.log('Datos recibidos:', datos);
        const medicion = {
          ph: datos.ph,
          microcomponentes: datos.microcomponentes,
          timestamp: new Date()
        };

        try {
          const db = client.db("tics1");
          const collection = db.collection("mediciones");
          await collection.insertOne(medicion);
          console.log('Datos almacenados en MongoDB');
        } catch (error) {
          console.error('Error al guardar los datos en MongoDB:', error);
        }
      });
    });

    app.get('/mediciones', async (req, res) => {
      try {
        const db = client.db("tics1");
        const collection = db.collection("mediciones");
        const datos = await collection.find({}).toArray();
        res.json(datos);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        res.status(500).send('Error interno del servidor');
      }
    });

    server.listen(3000, () => {
      console.log('Servidor corriendo en el puerto 3000');
    });

  } catch (error) {
    console.error("Error durante la inicialización:", error);
    if (client) {
      await client.close();
    }
  }
}

main();
