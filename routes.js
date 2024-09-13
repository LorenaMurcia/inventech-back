const userRoutes = require('./src/api/users/userRoutes');
const marcaRoutes = require('./src/api/marcas/marca.route');
const trazaRoutes = require('./src/api/traza_mantenimientos/trazaRoutes')
const equiposRoutes = require('./src/api/equipos/equiposRoutes')
const estado_EquiposRoutes = require('./src/api/estado_equipos/estado_EquiposRoutes')
const rol = require('./src/api/rol/rolRoutes');
const verifyAuth = require('./src/api/middlewares/verifyAuth');

function routes(app) {
  app.use('/api/users', userRoutes); //rutas de  crud de usuarios
  app.use('/api/marca', marcaRoutes)
  app.use('/api/traza', trazaRoutes)
  app.use('/api/equipos', verifyAuth, equiposRoutes)
  app.use('/api/estado_equipos', estado_EquiposRoutes)
  app.use('/api/roles', rol)
}

module.exports = routes;
