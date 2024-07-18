const { getAll, create, getOne, remove, update } = require('../controllers/Modelo.controllers');
const express = require('express');

const routerModelo = express.Router();

routerModelo.route('/')
    .get(getAll)
    .post(create);

routerModelo.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerModelo;