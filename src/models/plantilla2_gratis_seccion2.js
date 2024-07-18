const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Plantilla2_gratis_seccion2 = sequelize.define('plantilla2_gratis_seccion2', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Plantilla2_gratis_seccion2;