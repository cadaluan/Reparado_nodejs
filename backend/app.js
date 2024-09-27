const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const connectDB = require('./config/dbConfig');

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuración de vistas
app.set('views', path.join(__dirname, '../frontend/views'));
app.set('view engine', 'ejs');

// Archivos estáticos
app.use(express.static(path.join(__dirname, '../frontend/public')))

// Rutas
app.use('/', routes);

module.exports = app;