//SERVER SIDE. NOT FOR LOCALHOST

const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.get('/', (req, res) => {
	res.redirect('/cw8');
});

app.get('/cw8', (req, res) => {
   res.sendFile(path.join(__dirname, './cw8.html'));
});

app.listen(port, () => console.log('Prana Forecasting Tool is listening on port '+port+'!'));