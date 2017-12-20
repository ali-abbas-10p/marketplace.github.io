var express = require('express');
var router = express.Router();
var formidable = require('formidable');

var userDbHelper = require('../libs/mysql/user-mysql-helper');


router.post('/signup', function(req, res, next) {


    userDbHelper.insertUesr(req.body.name,req.body.email,req.body.password,function (err, result) {
        if(!processError(err)) {
            userDbHelper.selectUser(result.insertId,null,null,null,function (err, result) {
                if(!processError(err)) {
                    res.status(200).json({code:200 , msg : 'signed up', data : result[0]});
                    res.end();
                }
            });
        }
    });

    function processError(error) {
        if(error)
        {
            res.json(200,{code:406 , msg : 'failed: ' + error.message});
            res.end();
            return true;
        }
        else
            return false;
    }
});

module.exports = router;
