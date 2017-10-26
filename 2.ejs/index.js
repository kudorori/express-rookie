const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res){
  res.render("index");
})
app.get("/page", function(req, res) {
  res.render("page", { title: req.query.title })
})

app.listen(3000, function(){
  console.log("LISTEN 3000")
})
