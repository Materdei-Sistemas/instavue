
module.exports = (sequelize, DataType) => sequelize.define('post', {
  user: {
    type: DataType.INTEGER,
    allowNull: true
  },
  text: {
    type: DataType.STRING,
  },
  creationDate: {
    type: DataType.DATE
  },
})