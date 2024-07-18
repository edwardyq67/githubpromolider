const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const PagVenta = sequelize.define('pagventa', {
    // modelo_id
    paletaColor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // seccion1
    // seccion2
    // seccion3
    // seccion4
    // seccion5
    // seccion6
    // seccion7

});

module.exports = PagVenta;