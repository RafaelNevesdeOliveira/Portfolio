const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const pages = require("./data2");
const videos = require("./data");

server.use(express.static("public"));


server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const about = {
        avatar_path: "assets/eu.png",
        name: "Rafael Neves de Oliveira",
        description: "Estudante de Analise e Desenvolvimento de Sistema - Universidade Presbiteriana Mackenzie",
        activities:[
            {name: "RocketSeat", url: "https://rocketseat.com.br/launchbase"},
            {name: "Mackenzie", url: "https://www.mackenzie.br/"}
        ],
        links: [
                {image_path: "assets/instagram.png" , url: "https://www.instagram.com/rafaol__/"},
                {image_path: "assets/facebook.png" , url: "https://www.facebook.com/rafael.neves.737"}
        ]
    }


    return res.render("about", { about});
})

server.get("/contents", function(req, res){
    return res.render("contents", {sites: pages });
})

server.get("/classes", function(req, res){

    return res.render("classes", { items: videos });
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        if (video.id == id){
            return true
        }
    })
    if (!video){
        return res.send("Video not found!")
    }
    return res.render("video", {item: video})
})

server.listen(5000, function(){
    console.log("server is running");
})
