var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Create object to send to EJS
  var objectSendToEjs = {
    title: "Home page",
    name: "This is Home page"
  }
  res.render('index', objectSendToEjs);
});

module.exports = router;
