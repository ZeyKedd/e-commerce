import mongoose from "mongoose";
import Product from "./model/product.js";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/products");
        console.log("Conectado a la base de datos...");
    } catch (error) {
        console.log(`No se ha conectado a la base de datos: ${error}`);
    }
};

const insertData = async () => {
    try {
        await connectDB(); // Conectar antes de insertar

        await Product.insertMany([
            {
                id: 15,
                nombre: "Trembolona 10ml",
                precio: 20000,
                stock: 650,
                detalles:"Suplemento de proteína para el crecimiento muscular y recuperación.",
                category: "suplementos",
                img: "https://getfit.mx/cdn/shop/files/65_e44efb03-8a89-4612-a548-7f1368f25b0e.png?v=1698090881&width=1445",
            },
        ]);

        console.log("Datos insertados correctamente");
    } catch (error) {
        console.log(`Error al insertar datos: ${error}`);
    } finally {
        mongoose.connection.close(); // Cierra la conexión al terminar
    }
};

insertData();
