const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Modelo = sequelize.define('modelo', {
    Nombre_plantilla: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Precio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Nombre_producto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Nombre_Autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Modelo;