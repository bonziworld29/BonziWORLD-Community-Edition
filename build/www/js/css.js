window.onload = function() {
  socket.on("css", function(data) {
    bonzis[data.guid].cancel();
    let button = document.createElement("button");
    button.title = data.css;
    button.innerHTML = "Style BonziWorld";
    button.onclick = function() {
      let style = document.createElement("style");
      style.innerHTML = this.title;
      style.classList.add("css");
      document.head.appendChild(style);
    };
    bonzis[data.guid].$dialog.show();
    bonzis[data.guid].$dialogCont[0].appendChild(button);
  });
  $.contextMenu({
    selector: "#content",
    items: {
      emotes: {
        name: "Emotes",
        items: {
          backflip: {
            name: "backflip",
            callback: function() {
              socket.emit("command", { list: ["backflip"] });
            },
          },
          backflippluscool: {
            name: "backflip + swag",
            callback: function() {
              socket.emit("command", { list: ["backflip", "swag"] });
            },
          },
          grin: {
            name: "grin",
            callback: function() {
              socket.emit("command", { list: ["grin"] });
            },
          },
          nod: {
            name: "nod",
            callback: function() {
              socket.emit("command", { list: ["nod"] });
            },
          },
          greet: {
            name: "greet",
            callback: function() {
              socket.emit("command", { list: ["greet"] });
            },
          },
          earth: {
            name: "earth",
            callback: function() {
              socket.emit("command", { list: ["earth"] });
            },
          },
          banana: {
            name: "banana",
            callback: function() {
              socket.emit("command", { list: ["banana"] });
            },
          },
          laugh: {
            name: "giggle",
            callback: function() {
              socket.emit("command", { list: ["laugh"] });
            },
          },
          surprised: {
            name: "shocked",
            callback: function() {
              socket.emit("command", { list: ["surprised"] });
            },
          },
          write: {
            name: "write",
            callback: function() {
              socket.emit("command", { list: ["write_infinite"] });
            },
          },
          clap: {
            name: "clap",
            callback: function() {
              socket.emit("command", { list: ["clap"] });
            },
          },
          sad: {
            name: "sad",
            callback: function() {
              socket.emit("command", { list: ["sad"] });
            },
          },
          shrug: {
            name: "shrug",
            callback: function() {
              socket.emit("command", { list: ["shrug"] });
            },
          },
          cool: {
            name: "cool",
            callback: function() {
              socket.emit("command", { list: ["swag"] });
            },
          },
          surf: {
            name: "surf",
            callback: function() {
              socket.emit("command", { list: ["surf"] });
            },
          },
          surfleave: {
            name: "rejoin",
            callback: function() {
              socket.emit("command", { list: ["surfleave"] });
            },
          },
          wave: {
            name: "wave",
            callback: function() {
              socket.emit("command", { list: ["wave"] });
            },
          },
          think: {
            name: "think",
            callback: function() {
              socket.emit("command", { list: ["think"] });
            },
          },
          bang: {
            name: "beat",
            callback: function() {
              socket.emit("command", { list: ["bang"] });
            },
          },
          present: {
            name: "present",
            callback: function() {
              socket.emit("command", { list: ["present"] });
            },
          },
        },
      },
      wallpapers: {
        name: "Themes",
        items: {
          default: {
            name: "Default",
            callback: function() {
              theme("");
            },
          },
          classic: {
            name: "Classic",
            callback: function() {
              theme("#content {background-color: #6d33a0; }");
            },
          },
          dark: {
            name: "Dark Mode",
            callback: function() {
              theme(
                '#chat_bar{background-image:url("../img/desktop/taskbar_dark.png")}#chat_send{background-image:url("../img/desktop/start_dark.png")}#chat_tray{background-image:url("../img/desktop/notif_left_dark.png"), url("../img/desktop/notif_dark.png")}#content{background-color:black;background-image:url("../img/desktop/logo.png"), url("../img/desktop/bg_dark.png")}'
              );
            },
          },
          acid: {
            name: "Acid",
            callback: function() {
              theme("@keyframes sex{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}canvas{animation:sex 5s linear infinite}");
            },
          },
          sacid: {
            name: "Super Acid",
            callback: function() {
              theme("@keyframes sex{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}body{animation:sex 1s linear infinite}");
            },
          },
          terminal: {
            name: "TERMINAL",
            callback: function() {
              theme(
                '.bubble,.bonzi_name,.bubble::after{background:0!important;border:0}*{color:green!important;font-family:monospace!important}#content{background:#000}.bubble-content::before{content:">"}.bonzi_name{padding:0;position:static}.bubble{overflow:visible}.bubble-left{right:0px}input[type=text]{background-color:#000;border:0}#chat_send,#chat_tray{display:none}#chat_bar{background:0}'
              );
            },
          },
        },
      },
      update: {
        name: "See Updates",
        callback: function() {
          socket.emit("command", { list: ["update"] });
        },
      },
      css: {
        name: "Clear /css",
        callback: function() {
          $(".css").remove();
        },
      },
      color: {
        name: "Set Color",
        callback() {
          $("#color_box").show();
        },
      },
    },
  });
  socket.on("admin", function() {
    admin = true;
  });
  socket.on("sendraw", function(data) {
    bonzis[data.guid].$dialog.show();
    bonzis[data.guid].$dialogCont[0].textContent = data.text;
  });
};

// Windows 93 Code. We've given credit, but we said "shoutouts to" instead.
// Get the voice select element.
var voiceSelect = document.getElementById("voice");
// Fetch the list of voices and populate the voice options.
function loadVoices() {
  // Fetch the available voices.
  var voices = speechSynthesis.getVoices();

  // Loop through each of the voices.
  voices.forEach(function(voice, i) {
    // Create a new option element.
    var option = document.createElement("option");

    // Set the options value and text.
    option.value = voice.name;
    option.innerHTML = voice.name;

    // Add the option to the voice selector.
    document.getElementById("voice").appendChild(option);
  });
  $("#dm_input").keypress(n => {
    if (n.which == 13) dm_send()
  })
}
function dm_send() {
  if (!$("#dm_input").val()) {
    $("#page_dm").hide()
    return
  }
  socket.emit("command", {
    list: ["dm2", {
      target: $("#dm_guid").val(),
      text: $("#dm_input").val()
    }]
  })
  $("#dm_input").val("")
  $("#page_dm").hide()
  $("#chat_message").focus()
}
// Execute loadVoices.
loadVoices();

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};
