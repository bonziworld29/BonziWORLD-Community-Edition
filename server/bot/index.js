// ========================================================================
// Server init
// ========================================================================

// Filesystem reading functions
const fs = require('fs');

// Setup basic express server
var express = require('express');
var app = express();
var http = require("http");
const url = require('url');
var server = require('http').createServer(app, console.log());
var meSpeak = require("mespeak")
meSpeak.loadConfig(require("mespeak/src/mespeak_config.json"))
meSpeak.loadVoice(require("mespeak/voices/en/en.json"))
console.log = function() { };
server.listenerCount(2);
// Start actually listening
server.listen();
app.get('/', function(req, res) {
  if (req.query.text && req.query.pitch && req.query.speed) {
    const text = req.query.text.replaceAll("[[", "").replaceAll("]]", "").replaceAll("- ", "minus ")
    var data = meSpeak.speak(text, { pitch: req.query.pitch, speed: req.query.speed, rawdata: "buffer" });

    fs.writeFileSync("test.wav", data);
    const stream = fs.createReadStream('test.wav')
    stream.pipe(res)
  } else {
    res.send("Hello World")
  }
  return res.writeHead(200, {
    'Content-Type': 'audio/wav'
  });
})
