// Vector base
const carros = [
  { id: 1, marca: 'Toyota' },
  { id: 2, marca: 'Honda'  },
  { id: 3, marca: 'Ford'   },
];

const index4404 = (req, res) => {
  res.render('index4404', { carros });
};

const create4404 = (req, res) => {
  res.render('create4404');
};

const store4404 = (req, res) => {
  const { marca } = req.body;
  if (!marca || !marca.trim()) {
    return res.status(400).send('La marca es obligatoria');
  }
  const nuevo = { id: carros.length + 1, marca: marca.trim() };
  carros.push(nuevo);
  res.redirect('/carros4404');
};

const show4404 = (req, res) => {
  const id = Number(req.params.id);
  const carro = carros.find(c => c.id === id);
  if (!carro) return res.status(404).send('Carro no encontrado');
  res.render('show4404', { carro });
};

module.exports = { index4404, create4404, store4404, show4404 };