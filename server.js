// ===================================================================================
//	Server Environment Handler.
//	Options: development, production (anything else will use production)
var server_env = "development";
// ===================================================================================



// Account stuff
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

// Filesystem reading functions
const fs = require("fs-extra", "fs");

const path = require('path');


// Load settings
try {
  stats = fs.lstatSync(__dirname + "/json/settings.json");
} catch (err) {
  // If settings do not yet exist
  if (err.code == "ENOENT") {
    try {
      fs.copySync(__dirname + "/json/settings.example.json", __dirname + "/json/settings.json");
      console.log("Created new settings file.");
    } catch (err) {
      console.log(err);
      throw "Could not create new settings file.";
    }
    // Else, there was a misc error (permissions?)
  } else {
    console.log(err);
    throw "Could not read 'settings.json'.";
  }
}

// Load settings into memory
const settings = require(__dirname + "/json/settings.json");

// Setup basic express server
var express = require("express");
var app = express();
if (settings.express.serveStatic) app.use(express.static(__dirname + "/web/www"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
app.get('/readme.html', function(req, res) {
  res.sendFile(__dirname + '/web/www/readme/index.html');
});
app.get('/rules.html', function(req, res) {
  res.sendFile(__dirname + '/web/www/rules/index.html');
});
app.get('/discord.html', function(req, res) {
  res.sendFile(__dirname + '/web/www/discord/index.html');
});
app.get('/arcade.html', function(req, res) {
  res.sendFile(__dirname + '/web/www/arcade/index.html');
});
app.use('/robots.txt', function(req, res, next) {
  res.type('text/plain')
  res.send("User-agent: *\nDisallow: /chat\nSitemap: /sitemap.xml");
});
var server = require("http").createServer(app);

// Init socket.io
var io = require('socket.io')(server, {
  handlePreflightRequest: (req, res) => {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Origin": ["http://localhost:" + port + "", "http://127.0.0.1:" + port + "", "https://cobalt.cosmicstar37.repl.co:443","http://147.185.221.180:35473","http://180.ip.ply.gg:35473","http://must-psychiatry.at.ply.gg:35473"],
      "Access-Control-Allow-Credentials": true,
    };
    if (headers["Access-Control-Allow-Origin"] != headers["Access-Control-Allow-Origin"][0] || headers["Access-Control-Allow-Origin"][1] || headers["Access-Control-Allow-Origin"][2] || headers["Access-Control-Allow-Origin"][3] || headers["Access-Control-Allow-Origin"][4] || headers["Access-Control-Allow-Origin"][5]) {
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
io.set("transports", ["websocket"]);


// Variable for toggling Replit mode
const isReplit = settings.isReplit;

if (isReplit === true) {
	var port = 80;
} else {
	var port = process.env.port || settings.port;
}
exports.io = io;


// Init sanitize-html
var sanitize = require("sanitize-html");

// Init winston loggers (hi there)
const Log = require("./log.js");
Log.init();
const log = Log.log;

// Load ban list
const Ban = require("./ban.js");
Ban.init();

// Start actually listening
server.listen(port, function() {
  console.log(" Welcome to BonziWORLD Enhanced!!\n", "HTTP Express Server listening on port " + port + "\n", "=+.----------------*-<|{ Logs }|>-*----------------.+=\n");
});
app.use(express.static(__dirname + "/public"));

// ========================================================================
// Helper functions
// ========================================================================

const Utils = require("./utils.js");

// ========================================================================
// The Beef(TM)
// ========================================================================

const Meat = require("./meat.js");
Meat.beat();

// ========================================================================
// Console commands
// ========================================================================

const Console = require("./console.js");
Console.listen();
