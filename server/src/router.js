const express = require('express');
const router = express.Router();

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

// Implementadas
router.get('/posts', [], PostController.find);
router.post('/posts', [], PostController.create);

// TODO
router.get('/posts/:id', [], PostController.findOne);
router.put('/posts/:id', [], PostController.update);
router.delete('/posts/:id', [], PostController.delete);

// Implementadas
router.get('/likes', [], LikeController.find);
router.post('/likes', [], LikeController.create);

// TODO
router.get('/likes/:id', [], LikeController.findOne);
router.put('/likes/:id', [], LikeController.update);
router.delete('/likes/:id', [], LikeController.delete);

module.exports = (app) => app.use(router);