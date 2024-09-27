const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: [true, 'El usuario es obligatorio'],
  },
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    maxlength: [50, 'El nombre no puede exceder los 50 caracteres'],
  },
  direccion: {
    type: String,
    required: [true, 'La dirección es obligatoria'],
    minlength: [5, 'La dirección debe tener al menos 5 caracteres'],
  },
  telefono: {
    type: String,
    required: [true, 'El teléfono es obligatorio'],
    match: [/^\d{10}$/, 'El teléfono debe tener 10 dígitos'],
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
  habilitado: {
    type: Boolean,
    default: true,
  },
});

const Cliente = mongoose.model('Cliente', ClienteSchema);
module.exports = Cliente;
