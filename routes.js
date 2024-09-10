const userRoutes = require('./src/api/users/userRoutes');

function routes(app) {
  // app.use('/auth');
  app.use('/api/users', userRoutes); //rutas de  crud de usuarios
  app.use('/api/devices')
  app.use('/api/maintance')
}


module.exports = routes;
