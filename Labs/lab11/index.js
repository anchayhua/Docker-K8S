const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const url = 'mongodb://database-service:27017'; // Cambia 'database-service' por el nombre de tu servicio MongoDB

app.get('/', async (req, res) => {
    try {
        const client = new MongoClient(url);
        await client.connect();
        res.send("Conectado a MongoDB");
        client.close();
    } catch (err) {
        res.status(500).send("Error al conectar a MongoDB: " + err.message);
    }
});

app.listen(port, () => {
    console.log(`Aplicación corriendo en http://localhost:${port}`);
});