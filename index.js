// ========================================================================
// Server init
// ========================================================================

// Filesystem reading functions
const fs = require('fs-extra');

// Load settings
try {
  stats = fs.lstatSync('settings.json');
} catch (e) {
  // If settings do not yet exist
  if (e.code == "ENOENT") {
    try {
      fs.copySync(
        'settings.example.json',
        'settings.json'
      );
      console.log("Created new settings file.");
    } catch (e) {
      console.log(e);
      throw "Could not create new settings file.";
    }
    // Else, there was a misc error (permissions?)
  } else {
    console.log(e);
    throw "Could not read 'settings.json'.";
  }
}

// Load settings into memory
const settings = require("./settings.json");

// Setup basic express server
var express = require('express');
var app = express();
var cors = require("cors")
var http = require("http");
if (settings.express.serveStatic)
  app.use(express.static('./build/www', {
    extensions: ['html']
  }));
var server = require('http').createServer(app, console.log());

server.listenerCount(1);

app.get('/sitemap.xml', function(req, res) {
  res.sendFile('./build/www/sitemap.xml');
});
app.use('/robots.txt', function(req, res, next) {
  res.type('text/plain')
  res.send("User-agent: *\nDisallow: /chat\nSitemap: https://bonziworld.co/sitemap.xml");
});
// Init socket.io
var io = require('socket.io')(server, {
  cors: {
    origin: ["https://bonziworld.co:443", "http://bonziworld.co:80", "https://bonziworldrevived.daisreich.repl.co:443"],
    methods: ["GET", "POST"],
  },
  handlePreflightRequest: (req, res) => {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Origin": ["https://bonziworld.co:443", "http://bonziworld.co:80", "https://bonziworldrevived.daisreich.repl.co:443"],
      "Access-Control-Allow-Credentials": true,
    };
    if (headers["Access-Control-Allow-Origin"] != headers["Access-Control-Allow-Origin"][0] || headers["Access-Control-Allow-Origin"][1] || headers["Access-Control-Allow-Origin"][2]) {
      res.status(403).render();
      res.writeHead(403, headers);
      res.end();
    } else {
      res.status(200).render();
      res.writeHead(200, headers);
      res.end();
    }
  },
});
var port = process.env.PORT || settings.port;
exports.io = io;

// Init sanitize-html
var sanitize = require('sanitize-html');

// Init winston loggers (hi there)
const Log = require('./log.js');
Log.init();
const log = Log.log;

// Load ban list
const Ban = require('./ban.js');
Ban.init();

// Start actually listening
server.listen(port, function() {
  console.log(
    " Welcome to BonziWORLD!\n",
    "Time to meme!\n",
    "----------------------\n",
    "Server listening at port " + port
  );
});
app.options('*', cors())
app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));
app.use(function(req, res) {
  res.status(404).type('html').sendFile(__dirname + '/404.html')
})
// ========================================================================
// Banning functions
// ========================================================================

// ========================================================================
// Helper functions
// ========================================================================

const Utils = require("./utils.js")

// ========================================================================
// The Beef(TM)
// ========================================================================

const Meat = require("./meat.js");
Meat.beat();
// Console commands
const Console = require('./console.js');
Console.listen();
