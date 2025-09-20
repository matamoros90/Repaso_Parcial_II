require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// Middleware para parsear formularios/JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Servir archivos estáticos de /public
// /css/style.css  ->  /public/css/style.css
// /img/fondo.jpg  ->  /public/img/fondo.jpg
app.use(express.static(path.join(__dirname, 'public')));

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Home -> lista
app.get('/', (req, res) => res.redirect('/habitacion04'));

// Rutas
const habitacionRouter = require('./src/routes/habitacion04.router');
app.use('/habitacion04', habitacionRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));