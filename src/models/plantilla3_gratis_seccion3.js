const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Plantilla3_gratis_seccion3 = sequelize.define('plantilla3_gratis_seccion3', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    boton: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Plantilla3_gratis_seccion3;