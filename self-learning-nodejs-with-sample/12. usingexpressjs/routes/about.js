var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Create object to send to EJS
  var objectAbout = {
    title: "Aboutpage",
    link: "/about",
    name: "This is About page"
  }
  res.render('about', objectAbout);
});

module.exports = router;
