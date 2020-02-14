var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express HI HI ' });
});
router.get('/wow/' ,function(req, res, next){
	res.send(`wow wow wow Hi ${req.query.name}`);
});
module.exports = router;
