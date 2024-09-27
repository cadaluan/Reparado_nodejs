const express = require('express');
const router = express.Router();

// router.use('/clientes', require('./clientes.routes'));
// router.use('/pedidos', require('./pedidos.routes'));
router.use('/productos', require('./productos.routes'));
// router.use('/usuarios', require('./usuarios.routes'));
// router.use('/ventas', require('./ventas.routes'));

module.exports = router;
