var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {title: 'Market Place', layout: 'credentials_layout'});
});

module.exports = router;
