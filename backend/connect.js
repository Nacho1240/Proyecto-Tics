const { MongoClient } = require('mongodb');
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

async function conectarMongoDB() {
  const uri = "mongodb+srv://gonzalogaete:gonzalo210@clusterproyectos.yazmt42.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProyectos";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
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
  } catch (error) {
    console.error("Error durante la inicialización:", error);
    if (client) {
      await client.close();
    }
  }
}

main();
