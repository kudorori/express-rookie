const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.get("/", function(req, res){
  res.render("index");
})
app.post("/", function(req, res) {
  res.render("index-post", req.body);
})

app.listen(3000, function(){
  console.log("LISTEN 3000")
})
