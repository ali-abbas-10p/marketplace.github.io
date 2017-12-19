var express = require('express');
var router = express.Router();

router.post('/signup', function(req, res, next) {
  res.contentType('application/json');
  res.statusCode = 200;
  res.json({code:200 , msg : 'signed up'});
  res.end();
});

module.exports = router;
