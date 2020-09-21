const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './instavue.db',
  logging: true // se verdadeiro, vai logar as queries SQL no terminal durante a execução
});

sequelize.Post = sequelize.import('./Post.js');
sequelize.Put = sequelize.import('./Put.js');
sequelize.User = sequelize.import('./User.js');

// Sincroniza as definições de models com o banco de dados
sequelize.sync();

module.exports = sequelize;