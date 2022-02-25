const Sequelize = require('sequelize');
const connection = new Sequelize('guiaPerguntas', 'root', '09060708Ca',{
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = connection;