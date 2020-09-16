
module.exports = (sequelize, DataType) => sequelize.define('notification', {
  user: {
    type: DataType.INTEGER,
    allowNull: true
  },
  description: {
    type: DataType.STRING,
  },
  notificationDate: {
    type: DataType.DATE
  }
})