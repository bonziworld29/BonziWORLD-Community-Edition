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
      colors: {
        name: "Quick Colors",
        items: {
          bonzi: {
            name: "bonzi",
            callback: function() {
              socket.emit("command", { list: ["color","bonzi"] });
            },
          },
          purple: {
            name: "purple",
            callback: function() {
              socket.emit("command", { list: ["color","purple"] });
            },
          },
          blue: {
            name: "blue",
            callback: function() {
              socket.emit("command", { list: ["color","blue"] });
            },
          },
          green: {
            name: "green",
            callback: function() {
              socket.emit("command", { list: ["color","green"] });
            },
          },
          red: {
            name: "red",
            callback: function() {
              socket.emit("command", { list: ["color","red"] });
            },
          },
          black: {
            name: "black",
            callback: function() {
              socket.emit("command", { list: ["color","black"] });
            },
          },
          yellow: {
            name: "yellow",
            callback: function() {
              socket.emit("command", { list: ["color","yellow"] });
            },
          },
          orange: {
            name: "orange",
            callback: function() {
              socket.emit("command", { list: ["color","orange"] });
            },
          },
          dark_purple: {
            name: "dark_purple",
            callback: function() {
              socket.emit("command", { list: ["color","dark_purple"] });
            },
          },
          dark_brown: {
            name: "dark_brown",
            callback: function() {
              socket.emit("command", { list: ["color","dark_brown"] });
            },
          },
          dark_green: {
            name: "dark_green",
            callback: function() {
              socket.emit("command", { list: ["color","dark_green"] });
            },
          },
          white: {
            name: "white",
            callback: function() {
              socket.emit("command", { list: ["color","white"] });
            },
          },
          pink: {
            name: "pink",
            callback: function() {
              socket.emit("command", { list: ["color","pink"] });
            },
          },
          cyan: {
            name: "cyan",
            callback: function() {
              socket.emit("command", { list: ["color","cyan"] });
            },
          },
          grey: {
            name: "grey",
            callback: function() {
              socket.emit("command", { list: ["color","grey"] });
            },
          },
          clippy: {
            name: "clippy",
            callback: function() {
              socket.emit("command", { list: ["color","clippy"] });
            },
          },
          peedy: {
            name: "peedy",
            callback: function() {
              socket.emit("command", { list: ["color","peedy"] });
            },
          },
          rover: {
            name: "rover",
            callback: function() {
              socket.emit("command", { list: ["color","rover"] });
            },
          },
          robby: {
            name: "robby",
            callback: function() {
              socket.emit("command", { list: ["color","robby"] });
            },
          },
          max: {
            name: "max",
            callback: function() {
              socket.emit("command", { list: ["color","max"] });
            },
          },
          genie: {
            name: "genie",
            callback: function() {
              socket.emit("command", { list: ["color","genie"] });
            },
          },
          red_clippy: {
            name: "red_clippy",
            callback: function() {
              socket.emit("command", { list: ["color","red_clippy"] });
            },
          },
          program: {
            name: "program",
            callback: function() {
              socket.emit("command", { list: ["color","program"] });
            },
          },
          dunce: {
            name: "dunce",
            callback: function() {
              socket.emit("command", { list: ["color","dunce"] });
            },
          },
          qmark: {
            name: "qmark",
            callback: function() {
              socket.emit("command", { list: ["color","qmark"] });
            },
          },
          f1: {
            name: "f1",
            callback: function() {
              socket.emit("command", { list: ["color","f1"] });
            },
          },
          pm: {
            name: "pm",
            callback: function() {
              socket.emit("command", { list: ["color","pm"] });
            },
          },
          genius: {
            name: "genius",
            callback: function() {
              socket.emit("command", { list: ["color","genius"] });
            },
          },
          kairu: {
            name: "kairu",
            callback: function() {
              socket.emit("command", { list: ["color","kairu"] });
            },
          },
          links: {
            name: "links",
            callback: function() {
              socket.emit("command", { list: ["color","links"] });
            },
          },
          rainbow: {
            name: "rainbow",
            callback: function() {
              socket.emit("command", { list: ["color","rainbow"] });
            },
          },
          mamachan: {
            name: "mamachan",
            callback: function() {
              socket.emit("command", { list: ["color","mamachan"] });
            },
          },
          victor: {
            name: "victor",
            callback: function() {
              socket.emit("command", { list: ["color","victor"] });
            },
          },
          doctormike: {
            name: "doctormike",
            callback: function() {
              socket.emit("command", { list: ["color","doctormike"] });
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
            name: "Compact",
            callback: function() {
              theme("#content {background-color: #452066; }");
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
          windows10: {
            name: "Windows 10",
            callback: function() {
              theme(
               `@charset "UTF-8";body,html{width:100%;height:100%;overflow:hidden}.page{position:absolute;width:100%;height:100%;top:0;left:0;z-index:999}#login_go2{background-color:#8b5adc;width:120px;height:34px;margin:auto;font-size:18px;color:#fff;position:center;border:1.5px solid #fff}#login_go p{vertical-align:center}#login_go:hover{background-color:#ab3afc}.xp_dialog,.message_cont{background:#ffffe1;color:#000;-webkit-border-radius:9px;-moz-border-radius:9px;border-radius:9px;border:#000 solid 1px}#login_name2,#login_room2{padding:4px 3px;background:rgba(255,255,255,.7);border:1.5px solid gray;outline:none;color:#000}.xp_textbox,#login_error,#login_readme,#math_answer{position:absolute;padding:4px 3px;border:none;border-radius:3px;box-shadow:2px 2px 2px #13316f;outline:none;background:#fff;color:#000}#content{width:100%;height:100%;position:fixed}#ap_iframe{z-index:9999;position:absolute;bottom:0;left:0;transform:translateX(-50%);-webkit-transform:translateX(-50%);left:50%}body{background-color:#421f60}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}#login_pic{border-radius:50%;height:260px;width:260px}#login_defname{margin-top:8px;color:#fff;font-size:45px}#use_guide{color:#fff;margin-top:8px}#winlogon{margin-top:100px;width:100%;text-align:center}#wincred{width:100%;text-align:center}body,html{margin:0;padding:0;font-size:16px}body,body *{font-family:"Tahoma",sans-serif}input[type="text"]{background-color:#fff;border:1px inset #AAA;color:#000}.xp_bubble,.bubble{background:#3b3b3b;color:#fff;border:#000 solid 1px; border-radius: 0px;}@font-face{font-family:'Tahoma';src:url("//web.archive.org/web/20200101011030im_/http://uranohoshi.in/font/Tahoma/SegoeUI.eot#iefix") format("embedded-opentype"),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/font/Tahoma/SegoeUI.woff) format("woff"),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/font/Tahoma/SegoeUI.ttf) format("truetype"),url("//web.archive.org/web/20200101011030im_/http://uranohoshi.in/font/Tahoma/Tahoma.svg#Tahoma") format("svg");font-weight:400;font-style:normal}#bonzi_canvas{width:100%;height:100%;position:absolute;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;top:0;left:0}.bonzi{position:fixed;top:0;left:0;-webkit-user-select:none;user-select:none}.bonzi>canvas,.bonzi_placeholder{position:absolute}.bubble-content{padding:12px;max-height:175px;user-select:text;-webkit-user-select:text;overflow-x:hidden;overflow-y:auto;font-size:14px;font-smooth:never;-webkit-font-smoothing:none;position:relative;overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-word;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.bubble{padding:0;width:197px;position:absolute}.bubble::after{content:'';position:absolute}.bubble-left{right:-45px;top:40px}.bubble-left::after{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/bonzi/bubble_tail_l.png);width:22px;height:14px;top:12px;right:-22px}.bubble-right{top:40px;left:155px}.bubble-right::after{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/bonzi/bubble_tail_r.png);width:22px;height:14px;top:12px;left:-22px}.bubble-bottom{top:156px}.bubble-bottom::after{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/bonzi/bubble_tail_b.png);width:28px;height:22px;top:-22px;left:26px}.bubble-top{bottom:4px}.bubble-top::after{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/bonzi/bubble_tail_t.png);width:28px;height:22px;left:110px}.bonzi_name{border-style:solid;border-width:4px 12px 4px 0;border:#000 solid 1px;border-radius: 0px;padding:8px;position:absolute;background:#3b3b3b9a;font-size:12px;color:#fff}.bubble_greentext{color:#789922}body.vaporwave #content{background-color:#008080;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/logo.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/bg.png);background-position:top left,center;background-repeat:no-repeat}body.vaporwave #chat_bar{position:absolute;bottom:0;left:0;width:100%;height:28px;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/taskbar.png);background-size:100% 100%;z-index:999}body.vaporwave #chat_tray{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/notif_left.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/notif_right.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/notif.png);background-repeat:no-repeat;background-position:left,right,left;background-size:5px 28px,3px 28px,100% 100%;vertical-align:middle;padding-left:7px;padding-top:3px;width:22px}body.vaporwave #btn_tile{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/tile.png)}body.vaporwave #chat_send{width:58px;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/start.png);background-size:100%;background-repeat:no-repeat;box-sizing:border-box;color:#000;letter-spacing:1px;font-size:11px;text-shadow:none;padding-left:21px;text-transform:capitalize}body.vaporwave #chat_send:hover{background-position:0 -28px}body.vaporwave #chat_send:active{background-position:0 -56px}#content{background-color:#6d33a0;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/logo.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/bg.png);background-position:top left,center;background-repeat:no-repeat}#chat_bar{position:absolute;bottom:0;left:0;width:100%;height:33px;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/taskbar.png);background-size:100% 100%;z-index:999}#chat_tray{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/notif_left.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/notif.png);background-repeat:no-repeat;background-position:left;background-size:5px 30px,100% 100%;vertical-align:middle;padding-left:7px;padding-top:3px;width:22px}.chat_bar_top{top:0}#chat_send{width:100px;user-select:none;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/start.png);background-size:100%;background-repeat:no-repeat;box-sizing:border-box;color:#fff;font-size:16px;padding-left:35px}#chat_send:hover{background-position:0 -33px}#chat_send:active{background-position:0 -66px}#chat_message_cont{padding:4px}#chat_message{height:23px;font-size:14px;width:100%}#room_info{color:rgba(255,255,255,.5);font-weight:700;line-height:125%;text-align:right;padding:7px;font-size:10px;position:absolute;bottom:30px;right:0;user-select:text;-webkit-user-select:text}.tray_btn{width:16px;height:16px;display:inline-block;margin:2px 0}#btn_tile{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/tile.png)}#page_login{background-color:#8b5adc;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/logo.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/bg.png);background-position:top left,center;background-repeat:no-repeat;background-size: auto, auto, auto, auto, auto;}#login_apps{display:flex;justify-content:center;padding:16px;flex-wrap:wrap}#login_card{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/logon/card.png);width:353px;height:70px;position:absolute;top:50%;left:50%;margin-left:20px;margin-top:-35px;box-sizing:border-box}#login_error{top:100%;position:absolute;margin-top:8px;color:#d03b3b;font-size:12px;padding:8px}#login_readme{color:#444;padding:12px;bottom:24%;width:auto;transform:translateX(-50%);-webkit-transform:translateX(-50%);text-align:center;left:50%}#login_name2,#login_room2{width:260px;box-sizing:border-box;}#math_answer{margin-top:42px;height:34px;width:40px;box-sizing:border-box}#login_name2{margin-top:18px;height:34px;font-size:14px;top:0;}#login_room2{margin-top:8px;margin-bottom:10px;position:center;height:34px;font-size:14px top:0;}#login_tip{margin-top:8px;color:#fff}#login_load{color:#fff;font-weight:700;font-style:italic;font-size:35px;letter-spacing:2px;text-shadow:2px 2px 4px rgba(0,0,0,.5);position:absolute;line-height:100%;height:35px;top:50%;left:50%;margin-left:23px}#login_version{color:#fff;position:absolute;right:16px;bottom:16px;font-size:16px}@media screen and (max-height:550px){#page_login{background-repeat:no-repeat}#login_readme{font-size:12px;bottom:10%}}@media screen and (max-height:650px){#login_apps>a:not(:first-child){display:none}}@media screen and (max-height:450px){#login_apps{display:none}}@media screen and (max-height:300px){#login_readme,#login_version{display:none}}@media screen and (max-height:400px) and (max-width:560px){#login_readme{display:none}}@media screen and (max-width:560px){#winlogon{margin-top:0;width:100%;text-align:center}#login_defname{font-size:30px}#page_login{background-repeat:no-repeat}#login_pic{border-radius:50%;height:180px;width:180px}#login_card{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/logon/card.mobile.png);width:223px;height:70px;margin-left:-112px;margin-top:40px}#login_readme{visibility:gone}#login_load{margin-top:45px;margin-left:0;transform:translateX(-50%);-webkit-transform:translateX(-50%)}}.message_cont{position:absolute;width:100%;max-width:512px;height:auto;max-height:100%;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);padding:32px;box-sizing:border-box;overflow:auto}#page_error,#page_ban,#page_unsupp{background-color:rgba(0,0,0,.5)} .context-menu-icon.context-menu-hover:before{color:#FFF}.context-menu-icon.context-menu-disabled::before{color:#8c8c8c}.context-menu-icon.context-menu-icon--fa{display:list-item}.context-menu-icon.context-menu-icon--fa.context-menu-hover:before{color:#FFF}.context-menu-icon.context-menu-icon--fa.context-menu-disabled::before{color:#8c8c8c}.context-menu-icon.context-menu-icon--fa span{font-family:sans-serif}.context-menu-list{background:#FFF;border:1px solid #aca899;border-radius:0;box-shadow:2px 2px 2px rgba(0,0,0,.5);font-family:inherit;font-size:11px;display:inline-block;list-style-type:none;margin:0;max-width:none;min-width:none;padding:2px;position:absolute}.context-menu-item{background-color:#FFF;color:#000;padding:5px 22px;position:relative;user-select:none}.context-menu-separator{border-bottom:1px solid #aca899;margin:1px 2.5px;padding:0}.context-menu-item>label>input,.context-menu-item>label>textarea{user-select:text}.context-menu-item.context-menu-hover{background-color:#316ac5;color:#FFF;cursor:pointer}.context-menu-item.context-menu-disabled{background-color:#FFF;color:#8c8c8c;cursor:default}.context-menu-input.context-menu-hover{background-color:#EEE;cursor:default}.context-menu-submenu:after{content:'';border-style:solid;border-width:.25em 0 .25em .25em;border-color:transparent transparent transparent #000;height:0;position:absolute;right:.5em;top:50%;transform:translateY(-50%);width:0;z-index:1}.context-menu-item.context-menu-input{padding:.3em .6em}.context-menu-input>label>*{vertical-align:top}.context-menu-input>label>input[type="checkbox"],.context-menu-input>label>input[type="radio"]{margin-right:.4em;position:relative;top:.12em}.context-menu-input>label{margin:0}.context-menu-input>label,.context-menu-input>label>input[type="text"],.context-menu-input>label>textarea,.context-menu-input>label>select{box-sizing:border-box;display:block;width:100%}.context-menu-input>label>textarea{height:7em}.context-menu-item>.context-menu-list{display:none;right:-.3em;top:.3em}.context-menu-item.context-menu-visible>.context-menu-list{display:block}.context-menu-accesskey{text-decoration:underline}`
              );
			  $("#login_headline").hide();
			  $("#login_card").hide();
			  $("#login_readme").hide();
			  $("#winlogon").show();
            },
          },
          custom: {
            name: "Custom",
            callback: function() {
              var url = prompt('Insert Supported Image URL for usage as the Background','https://bonziworld.co/img/desktop/bg_xp.png');
			  if (url) {
				theme(
					`#content{background-color:blue;background-image:url("../img/desktop/logo.png"), url("${url}"); background-repeat: no-repeat, repeat; background-size: auto, cover;}'`
				)
			  }
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
      sapi4: {
        name: function() {
           return espeaktts ? "Turn On SAPI4" : "Turn Off SAPI4";
        },
        callback: function() {
          espeaktts = !espeaktts;
        },
      },
      css: {
        name: function() {
           return "Clear CSS";
        },
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
