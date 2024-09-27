const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del producto es obligatorio'],
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    maxlength: [100, 'El nombre no puede exceder los 100 caracteres'],
  },
  descripcion: {
    type: String,
    maxlength: [500, 'La descripción no puede exceder los 500 caracteres'],
  },
  precio: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
    min: [0, 'El precio no puede ser negativo'],
  },
  stock: {
    type: Number,
    required: [true, 'El stock es obligatorio'],
    min: [0, 'El stock no puede ser negativo'],
  },
  categoria: {
    type: String,
    maxlength: [50, 'La categoría no puede exceder los 50 caracteres'],
  },
  imagen: {
    type: String,
    required: [true, 'La imagen es obligatoria'],
    match: [/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/, 'Debe ingresar una URL de imagen válida'],
  },
});

const Producto = mongoose.model('Producto', ProductoSchema);
module.exports = Producto;
