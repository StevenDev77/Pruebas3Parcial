const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    mensaje: 'CI/CD Funcionando correctamente',
    servicio: 'API Express desplegada en Vercel'
  });
});

app.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.status(200).json({
    mensaje: `Hola, ${nombre}`,
    estado: 'API disponible'
  });
});

app.get('/suma', (req, res) => {
  const numero1 = Number(req.query.numero1);
  const numero2 = Number(req.query.numero2);

  if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
    return res.status(400).json({ error: 'Los parámetros numero1 y numero2 deben ser numéricos' });
  }

  res.status(200).json({
    numero1,
    numero2,
    resultado: numero1 + numero2
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en: http://localhost:${PORT}`);
});