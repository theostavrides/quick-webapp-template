const home = require('./home');
const users = require('./user');
const test = require('./test')

module.exports = app => {
	app.use('/', home);
  app.use('/users', users);
  app.use('/test', test)
}