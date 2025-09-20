// Fuente de datos en memoria
const habitaciones = [
  { id: 1, nombre: 'Suite' },
  { id: 2, nombre: 'Doble' },
  { id: 3, nombre: 'Individual' }
];

exports.index = (req, res) => {
  res.render('index04', { habitaciones });
};

exports.create = (req, res) => {
  res.render('create04');
};

exports.store = (req, res) => {
  const { nombre } = req.body;
  if (!nombre || !nombre.trim()) {
    return res.status(400).send('Falta el nombre de la habitación');
  }
  const nextId = habitaciones.length ? habitaciones[habitaciones.length - 1].id + 1 : 1;
  habitaciones.push({ id: nextId, nombre: nombre.trim() });
  res.redirect('/habitacion04');
};

exports.show = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const habitacion = habitaciones.find(h => h.id === id);
  if (!habitacion) return res.status(404).send('Habitación no encontrada');
  res.render('show04', { habitacion });
};