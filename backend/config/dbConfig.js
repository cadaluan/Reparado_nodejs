require("dotenv").config();
const mongoose = require('mongoose');

const conexion = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error('La URI de conexión a la base de datos no está definida en las variables de entorno.');
        }
        await mongoose.connect(mongoURI);
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);        
    }
};

module.exports = conexion;