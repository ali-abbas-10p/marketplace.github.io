var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.session.token);
    if(req.session.token)
        res.writeHead(302, {'Location': '/home'});
    else
        res.writeHead(302, {'Location': '/login'});
    res.end();
});

router.get('/home',function (req, res, next) {
    if(req.session.token)
        next();
    else
    {
        res.writeHead(302, {'Location': '/login'});
        res.end();
    }
});
router.get('/home',function (req, res, next) {
    res.end();
});
router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login | Market Place', layout: 'credentials_layout'});
});

router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'Signup | Market Place', layout: 'credentials_layout'});
});

module.exports = router;
