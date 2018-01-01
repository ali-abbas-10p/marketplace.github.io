var express = require('express');
var router = express.Router();

var userDbHelper = require('../libs/mysql/user-mysql-helper');


router.post('/signup', function(req, res, next) {

    userDbHelper.selectUser(null,null,req.body.email)
        .then(function (result) {
            if(result.length === 0)
                return userDbHelper.insertUesr(req.body.name,req.body.email,req.body.password);
            else
                throw new Error('email already exists');
        })
        .then(function (result) {
            return userDbHelper.selectUser(result.insertId);
        })
        .then(function (result) {
            res.session.token = result[0].token;
            res.status(200).json({code:200 , msg : 'signed up', data : result[0]});
            res.end();
        })
        .catch(function (error) {
            res.status(200).json({code:406 , msg : 'failed: ' + error.message});
            res.end();
        });
});

router.post('/login',function (req, res, next) {
    userDbHelper.selectUser(null,null,req.body.email,req.body.password)
        .then(function (result) {
            if(result.length === 1)
                res.status(200).json({code:200 , msg : 'signed up', data : result[0]});
            else
                throw new Error('Invalid email or password');
        })
        .catch(function (err) {
            res.status(200).json({code:406 , msg : 'failed: ' + err.message});
            res.end();
        })
});


module.exports = router;
