const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Plantilla6_gratis_seccion6 = sequelize.define('plantilla6_gratis_seccion6', {
    precio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    boton: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Plantilla6_gratis_seccion6;