const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const environment = process.env.NODE_ENV || 'development';
const router = require('./src/router');

app.use(cors());
app.use(bodyParser.json());

// Inicializa os models da aplicação
require('./src/models');
// Inicializa as rotas
router(app);

// Se estamos no ambiente de teste, exporta o servidor sem iniciar
if(environment === 'test') {
  module.exports = app;
} else {
  // Inicia servidor para escutar a porta 3000
  app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
  });
}

