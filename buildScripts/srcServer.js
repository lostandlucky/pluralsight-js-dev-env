/*var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express(); */

//Use ES6 syntax
import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

//Tell express which routes it should handle
//Any references to the root will be handled by this function
app.get('/', function(req, res){
    //__dirname gets the current directory name
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

//Tell express that we would like it to listen to the port we defined above
app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
