module.exports = (sequelize, DataType) => sequelize.define('user', {
    id: {
      type: DataType.INTEGER,
      allowNull: true
    },
    nome: {
      type: DataType.STRING
    },
    login: {
      type: DataType.STRING
    },
    senha: {
      type: DataType.STRING
    }
  })