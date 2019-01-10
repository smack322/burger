var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

//setup routers with logic to handle requests

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

module.exports = router;