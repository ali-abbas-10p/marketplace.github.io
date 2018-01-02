var express = require('express');
var router = express.Router();
var commonMiddleWares = require('../libs/utils/common-middlewares');



router.get('/', commonMiddleWares.authorizationMiddleWare(true));
router.get('/', function(req, res, next) {
    res.writeHead(302, {'Location': '/home'});
    res.end();
});

router.get('/home',commonMiddleWares.authorizationMiddleWare(true));
router.get('/home',function (req, res) {
    console.log(req.header('Authorization'));
    res.end();

});
router.get('/login', function(req, res) {
  res.render('login', {title: 'Login | Market Place', layout: 'credentials_layout'});
});


router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'Signup | Market Place', layout: 'credentials_layout'});
});

module.exports = router;
