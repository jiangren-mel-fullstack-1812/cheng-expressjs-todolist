var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a todo list');
});

router.post('/', function(req, res, next) {
  console.log(`post request ${req.body}`);
  res.send('respond with a created todo' + req.body);
});

router.get('/:id', function(req, res, next) {
  res.send('respond with a todo ' + req.params.id);
});

router.patch('/:id', function(req, res, next) {
  res.send('respond with a updated todo ' + req.params.id);
});

router.delete('/:id', function(req, res, next) {
  res.send('respond with a deleted todo ' + req.params.id);
});


module.exports = router;
