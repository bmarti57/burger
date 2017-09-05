var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var tableData = {
            burgers: data
        };
        console.log(tableData);
        res.render("index", tableData);
    });
});

router.post("/", function(req, res) {
    burger.create([
        "burger_name", "devoured" 
    ], [
        req.body.burger_name, req.body.devoured
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

module.exports = router;