const express = require('express');
const routes = require('../routes');
const sequelize = require('./config/db');


const app = express();
app.use(express.json());

routes(app); //Acrhivo que maneja las rutas de toda la app


// Sincronizar la base de datos y luego levantar el servidor
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente');
        app.listen( 3000, () => {
            console.log(`El servidor está corriendo en el puerto ${3000}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar con la base de datos:', err);
    });

    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Ocurrió un error en el servidor');
  });
