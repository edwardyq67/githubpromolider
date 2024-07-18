const catchError = require('../utils/catchError');
const pagVenta = require('../models/pagVenta');
const Modelo = require('../models/modelo');
const Plantilla1_gratis_seccion1 = require('../models/plantilla1_gratis_seccion1');
const Plantilla2_gratis_seccion2 = require('../models/plantilla2_gratis_seccion2');
const Plantilla3_gratis_seccion3 = require('../models/plantilla3_gratis_seccion3');
const Plantilla4_gratis_seccion4 = require('../models/plantilla4_gratis_seccion4');
const Plantilla5_gratis_seccion5 = require('../models/plantilla5_gratis_seccion5');
const Plantilla6_gratis_seccion6 = require('../models/plantilla6_gratis_seccion6');

const getAll = catchError(async(req, res) => {
    const results = await pagVenta.findAll({include:[Modelo,Plantilla1_gratis_seccion1,Plantilla2_gratis_seccion2,
        Plantilla3_gratis_seccion3,Plantilla4_gratis_seccion4,Plantilla5_gratis_seccion5,Plantilla6_gratis_seccion6
    ]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await pagVenta.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await pagVenta.findByPk(id,{include:[Modelo,Plantilla1_gratis_seccion1,Plantilla2_gratis_seccion2,
        Plantilla3_gratis_seccion3,Plantilla4_gratis_seccion4,Plantilla5_gratis_seccion5,Plantilla6_gratis_seccion6
    ]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await pagVenta.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await pagVenta.update(
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