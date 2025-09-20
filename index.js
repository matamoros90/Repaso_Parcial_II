const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use('/carros4404', require('./src/routes/habitacion4404.router'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

/* Mis rutas 4404 */
const habitacion4404Router = require('./src/routes/habitacion4404.router');
app.use('/', habitacion4404Router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));