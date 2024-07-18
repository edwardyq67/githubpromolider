const { getAll, create, getOne, remove, update } = require('../controllers/Marketing.controllers');
const express = require('express');

const routerMarketing = express.Router();

routerMarketing.route('/')
    .get(getAll)
    .post(create);

routerMarketing.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerMarketing;