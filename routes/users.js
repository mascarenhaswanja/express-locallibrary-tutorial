var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

function coolRouter(req, res, next) {
	res.send('Hey, you are so cool');
}
router.get('/cool', coolRouter);

/*router.get('/cool' ,function(req, res, next){
	res.send(`You are so coll`)}); */

module.exports = router;
