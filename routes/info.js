var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.send({
        name: "Some One",
        money: 16
    });
});

module.exports = router;