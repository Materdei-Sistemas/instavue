module.exports = (sequelize, DataType) => sequelize.define('like', {
    user: {
      type: DataType.INTEGER,
      allowNull: true
    },
    creationDate: {
      type: DataType.DATE
    }
  })