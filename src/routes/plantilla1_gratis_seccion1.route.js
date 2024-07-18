const { getAll, create, getOne, remove, update } = require('../controllers/Plantilla1_gratis_seccin1.controllers');
const express = require('express');

const routerPlantilla1_gratis_seccion1 = express.Router();

routerPlantilla1_gratis_seccion1.route('/')
    .get(getAll)
    .post(create);

routerPlantilla1_gratis_seccion1.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerPlantilla1_gratis_seccion1;