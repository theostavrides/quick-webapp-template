require('dotenv').config();
const express = require('express');
const mountRoutes = require('./routes');
const Router = require('express-promise-router');
const app = express();
mountRoutes(app);

app.listen(process.env.DEVPORT, () => console.log(`Example app listening at http://localhost:${process.env.DEVPORT}`));