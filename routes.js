const userRoutes = require('./src/api/users/userRoutes');
const marcaRoutes = require('./src/api/marcas/marca.route');
const trazaRoutes = require('./src/api/traza_mantenimientos/trazaRoutes')
const equiposRoutes = require('./src/api/equipos/equiposRoutes')

function routes(app) {
  // app.use('/auth');
  app.use('/api/users', userRoutes); //rutas de  crud de usuarios
  app.use('/api/marca', marcaRoutes)
  app.use('/api/traza', trazaRoutes)
  app.use('/api/equipos', equiposRoutes)
}

module.exports = routes;
