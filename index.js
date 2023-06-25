// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get("/api/:date", function(req, res) {
  if (/^[0-9]+$/.test(req.params.date)){
    date = new Date(parseInt(req.params.date));
  }
  else if (!Date.parse(req.params.date)) {
    date = "Invalid Date"
    res.json({"error": date});
    return
  }
  else {
  date = new Date(req.params.date);
  }
  res.json({"utc": date.toUTCString(), "unix": date.getTime()});

})

