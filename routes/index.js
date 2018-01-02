var express = require('express');
var router = express.Router();
var commonMiddleWares = require('../libs/utils/common-middlewares');



router.get('/', commonMiddleWares.authorizationMiddleWare(true));
router.get('/', function(req, res) {
    res.redirect('/home');
    res.end();
});

router.get('/home',commonMiddleWares.authorizationMiddleWare(true));
router.get('/home',function (req, res) {
    res.end();

});

router.get('/login',commonMiddleWares.checkIfAlreadyLoggedInMiddleWare);
router.get('/login', function(req, res) {
  res.render('login', {title: 'Login | Market Place', layout: 'credentials_layout'});
});


router.get('/signup',commonMiddleWares.checkIfAlreadyLoggedInMiddleWare);
router.get('/signup', function(req, res) {
  res.render('signup', {title: 'Signup | Market Place', layout: 'credentials_layout'});
});

module.exports = router;
