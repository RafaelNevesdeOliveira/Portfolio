const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");
const pages = require("./data2");

server.use(express.static("public"));


server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res){
    return res.render("about");
})

server.get("/contents", function(req, res){
    return res.render("contents", {sites: pages });
})

server.get("/classes", function(req, res){

    return res.render("classes", { items: videos });
})

server.listen(5000, function(){
    console.log("server is running");
})
