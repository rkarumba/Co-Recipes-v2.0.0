//Require Mongoose DB and Express

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const PORT = process.env.PORT || 5200;


// Exporting Auth Routes through the constant instance

// Start Express App
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json()); //Parses JSON Data into a javascript object to then be used inside the code.
app.use(cookieParser());

// Registering the view engine
app.set('view engine', 'ejs');

// Establishing database connection
const dbURI = 'mongodb+srv://kraymond:0700674030@cluster0.wd2x2.mongodb.net/node-auth-recipe-app';
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
	.then((result) => app.listen(PORT))
	.catch((err) => console.log(err));

// Registering routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('index')); // Render whole view
app.get('/search', requireAuth, (req, res) => res.render('search'));
app.get('/myrecipes', requireAuth, (req, res) => res.render('myrecipes'));
app.get('/signup', (req, res) => res.render('signup'));
app.get('/login', (req, res) => res.render('login'));
app.use(authRoutes);

//Cookies

//add the manifest
app.get('/manifest.json', function (req, res) {
	//send the correct headers
	res.header('Content-Type', 'text/cache-manifest');
	//console.log(path.join(__dirname,"manifest.json"));
	//send the manifest file
	//to be parsed bt express
	res.sendFile(path.join(__dirname, 'manifest.json'));
});

//add the service worker
app.get('/sw.js', function (req, res) {
	//send the correct headers
	res.header('Content-Type', 'text/javascript');

	res.sendFile(path.join(__dirname, 'sw.js'));
});

app.get('/pwa.js', function (req, res) {
	//send the correct headers
	res.header('Content-Type', 'text/javascript');

	res.sendFile(path.join(__dirname, 'pwa.js'));
});

app.get('/index.ejs', function (req, res) {
	//send the correct headers
	res.header('Content-Type', 'text/ejs');

	res.sendFile(path.join(__dirname, 'index.ejs'));
});
app.get('/index.ejs', function (req, res) {
	//send the correct headers
	res.header('Content-Type', 'text/ejs');

	res.sendFile(path.join(__dirname, 'index.ejs'));
});
