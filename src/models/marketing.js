const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Marketing = sequelize.define('marketing', {
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Marketing;