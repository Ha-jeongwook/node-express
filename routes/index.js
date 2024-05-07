var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/letter', function(req, res, next) {
  res.render('letter.html');
});

module.exports = router;
