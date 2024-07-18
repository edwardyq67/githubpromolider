const catchError = require('../utils/catchError');
const plantilla5_gratis_seccion5 = require('../models/plantilla5_gratis_seccion5');

const getAll = catchError(async(req, res) => {
    const results = await plantilla5_gratis_seccion5.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await plantilla5_gratis_seccion5.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await plantilla5_gratis_seccion5.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await plantilla5_gratis_seccion5.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await plantilla5_gratis_seccion5.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}