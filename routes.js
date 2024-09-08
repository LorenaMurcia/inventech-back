const userRoutes = require('./src/api/users/userRoutes');

function routes(app) {
  // app.use('/auth');
  app.use('/api/users', userRoutes);
}


module.exports = routes;
