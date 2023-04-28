// ========================================================================
// Server init
// ========================================================================

// Filesystem reading functions
const fs = require('fs-extra');

// Load settings
try {
  stats = fs.lstatSync('./json/settings.json'); 
} catch (e) {
  // If settings do not yet exist
  if (e.code == "ENOENT") {
    try {
      fs.copySync(
        './json/settings.example.json',
        './json/settings.json'
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
const settings = require("./json/settings.json");

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
var io = require('socket.io')(server);
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
app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));
//app.use(function(req, res) {
  //res.status(404).type('html').sendFile(__dirname + '/404.html')
//})
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


var https = require("https");
var axios = require("axios");

app.get("/chatgpt", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
    }
  }
})
// fuck you xomdjl_
// in all seriousness credit goes to wrapper offline devs
app.get("/damien", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      https.get('https://www.cepstral.com/en/demos', r => {
        const cookie = r.headers['set-cookie'];
        var q = new URLSearchParams({
          voiceText: text,
          voice: "Damien",
          createTime: 666,
          rate: 170,
          pitch: 1,
          sfx: 'none',
        }).toString();
        var buffers = [];
        var request = https.get({
          host: 'www.cepstral.com',
          path: `/demos/createAudio.php?${q}`,
          headers: { Cookie: cookie },
          method: 'GET',
        }, r => {
          r.on('data', b => buffers.push(b));
          r.on('end', async () => {
            var json = JSON.parse(Buffer.concat(buffers));
            const url = `https://www.cepstral.com${json.mp3_loc}`
            const response = await axios({
              url,
              method: "GET",
              responseType: "stream",
            });
            response.data.pipe(res);
          })
        });
      });
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/willfromafar", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      var buffers = [];
      var acapelaArray = [];
      for (var c = 0; c < 15; c++) acapelaArray.push(~~(65 + Math.random() * 26));
      var email = `${String.fromCharCode.apply(null, acapelaArray)}@gmail.com`;
      var request = https.request(
        {
          hostname: "acapelavoices.acapela-group.com",
          path: "/index/getnonce",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
        (r) => {
          r.on("data", (b) => buffers.push(b));
          r.on("end", () => {
            var nonce = JSON.parse(Buffer.concat(buffers)).nonce;
            var request2 = http.request(
              {
                hostname: "acapela-group.com",
                port: "8080",
                path: "/webservices/1-34-01-Mobility/Synthesizer",
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                var buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", () => {
                  const html = Buffer.concat(buffers);
                  const beg = html.indexOf("&snd_url=") + 9;
                  const end = html.indexOf("&", beg);
                  const sub = html.subarray(beg, end).toString();
                  http.get(sub, (r) => {
                    r.on("data", (d) => buffers.push(d));
                    r.on("end", async () => {
                      const url = sub
                      const response = await axios({
                        url,
                        method: "GET",
                        responseType: "stream",
                      });
                      response.data.pipe(res);
                    });
                  });
                });
                r.on("error", function(error) {
                  console.log(error)
                });
              }
            );
            request2.end(
              new URLSearchParams({
                req_voice: "enu_willfromafar_22k_ns.bvcu",
                cl_pwd: "",
                cl_vers: "1-30",
                req_echo: "ON",
                cl_login: "AcapelaGroup",
                req_comment: `{"nonce":"${nonce}","user":"${email}"}`,
                req_text: text,
                cl_env: "ACAPELA_VOICES",
                prot_vers: 2,
                cl_app: "AcapelaGroup_WebDemo_Android",
              }).toString()
            );
          });
        }
      );
      request.end(
        new URLSearchParams({
          json: `{"googleid":"${email}"`,
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/wav'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});