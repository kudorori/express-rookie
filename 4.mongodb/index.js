// ==== DB Connection
const mongoose = require("mongoose");
const models = require("./models");
mongoose.connect("mongodb://localhost:27017/rookie", {
  useMongoClient: true
});
// ====


const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", function(req, res, next){

  models.todo.find().then(function(todoList) {
    //要等回傳資料後在Render畫面
    res.render("index", { todoList: todoList});
    next();
  }).catch(function(err) {
    //發生錯誤(讀取失敗balabala)
    res.render("error", { message: "GET ERROR" })
    next();
  })
})
app.post("/", function(req, res, next) {
  models.todo.create(req.body).then(function(){
    //建立完資料後，在直接重新轉址，不用Render畫面了
    res.redirect("/");
    next();
  }).catch(function() {
    //發生錯誤(寫入失敗balabala等狀況都會跑到這邊)
    res.render("error", { message: "POST ERROR" })
    next();
  })
})

app.listen(3000, function(){
  console.log("LISTEN 3000")
})
