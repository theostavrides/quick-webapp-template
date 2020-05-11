const home = require('./home');
const users = require('./user');

module.exports = app => {
	app.use('/', home);
  app.use('/users', users);
}