var express = require('express');
var router = express.Router();

var todoRepository = require('../repository/todo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(todoRepository.getAll());
});

router.post('/', function(req, res, next) {
  console.log(`post request ${req.body}`);
  res.send(todoRepository.create(req.body.name, false));
});

router.get('/:id', function(req, res, next) {
  console.log('get request by id ' + req.params.id);
  res.send(todoRepository.getById(req.params.id));
});

router.patch('/:id', function(req, res, next) {
  console.log('patch request by id ' + req.params.id);
  res.send(todoRepository.patch(req.params.id, req.body));
});

router.delete('/:id', function(req, res, next) {
  console.log('delete request by id ' + req.params.id);
  res.send(todoRepository.delete(req.params.id));
});


module.exports = router;
