import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Product from './model/product.js';

// Configuración manual de la base de datos y el puerto
const MONGO_URI = 'mongodb://localhost:27017/products'
const PORT = 5000

const app = express();
app.use(express.json()); // Permite recibir JSON en las peticiones
app.use(cors()); // Habilita CORS para que el frontend pueda hacer peticiones


// Conectar a MongoDB
    mongoose.connect(MONGO_URI)
        .then(() => {console.log('Conectado a la base de datos...')})
        .catch((error) => {console.log(`No se pudo conectar a la base de datos: ${error}`)})


// Crear un endpoint(ruta) para obtener todos los productos

app.get("/products",async(req,res) => {
    try {
        const productos = await Product.find()
        res.json(productos)
    } catch (error) {
        res.status(500).json({error: 'No se pudo obtener los productos'})
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})