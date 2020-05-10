const Router = require('express-promise-router');
const db = require('../db');
const router = new Router();

module.exports = router;

router.get('/:name', async (req, res) => {
	const { name } = req.params;
	const { rows } = await db.query('SELECT * FROM users WHERE name = $1', [name])
	res.send(rows)
});