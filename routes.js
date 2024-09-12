const userRoutes = require('./src/api/users/userRoutes');
const marcaRoutes = require('./src/api/marcas/marca.route')

function routes(app) {
  // app.use('/auth');
  app.use('/api/users', userRoutes); //rutas de  crud de usuarios
  app.use('/api/marca', marcaRoutes)
}


module.exports = routes;
