var express = require('express')
var http = require('http')
var app = express()

var phones = [{
  "id": 1,
  "name": "Samsung 8",
  "color": "Black",
  "price": 800.52,
  "image": ""
},
{
  "id": 2,
  "name": "Iphone X",
  "color": "White",
  "price": 1000.25,
  "image": ""
}
];


app.get('/phone', (req, res) => {
  res.send(phones)
});

app.get('/phone/:id', function (req, res, next) {
  var itemId = req.params.id;
  var phoneselect = phones.filter(phones => phones["id"] == itemId);
  res.send(phoneselect);
});

app.get('/', (req, res) => {
  res.status(200).send("Welcome to my API")
});

http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});