var express = require('express');
var router = express.Router();
var userList = require("../Data/users.json")

/* GET users listing. */
router.get('/', function(req, res, next) {
  var dataToEjs = {
    title : "This is User Page",
    userList : userList
  }
  res.render("users", dataToEjs);
  
});

module.exports = router;
