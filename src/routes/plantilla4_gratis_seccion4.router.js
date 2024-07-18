const { getAll, create, getOne, remove, update } = require('../controllers/Plantilla4_gratis_seccion4.controllers');
const express = require('express');

const routerPlantilla4_gratis_seccions4 = express.Router();

routerPlantilla4_gratis_seccions4.route('/')
    .get(getAll)
    .post(create);

routerPlantilla4_gratis_seccions4.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerPlantilla4_gratis_seccions4;