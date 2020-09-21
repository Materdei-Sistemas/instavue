const express = require('express');
const router = express.Router();

/**
 * Controllers
 */
const AuthController = require('./controllers/AuthController');
const PostController = require('./controllers/PostController');
const PutController = require('./controllers/PutController');

/**
 * Middlewares
 */
const isAuthenticated = require('./middleware/isAuthenticated');


// Auth
router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);


// Implementadas
router.get('/posts', [isAuthenticated], PostController.find);
router.post('/posts', [], PostController.create);

// TODO
router.get('/posts/:id', [], PostController.findOne);
router.put('/put/:id', [], PutController.update);
router.delete('/posts/:id', [], PostController.delete);

module.exports = (app) => app.use(router);