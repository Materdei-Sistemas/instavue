module.exports = (sequelize, DataType) => sequelize.define('user', {
  username: {
    type: DataType.STRING,
  },
  password: {
    type: DataType.STRING
  },
  name: {
    type: DataType.DATE
  },
  bio: {
    type: DataType.STRING
  },
  picture: {
    type: DataType.STRING
  }
})