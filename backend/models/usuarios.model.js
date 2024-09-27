const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    unique: [true, 'El email ya está en uso'],
    match: [/.+\@.+\..+/, 'Debe ingresar un email válido'],
  },
  contrasena: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
  rol: {
    type: String,
    enum: ['Cliente', 'Administrador'],
    default: 'Cliente',
  },
  habilitado: {
    type: Boolean,
    default: true,
  },
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
