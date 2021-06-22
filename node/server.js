const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;
var cors = require('cors')
app.use(cors())
app.options('*', cors())
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const url = "mongodb+srv://jonathanmoya:jonathanmoya@cluster0.oh0wz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("data").collection("data");
  // perform actions on the collection object
  console.log('BD conectada')
  client.close();
});

const getAll = (cb) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("data");
    dbo.collection("data").find({}).toArray(function (err, result) {
      if (err) throw err;
      cb(result);
      db.close();
    });
  });
}

const updateDataPositive = (id) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("data");
    dbo.collection("data").update({name: id}, {$inc: {'votes.positive': 1}}, (err, result) => {
      if (err) throw err;
      db.close();
    })
  });
}

const updateDataNegative = (id) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("data");
    dbo.collection("data").update({name: id}, {$inc: {'votes.negative': 1}}, (err, result) => {
      if (err) throw err;
      db.close();
    })
  });
}

app.post('/update', function (req, res) {
  if (req.body.type === 'positive') {
    updateDataPositive(req.body.name);
  } else {
    updateDataNegative(req.body.name);
  }
  res.send('[POST]Saludos desde express');
});

app.get('/', function (req, res) {
  getAll((data) => {
    res.send(data)
  })
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
