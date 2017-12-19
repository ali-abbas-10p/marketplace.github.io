var express = require('express');
var router = express.Router();
var userDbHelper = require('../libs/mysql/user-mysql-helper');

router.post('/signup', function(req, res, next) {
  userDbHelper.insertUesr('ali','ali@maildrop.cc','pw',function (err, result) {
  // userDbHelper.selectUser(1,'ali','ali@maildrop.cc','pw',function (err, result) {
    console.log(err,result);
    if(err) {
        res.statusCode = 200;
        res.json({code:200 , msg : 'failed: ' + err.message});
    }
    else {
        res.statusCode = 200;
        res.json({code:200 , msg : 'signed up',});
    }
      res.end();
  });
});

module.exports = router;
