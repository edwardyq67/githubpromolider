const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Plantilla5_gratis_seccion5 = sequelize.define('plantilla5_gratis_seccion5', {
    campo1: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Plantilla5_gratis_seccion5;