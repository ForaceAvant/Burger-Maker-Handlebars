const express = require("express");
const burger = require("../models/burger");

const router = express.Router();


//READ 
router.get("/", function(req,res){
    res.redirect("/burgers");
});

router.get("/burgers", function(req,res){
    burger.selectAll(function(data) {
        res.render("index", { burger_info: data});
    });
});

//CREATE

router.post("/burgers/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result){
        res.redirect("/");
    });
});

//UPDATE

router.put("/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        res.sendStatus(200);
    });
});

module.exports = router;