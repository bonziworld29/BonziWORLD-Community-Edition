import { youtubeParser } from "./helpers.js";
import Bonzi from "./Bonzi.js";
import { socket } from "./Chat.js";
import "./menu.js";
let debug = false;
let usersPublic = {};
let bonzis = {};
window.addEventListener("resize", function resizeCanvas() {
  for (let key in bonzis) {
    bonzis[key].move();
  }
});
setInterval(function() {
  for (let key in bonzis) {
    bonzis[key].update();
  }
}, 1000 / 15);

var tips = [
  "Everyone can see you move. Drag (or hold) your bonzi to move around the website!",
  "We have a Discord Server! The link is in the white speech bubble in the login page.",
  "You can connect to server.erik.red by using the Connect link at the home page!",
  "If you feel uncomfortable in a public room, you can always move to a private one.",
  "Found someone insulting you? Call them an asshole!",
  "Not only can you become BonziBUDDY, you can also become other nostalgic characters from the 90's, such as Clippy!"
]
$(window).on("load", function() {
  $("#login_tips").fadeOut(230);
  $("#login_readme").fadeIn(230);
  $("#login_card").fadeIn(230);
});
var usersAmt = 0,
  usersKeys = [];
function bonzisCheck() {
  for (var a = 0; a < usersAmt; a++) {
    var key = usersKeys[a];
    if (!(key in bonzis)) {
      bonzis[key] = new Bonzi(key, usersPublic[key]);
    }
    else {
      var bonzi = bonzis[key];
      bonzi.userPublic = usersPublic[key];
      bonzi.updateName();
      bonzi.color = usersPublic[key].color;
      bonzi.hue = usersPublic[key].hue;
      bonzi.saturation = usersPublic[key].saturation;
      bonzi.sprite.setColor(bonzi.color, bonzi.hue, bonzi.saturation);
    }
  }
}
document.addEventListener("load", function() {
  $("#btn_tile").on("click", function() {
    let winWidth = $(window).width();
    let winHeight = $(window).height();
    let minY = 0;
    let addY = 80;
    let x = 0, y = 0;
    for (let key in bonzis) {
      bonzis[key].move(x, y);
      x += 200;
      if (x + 100 > winWidth) {
        x = 0;
        y += 160;
        if (y + 160 > winHeight) {
          minY += addY;
          addY /= 2;
          y = minY;
        }
      }
    }
  });
});

function loadTest() {

  var loadingCursor = [
    "./img/cursors/hourglas.gif",
    "./img/cursors/hourgla2.gif",
    "./img/cursors/hourgla3.gif",
    "./img/cursors/barber.gif",
    "./img/cursors/horse.gif",
    "./img/cursors/wagtail.gif",
    "./img/cursors/drum.gif",
    "./img/cursors/rainbow.gif",
    "./img/cursors/dinosaur.gif",
    "./img/cursors/dinosau2.gif",
    "./img/cursors/banana.gif",
    "./img/cursors/metronom.gif",
    "./img/cursors/piano.gif",
    "./img/cursors/handwait.gif",
    "./img/cursors/stopwtch.gif",
  ]
  $("#login_card").hide(),
    $("#login_error").hide(),
    $("#login_load").show(),
    (document.getElementById("page_login").style.cursor = "wait"),
    (document.getElementById("loading_cursor").src = loadingCursor[Math.floor(Math.random() * loadingCursor.length)])
}
function login() {
  socket.emit(window.bonzi_guid + "_login_" + window.testguid, {
    name: $("#login_name").val(),
    room: $("#login_room").val(),
    color: localStorage.getItem("color")
  });
  setup();
}
$(function() {
  $("#login_go").click(warningScreen);
  $("#loginanyway").click(closeWarningScreen1);
  $("#returntohome").click(closeWarningScreen2);
  $("#login_room").val(window.location.hash.slice(1));
  $("#login_name, #login_room").keypress(function(e) {
    if (e.which === 13)
      login();
  });

  socket.on("sendguid", function(guid) {
    window.bonzi_guid = guid;
  })
  socket.on("sendguid2", function(guid) {
    window.testguid = guid;
  })
  socket.on("ban", function(data) {
    $("#page_ban").show();
    $("#ban_reason").html(data.reason);
    $("#ban_end").html(new Date(data.end).toString());
  });
  socket.on("kick", function(data) {
    $("#page_kick").show();
    $("#kick_reason").html(data.reason);
  });
  socket.on("loginFail", function(data) {
    var errorText = {
      "nameLength": "Name too long.",
      "full": "Room is full.",
      "nameMal": "Nice try. Why would anyone join a room named that anyway?",
    };
    $("#login_card").show();
    $("#login_load").hide();
    $("#login_error")
      .show()
      .text("Error: " +
        errorText[data.reason] +
        " (" + data.reason + ")");
  });
  socket.on("disconnect", function() {
    errorFatal();
  });
  socket.on("restarting", function() {
    errorReboot();
  });
});
function errorFatal() {
  if (debug)
    return;
  if (($("#page_ban").css("display") === "none") || ($("#page_kick").css("display") === "none")) {
    $("#page_error").show();
  }
}

function usersUpdate() {
  (usersKeys = Object.keys(usersPublic)), (usersAmt = usersKeys.length);
}

function errorReboot(p) {
  document.getElementById("error").play();
  $("#page_reboot").show();
}
function setup() {
  $("#chat_send").on("click", sendInput);
  $("#chat_message").keypress(function(e) {
    if (e.which === 13)
      sendInput();
  });
  socket.on("room", function(data) {
    $("#room_owner")[data.isOwner ? "show" : "hide"]();
    $("#room_public")[data.isPublic ? "show" : "hide"]();
    $("#room_private")[!data.isPublic ? "show" : "hide"]();
    $(".room_id").text(data.room);
  });
  socket.on("updateAll", function(data) {
    $("#page_login").hide();
    usersPublic = data.usersPublic;
    usersUpdate();
    bonzisCheck();
  });
  socket.on("update", function(data) {
    usersPublic[data.guid] = data.userPublic;
    usersUpdate();
    bonzisCheck();
  });
  socket.on("move", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    if (!b.mute) {
      b.move(data.posX, data.posY);
    }
  });
  socket.on("runEvents", function(data) {
    if (data.text)
      bonzis[data.id].latestMessage = data.text;
    bonzis[data.id].runEvents(data.events);
  });
  socket.on("youtube", function(data) {
    var b = bonzis[data.id];
    b.cancel();
    b.youtube(data.vid);
  });
  socket.on("vaporwave", function() {
    $("body").addClass("vaporwave");
  });
  socket.on("unvaporwave", function() {
    $("body").removeClass("vaporwave");
  });
  socket.on("leave", function(data) {
    const bonzi = bonzis[data.guid];
    if (typeof bonzi != "undefined") {
      var b = bonzi;
      setTimeout(function() {
        if (b.color == "diogo") {
          var aud = new Audio("diogo_surfgone.ogg");
          aud.play();
        } else if (b.color == "peedy") {
          var aud = new Audio("peedy_surfaway.wav");
          aud.play();
        } else if (b.color == "merlin") {
          var aud = new Audio("merlin_surfgone.mp3");
          aud.play();
        } else if (b.color == "genie") {
          var aud = new Audio("genie_surfgone.ogg");
          aud.play();
        } else if (b.color == "robby") {
          var aud = new Audio("robby_surfintro.ogg");
          aud.play();
        } else if (b.color == "clippy") {
          var aud = new Audio("clippy_surfgone.ogg");
          aud.play();
        } else if (b.color == "kairu") {
          var aud = new Audio("kairu_surfaway.wav");
          aud.play();
        } else {
          var aud = new Audio("bye.mp3");
          aud.play();
        }
      }, 600);
      bonzi.exit((function() {
        bonzi.stopSpeaking();
        bonzi.$element.remove();
        delete bonzis[data.id];
        delete usersPublic[data.id];
      }).bind(bonzi, data));
    }
  });
}
function sendInput() {
  var text = $("#chat_message").val();
  $("#chat_message").val("");
  if (text.length > 0) {
    var youtube = youtubeParser(text);
    if (youtube) {
      socket.emit("command", {
        list: ["youtube", youtube]
      });
      return;
    }
    if (text.substring(1, 0) == "/") {
      socket.emit("command", {
        list: text.slice(1).split(" "),
      });
    }
    else {
      socket.emit("talk", {
        text: text
      });
    }
  }
}
function updatePreview() {
  $("#colorPreview").css("filter", `hue-rotate(${$("#hueSlider").val()}deg) saturate(${$("#saturationSlider").val()}%)`);
}
$("#colorConfirm").click(function() {
  socket.emit("command", {
    list: [`colorcustom`, $("#hueSlider").val(), $("#saturationSlider").val()]
  });
  $("#color_box").hide();
});
$("#colorCancel").click(function() {
  $("#color_box").hide();
});
$("#hueSlider, #saturationSlider").on("mousemove", updatePreview);
$("#hueSlider, #saturationSlider").on("change", updatePreview);
const colors = [
  "purple",
  "blue",
  "green",
  "red",
  "black",
  "brown",
  "pink"
];
for (let color of colors) {
  let img = new Image();
  img.src = `/img/bonzi/${color}.png`;
}
function touchHandler(event) {
  var touches = event.changedTouches, first = touches[0], type = "";
  switch (event.type) {
    case "touchstart":
      type = "mousedown";
      break;
    case "touchmove":
      type = "mousemove";
      break;
    case "touchend":
      type = "mouseup";
      break;
    default: return;
  }
  // initMouseEvent(type, canBubble, cancelable, view, clickCount, 
  //                screenX, screenY, clientX, clientY, ctrlKey, 
  //                altKey, shiftKey, metaKey, button, relatedTarget);
  var simulatedEvent = document.createEvent("MouseEvent");
  simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0 /*left*/, null);
  first.target.dispatchEvent(simulatedEvent);
  // event.preventDefault();
}
$(window).on("load", function() {
  document.addEventListener("touchstart", touchHandler, true);
  document.addEventListener("touchmove", touchHandler, true);
  document.addEventListener("touchend", touchHandler, true);
  document.addEventListener("touchcancel", touchHandler, true);
});
socket.on("setColor", function(color) {
  localStorage.setItem("color", color);
});
// declaring globals for the skids
window.Bonzi = Bonzi;
window.bonzis = bonzis;
window.socket = socket;
window.usersPublic = usersPublic;
window.bonzisCheck = bonzisCheck;
//# sourceMappingURL=main.js.map

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const devtest = urlParams.has('devtest')

// they lied
// when i don't know how to do things, i search it up on google to learn how to do it

if (!devtest) {

  document.onkeydown = function(e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
    }
  }

  setInterval(function() {

    debugger;
    console.profile();
    console.profileEnd();
    if (console.clear) {
      console.clear();
    }

  }, 100)

}
if (window.location.href.match("repl.co")) {
  $("#login_readme").append("<h3>It appears you are using the Replit version of this site.<br>We have a domain that is available at <a href=\"https://bonziworld.co\">bonziworld.co</a>.<br>We highly recommend you use the domain.</h3>")
}

function freePope() {
  document.getElementById("login_room").value = "pope";

  warningScreen();
}
function warningScreen() {
  loadTest();
  $("#tips_text").text(tips[Math.floor(Math.random() * tips.length)]);
  if ($("#login_room").val() == "" || $("#login_room").val() == "pope") {
    $("#page_warning_login").show();
    $("#login_readme").hide();
    $("#login_tips").show();
  } else {
    $("#login_readme").hide();
    $("#login_tips").show();
    setTimeout(function() {

      login();

    }, 3000)
  }
}

function promptForServerURL() {
  var url = prompt("Please enter an valid BonziWORLD Server URL\n(may require a anti-CORS extension)\n\nIn order to use a HTTP server, enable insecure content in site permissions.", "http://server.erik.red:3000/")
  if (url) {
    safeMode = true;
    socket = io(url);
  }

}
function closeWarningScreen1() {
  $("#tips_text").text(tips[Math.floor(Math.random() * tips.length)]);
  setTimeout(function() {

    login();

    if (document.getElementById("login_room").value == "pope") {

      setTimeout(function() {
        socket.emit("command", { list: ["pope"] })
      }, 200)

    }

  }, 3000)
  $("#page_warning_login").fadeOut(230);
}
function closeWarningScreen2() {
  $("#page_warning_login").fadeOut(230);
  $("#login_load").hide();
  $("#login_card").show();
}
function toggleCliCmd() {
  var cmds = document.getElementById('clicmds');
  if (cmds.style.display == "none") {
    cmds.style.display = "block";
  } else {
    cmds.style.display = "none";
  }
}
var mycanvas;
var my2dstarfield;
var my2dstarsparams = [
  { nb: 30, speedy: 2, speedx: -1, params: 0 },
  { nb: 30, speedy: 0.8, speedx: 0.8, params: 1 },
  { nb: 30, speedy: 0.6, speedx: 0.6, params: 2 },
];

var bubble = new Array();
//bubble[0]=new image('data/zip.gif');

bubble[0] = new image("/img/ban/logo.png");
bubble[1] = new image("/img/stickers/flip.png");
bubble[2] = new image("/img/error/logo.png");
// not dangerous
//bubble[3]=new image('/dangerous/slimey.png');

var mygrad;
var mygradcolor = [
  { color: "rgb(128,0,128)", offset: 0 },
  { color: "rgb(255,20,147)", offset: 0.25 },
  { color: "rgb(128,0,128)", offset: 0.5 },
  { color: "rgb(255,20,147)", offset: 0.75 },
  { color: "rgb(128,0,128)", offset: 1 },
];

var myfont = new image("img/font.png");
var mycanvas;
var myscrolltext;

var myscrollparam = [{ myvalue: 0, amp: 125, inc: 0.2, offset: -0.04 }];

var myimage = new image("/img/desktop/bg_acid.png");
var mycanvas;
var myoffscreencanvas;
var myfx;
var myfxparam = [
  { value: 0, amp: 30, inc: 0.03, offset: -0.05 },
  { value: 0, amp: 30, inc: 0.01, offset: 0.08 },
];

var my3d;

var myobj = new Array();
var myobjvert = new Array();
myobjvert = [
  { x: -300, y: 0, z: 300 },
  { x: 300, y: 0, z: 300 },
  { x: 300, y: 0, z: -300 },
  { x: -300, y: 0, z: -300 },
  { x: 0, y: 400, z: 0 },
  { x: 0, y: -400, z: 0 },
];

myobj = [
  { p1: 1, p2: 4, p3: 0, params: new MeshBasicMaterial({ color: 0x00ffff, opacity: 0.7 }) },
  { p1: 2, p2: 4, p3: 1, params: new MeshBasicMaterial({ color: 0xeeeeee, opacity: 0.7 }) },
  { p1: 3, p2: 4, p3: 2, params: new MeshBasicMaterial({ color: 0xff00ff, opacity: 0.7 }) },
  { p1: 0, p2: 4, p3: 3, params: new MeshBasicMaterial({ color: 0xeeeeee, opacity: 0.7 }) },
  { p1: 0, p2: 5, p3: 1, params: new MeshBasicMaterial({ color: 0xeeeeee, opacity: 0.7 }) },
  { p1: 1, p2: 5, p3: 2, params: new MeshBasicMaterial({ color: 0x00ffff, opacity: 0.7 }) },
  { p1: 2, p2: 5, p3: 3, params: new MeshBasicMaterial({ color: 0xeeeeee, opacity: 0.7 }) },
  { p1: 3, p2: 5, p3: 0, params: new MeshBasicMaterial({ color: 0xff00ff, opacity: 0.7 }) },
];

function init() {
  window.addEventListener("resize", onWindowResize, false);

  mycanvas = new canvas(window.innerWidth, window.innerHeight, "main");
  my2dstarfield = new starfield2D_img(mycanvas, bubble, my2dstarsparams);
  mygrad = new grad(mycanvas, mygradcolor);

  myfont.initTile(32, 32, 32);
  myscrolltext = new scrolltext_horizontal();
  myscrolltext.scrtxt = "HELLO AND WELCOME TO        BONERWORLD SUPER ACID MODE                   HAVE FUN       :)  ";
  myscrolltext.init(mycanvas, myfont, 1, myscrollparam);

  myoffscreencanvas = new canvas(208, 170);
  myimage.draw(myoffscreencanvas, 0, 0);
  myfx = new FX(myoffscreencanvas, mycanvas, myfxparam);

  my3d = new codef3D(mycanvas, 900, 40, 1, 1600);
  my3d.faces(myobjvert, myobj, true, false);

  //sound

  //

  /*var invisiblepink = new Audio("//www.windows93.net/c/programs/acidBox93/data/DJ_Invisible_Pink_-_Live_Acid_at_Databit.ogg");
  invisiblepink.playbackRate = 1.0;
  invisiblepink.play();
  invisiblepink.volume = 1;
  invisiblepink.loop = true;*/
  MIDIjs.play('./nightoffire.mid');
  go();
}

function go() {
  //mycanvas.fill('#000000');
  mygrad.drawV();

  my3d.group.rotation.x += 0.01;
  my3d.group.rotation.y += 0.02;
  my3d.group.rotation.z += 0.04;
  my3d.draw();

  my2dstarfield.draw();

  myfx.siny(window.innerWidth / 2 - 104, window.innerHeight / 2 - 85);

  myscrolltext.draw(240 - 16);

  requestAnimFrame(go);
}

function onWindowResize() {
  console.log(mycanvas);
  //console.log('??');
  mycanvas.canvas.width = window.innerWidth;
  mycanvas.canvas.height = window.innerHeight;
  mycanvas.canvas.style.width = window.innerWidth + "px";
  mycanvas.canvas.style.height = window.innerHeight + "px";

  //console.log('resize');

  //document.location.reload(true);
}