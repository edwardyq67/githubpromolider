const catchError = require('../utils/catchError');
const plantilla3_gratis_seccion3 = require('../models/plantilla3_gratis_seccion3');

const getAll = catchError(async(req, res) => {
    const results = await plantilla3_gratis_seccion3.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await plantilla3_gratis_seccion3.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await plantilla3_gratis_seccion3.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await plantilla3_gratis_seccion3.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await plantilla3_gratis_seccion3.update(
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