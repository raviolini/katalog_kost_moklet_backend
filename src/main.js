require('dotenv').config();

const database = require('./config/database');
const express = require('express');
const bodyParser = require('body-parser');

const kostRouter = require('./api/kost/kost.router');

const app = express();
const port = process.env.APP_PORT || 8080;

database.initialize();

app.use(bodyParser.json());
app.set('json spaces', 2);

app.use('/kosts', kostRouter);

app.get('/', (_, res) => {
	res.end("Kost Katalog Moklet API");
});

app.listen(port, () => console.log(`Listening for requests at port ${port}`));

