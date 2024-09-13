const userRoutes = require('./src/api/users/userRoutes');
const marcaRoutes = require('./src/api/marcas/marca.route');
const trazaRoutes = require('./src/api/traza_mantenimiento/trazaRoutes')
const equiposRoutes = require('./src/api/equipos/equiposRoutes')
const estado_EquiposRoutes = require('./src/api/estado_equipos/estado_EquiposRoutes')
const rolRoutes = require('./src/api/rol/rolRoutes')
const mantenimientosRoutes = require('./src/api/mantenimientos/mantenimientosRoutes')

function routes(app) {
  // app.use('/auth');
  app.use('/api/users', userRoutes); //rutas de  crud de usuarios
  app.use('/api/marca', marcaRoutes)
  app.use('/api/traza', trazaRoutes)
  app.use('/api/equipos', equiposRoutes)
  app.use('/api/estado_equipos', estado_EquiposRoutes)
  app.use('/api/roles', rolRoutes)
  app.use('/api/mantenimiento', mantenimientosRoutes)
}

module.exports = routes;
