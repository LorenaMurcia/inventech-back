require('dotenv').config()
const { Sequelize } = require('sequelize');

// Crear la instancia de Sequelize con la configuración del pool
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
      host: process.env.DB_HOST,
      dialect: 'mysql'
  }
);

sequelize.sync()
    .then(() => {
        console.log('Tablas sincronizadas');
    })
    .catch(err => {
        console.error('Error al sincronizar tablas:', err);
    });

module.exports = sequelize;

