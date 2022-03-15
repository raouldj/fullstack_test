var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const articles = [
  {id: 1, title: 'Title 1', description: null, body: 'Body 1', author: 'Author 1'},
  {id: 2, title: 'Title 2', description: 'Description 2', body: 'Body 2', author: 'Author 2'},
  {id: 3, title: 'Title 3', description: 'Description 3', body: 'Body 3', author: 'Author 3'},
];

const allowedOrigin = 'http://localhost:3000';

router.get('/articles', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(articles);
});

router.get('/articles/:id', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const article = articles.find((currArticle) => currArticle.id === parseInt(req.params.id, 10));
  if (typeof article === 'undefined') {
    res.status(404).send(`Article ${req.params.id} not found`);
  }
  res.json(article);
});

router.post('/articles', function(req, res, next) {
  console.log(req);
  res.json('article');
});

module.exports = router;
