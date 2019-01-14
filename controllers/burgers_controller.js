//add required dependencies
var express = require("express");
var router = express.Router();

//import in database queries to use with routes
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

  router.post("/api/burgers", function(req, res) {
     burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, this.devoured = false], function(data) {
        res.redirect("/");
     });
  });

  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition:" + condition);

    burger.updateOne(
        {
            devoured: true
        },
        condition,
        function(data) {
          console.log(data);
            res.json(data);
    });
  });

module.exports = router;