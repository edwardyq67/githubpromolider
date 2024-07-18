const { getAll, create, getOne, remove, update } = require('../controllers/Plantilla5_gratis_seccion5.controllers');
const express = require('express');

const routerPlantilla5_gratis_seccion5 = express.Router();

routerPlantilla5_gratis_seccion5.route('/')
    .get(getAll)
    .post(create);

routerPlantilla5_gratis_seccion5.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerPlantilla5_gratis_seccion5;