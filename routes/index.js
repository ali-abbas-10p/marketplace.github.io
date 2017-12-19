var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.writeHead(302, {'Location': '/login'});
    res.end();
});

router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login | Market Place', layout: 'credentials_layout'});
});

router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'Signup | Market Place', layout: 'credentials_layout'});
});

module.exports = router;
