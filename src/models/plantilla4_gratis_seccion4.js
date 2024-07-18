const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Plantilla4_gratis_seccion4 = sequelize.define('plantilla4_gratis_seccion4', {
    nombre: {
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

module.exports = Plantilla4_gratis_seccion4;