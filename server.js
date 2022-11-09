var express = require('express');
var path = require('path');

var app = express();
//app.use(express.static('website'));
app.set(path.join(__dirname,'website'));
app.get('/flower',(req,res)=>{
    res.send("I love flowers too");
})
var server = app.listen(3800,()=>console.log("errami"));