const { getAll, create, getOne, remove, update } = require('../controllers/Plantilla2_gratis_seccion2.controllers');
const express = require('express');

const routerPlantilla2_gratis_seccion2 = express.Router();

routerPlantilla2_gratis_seccion2.route('/')
    .get(getAll)
    .post(create);

routerPlantilla2_gratis_seccion2.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerPlantilla2_gratis_seccion2;