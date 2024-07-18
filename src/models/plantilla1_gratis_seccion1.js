const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Plantilla1_gratis_seccion1 = sequelize.define('plantilla1_gratis_seccion1', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Plantilla1_gratis_seccion1;