var express = require('express');
var app = express();

var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var products = [
    {id:1, title:"Asus 10", unitprice:112000},
    {id:2, title:"HP X",unitprice:16000},
    {id:3, title:"Dell 5",unitprice:17000},
    {id:4, title:"apple p5",unitprice:25000},
    {id:5, title:"voadafone",unitprice:34000},
  ];
  res.send(products);
};
app.get ('/products',productController);
var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8087", host, port)
})