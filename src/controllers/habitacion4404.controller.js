// src/controllers/habitacion4404.controller.js
let carros = [
  { id: 1, marca: 'Toyota' },
  { id: 2, marca: 'Honda'  },
  { id: 3, marca: 'Ford'   },
];

exports.index = (req, res) => {
  res.render('index4404', { carros });
};

exports.show = (req, res) => {
  const id = Number(req.params.id);
  const carro = carros.find(c => c.id === id);
  if (!carro) return res.status(404).send('Carro no encontrado');
  res.render('show4404', { carro });
};

exports.create = (req, res) => {
  res.render('create4404');
};

exports.store = (req, res) => {
  const { marca } = req.body || {};
  if (!marca) return res.status(400).send('Marca requerida');
  const id = carros.length ? Math.max(...carros.map(c => c.id)) + 1 : 1;
  carros.push({ id, marca });
  res.redirect('/carros4404');
};