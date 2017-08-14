'use strict'

import express from 'express';
import bodyparser from 'body-parser';
// import exphbs from 'express-handlebars';
// import mOver from 'method-override';
// import expstatic from 'express-static';
// import mysql from 'mysql';

// const app = express();

// const port = process.env.PORT || 3000;

// app.use(bodyparser.urlencoded({
// 	extended: false
// }));


// app.engine('handlebars', exphbs({
// 	defaultLayout: 'main'
// }));

// app.set('view engine', 'handlebars');

// app.use(expstatic(__dirname + '/public'));

// app.get('/', (req, res) => {
// 	console.log('GET:/');
// 	res.json({ 
// 		status:'OK' 
// 	});
// });

// app.post('/add', (req, res) => {
// 	console.log( req.body );
// 	res.json({
// 		status: 'OK'
// 	});
// });

// app.listen( port,_=> {
// 	console.log('listening on ' + port );
// });