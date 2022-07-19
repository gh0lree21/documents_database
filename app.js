


// libraries to be used in the program. 


const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
var express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
URLSearchParams
var urlencodedParser = bodyParser.urlencoded({ extended:false });
var app = express();


// app.listen(3000, () => {
//   console.log("Started on Port 3000");
// });


// EXPRESS METHOD

app.use(express.static('public'));
app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
  console.log(__dirname);
});
app.post('/process_post', urlencodedParser, function(req, res) {
  response = {
    first_name:req.body.full_name,
    department:req.body.department,
    details:req.body.details
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
var server = app.listen(8000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("This app is listening at http://%s:%s", host, port)
});


// var events = require('events');
// var em = new events.EventEmitter();
// var initializeApp = require('firebase/app');



// const firestore = require('firebase/firestore')

// Following import is for if you don't use require.
// import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAvEtsDudSLFyVfc-Tr86OfJLS7Y_TPaOg",
  authDomain: "gos-docs.firebaseapp.com",
  projectId: "gos-docs",
  storageBucket: "gos-docs.appspot.com",
  messagingSenderId: "696705342500",
  appId: "1:696705342500:web:ca53c20f4272784b4b0cb1"
};

// const app = initializeApp.firebaseConfig
// const db = app.firestore;
// const decRef = db.collection('form').doc('wordOrder');

// End firebase configuration. 









// BEGIN Vanilla Javascript method

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {

//     if (req.method == "POST") {
//       console.log("Post received")
//       req.on('data', function(data) {
//         console.log(data.toString())
//       });
//     }
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
    

//     console.log(`Request for ${filename} received.`); // Check which files are being accessed.
    
//     fs.readFile(filename, function(err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         return res.end("404 Not Found");
//       }
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });

// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);

// });



