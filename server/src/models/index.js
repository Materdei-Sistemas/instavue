const Sequelize = require('sequelize');
const Post = require('./Post');
const Like = require('./Like');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './instavue.db',
  logging: true // se verdadeiro, vai logar as queries SQL no terminal durante a execução
});

sequelize.Post = sequelize.import('./Post.js');
sequelize.Like = sequelize.import('./Like.js');
sequelize.Notification = sequelize.import('./Notification.js');

// relacionamento
sequelize.Like.belongsTo(sequelize.Post, {  foreignKey: 'PosID'});

// Sincroniza as definições de models com o banco de dados
sequelize.sync();

module.exports = sequelize;