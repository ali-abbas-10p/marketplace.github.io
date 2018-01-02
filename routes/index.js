var express = require('express');
var router = express.Router();
var commonMiddleWares = require('../libs/utils/common-middlewares');
var userMySqlHelper = require('../libs/mysql/user-mysql-helper');


router.get('/', commonMiddleWares.authorizationMiddleWare(true));
router.get('/', function(req, res) {
    res.redirect('/home');
    res.end();
});

router.get('/home',commonMiddleWares.authorizationMiddleWare(true));
router.get('/home',function (req, res) {
    userMySqlHelper.selectUser(null,null,null,null,req.authorization)
        .then(function (result) {
            if(result.length>0) {
                var user = result[0];
                console.log(user);
                res.end();
            }
            else
                throw new Error('User not found');
        })
        .catch(function (err) {
            req.session.authorization = null;
            res.redirect('/login');
            res.end();
        });
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
