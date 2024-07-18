const { getAll, create, getOne, remove, update } = require('../controllers/Plantilla6_gratis_seccion6.controlllers');
const express = require('express');

const routerPlantilla6_gratis_seccion6 = express.Router();

routerPlantilla6_gratis_seccion6.route('/')
    .get(getAll)
    .post(create);

routerPlantilla6_gratis_seccion6.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerPlantilla6_gratis_seccion6;