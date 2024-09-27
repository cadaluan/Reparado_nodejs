const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productos.controller');

router.get('/', productoController.inicio);
router.get('/listarProductos', productoController.listarProductos);
//router.get('/nuevo', usuariosController.formularioCrearProducto);
//router.post('/', productoController.crearProducto);
router.get('/:id', productoController.verProducto);
//router.get('/:id/editar', usuariosController.formularioEditar);
//router.post('/:id/editar', usuariosController.editarProducto);
//router.post('/:id/eliminar', usuariosController.eliminarProducto);

module.exports = router;