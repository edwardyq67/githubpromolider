const { getAll, create, getOne, remove, update } = require('../controllers/Plantilla3_gratis_seccion3.controllers');
const express = require('express');

const routerPlantilla3_gratis_seccion3 = express.Router();

routerPlantilla3_gratis_seccion3.route('/')
    .get(getAll)
    .post(create);

routerPlantilla3_gratis_seccion3.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerPlantilla3_gratis_seccion3;