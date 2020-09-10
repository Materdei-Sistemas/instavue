const app = require('../../app');
const assert = require('assert');
const request = require('supertest')(app);

describe('Posts Controller', function () {
  describe('Quando buscar todos os posts', function () {
    
    it('deveria retornar sucesso', function(done) {
      request.get('/posts')
        .expect(200)
        .end(function (err, response) {
          assert.ok(response.body);
          done();
        });
    });

  });

  describe('Quando criar um post', function () {
    it('deve retornar o post criado com status 201', function(done) {
      const testPost = {
        text: "Post de Teste",
        user: 123
      };

      request.post('/posts')
        .send(testPost)
        .expect(201)
        .end(function (err, response) {
          if(err) {
            done(err);
          }
          assert.ok(response.body)
          assert.equal(testPost.user, response.body.user);
          assert.equal(testPost.text, response.body.text);
          done();
        });
    });
  });
});