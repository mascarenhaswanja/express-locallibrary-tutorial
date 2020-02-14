var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express HI HI ' });
});

router.get('/cool' ,function(req, res, next){
	res.send(`You are so coll`)});

module.exports = router;
