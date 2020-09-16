const express = require('express');
const router = express.Router();

const PostController = require('./controllers/PostController');

// Implementadas
router.get('/posts', [], PostController.find);
router.post('/posts', [], PostController.create);
router.get('/notifications', [], NotificationController.find);

// TODO
router.get('/posts/:id', [], PostController.findOne);
router.put('/posts/:id', [], PostController.update);
router.delete('/posts/:id', [], PostController.delete);

module.exports = (app) => app.use(router);