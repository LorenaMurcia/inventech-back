const { Sequelize } = require('sequelize');

// Crear la instancia de Sequelize con la configuración del pool
const sequelize = new Sequelize('inventech', 'root', 'Wyms0528', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5, // Número máximo de conexiones en el pool
    min: 0, // Número mínimo de conexiones en el pool
    acquire: 30000, // Tiempo máximo, en milisegundos, que Sequelize intentará obtener una conexión antes de lanzar un error
    idle: 10000 // Tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
  }
});

sequelize.sync()
    .then(() => {
        console.log('Tablas sincronizadas');
    })
    .catch(err => {
        console.error('Error al sincronizar tablas:', err);
    });

module.exports = sequelize;

