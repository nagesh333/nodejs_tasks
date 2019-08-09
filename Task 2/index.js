//SERVER SIDE. NOT FOR LOCALHOST

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); 

const port = 3000;

app.get('/', (req, res) => {
	res.redirect('/cw9');
});

app.get('/cw9', (req, res) => {
   res.sendFile(path.join(__dirname, './cw9.html'));
});

app.post('/spawn', (req, res) => {
	var CompanyID = (req.body.companyid);
	console.log(CompanyID);
	var Username = (req.body.userid);
	console.log(Username);
	var Password = (req.body.pd);
	console.log(Password);
	var Spawn = require("child_process").spawn;			// CREATING CHILD PROCESS FOR PYTHON
	var process = Spawn('python',["./helloworld.py",CompanyID,Username,Password] ); 
	process.stdout.on('data', function(data) {
		if((JSON.stringify(data)).toString().indexOf("ERROR")>= 0){
			console.log("ERROR OCCURED" + data)
			res.write(data);
			res.end();
		}
		else{
			console.log("ResultFromPython :\n"+data);
			res.write(data);
			res.end();
		}
	})
});

app.listen(port, () => console.log('Prana Forecasting Tool is listening on port '+port+'!'));