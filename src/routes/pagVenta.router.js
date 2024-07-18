const { getAll, create, getOne, remove, update } = require('../controllers/PagVenta.controllers');
const express = require('express');

const routerPagVenta = express.Router();

routerPagVenta.route('/')
    .get(getAll)
    .post(create);

routerPagVenta.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerPagVenta;