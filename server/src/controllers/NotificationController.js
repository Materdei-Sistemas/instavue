const { Post } = require('../models');

module.exports = {
  /**
   *  GET localhost:3000/notifications - retorna todos as NOTIFICAÇÕES que estão no banco de dados
   * @param {*} req 
   * @param {*} res 
   */
  async find(req, res) {
    try {
      const notifications = await Notification.findAll();
      return res.send(notifications);
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
    }
  }

}