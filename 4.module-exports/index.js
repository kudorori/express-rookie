//===
const multiply = require("./multiply");
//===

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.get("/", function(req, res){
  const num1 = req.query.num1 || 1;
  const num2 = req.query.num2 || 2;
  res.render("index", { num1: num1, num2: num2, total: multiply(num1, num2) });
})

app.listen(3000, function(){
  console.log("LISTEN 3000")
})
