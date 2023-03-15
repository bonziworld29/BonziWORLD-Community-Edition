var settingsSantize = {
  allowedTags: [
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "p",
    "a",
    "ul",
    "ol",
    "nl",
    "li",
    "b",
    "i",
    "strong",
    "em",
    "strike",
    "code",
    "hr",
    "br",
    "div",
    "table",
    "thead",
    "caption",
    "tbody",
    "tr",
    "th",
    "td",
    "pre",
    "iframe",
    "marquee",
    "button",
    "input",
    "details",
    "summary",
    "progress",
    "meter",
    "font",
    "h1",
    "h2",
    "span",
    "select",
    "option",
    "abbr",
    "acronym",
    "adress",
    "article",
    "aside",
    "bdi",
    "bdo",
    "big",
    "center",
    "site",
    "data",
    "datalist",
    "dl",
    "del",
    "dfn",
    "dialog",
    "dir",
    "dl",
    "dt",
    "fieldset",
    "figure",
    "figcaption",
    "header",
    "ins",
    "kbd",
    "legend",
    "mark",
    "nav",
    "optgroup",
    "form",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "sample",
    "section",
    "small",
    "sub",
    "sup",
    "template",
    "textarea",
    "tt",
    "u",
  ],
  allowedAttributes: {
    a: ["href", "name", "target"],
    p: ["align"],
    table: ["align", "border", "bgcolor", "cellpadding", "cellspadding", "frame", "rules", "width"],
    tbody: ["align", "valign"],
    tfoot: ["align", "valign"],
    td: ["align", "colspan", "headers", "nowrap"],
    th: ["align", "colspan", "headers", "nowrap"],
    textarea: ["cols", "dirname", "disabled", "placeholder", "maxlength", "readonly", "required", "rows", "wrap"],
    pre: ["width"],
    ol: ["compact", "reversed", "start", "type"],
    option: ["disabled"],
    optgroup: ["disabled", "label", "selected"],
    legend: ["align"],
    li: ["type", "value"],
    hr: ["align", "noshade", "size", "width"],
    fieldset: ["disabled"],
    dialog: ["open"],
    dir: ["compact"],
    bdo: ["dir"],
    div: ["class"],
    marquee: ["behavior", "bgcolor", "direction", "width", "height", "loop"],
    button: ["disabled"],
    input: ["value", "type", "disabled", "maxlength", "max", "min", "placeholder", "readonly", "required"],
    details: ["open"],
    div: ["align"],
    progress: ["value", "max"],
    meter: ["value", "max", "min", "optimum", "low", "high"],
    font: ["size", "family", "color"],
    select: ["disabled", "multiple", "require"],
    ul: ["type", "compact"],
    "*": ["hidden", "spellcheck", "title", "contenteditable", "data-style"],
  },
  selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta", "wbr"],
  allowedSchemes: ["http", "https", "ftp", "mailto", "data"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: true,
};

const fetch = require("isomorphic-fetch");

var stickers = {
  sad: "so sad",
  bonzi: "BonziBUDDY",
  host: "host is a bathbomb",
  spook: "ew im spooky",
  forehead: "you have a big forehead",
  ban: "i will ban you so hard right now",
  flatearth: "this is true and you cant change my opinion loser",
  swag: "look at my swag",
  topjej: "toppest jej",
  cyan: "cyan is yellow",
  flip: "fuck you",
  sans: "fuck you",
  no: "fuck no",
  bye: "bye i'm fucking leaving",
  kiddie: "australian kiddie",
};

const axios = require('axios').default;
const fs = require('fs');



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
var bonziTvCommercialMode = false;
var bonziTvCool = false;

const ai = require('socket.io-client');
const log = require("./log.js").log;
const Ban = require("./ban.js");
const Utils = require("./utils.js");
const io = require("./index.js").io;
const settings = require(__dirname + "/json/settings.json");
const sanitize = require("sanitize-html");
var onCooldown = false;
var onloginCooldown = false;
let roomsPublic = [];
let rooms = {};
let usersAll = [];
let sockets = [];
var ips = [];
var noflood = [];
let mutes = Ban.mutes;

//require("./bonzitv"); // no



// cosmic fucking broke bonzitv

// will soon move bonzitv's video lists inside this javascript file to declutter meat.js

// go behh yourself

// youtube url variables 
let youtube_url = "https://www.youtube.com/watch?v=";
let youtube_tiny_url = "https://youtu.be/watch?v=";
let youtube_shorts_url = "";
let youtube_embed_url = "";
let youtube_music_url = "";


/*
  "https://www.youtube.com/watch?v=97dyt7MXWpo",
  "https://www.youtube.com/watch?v=t0JyCdk5ymo",
  "https://www.youtube.com/watch?v=bzXzGMbdQfY",
  "https://www.youtube.com/watch?v=DuD_boVOl54",
  "https://www.youtube.com/watch?v=H50wW4eAFKo",
  "https://www.youtube.com/watch?v=APAcU3YBhYc",
  "https://www.youtube.com/watch?v=H50wW4eAFKo",
  "https://www.youtube.com/watch?v=MmB9b5njVbA",
  "https://www.youtube.com/watch?v=tYoO9XkCCHg",
  "https://www.youtube.com/watch?v=K0damuN_9bQ",
  "https://www.youtube.com/watch?v=hb59QZW2SCA",
  "https://www.youtube.com/watch?v=5ls7g9eH7ss",
  "https://www.youtube.com/watch?v=VJs_VALzi_8",
  "https://www.youtube.com/watch?v=GCA5CB5uUyA",
  "https://www.youtube.com/watch?v=Jz6FCFoL3k4",
  "https://www.youtube.com/watch?v=CDLyImqvqVY",
  "https://www.youtube.com/watch?v=Wt2rGmUmm2A",
  "https://www.youtube.com/watch?v=YnuYnzXUuGY",
  "https://www.youtube.com/watch?v=exjhztp_IQY"
*/

// the clusterfuck of video ids
var videoIdsCommercials = [
  "https://youtu.be/watch?v=b2OUKjLzcEc",
  "https://youtu.be/watch?v=Uyw-bne3G2A",
  "https://youtu.be/watch?v=gcGI1f24eyM",
  "https://youtu.be/watch?v=K0damuN_9bQ",
  "https://youtu.be/watch?v=5ls7g9eH7ss",
  "https://youtu.be/watch?v=hb59QZW2SCA",
  "https://youtu.be/watch?v=VJs_VALzi_8",
  "https://youtu.be/watch?v=GCA5CB5uUyA"
]
var videoIds4PM2430PM = [
  "https://youtu.be/watch?v=n_sWTHQKr-s",
  "https://youtu.be/watch?v=FdjXC4aDNrc",
  "https://youtu.be/watch?v=oqwjsqLvaGA",
  "https://youtu.be/watch?v=ewQeG4bfh7o",
  "https://youtu.be/watch?v=J1xFJDSeHxI",
  "https://youtu.be/watch?v=AJNF04k6hDU",
  "https://youtu.be/watch?v=EXFJ1gUqSOI",
  "https://youtu.be/watch?v=zvB3h2IKdYU",
  "https://youtu.be/watch?v=ihDMzzMxsFY",
  "https://youtu.be/watch?v=JdPibO28X6g",
  "https://youtu.be/watch?v=BpJZAKy3-EI",
  "https://youtu.be/watch?v=y281xhixx9I",
  "https://youtu.be/watch?v=f-1tlzLYUE0",
  "https://youtu.be/watch?v=LBapITUr878",
  "https://youtu.be/watch?v=R7M2RiTgEO4",
  "https://youtu.be/watch?v=hYC5FcjhowU",
  "https://youtu.be/watch?v=PM2cT0GYs0k",
  "https://youtu.be/watch?v=kX-TUNMguqQ",
  "https://youtu.be/watch?v=CJjGRbm7AP0",
  "https://youtu.be/watch?v=nUXNQk-GpXE",
  "https://youtu.be/watch?v=pRIdTBDo5s0",
  "https://youtu.be/watch?v=lnUnMD8avFo",
  "https://youtu.be/watch?v=OHtNgbbZUHc",
  "https://youtu.be/watch?v=IWeeGlqWjTo",
  "https://youtu.be/watch?v=B-43bJpN9p0",
  "https://youtu.be/watch?v=ZlJUN6ld7Uw",
  "https://youtu.be/watch?v=cepnx5OtwMg",
  "https://youtu.be/watch?v=CyYUtJWu67g",
  "https://youtu.be/watch?v=kVPAH1SoJOs",
  "https://youtu.be/watch?v=CSSucrEZru0",
  "https://youtu.be/watch?v=voX77aqxMVM",
  "https://youtu.be/watch?v=VMenL3FtjwY",
  "https://youtu.be/watch?v=gMWMaYqMuvU",
  "https://youtu.be/watch?v=9CivuYkHkdw",
  "https://youtu.be/watch?v=nWjshODENSE",
  "https://youtu.be/watch?v=wC85p4WwT7o",
  "https://youtu.be/watch?v=-STfCX3_Dt8",
  "https://youtu.be/watch?v=2npJbktaXas",
  "https://youtu.be/watch?v=mW8HT3wTjtw",
  "https://youtu.be/watch?v=aqJxAEc8I98",
  "https://youtu.be/watch?v=7RTuOTLqNJg",
  "https://youtu.be/watch?v=D-mxD6R0PZk",
  "https://youtu.be/watch?v=gkpfOwxvP5Y",
  "https://youtu.be/watch?v=MaOJiU7ICSs",
  "https://youtu.be/watch?v=ldoCeoPnsr4",
  "https://youtu.be/watch?v=kRtuL6PVM3M",
  "https://youtu.be/watch?v=BxEn1br2hhA",
  "https://youtu.be/watch?v=E7e2NbRTv34",
  "https://youtu.be/watch?v=0Pw-W11hzaY",
  "https://youtu.be/watch?v=fjOraqJJfdo",
  "https://youtu.be/watch?v=-k2lYZmcyUs",
  "https://youtu.be/watch?v=IpDx4Fw137U",
  "https://youtu.be/watch?v=bIy7bGgPmu8",
  "https://youtu.be/watch?v=wGFfIulM2aw",
  "https://youtu.be/watch?v=xv3LBB6GAh4",
  "https://youtu.be/watch?v=SLfbsnOG3lA",
  "https://youtu.be/watch?v=YaRNqZT1QH4",
  "https://youtu.be/watch?v=1cjfNYV-Z-U",
  "https://youtu.be/watch?v=1cjfNYV-Z-U",
  "https://youtu.be/watch?v=1cjfNYV-Z-U",
  "https://youtu.be/watch?v=1cjfNYV-Z-U",
  "https://youtu.be/watch?v=1cjfNYV-Z-U",
  "https://youtu.be/watch?v=0zg7ZA8UGa8",
  "https://youtu.be/watch?v=0zg7ZA8UGa8",
  "https://youtu.be/watch?v=0zg7ZA8UGa8",
  "https://youtu.be/watch?v=0zg7ZA8UGa8",
  "https://youtu.be/watch?v=0zg7ZA8UGa8",
  "https://youtu.be/watch?v=pOiiAdshU5Q",
  "https://youtu.be/watch?v=pOiiAdshU5Q",
  "https://youtu.be/watch?v=pOiiAdshU5Q",
  "https://youtu.be/watch?v=pOiiAdshU5Q",
  "https://youtu.be/watch?v=pOiiAdshU5Q",
  "https://youtu.be/watch?v=pOiiAdshU5Q",
  "https://youtu.be/watch?v=pOiiAdshU5Q",
  "https://youtu.be/watch?v=pOiiAdshU5Q",
  "https://youtu.be/watch?v=pOiiAdshU5Q",
  "https://youtu.be/watch?v=pOiiAdshU5Q",
  "https://youtu.be/watch?v=WwnSgVJcGm8",
  "https://youtu.be/watch?v=XEwg5dwLjng",
  "https://youtu.be/watch?v=eYo8jusJkfA",
  "https://youtu.be/watch?v=iIBI3vVcce0",
  "https://youtu.be/watch?v=7K7gaKhkiVg",
  "https://youtu.be/watch?v=vX5baryGnnk",
  "https://youtu.be/watch?v=kEkmTUobm9A",
  "https://youtu.be/watch?v=ynWOhlnFJWQ",
  "https://youtu.be/watch?v=ofPNauMOvFU",
  "https://youtu.be/watch?v=LP4M4TBXg58",
  "https://youtu.be/watch?v=LP4M4TBXg58",
  "https://youtu.be/watch?v=LP4M4TBXg58",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
];
var videoIds5PM = [
  "https://youtu.be/watch?v=iK4BKnkW9rc",
  "https://youtu.be/watch?v=qjqBUYQb21g",
  "https://youtu.be/watch?v=XbI29tI5MXs",
  "https://youtu.be/watch?v=0dnRWrsgKrU",
  "https://youtu.be/watch?v=ohCm6YeovpQ",
  "https://youtu.be/watch?v=HVK-KiANd_Q",
  "https://youtu.be/watch?v=6-USBEqLicg",
  "https://youtu.be/watch?v=QoHbvZfu1-c",
  "https://youtu.be/watch?v=X2Q2X-7hVQw",
  "https://youtu.be/watch?v=mR-lbatS6ts",
  "https://youtu.be/watch?v=1wMsbj0VvVE",
  "https://youtu.be/watch?v=Mzf_jtM8jgw",
  "https://youtu.be/watch?v=qsATpni7B9s",
  "https://youtu.be/watch?v=a0tSVDjQbz0",
  "https://youtu.be/watch?v=4ES2y7bxENE",
  "https://youtu.be/watch?v=j32-UnN6m5E",
  "https://youtu.be/watch?v=86EkHcJsXhU",
  "https://youtu.be/watch?v=P3Ca0X-TO1U",
  "https://youtu.be/watch?v=UjnyCsweHOE",
  "https://youtu.be/watch?v=G2ApsOSMX2s",
  "https://youtu.be/watch?v=3Hssx5jy-f4",
  "https://youtu.be/watch?v=sRih4d0Um9U",
  "https://youtu.be/watch?v=lI-u0pJ-XEM",
  "https://youtu.be/watch?v=tv9UIy0RCus",
  "https://youtu.be/watch?v=wGKi7YITv84",
  "https://youtu.be/watch?v=FQ0ZvlLi3Aw",
  "https://youtu.be/watch?v=hlm9JW6hzu4",
  "https://youtu.be/watch?v=W61OP5HPSU4",
  "https://youtu.be/watch?v=PqS4Ckf01XI",
  "https://youtu.be/watch?v=BjiWP6GdaZs",
  "https://youtu.be/watch?v=VR6G2-BXk50",
  "https://youtu.be/watch?v=7D6W6Dzsinw",
  "https://youtu.be/watch?v=LWW9kyDhSGY",
  "https://youtu.be/watch?v=s60XUkdNoNc",
  "https://youtu.be/watch?v=PjfvbA3yaB4",
  "https://youtu.be/watch?v=8M1fDbBTeuc",
  "https://youtu.be/watch?v=OMtsPjcvOyA",
  "https://youtu.be/watch?v=1n1_ocOUx4M",
  "https://youtu.be/watch?v=8Yy_xnQTS9k",
  "https://youtu.be/watch?v=aTYAwNeP7hw",
  "https://youtu.be/watch?v=Cc4_lDIhhK4",
  "https://youtu.be/watch?v=dTUrgFaXR2o",
  "https://youtu.be/watch?v=IPQmfvcvOWI",
  "https://youtu.be/watch?v=tHjjbHkFqVw",
  "https://youtu.be/watch?v=UfDFvG0Px5A",
  "https://youtu.be/watch?v=mtxjk_kIi6I",
  "https://youtu.be/watch?v=M_U4NYPHuE8",
  "https://youtu.be/watch?v=XmheFB3vSmM",
  "https://youtu.be/watch?v=b9RSREv2NAE",
  "https://youtu.be/watch?v=YcZ4vXgsGh4",
  "https://youtu.be/watch?v=MnjMwoJpDag",
  "https://youtu.be/watch?v=8zVTrQ54oKA",
  "https://youtu.be/watch?v=HV7SQkbOKQQ",
  "https://youtu.be/watch?v=urX6QcVFkHY",
  "https://youtu.be/watch?v=Q7vthL5hIqo",
  "https://youtu.be/watch?v=N0j6NXznknU",
  "https://youtu.be/watch?v=u0qTJz2DUos",
  "https://youtu.be/watch?v=UioiM5KopzU",
  "https://youtu.be/watch?v=sDlGy1SxYGg",
  "https://youtu.be/watch?v=dnua8QvCfB0",
  "https://youtu.be/watch?v=FG0ydp-1mHE",
  "https://youtu.be/watch?v=bCm-EAd_oEI",
  "https://youtu.be/watch?v=aZ5lyqb4gUc",
  "https://youtu.be/watch?v=2HUy60DWYek",
  "https://youtu.be/watch?v=FEXeAlaL9cc",
  "https://youtu.be/watch?v=ORouZmGacHk",
  "https://youtu.be/watch?v=2v-8DArgo-Y",
  "https://youtu.be/watch?v=1cjfNYV-Z-U",
  "https://youtu.be/watch?v=1cjfNYV-Z-U",
  "https://youtu.be/watch?v=1cjfNYV-Z-U",
  "https://youtu.be/watch?v=1cjfNYV-Z-U",
  "https://youtu.be/watch?v=1cjfNYV-Z-U",
  "https://youtu.be/watch?v=0zg7ZA8UGa8",
  "https://youtu.be/watch?v=0zg7ZA8UGa8",
  "https://youtu.be/watch?v=0zg7ZA8UGa8",
  "https://youtu.be/watch?v=0zg7ZA8UGa8",
  "https://youtu.be/watch?v=0zg7ZA8UGa8",
];
var videoIds7PM = [
  "https://youtu.be/watch?v=PT5HrjP-lPE",
  "https://youtu.be/watch?v=1yfUfH1jF3g",
  "https://youtu.be/watch?v=vN2BCZjZYWs",
  "https://youtu.be/watch?v=oZF2RUJHV8c",
  "https://youtu.be/watch?v=rNY5lwrmZ1w",
  "https://youtu.be/watch?v=E7sn6tjcZgI",
  "https://youtu.be/watch?v=kvsw74KWAIw",
  "https://youtu.be/watch?v=OX3rC3ENFw0",
  "https://youtu.be/watch?v=o3i64oR6Dv8",
  "https://youtu.be/watch?v=Frm0LTTtgFo",
  "https://youtu.be/watch?v=PFbYJ2-KpR8",
  "https://youtu.be/watch?v=rVAxjlFU28o",
  "https://youtu.be/watch?v=fIonJON2p9A",
  "https://youtu.be/watch?v=Gc_DMKiz9LU",
  "https://youtu.be/watch?v=bfk_pzQSfX8",
  "https://youtu.be/watch?v=SKLlmJKfcI0",
  "https://youtu.be/watch?v=r0W-607Atz0",
  "https://youtu.be/watch?v=nGQ-nCwHYcs",
  "https://youtu.be/watch?v=7hTge-5W3Cc",
  "https://youtu.be/watch?v=fBHJFPqKIG0",
  "https://youtu.be/watch?v=LvV7MOoSwy0",
  "https://youtu.be/watch?v=MTyBtwmvEjE",
  "https://youtu.be/watch?v=djMpH9D3NUQ",
  "https://youtu.be/watch?v=3_uRhxkjdB4",
  "https://youtu.be/watch?v=3VS4Nkzh-70",
  "https://youtu.be/watch?v=jX28oxrdUVI",
  "https://youtu.be/watch?v=dnBqjTmlLg8",
  "https://youtu.be/watch?v=r_mwNcxuxwY",
  "https://youtu.be/watch?v=xlyyu1Go4yU",
  "https://youtu.be/watch?v=l8g0z8yZ6FU",
  "https://youtu.be/watch?v=gMDgHPQ0YfI",
  "https://youtu.be/watch?v=HjWbtUBKuUc",
  "https://youtu.be/watch?v=WO2SCGfEYiE",
  "https://youtu.be/watch?v=ur8ys2aglI4",
  "https://youtu.be/watch?v=jmr5kAmIQGs",
  "https://youtu.be/watch?v=3va3bdtT9LQ",
  "https://youtu.be/watch?v=7vzfeyh-ow8",
  "https://youtu.be/watch?v=v2t6iP4mWvA",
  "https://youtu.be/watch?v=iwxbY-p_w0w",
  "https://youtu.be/watch?v=pdO9uKpzaYU",
  "https://youtu.be/watch?v=8iEXhbqami8",
  "https://youtu.be/watch?v=T-BoDW1_9P4",
  "https://youtu.be/watch?v=NgHygsNwTNk",
  "https://youtu.be/watch?v=jPKuyeDb0mM",
  "https://youtu.be/watch?v=EDsDnR2dzlw",
  "https://youtu.be/watch?v=ljl1jBEY3_A",
  "https://youtu.be/watch?v=jIwqlKDPq4s",
  "https://youtu.be/watch?v=TGulB0MfxPs",
  "https://youtu.be/watch?v=ehlrUPrvFuk",
  "https://youtu.be/watch?v=vkUIyOm9hZk",
  "https://youtu.be/watch?v=t2Jpe0I5pa4",
  "https://youtu.be/watch?v=kHKJ9Mf8UxU",
  "https://youtu.be/watch?v=zwz5yJR_aFA",
  "https://youtu.be/watch?v=RdTJHVG_IdU",
  "https://youtu.be/watch?v=WaXvbkjn-RA",
  "https://youtu.be/watch?v=xe0P0rnsS1Q",
  "https://youtu.be/watch?v=bBjk55hNjWw",
  "https://youtu.be/watch?v=bBjk55hNjWw",
  "https://youtu.be/watch?v=bBjk55hNjWw",
  "https://youtu.be/watch?v=bBjk55hNjWw",
  "https://youtu.be/watch?v=bBjk55hNjWw",
  "https://youtu.be/watch?v=bBjk55hNjWw",
  "https://youtu.be/watch?v=bBjk55hNjWw",
  "https://youtu.be/watch?v=bBjk55hNjWw",
  "https://youtu.be/watch?v=IyirV9lir8Q",
  "https://youtu.be/watch?v=IyirV9lir8Q",
  "https://youtu.be/watch?v=IyirV9lir8Q",
];
var videoIds25MinutesofMSAgent = [
  "https://youtu.be/watch?v=qsATpni7B9s", // Angry Birds Toons
  "https://youtu.be/watch?v=a0tSVDjQbz0",
  "https://youtu.be/watch?v=4ES2y7bxENE",
  "https://youtu.be/watch?v=j32-UnN6m5E",
  "https://youtu.be/watch?v=86EkHcJsXhU",
  "https://youtu.be/watch?v=P3Ca0X-TO1U",
  "https://youtu.be/watch?v=UjnyCsweHOE",
  "https://youtu.be/watch?v=G2ApsOSMX2s",
  "https://youtu.be/watch?v=3Hssx5jy-f4",
  "https://youtu.be/watch?v=sRih4d0Um9U",
  "https://youtu.be/watch?v=lI-u0pJ-XEM",
  "https://youtu.be/watch?v=tv9UIy0RCus",
  "https://youtu.be/watch?v=iK4BKnkW9rc", // Angry Birds Stella
  "https://youtu.be/watch?v=qjqBUYQb21g",
  "https://youtu.be/watch?v=XbI29tI5MXs",
  "https://youtu.be/watch?v=0dnRWrsgKrU",
  "https://youtu.be/watch?v=ohCm6YeovpQ",
  "https://youtu.be/watch?v=HVK-KiANd_Q",
  "https://youtu.be/watch?v=V4we8iFk-fY", // AVGN
  "https://youtu.be/watch?v=6M_4Yqk65f8",
  "https://youtu.be/watch?v=9DfdRdOM_B0",
  "https://youtu.be/watch?v=l-6WakV0kWM",
  "https://youtu.be/watch?v=XjUz8IT0CYg",
  "https://youtu.be/watch?v=y306cWw98a4",
  "https://youtu.be/watch?v=qVBerX6Dzmc",
  "https://youtu.be/watch?v=qVBerX6Dzmc",
  "https://youtu.be/watch?v=QVS0Uks4ZUw",
  "https://youtu.be/watch?v=sayp5lieKuU",
  "https://youtu.be/watch?v=ofM11nPzFo0",
  "https://youtu.be/watch?v=kMg6_IXCjo4",
  "https://youtu.be/watch?v=1raUvGNbZFg",
  "https://youtu.be/watch?v=3p713bNaO4A",
  "https://youtu.be/watch?v=MYDuy7wM8Gk",
  "https://youtu.be/watch?v=OEVzPCY2T-g",
  "https://youtu.be/watch?v=v7poR6G3hec",
  "https://youtu.be/watch?v=LkNvQYiM6bw",
  "https://youtu.be/watch?v=X7-mOhP7W7k",
  "https://youtu.be/watch?v=TLVGmvmNitg",
  "https://youtu.be/watch?v=qF2snKCmqJo",
  "https://youtu.be/watch?v=kZfq-IPlLF8",
  "https://youtu.be/watch?v=omW1E7rv7IM",
  "https://youtu.be/watch?v=g2eH3vYbdGo",
  "https://youtu.be/watch?v=VvR_3OTxs8A",
  "https://youtu.be/watch?v=gvnRBywkUZ0",
  "https://youtu.be/watch?v=RL0YWB8wMDs",
  "https://youtu.be/watch?v=M1tU61Nyv1w",
  "https://youtu.be/watch?v=pw8tdieB30c",
  "https://youtu.be/watch?v=bN6fxqvGBSs", // YKWBS?!
  "https://youtu.be/watch?v=FffTJk-gFKc",
  "https://youtu.be/watch?v=mBBwKWSxoMI",
  "https://youtu.be/watch?v=mMoCgVDbWO0",
  "https://youtu.be/watch?v=TSRBgfVBnjA",
  "https://youtu.be/watch?v=oeyDkulK6lA",
  "https://youtu.be/watch?v=wi1GWXvzhxQ",
  "https://youtu.be/watch?v=bV0M9_NwMHY",
  "https://youtu.be/watch?v=hdowZnCV-tc",
  "https://youtu.be/watch?v=VsdzaEVeFEE",
  "https://youtu.be/watch?v=nzLh9SqmqCA",
  "https://youtu.be/watch?v=hG2otLyvuCQ",
  "https://youtu.be/watch?v=bu3mcIfkUG8",
  "https://youtu.be/watch?v=6Qnnxx-uHG4",
  "https://youtu.be/watch?v=a_nZJNxf0QE",
  "https://youtu.be/watch?v=mJPXWQDxO8Q",
  "https://youtu.be/watch?v=9a4L-N__lJg",
  "https://youtu.be/watch?v=v1HQJIOByQU",
  "https://youtu.be/watch?v=Httd7YE4sAs",
  "https://youtu.be/watch?v=UVZhVxSbaEs",
  "https://youtu.be/watch?v=F18-BFmtVbM",
  "https://youtu.be/watch?v=9dEpLNj0QcE",
  "https://youtu.be/watch?v=eHEItvqF-tg",
  "https://youtu.be/watch?v=mTcK4kynVLY",
  "https://youtu.be/watch?v=tBUzngDUOnk",
  "https://youtu.be/watch?v=C4Doj1AZInI",
  "https://youtu.be/watch?v=5Ja4FkSUsAk",
  "https://youtu.be/watch?v=kRhBahmZNAs",
  "https://youtu.be/watch?v=eHV_5fEu3ug",
  "https://youtu.be/watch?v=qGL3zr3xDHU",
  "https://youtu.be/watch?v=IuAp-4j6QKQ",
  "https://youtu.be/watch?v=dZGVp7EZ-NM", // Microsoft Agent Plays
  "https://youtu.be/watch?v=MlqT79QfrcM",
  "https://youtu.be/watch?v=VItMnVQ-9bM",
  "https://youtu.be/watch?v=9GlgqAeJ89Q",
  "https://youtu.be/watch?v=kJKM4uQs9WQ",
  "https://youtu.be/watch?v=crX2VvHkfjE",
  "https://youtu.be/watch?v=PSly8XQ-TQM",
  "https://youtu.be/watch?v=nS-3kpM9Ovg",
  "https://youtu.be/watch?v=ye1IZq1hPFE",
  "https://youtu.be/watch?v=D0hQp05QlaQ",
  "https://youtu.be/watch?v=6dQioyja4e8",
  "https://youtu.be/watch?v=QWdm6mLRJxA",
  //"https://youtu.be/watch?v=VRTuoilurZ",
  "https://youtu.be/watch?v=d68-HZjoSQw",
  "https://youtu.be/watch?v=dcFCucIQsv8",
  "https://youtu.be/watch?v=AdESAUZUJr8",
  "https://youtu.be/watch?v=OOntnyuecks",
  "https://youtu.be/watch?v=qK99INAXX2w",
  "https://youtu.be/watch?v=xA9rEtE895w",
  "https://youtu.be/watch?v=1NnJnPdRLlI",
  "https://youtu.be/watch?v=GnXiCbmBe_M",
  "https://youtu.be/watch?v=OUr9_Ejhx9U",
  "https://youtu.be/watch?v=f0KB3bkmbOU",
  "https://youtu.be/watch?v=cSyMKD0WUmY",
  "https://youtu.be/watch?v=xhXfbKaR5Qc",
  "https://youtu.be/watch?v=Nx1Q9m2EYOQ",
  "https://youtu.be/watch?v=5J0v7PdMHQY",
  "https://youtu.be/watch?v=pnhuAmh9K1E",
  "https://youtu.be/watch?v=i_wysAmPp7M",
  "https://youtu.be/watch?v=g1HNcG0gZrw",
  "https://youtu.be/watch?v=wooz39ArOPo",
  "https://youtu.be/watch?v=oIej7VudwMg",
  "https://youtu.be/watch?v=zs8Eu6Jh_Fo",
  "https://youtu.be/watch?v=p59UV_MGmvs",
  "https://youtu.be/watch?v=GikrLQBDJr4",
  "https://youtu.be/watch?v=n0WNbzdBzSM",
  "https://youtu.be/watch?v=3GI136Z82Nc",
  "https://youtu.be/watch?v=KB5e6OyfCws",
  "https://youtu.be/watch?v=0_KBkFzgEdo",
  "https://youtu.be/watch?v=7KV88KarKg0",
  "https://youtu.be/watch?v=qKw8GaFaLoA",
  "https://youtu.be/watch?v=MmGAxGaS_cg",
  "https://youtu.be/watch?v=otgKlXbBkG8",
  "https://youtu.be/watch?v=pj6tI8l4YLI",
  "https://youtu.be/watch?v=M3Ky21v3RC8",
  "https://youtu.be/watch?v=CWIqBU4QlGk",
  "https://youtu.be/watch?v=w4Zs5hVi3zM",
  "https://youtu.be/watch?v=rWU48g7scMo",
  "https://youtu.be/watch?v=UOGwOPKdO6A",
  "https://youtu.be/watch?v=KQtdZh3cGrc",
  "https://youtu.be/watch?v=UOGwOPKdO6A",
  "https://youtu.be/watch?v=KQtdZh3cGrc",
  "https://youtu.be/watch?v=0yRcRVt470I",
  "https://youtu.be/watch?v=bHHr76V4sDQ",
  "https://youtu.be/watch?v=wL1GZTqsJT8",
  "https://youtu.be/watch?v=dRfL4IRKRzo",
  "https://youtu.be/watch?v=5TYBN4vP8U4",
  "https://youtu.be/watch?v=LpGUS98ot3c",
  "https://youtu.be/watch?v=ggvzhhx11NI",
  "https://youtu.be/watch?v=_VRBA64vDD4",
  "https://youtu.be/watch?v=XyNJZ8PEWRM",
  "https://youtu.be/watch?v=CwUeKJt0j9o",
  "https://youtu.be/watch?v=ECEx2zQjaDc",
  "https://youtu.be/watch?v=luIwRawbmi0",
  "https://youtu.be/watch?v=lM4fBo8EMiE",
  "https://youtu.be/watch?v=EbNGrNF87AA",
  "https://youtu.be/watch?v=vPzCh5US-c4",
  "https://youtu.be/watch?v=trerahVOkuQ",
  "https://youtu.be/watch?v=1Xr5SfqWMmc",
  "https://youtu.be/watch?v=O7K3tcCZwUY",
  "https://youtu.be/watch?v=TitzY-BwoUY",
  "https://youtu.be/watch?v=6DJh-uSK9VQ",
  "https://youtu.be/watch?v=yl0URvSeGQs",
  "https://youtu.be/watch?v=T9ZadKJiHIA",
  "https://youtu.be/watch?v=3KM61CZTnOM",
  "https://youtu.be/watch?v=yVvd_IdkbkE",
  "https://youtu.be/watch?v=ljdupMIfAd4",
  "https://youtu.be/watch?v=DgYsnJnQJqU",
  "https://youtu.be/watch?v=OZ3LPIcRuQM",
  "https://youtu.be/watch?v=y0NAhZZ9QlU",
  "https://youtu.be/watch?v=8afdPc3Nnag",
  "https://youtu.be/watch?v=47lQueyRCOg",
  "https://youtu.be/watch?v=eFsaLhsdgLY",
  "https://youtu.be/watch?v=2bdGZxzr5rI",
  "https://youtu.be/watch?v=H8j8UFUNRWM",
  "https://youtu.be/watch?v=QodUVp53Hgg",
  "https://youtu.be/watch?v=yA4rw6GMr0c",
  "https://youtu.be/watch?v=7RT22IJs2k8",
  "https://youtu.be/watch?v=vFWNNXJJQ3o",
  "https://youtu.be/watch?v=6FmijN4BY4c",
  "https://youtu.be/watch?v=ybABNY3hwNU",
  "https://youtu.be/watch?v=W7aXWQFQlVg",
  "https://youtu.be/watch?v=ixK995Fnu1k",
  "https://youtu.be/watch?v=XfkoZgnR2vo",
  "https://youtu.be/watch?v=FlD3pOu8Sm8",
  "https://youtu.be/watch?v=VcgX_koOHaA",
  "https://youtu.be/watch?v=4mhsINjjl5c",
  "https://youtu.be/watch?v=2gGF7Yfg9O0",
  "https://youtu.be/watch?v=kZK-2qekq8s",
  "https://youtu.be/watch?v=5hT9k7iNTGQ",
  "https://youtu.be/watch?v=hmkuvXgxRsw",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
  "https://youtu.be/watch?v=lGT7GRoUsaw",
  "https://youtu.be/watch?v=LdLbRe09qas", // Android Trash
  "https://youtu.be/watch?v=u39KUBd2Q9I",
  "https://youtu.be/watch?v=vdCSSkMinvg",
  "https://youtu.be/watch?v=4PAiqcv08cU",
  "https://youtu.be/watch?v=g-r1Ug-hduw",
  "https://youtu.be/watch?v=yZtjYbwsTg8",
  "https://youtu.be/watch?v=HemR9r2dhZQ",
  "https://youtu.be/watch?v=tJEk1GAqQTg",
  "https://youtu.be/watch?v=Y4Ajyd6Hc0E",
  "https://youtu.be/watch?v=YQa2-DY7Y_Q", // Battle for Dream Island (Requested by SF08, not sorry Konnor88)
  "https://youtu.be/watch?v=8LY0o_CgPR8",
  "https://youtu.be/watch?v=JfzEO9-Zlhw",
  "https://youtu.be/watch?v=rhkgOXksmaY",
  "https://youtu.be/watch?v=cdmVPHdpECM",
  "https://youtu.be/watch?v=xHI-iKm31us",
  "https://youtu.be/watch?v=6vGgsXO57bs",
  "https://youtu.be/watch?v=Ze1p7bYXw0g",
  "https://youtu.be/watch?v=g0wCF04ddnw",
  "https://youtu.be/watch?v=Eg5Ja23HfhY",
  "https://youtu.be/watch?v=yhkDgX2b7po",
  "https://youtu.be/watch?v=U4sp10HUI6Y",
  "https://youtu.be/watch?v=BQBmKvRd0B0",
  "https://youtu.be/watch?v=yZqh3l3-pTM",
  "https://youtu.be/watch?v=pf9FHBM0SLQ",
  "https://youtu.be/watch?v=nAKk0gm73K0",
  "https://youtu.be/watch?v=Xmh7M7TXDRE",
  "https://youtu.be/watch?v=x4K1xKHwp0E",
  "https://youtu.be/watch?v=4pR6Y3_ahS8",
  "https://youtu.be/watch?v=J9udiROQchg",
  "https://youtu.be/watch?v=6OfKK5Rt3fY",
  "https://youtu.be/watch?v=GfFkiGgY6Pk",
  "https://youtu.be/watch?v=KLwgTM7HBhw",
  "https://youtu.be/watch?v=PigChYq_FrM",
  "https://youtu.be/watch?v=ye_HKD_C5o0", // BUT WAIT, THERES MORE
  "https://youtu.be/watch?v=26FJTtLOu2s", // BFDIA
  "https://youtu.be/watch?v=cv1Qz0GCaxw",
  "https://youtu.be/watch?v=hsprecnxSsE",
  "https://youtu.be/watch?v=dXUE7OFij_I",
  "https://youtu.be/watch?v=E174ogB49xs",
  "https://youtu.be/watch?v=4q77g4xo9ic",
  "https://youtu.be/watch?v=YrsRLT3u0Cg",
  "https://youtu.be/watch?v=kaFpfSHllOw",
  "https://youtu.be/watch?v=RZB7nTzSl3g",
  "https://youtu.be/watch?v=rFUwZ0Vtims",
  "https://youtu.be/watch?v=mmlPwe71JkA", // IDFB next
  "https://youtu.be/watch?v=2Jw0dhwmi3o",
  "https://youtu.be/watch?v=GoYe_yH0dVQ", // and that's all of them, i will NOT add BFB for christ's sake
  "https://youtu.be/watch?v=UVUatYPScjw", // rocko's modern life
  "https://youtu.be/watch?v=JoyB9zHYxi8",
  "https://youtu.be/watch?v=zV7s4Dzq8wE",
  "https://youtu.be/watch?v=rc4HyJ0XMgY",
  "https://youtu.be/watch?v=exDjH1QJOEs", // PGG and PGG Rebooted (rated Mature Audiences)
  "https://youtu.be/watch?v=m9JtPsnaakM",
  "https://youtu.be/watch?v=qt7C-Pcfw-U",
  "https://youtu.be/watch?v=tAjNijZHeC0",
  "https://youtu.be/watch?v=aiIDeirsJoY",
  "https://youtu.be/watch?v=OuFcuT4jSbE",
  "https://youtu.be/watch?v=_ZzvFCLHFAg",
  "https://youtu.be/watch?v=WiRdCDhaNTw",
  "https://youtu.be/watch?v=28DdmrivqcQ",
  "https://youtu.be/watch?v=i7GTdZH6km8",
  "https://youtu.be/watch?v=49ODdYy9yAI",
  "https://youtu.be/watch?v=92jKwR-M93I",
  "https://youtu.be/watch?v=eniRs2KpC70",
  "https://youtu.be/watch?v=Bm89dja7kNA",
  "https://youtu.be/watch?v=bMhXrVh6GZA",
  "https://youtu.be/watch?v=tXx2omKPXpA",
  "https://youtu.be/watch?v=TpPdjZo0tGg",
  "https://youtu.be/watch?v=ee_qZWa9DOw",
  "https://youtu.be/watch?v=Ln5T_j1o32k",
  "https://youtu.be/watch?v=h85K_p0jJ4o",
  "https://youtu.be/watch?v=Lgh0kIUln-o",
  "https://youtu.be/watch?v=6TdLkIOTkdA",
  "https://youtu.be/watch?v=jwChUXVMmaQ",
  "https://youtu.be/watch?v=ElLfUsh-NZw",
  "https://youtu.be/watch?v=zgAzpu3zZNo",
  "https://youtu.be/watch?v=hANfAmCJOAM",
  "https://youtu.be/watch?v=NqIJoVay-aU",
  "https://youtu.be/watch?v=W7br-y30kBs",
  "https://youtu.be/watch?v=uLnq-vOXFUc",
  "https://youtu.be/watch?v=WIXWIollTOE",
  "https://youtu.be/watch?v=xNIXsaIO-NE",
  "https://youtu.be/watch?v=4bijWcMnKyE",
  "https://youtu.be/watch?v=DV6kqZSY5WE", // Windows Desktop Skits
  "https://youtu.be/watch?v=eO2LgSSTXqM",
  "https://youtu.be/watch?v=FeorAMjcV7E",
  "https://youtu.be/watch?v=lex-Ap58niY",
  "https://youtu.be/watch?v=exter6QAGS8",
  "https://youtu.be/watch?v=XBRxcnne5f4",
  "https://youtu.be/watch?v=dxtwzr-4UYo",
  "https://youtu.be/watch?v=1q9phQT3-wc",
  "https://youtu.be/watch?v=TD8InhMS1io",
  "https://youtu.be/watch?v=Jn6CXHufyos",
  "https://youtu.be/watch?v=fcPsjkhJLyw",
  "https://youtu.be/watch?v=oxir0CFO_SU",
  "https://youtu.be/watch?v=UitVP8YClNc",
  "https://youtu.be/watch?v=-y9TxoTt5eQ", // SF08 Remakes
  "https://youtu.be/watch?v=z1ApOo20pU4",
  "https://youtu.be/watch?v=TafPUncacTE",
  "https://youtu.be/watch?v=wNfMpAR-Oog",
  "https://youtu.be/watch?v=iKCNlur5wRY",
  "https://youtu.be/watch?v=yCRHUCSI20M",
  "https://youtu.be/watch?v=sCKONPsB_Qc",
  "https://youtu.be/watch?v=67XnrO-Cygc", // Controversial Fights
  "https://youtu.be/watch?v=67XnrO-Cygc",
  "https://youtu.be/watch?v=67XnrO-Cygc",
  "https://youtu.be/watch?v=67XnrO-Cygc",
  "https://youtu.be/watch?v=67XnrO-Cygc",
  "https://youtu.be/watch?v=67XnrO-Cygc",
  "https://youtu.be/watch?v=67XnrO-Cygc",
  "https://youtu.be/watch?v=67XnrO-Cygc",
  "https://youtu.be/watch?v=UGRVQ7KtEK4", // MS Brother
  "https://youtu.be/watch?v=XLkwqFonfOg",
  "https://youtu.be/watch?v=6JNqciPFPaw",
  "https://youtu.be/watch?v=ME28jhesxoc",
  "https://youtu.be/watch?v=KD71GxsfHlo",
  "https://youtu.be/watch?v=gKjbU1z1OlU",
  "https://youtu.be/watch?v=rjcJVX2fNFA", // MS Survivor
  "https://youtu.be/watch?v=5hzRfTXSiKA",
  "https://youtu.be/watch?v=xc6N_0YT2r8",
  "https://youtu.be/watch?v=lLpp8VPUUfk"
];

process.on("uncaughtException", (err) => {
  console.log(err.stack);
  throw err;
});

// Variable for toggling Replit mode
const isReplit = settings.isReplit;

if (isReplit === true) {
  var port = 80;
} else {
  var port = process.env.port || settings.port;
}

exports.beat = function() {
  io.on("connection", function(socket) {
    new User(socket);
  });
};

function checkRoomEmpty(room) {
  if (room.users.length != 0) return;

  log.info.log("debug", "removeRoom", {
    room: room,
  });

  let publicIndex = roomsPublic.indexOf(room.rid);
  if (publicIndex != -1) roomsPublic.splice(publicIndex, 1);

  room.deconstruct();
  delete rooms[room.rid];
  delete room;
}

class Room {
  constructor(rid, prefs) {
    this.rid = rid;
    this.prefs = prefs;
    this.users = [];
    this.curtime = 0;
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours == 16 && minutes <= 30) {
      var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
      var vid = videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
      this.vid = vid;
    } else if (hours == 17) {
      var num = Math.floor(Math.random() * videoIds5PM.length);
      var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
      this.vid = vid;
    } else if (hours == 14) {
      var num = Math.floor(Math.random() * videoIds5PM.length);
      var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
      this.vid = vid;
    } else if (hours == 18 && minutes <= 30) {
      var num = Math.floor(Math.random() * videoIds7PM.length);
      var vid = videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
      this.vid = vid;
    } else if (hours == 19) {
      var num = Math.floor(Math.random() * videoIds7PM.length);
      var vid = videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
      this.vid = vid;
    } else {
      var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
      var vid = videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
      this.vid = vid;
    }
    this.background = "#6d33a0";
  }

  deconstruct() {
    try { 
      this.users.forEach((user) => {
        user.disconnect();
      });
    } catch (e) {
      log.info.log("warn", "roomDeconstruct", {
        e: e,
        thisCtx: this,
      });
    }
    //delete this.rid;
    //delete this.prefs;
    //delete this.users;
  }

  isFull() {
    return this.users.length >= this.prefs.room_max;
  }

  join(user) {
    noflood.push(user.socket);
    user.socket.join(this.rid);
    this.users.push(user);

    this.updateUser(user);
  }
  join_room(user, rid) {
    noflood.push(user.socket);
    user.socket.join(rid);
    this.users.push(user);

    this.updateUser(user);
  }

  leave(user) {
    // HACK
    try {
      this.emit("leave", {
        guid: user.guid,
      });

      let userIndex = this.users.indexOf(user);

      if (userIndex == -1) return;
      this.users.splice(userIndex, 1);

      checkRoomEmpty(this);
    } catch (e) {
      log.info.log("warn", "roomLeave", {
        e: e,
        thisCtx: this,
      });
    }
  }

  updateUser(user) {
    this.emit("update", {
      guid: user.guid,
      userPublic: user.public,
    });
  }

  getUsersPublic() {
    let usersPublic = {};
    this.users.forEach((user) => {
      usersPublic[user.guid] = user.public;
    });
    return usersPublic;
  }

  emit(cmd, data) {
    io.to(this.rid).emit(cmd, data);
    if (this.rid != "everything") {
      io.to("everything").emit(cmd, data);
    }
    //io2.to(this.rid).emit(cmd, data);
  }
}

function newRoom(rid, prefs) {
  rooms[rid] = new Room(rid, prefs);
  log.info.log("debug", "newRoom", {
    rid: rid,
  });
}

/*var godword = Utils.guidGen();
setInterval(function() {
  console.log("Godword: " + godword);
}, 30000);*/

let godword_random = Math.floor((Math.random() * 1000000000000000) + 10);
if (isReplit === true) {
  console.log('Godword:', godword_random)

  setInterval(function() {
    console.log('Godword:', godword_random)
  }, 60 * 1000);
}


let userCommands = {
  /*godmode: function(word) {
    let success = word == godword;
    if (success) {
      this.private.runlevel = 3;
      this.socket.emit("admin");
    } else {
      this.socket.emit("alert", { title: "wrong and your crap", msg: 'Wrong password. Sincerely, passwords everywhere!', button: "OK" });
    }
    log.info.log("debug", "godmode", {
      guid: this.guid,
      success: success,
    });
  },*/
  godmode: function(word) {
    if (isReplit === true) {
      var bonzi_godword = godword_random;
    } else {
      var bonzi_godword = this.room.prefs.godword;
    }
    let success = word == bonzi_godword;
    if (success) {
      this.private.runlevel = 3;
      this.socket.emit("admin");
    } else {
      this.socket.emit("alert", { title: "wrong and your crap", msg: 'Wrong password. Sincerely, passwords everywhere!', button: "OK" });
    }
    log.info.log("debug", "godmode", {
      guid: this.guid,
      success: success,
    });
  },
  sanitize: function() {
    let sanitizeTerms = ["false", "off", "disable", "disabled", "f", "no", "n"];
    let argsString = Utils.argsString(arguments);
    this.private.sanitize = !sanitizeTerms.includes(argsString.toLowerCase());
  },
  sticker: function(sticker) {
    if (Object.keys(stickers).includes(sticker)) {
      this.room.emit("talk", {
        text: `<img src="/img/stickers/${sticker}.png">`,
        say: stickers[sticker],
        guid: this.guid,
      });
    } else {
      this.socket.emit("alert", { title: "ok thats great you made a typo", msg: "That sticker is on black hole. Try shoving a sticker up your ass.", button: "Ok I'll" });
    }
  },
  video: function(vidRaw) {
    if (vidRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    if (vidRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.emit("video", {
      guid: this.guid,
      vid: vid,
    });
  },
  midi: function(midiRaw) {
    if (midiRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    if (midiRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    var midi = this.private.sanitize ? sanitize(midiRaw) : midiRaw;
    this.room.updateUser(this);
    this.room.emit("midi", {
      guid: this.guid,
      midi: midi,
    });
  },
  video_legacy: function(vidRaw) {
    if (vidRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    if (vidRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.emit("video_legacy", {
      guid: this.guid,
      vid: vid,
    });
  },
  movestart: function() {
    this.room.emit("movestart", {
      guid: this.guid,
    });
  },
  movefinish: function() {
    this.room.emit("movefinish", {
      guid: this.guid,
    });
  },
  move: function(x, y) {
    this.room.emit("move", {
      guid: this.guid,
      posX: x,
      posY: y,
    });
    this.public.x = x;
    this.public.y = y;
  },
  img: function(imgRaw) {
    if (imgRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    if (imgRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    var img = this.private.sanitize ? sanitize(imgRaw) : imgRaw;
    this.room.emit("img", {
      guid: this.guid,
      img: img,
    });
  },
  iframe: function(frameRaw) {
    if (frameRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    if (frameRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    var frame = this.private.sanitize ? sanitize(frameRaw) : frameRaw;
    this.room.emit("iframe", {
      guid: this.guid,
      frame: frame,
    });
  },
  letsplay: function(vidRaw) {
    if (vidRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    if (vidRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    if (vidRaw.includes("rio")) {
      this.room.emit("letsplay2", {
        guid: this.guid,
        vid: vid,
      });
    } else if (vidRaw.includes("zuma")) {
      this.room.emit("letsplay3", {
        guid: this.guid,
        vid: vid,
      });
    } else {
      this.room.emit("letsplay", {
        guid: this.guid,
        vid: vid,
      });
    }
  },
  toppestjej: function() {
    this.room.emit("talk", {
      text: `<img src="img/misc/topjej.png">`,
      say: "toppest jej",
      guid: this.guid,
    });
  },
  manchild: function() {
    this.room.emit("talk", {
      text: `<img src="img/misc/manchild2.webp" width=170>`,
      say: "diogo is a fetish manchild: Ziggymoncher",
      guid: this.guid,
    });
  },
  report: function(ip, reason) {
    Ban.addReport(ip, ip, reason, this.public.name);
  },
  ban_menu: function(ip) {
    this.socket.emit("open_ban_menu");
  },
  kick_menu: function(ip) {
    this.socket.emit("open_ban_menu");
  },
  warn_menu: function(ip) {
    this.socket.emit("open_ban_menu");
  },
  kick: function(data) {
    if (this.room.prefs.owner == this.guid) {
      let pu = this.room.getUsersPublic()[data];
      if (pu && pu.color) {
        let target;
        this.room.users.map((n) => {
          if (n.guid == data) {
            target = n;
          }
        });
        target.socket.emit("kick", {
          reason: "You have been kicked from this room.",
        });
        target.disconnect();
        target.socket.disconnect();
      } else {
        this.socket.emit("alert", "Imagine kicking a user when left. You are grounded");
      }
    } else {
      if (this.private.runlevel < 3) {
        this.socket.emit("alert", "admin=true");
        return;
      }
      let pu = this.room.getUsersPublic()[data];
      if (pu && pu.color) {
        let target;
        this.room.users.map((n) => {
          if (n.guid == data) {
            target = n;
          }
        });
        target.socket.emit("kick", {
          reason: "Being retarded? IDK. You probably pissed one of the admins off.",
        });
        target.disconnect();
        target.socket.disconnect();
      } else {
        this.socket.emit("alert", "The user you are trying to kick left. Get dunked on nerd");
      }
    }
  },
  shadowkick: function(data) {
    if (this.room.prefs.owner == this.guid) {
      let pu = this.room.getUsersPublic()[data];
      if (pu && pu.color) {
        let target;
        this.room.users.map((n) => {
          if (n.guid == data) {
            target = n;
          }
        });
        target.disconnect();
        //target.socket.disconnect();
      } else {
        this.socket.emit("alert", "The user you are trying to kick left. Get dunked on nerd");
      }
    } else {
      if (this.private.runlevel < 3) {
        this.socket.emit("alert", "admin=true");
        return;
      }
      let pu = this.room.getUsersPublic()[data];
      if (pu && pu.color) {
        let target;
        this.room.users.map((n) => {
          if (n.guid == data) {
            target = n;
          }
        });
        target.disconnect();
        //target.socket.disconnect();
      } else {
        this.socket.emit("alert", "The user you are trying to kick left. Get dunked on nerd");
      }
    }
  },
  block: function(id) {
    this.blockedUsers[id] = id;

    this.room.users.map((n) => {
      if (n.guid == id) {
        n.socket.emit("blockedby", this.guid);
      }
    });
  },
  css: function(...txt) {
    this.room.emit("css", {
      guid: this.guid,
      css: txt.join(" "),
    });
  },
  ban: function(data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }
    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      if (target.socket.request.connection.remoteAddress == "::1") {
        Ban.removeBan(target.socket.request.connection.remoteAddress);
      } else if (target.socket.request.connection.remoteAddress == "::ffff:127.0.0.1") {
        Ban.removeBan(target.socket.request.connection.remoteAddress);
      } else {
        target.socket.emit("ban", {
          reason: "You got banned.",
        });
        Ban.addBan(target.socket.request.connection.remoteAddress, 24, "You got banned.");
      }
    } else {
      this.socket.emit("alert", { title: "oh fuck", msg: "The user you are trying to kick left. Get dunked on nerd", button: "Ok I'll" });
    }
  },
  unban: function(ip) {
    Ban.removeBan(ip);
  },
  joke: function() {
    this.room.emit("joke", {
      guid: this.guid,
      rng: Math.random(),
    });
  },
  fact: function() {
    this.room.emit("fact", {
      guid: this.guid,
      rng: Math.random(),
    });
  },
  youtube: function(vidRaw) {
    if (vidRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    if (vidRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.emit("youtube", {
      guid: this.guid,
      vid: vid,
    });
  },


  setbonzitvvid: function(vidRaw) {
    if (this.room.rid != "bonzi_tv") return;


    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    if (getRandomInt(1, 4) == 1) {
      if (!bonziTvCommercialMode) {

        var num = Math.floor(Math.random() * videoIdsCommercials.length);
        var vid = videoIdsCommercials[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: vidId,
          identId: videoIdsCommercials[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
        });
        setTimeout(function() {
          bonziTvCommercialMode = false;
        }, 120000)
      }
    }
    //var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");

    if (Math.random() * 3 == 1) {
      if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25)) {
        var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
        var vid = videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 18 && minutes <= 30) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 19 && minutes <= 22) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          identId: vidId,
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          identId: vidId,
        });
      }
    } else {
      if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25) || (hours == 13 && minutes <= 20)) {
        var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
        var vid = videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 18 && minutes <= 30) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 19 && hours <= 22) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 23 || (hours == 22 && minutes >= 9)) {
        //tvhook.send("BonziTV is now off air.");
        this.room.emit("replaceTVWithURL", {
          id: "kQsoV69uGIY",
          hourAmount: hours,
          minuteAmount: minutes,
          identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          identId: vidId,
        });
      }
    }
  },

  setbonzitvvid2: function(vidRaw) {
    if (this.room.rid != "bonzi_tv") return;


    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.vid = vidId;
    this.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: vidId,
    });
  },
  setbonzitvvid3: function(vidRaw) {
    if (this.room.rid != "bonzi_tv") return;


    var bonziTvIdent = ["https://www.youtube.com/watch?v=l_F7ZyzufPg", "https://www.youtube.com/watch?v=GCA5CB5uUyA", "https://www.youtube.com/watch?v=rBPKOZNd7mA", "https://www.youtube.com/watch?v=VJs_VALzi_8"];
    var ident = Math.floor(Math.random() * bonziTvIdent.length);
    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.vid = vidId;
    this.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
    });
  },

  bitview: function(bvRaw) {
    if (bvRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    if (bvRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    var bv = this.private.sanitize ? sanitize(bvRaw) : bvRaw;
    this.room.emit("bitview", {
      guid: this.guid,
      bv: bv,
    });
  },
  vlare: function() {
    this.socket.emit("alert", { title: "you need to know why its shut down", msg: "Vlare got bombarded by hackers for a long time ago, so deal with it", button: "WHY?!" });
  },
  manchild: function() {
    this.socket.emit("alert", { title: "overused", msg: "we all know that person is apparently ass, so deal with it and get a misogynist of your fudge if you want to bring it back, we wont tell you", button: "FINE" });
  },
  backflip: function(swag) {
    this.room.emit("backflip", {
      guid: this.guid,
      swag: swag == "swag",
    });
  },
  swag: function() {
    this.room.emit("swag", {
      guid: this.guid,
    });
  },
  bang: function() {
    this.room.emit("bang", {
      guid: this.guid,
    });
  },
  earth: function() {
    this.room.emit("earth", {
      guid: this.guid,
    });
  },
  grin: function() {
    this.room.emit("grin", {
      guid: this.guid,
    });
  },
  clap: function() {
    if (this.public.color == "clippy" || this.public.color == "red_clippy" || this.public.color == "clippypope") {
      this.room.emit("clap_clippy", {
        guid: this.guid,
      });
    } else {
      this.room.emit("clap", {
        guid: this.guid,
      });
    }
  },
  wave: function() {
    this.room.emit("wave", {
      guid: this.guid,
    });
  },
  nod: function() {
    this.room.emit("nod", {
      guid: this.guid,
    });
  },
  acknowledge: function() {
    this.room.emit("nod", {
      guid: this.guid,
    });
  },
  shrug: function() {
    this.room.emit("shrug", {
      guid: this.guid,
    });
  },
  greet: function() {
    this.room.emit("greet", {
      guid: this.guid,
    });
  },
  css: function(...txt) {
    this.room.emit("css", {
      guid: this.guid,
      css: txt.join(" "),
    });
  },
  sendraw: function(...txt) {
    this.room.emit("sendraw", {
      guid: this.guid,
      text: txt.join(" "),
    });
  },

  godlevel: function() {
    this.socket.emit("alert", "Your godlevel is " + this.private.runlevel + ".");
  },
  broadcast: function(...text) {
    this.room.emit("alert", text.join(" "));
  },
  background: function(text) {
    if (typeof text != "string") {
      this.socket.emit("alert", "ratio");
    } else {
      this.room.background = text;
      this.room.emit("background", { background: text });
    }
  },
  confused: function() {
    this.room.emit("confused", {
      guid: this.guid,
    });
  },
  sad: function() {
    this.room.emit("sad", {
      guid: this.guid,
    });
  },
  banana: function() {
    this.room.emit("banana", {
      guid: this.guid,
    });
  },
  surprised: function() {
    this.room.emit("surprised", {
      guid: this.guid,
    });
  },
  laugh: function() {
    this.room.emit("laugh", {
      guid: this.guid,
    });
  },
  write: function() {
    this.room.emit("write", {
      guid: this.guid,
    });
  },
  write_once: function() {
    this.room.emit("write_once", {
      guid: this.guid,
    });
  },
  write_infinite: function() {
    this.room.emit("write_infinite", {
      guid: this.guid,
    });
  },
  swag: function() {
    this.room.emit("swag", {
      guid: this.guid,
    });
  },
  think: function() {
    this.room.emit("think", {
      guid: this.guid,
    });
  },
  surfjoin: function() {
    this.room.emit("surfjoin", {
      guid: this.guid,
    });
  },
  surfleave: function() {
    this.room.emit("surfleave", {
      guid: this.guid,
    });
  },
  surf: function() {
    this.room.emit("surf", {
      guid: this.guid,
    });
  },
  linux: "passthrough",
  pawn: "passthrough",
  color: function(color) {
    if (this.room.rid == "pope") {
      if (typeof color != "undefined") {
        if (settings.bonziColors2.indexOf(color) == -1) return;

        this.public.color = color;
      }
    } else {
      if (typeof color != "undefined") {
        if (settings.bonziColors.indexOf(color) == -1) return;

        this.public.color = color;
      }
    }
    this.public.color_cross = 'none';
    this.room.updateUser(this);
  },
  crosscolor: function(color) {
    var clrurl = this.private.sanitize ? sanitize(color) : color;
    if (clrurl.match(/105197343/gi) || clrurl.match(/1038507/gi) || clrurl.match(/pope/gi) || clrurl.match(/780654/gi) || clrurl.match(/bonzi.lol/gi)) {
      this.disconnect();
      return;
    }
    if ((clrurl.match(/cdn.discordapp.com/gi) || clrurl.match(/media.discordapp.net/gi)) && (clrurl.match(/.png/gi) || clrurl.match(/.jpeg/gi) || clrurl.match(/.gif/gi) || clrurl.match(/.webp/gi))) {
      this.public.color = "empty";
      this.public.color_cross = clrurl;
      this.room.updateUser(this);
    } else {

      this.socket.emit("alert", "The crosscolor must be a valid image URL from Discord.\nValid file image types are: .png, .jpeg, .gif, .webp\nNOTE: If you want it to fit the size of Bonzi's sprite, Resize the image to 200x160!");

    }
  },
  crosscolorguid: function(guid, color) {
    let pu = this.room.getUsersPublic()[guid];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      var clrurl = target.private.sanitize ? sanitize(color) : color;
      target.public.color = "empty";
      target.public.color_cross = clrurl;
      this.room.updateUser(target);
    }
  },
  colorcustom: function(hue, saturation) {
    if (hue != null && saturation != null) {
      this.public.hue = hue;
      this.public.saturation = saturation;
      this.socket.emit("setColor", `${hue} ${saturation}`)
    }
    this.room.updateUser(this);
  },
  colorcustom2: function(hue, saturation) {
    if (hue != null && saturation != null) {
      this.public.hue = hue;
      this.public.saturation = saturation;
    }
    this.room.updateUser(this);
  },
  pope: function() {
    if (this.private.runlevel === 3 || !this.room.isPublic) {
      // removing this will cause chaos
      this.public.color = "pope";
      this.room.updateUser(this);
    } else {
      this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!");
    }
  },
  inverted: function() {
    this.public.color = "rainbow";
    this.room.updateUser(this);
  },
  freeadmin: function() {
    this.socket.emit("alert", "You got robot danced!");
    this.room.emit("video", {
      guid: this.guid,
      vid: "https://cdn.discordapp.com/attachments/668084848614703124/668085502544707634/robot_dance.mp4",
    });
  },
  program: function() {
    this.public.color = "program";
    this.room.updateUser(this);
  },
  con: function() {
    this.public.color = "glitch";
    this.room.updateUser(this);
  },
  aux: function() {
    this.public.color = "glitchy";
    this.room.updateUser(this);
  },
  nul: function() {
    this.public.color = "buggiest";
    this.room.updateUser(this);
  },
  wtf: function() {
    var wtf = [
      "i cut a hole in my computer so i can fuck it",
      "i hate minorities",
      "i said /godmode password and it didnt work",
      "i like to imagine i have sex with my little pony characters",
      "ok yall are grounded grounded grounded grounded grounded grounded grounded grounded grounded for 64390863098630985 years go to ur room",
      "i like to eat dog crap off the ground",
      "i can use inspect element to change your name so i can bully you",
      "i can ban you, my dad is seamus",
      "why do woman reject me, i know i masturbate in public and dont shower but still",
      "put your dick in my nose and lets have nasal sex",
      "my cock is 6 ft so ladies please suck it",
      "I just paid 1000 dollars for damn fucking stand cause I love Apple products so much",
      "I am Andrej Akan from Collab VM, I am a forkie who loves to destroy Windows with regedit and claim that I live in Pakistan although I actulally live in Croatia.",
      "Hi I am vacbedlover want to show my sexual fetish by making VM to show stupid BSDM shit, catgirl shit, vacbed and install North Korean shits on VM. I juse keep evading ban on Collab VM to act like a forkie.",
      "please make pope free",
      "whats that color",
      "i listen to baby from justin bieber",
      "i watch numberblocks",
      "Fune: BANZI.LEL BEST SERVA!",
      "i watch doodland and now people are calling me a doodfag",
      "i watch bfdi and now people are calling me a objectfag",
      "i post klasky csupo effects and now people are calling me a logofag",
      "i inflate people, and body inflation is my fetish.",
      "i installed BonziBUDDY on my pc and now i have a virus",
      "i deleted system32",
      "i flood servers, and that makes me cool.",
      "i still use the wii u&trade;",
      "i used homebrew on my nintendo switch and i got banned",
      "i bricked my wii",
      "muda muda muda muda!",
      'i am going to post inflation videos because, remember: "I inflate people and inflation is my fetish."',
      "i copy other people's usernames",
      "i use collaborative virtual machine to install malware",
      "i use microsoft agent scripting helper for fighting videos against innocent people that did nothing wrong by just friendly commenting",
      "i use microsoft agent scripting helper for gofag videos",
      "i use hotswap for my xbox 360",
      "i boycotted left 4 dead 2 and then eventually bought the game",
      "CAN U PLZ UNBAN ME PLZ PLZ PLZ PLZ PLZ PLZ PLZ PLZ",
      "I made The Rebellion of SeamusMario55&trade;",
      "I like Unbojih",
      "ItzCrazyScout, No! More like.... ekfheiophjeodxenwobifuodhndoxnwsiohbdeiowdhn2werifhwefief! He banned euhdeioqwdheiwohjixzojqsioh r23oipwshnwq! End of rant.",
      "i play left 4 dead games 24/7",
      "i am so cool. i shit on people, add reactions  that make fun of users on discord, and abuse my admin powers. i am really so cool.",
      "This product will not operate when connected to a device which makes unauthorized copies. Please refer to your instruction booklet for more information.",
      "hey medic i like doodland",
      "i installed windows xp on my real computer",
      "i am whistler and i like to say no u all the time",
      "i like to give my viewers anxiety",
      "how to make a bonziworld server?",
      "shock, blood loss, infection; oh ho ho ho ho, i love stabbing. i feel tres bon!",
      "prego.",
      "oh you're approaching me!",
      "MUTED! HEY EVERYONE LOOK AT ME I SAY MUTED IN ALL CAPS WHEN I MUTE SOMEONE LMAO",
      "i like loliest huhytre",
      "can you boost my server? no? you're mean! >:(",
      "no u",
      "OH OH OH OH OH OH! JOESPH JUDGE! HOW DARE YOU SHUT DOWN BONZIWORLD?! THATS It! YOU'RE GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED FOR 239805479837389274328943729832749382743298 YEARS!",
      "numberblocks is my fetish",
      "i post random gummibar videos on bonziworld",
      "i support meatballmars",
      "PLEASE GIVE THIS VIDEO LIKES!!!!! I CANNOT TAKE IT ANYMORE!",
      "I WILL MAKE A BAD VIDEO OUT OF YOU! GRRRRRRRRRRRR!",
      "Muted",
      "You were the one who started the drama most of the time-",
      "i keep watching doodland like forever now",
      "i mined diamonds with a wooden pickaxe",
      "i kept asking for admin and now i got muted",
      "I FAP TO FEMMEPYRO NO JOKE",
      "i am not kid",
      "i am a gamer girl yes not man no im not man i am gamer girl so give me money and ill giv you my adress <3",
    ];
    this.room.emit("talk", {
      text: wtf[Math.floor(Math.random() * wtf.length)],
      guid: this.guid,
    });
  },
  knowledge: function() {
    var randomstuff = [
      "Losky will be forgotten Soon.",
      "We don't like children invading our communities.",
      'Kiddies are type of users who use Grounded threats, say "Muted" after muting someone, raging in all caps, use the word "Kiko" but we don\'t know what it means, and post cringy videos. We ban them for a good reason. They also break rules because, as they say, it "ruins" the bonziworld site itself.',
    ];
    this.room.emit("talk", {
      text: randomstuff[Math.floor(Math.random() * randomstuff.length)],
      guid: this.guid,
    });
  },
  onute: function() {
    this.room.emit("rant");
  },
  "2018": function() {
    this.room.emit("talk", {
      text: `This generation sucks! Adolescents are filled with pornographic obsessions. Since 2018, i hate people like them nowadays. They think they're so funny with their 'funny' hentai profile pictures, and pictures like sonic using a hentai face. It's disgusting, I hate it.`,
      guid: this.guid,
    });
  },
  "sing": function() {
    this.room.emit("talk", {
      text: `\chr="monotone"\\spd=60\\pit=120\Dai \pit=100\zee, \pit=80\Dai \pit=60\zee. \spd=120\\pit=68\Give \pit=74\me \pit=80\your \pit=68\an, \pit=80\ser \pit=60\true. \spd=50\\pit=92\I'm \pit=120\half\pit=100\cray \pit=80\zee, \spd=115\\pit=68\All \pit=74\for \pit=80\the \pit=80\love \pit=100\of \pit=92\you. \spd=80\\pit=100\It \pit=112\won't \pit=110\be \pit=92\a \pit=120\sty-\pit=100\lish \pit=92\mare\pit=80\rege. \spd=100\\pit=92\I \pit=100\can't \pit=80\a \pit=68\ford, \pit=80\a \pit=68\care- \pit=60\ridge. \spd=100\\pit=60\But \pit=80\you'll \pit=100\look \pit=92\sweet, \spd=90\\pit=60\Up \pit=80\on \pit=100\the \pit=92\seat. \spd=100\\pit=100\Of \pit=112\a \pit=120\by \pit=100\sic \pit=80\cull \pit=92\built, \pit=60\for \pit=80\two.`,
      guid: this.guid,
    });
  },
  behh: function() {
    this.room.emit("talk", {
      text: `Behh is the WORST word! It’s horrendous and ugly. I hate it. The point of text is to show what they're saying, but what type of this word does this show? Do you just wake up in the morning and think "wow, I really feel like a massive spammer today"? It's useless. I hate it. It just provokes a deep rooted anger within me whenever I see it. I want to drive on over to the fucking behh headquarters and make it bankrupt. If this was in the bonziworld videos I'd go apeshit like crazy. People just comment "behh" as if it's funny. It's not. Behh deserves to die. He deserves to have his disgusting "!behhh" copy smashed in with a hammer. Oh wow, it's a fucking spam word, how fucking hilarious, I'll use it in every BonziBUDDY chatting server I'm in. NO. STOP IT. It deserves to burn in hell. Why is it so goddamn spammy? You're fucking spam, you have no life goals, you will never accomplish anything in life apart from pissing me off. When you die noone will mourn. I hope you die`,
      guid: this.guid,
    });
  },
  pope2: function() {
    if (this.private.runlevel === 3 || !this.room.isPublic) {
      // removing this will cause chaos, shut up 2020 me
      this.public.color = "peedy_pope";
      this.room.updateUser(this);
    } else {
      this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!");
    }
  },
  pope3: function() {
    if (this.private.runlevel === 3 || !this.room.isPublic) {
      // removing this will cause chaos, shut up 2020 me
      this.public.color = "clippypope";
      this.room.updateUser(this);
    } else {
      this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!");
    }
  },
  pope4: function() {
    if (this.private.runlevel === 3 || !this.room.isPublic) {
      // removing this will cause chaos, shut up 2020 me
      this.public.color = "dogpope";
      this.room.updateUser(this);
    } else {
      this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!");
    }
  },

  god: function() {
    if (this.private.runlevel === 3 || !this.room.isPublic) {
      // removing this will cause chaos, shut up 2020 me
      this.public.color = "god";
      this.room.updateUser(this);
    } else {
      this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!");
    }
  },
  peedy: function() {
    this.public.color = "peedy";
    this.room.updateUser(this);
  },
  clippy: function() {
    this.public.color = "clippy";
    this.room.updateUser(this);
  },
  rover: function() {
    this.public.color = "rover";
    this.room.updateUser(this);
  },
  slap: function() {
    this.room.emit("slap", {
      guid: this.guid,
    });
  },
  present: function() {
    this.room.emit("present", {
      guid: this.guid,
    });
  },
  asshole: function() {
    this.room.emit("asshole", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });

    this.room.emit("runEvents", {
      id: this.guid,
      events: [{ type: "text", text: "Hey,  " + sanitize(Utils.argsString(arguments)) + "!" }, { type: "text", text: "You're a fucking asshole!" }, { type: "anim", anim: "grin_fwd", ticks: 25 }, { type: "idle" }],
      text: "Hey, " + sanitize(Utils.argsString(arguments)) + "! You're a fucking asshole!"
    });
  },
  update: function() {
    this.socket.emit("alert", { title: "See Updates", msg: "New minor update - /manchild is deprecated because it is old, and the webp file doesnt work anymore. -itzdonutscout", button: "OK" });
  },
  beggar: function() {
    this.room.emit("beggar", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  kiddie: function() {
    this.room.emit("kiddie", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  gofag: function() {
    this.room.emit("gofag", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  logofag: function() {
    this.room.emit("logofag", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  forcer: function() {
    this.room.emit("forcer", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  welcome: function() {
    this.room.emit("welcome", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  owo: function() {
    this.room.emit("owo", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });

    this.room.emit("runEvents", {
      id: this.guid,
      events: [
        { type: "text", text: "*notices " + sanitize(Utils.argsString(arguments)) + "'s BonziBulge&trade;*", say: "notices " + sanitize(Utils.argsString(arguments)) + "s bonzibulge" },
        { type: "text", text: "owo, wat dis?", say: "oh woah, what this?" },
      ],
      text: "notices " + sanitize(Utils.argsString(arguments)) + "'s bonzibulge: oh woah, what this?",
    });
  },
  uwu: function() {
    this.room.emit("uwu", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  blackhat: function() {
    this.room.emit("blackhat", {
      guid: this.guid,
    });
  },
  sing: function() {
    this.room.emit("sing", {
      guid: this.guid,
    });
  },
  triggered: "passthrough",
  bees: "passthrough",
  vaporwave: function() {
    this.socket.emit("vaporwave");
    this.room.emit("youtube", {
      guid: this.guid,
      vid: "aQkPcPqTq4M",
    });
  },
  mom: function() {
    this.room.emit("youtube", {
      guid: this.guid,
      vid: "Ay95gZr0Bm8",
    });
  },
  jumpscare: function() {
    this.room.emit("jumpscare");
  },
  acid: function() {
    this.socket.emit("acid");
  },
  vaporwave2: function() {
    this.socket.emit("vaporwave");
    this.room.emit("youtube", {
      guid: this.guid,
      vid: "m0zPkt5BZ9I",
    });
  },
  unvaporwave: function() {
    this.socket.emit("unvaporwave");
  },
  name: function() {
    let argsString = Utils.argsString(arguments);
    if (argsString.length > this.room.prefs.name_limit) return;
    if (argsString.includes("{COLOR}")) {
      argsString = this.public.color;
    }

    if (argsString.includes("{NAME}")) {
      return;
    }
    if (argsString.includes("Geri")) {
      argsString = "Gayeri";
    }
    if (!Ban.isIn(this.getIp())) {
      if (argsString.includes("PB123Gaming")) {
        argsString = "impersonator";
      }
      if (argsString.includes("PB123G")) {
        argsString = "impersonator";
      }
      if (argsString.includes("javascript h8ter")) {
        argsString = "impersonator";
      }
      if (argsString.includes("UNMUTE ME NOW!")) {
        argsString = "kiddie";
      }
      if (argsString.includes("Sam Workman")) {
        argsString = "impersonator";
      }
      if (argsString.includes("Olaf Kowalski")) {
        argsString = "impersonator";
      }
    }
    let name = argsString || this.room.prefs.defaultName;
    this.public.name = this.private.sanitize ? sanitize(name) : name;
    if (!/^[~`!@#$%^&*()_+=\w[\]\\{}|;':",.\//<>?\s\w&.\-]*$/i.test(this.public.name)) {
      this.public.name = "Anonymous";
    }
    if (
      this.public.name.match(/Seamus/gi) ||
      this.public.name.match(/S.eamus/gi) ||
      this.public.name.match(/S.e.amus/gi) ||
      this.public.name.match(/S.e.a.mus/gi) ||
      this.public.name.match(/S.e.a.m.us/gi) ||
      this.public.name.match(/S.e.a.m.u.s/gi) ||
      this.public.name.match(/Seamu.s/gi) ||
      this.public.name.match(/Seam.u.s/gi) ||
      this.public.name.match(/Sea.m.u.s/gi) ||
      this.public.name.match(/Se.a.m.u.s/gi)
    ) {
      this.public.name = "Semen";
    } else if (this.public.name.match(/Jakey/gi)) {
      // no more impersonators???
      this.public.name = "Retard";
    } else if (this.public.name.match(/touch/gi)) {
      // you sick fucks
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/to uch/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/t ouch/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/t ou ch/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/t ouc h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/touc h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/tou c h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/to u c h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/t ouc h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/to uc h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/Crem/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/Creem/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    }
    this.room.updateUser(this);
  },
  group: function(...text) {
    text = text.join(" ");
    if (text) {
      this.private.group = text + "";
      this.socket.emit("alert", "joined the group");
      return;
    }
    this.socket.emit("alert", "enter a group id");
  },
  dm: function(...text) {
    text = text.join(" ");
    text = sanitize(text, settingsSantize);
    if (!this.private.group) {
      this.socket.emit("alert", "join a group first");
      return;
    }
    this.room.users.map((n) => {
      if (this.private.group === n.private.group) {
        n.socket.emit("talk", {
          guid: this.guid,
          text: "<small><i>Only your group can see this.</i></small><br>" + text,
          say: text,
        });
      }
    });
  },

  dm2: function(data) {

    if (typeof data != "object") return;
    let pu = this.room.getUsersPublic()[data.target];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data.target) {
          target = n;
        }
      });
      data.text = sanitize(data.text, settingsSantize);
      target.socket.emit("talk", {
        guid: this.guid,
        text: "<small>Only you can see this.</small><br>" + data.text,
        say: data.text,
      });
      this.socket.emit("talk", {
        guid: this.guid,
        text: "<small>Only " + pu.name + " can see this.</small><br>" + data.text,
        say: data.text,
      });
    } else {
      this.socket.emit("alert", "The user you are trying to dm left. Get dunked on nerd");
    }
  },
  pitch: function(pitch) {
    pitch = parseInt(pitch);

    if (isNaN(pitch)) return;

    this.public.pitch = Math.max(Math.min(parseInt(pitch), this.room.prefs.pitch.max), this.room.prefs.pitch.min);

    this.room.updateUser(this);
  },
  sapi5pitch: function(pitch) {
    pitch = parseInt(pitch);

    if (isNaN(pitch)) return;

    this.public.sapi5pitch = parseInt(pitch);

    this.room.updateUser(this);
  },
  tts: function(voice) {
    voice = parseInt(voice);

    if (isNaN(voice)) return;

    this.public.voice = voice;

    this.room.updateUser(this);
  },
  amplitude: function(amplitude) {
    amplitude = parseInt(amplitude);

    if (isNaN(amplitude)) return;

    this.public.amplitude = amplitude;

    this.room.updateUser(this);
  },
  limit: function(hue) {
    hue = parseInt(hue);

    if (isNaN(hue)) {
      this.socket.emit("alert", "Ur drunk lel");
      return;
    }

    this.prefs.room_max = hue;

    this.room.emit("alert", "The max limit of this room is now " + this.prefs.room_max);
  },
  speed: function(speed) {
    speed = parseInt(speed);

    if (isNaN(speed)) return;

    this.public.speed = Math.max(Math.min(parseInt(speed), this.room.prefs.speed.max), this.room.prefs.speed.min);

    this.room.updateUser(this);
  },
};

var cool;
var connectLogCool;

function convertToString(arg) {
  return "" + arg;
}

class User {
  constructor(socket) {
    this.blockedUsers = {};
    this.guid = Utils.guidGen();
    this.loginGuid = Utils.guidGen() + Utils.guidGen() + Utils.guidGen();
    this.socket = socket;
    this.connectLogCool = false;
    if (this.getAgent().match(/Windows NT 6.3/gi) || this.getAgent().match(/Android 9/gi)) {
      this.socket.emit("ban", { //fake ban
        reason: "Your OS is blacklisted because DanielTR52 uses it to annoy others.",
      });
      return;
    }
    var _this = this;
    this.guidUpdater = setInterval(function() {
      _this.socket.emit("sendguid", _this.guid);
    }, 1000);
    this.guidUpdater2 = setInterval(function() {
      _this.socket.emit("sendguid2", _this.loginGuid);
    }, 1000);
    // Handle ban
    if (Ban.isBanned(this.getIp())) {
      Ban.handleBan(this.socket);
    }
    this.private = {
      login: false,
      sanitize: true,
      runlevel: 0,
    };
    if (Ban.isIn(this.getIp())) {
      this.public = {
        color: settings.bonziColors[Math.floor(Math.random() * settings.bonziColors.length)],
        color_cross: 'none',
        hue: 0,
        saturation: 100,
      };
      this.socket.emit("admin");
    } else {
      this.public = {
        color: settings.bonziColors[Math.floor(Math.random() * settings.bonziColors.length)],
        color_cross: 'none',
        hue: 0,
        saturation: 100,
      };
    }

    if (!connectLogCool) {
      log.access.log("info", "connect", {
        guid: this.guid,
        ip: this.getIp(),
        userAgent: this.getAgent(),
      });
      connectLogCool = true;
      setTimeout(function() {
        connectLogCool = false;
      }, 1000);
    }

    // honestly nobody wants floods. i had to go harder on the exploit, by making the login function only work if it has the guid. it was worth.
    // i'm tired of bozoworlders ruining the fun for everyone, so i just had to do this. fuck you danieltr :)
    if (this.getAgent() == "node-XMLHttpRequest") {

      this.socket.on("chatgpt_login", this.login.bind(this));

    }
    this.socket.on("sendTokenToServer", this.tokenFetch.bind(this));
  }

  async tokenFetch(data) {
    if (typeof data != "object") return; // Crash fix (issue #9)
    if (this.private.login) return;
    if (data.token == null) return;
    if (typeof data.token != "string") return;

    if (typeof data.token === "string" && data.token != null) {
      // Hitting POST request to the URL, Google will
      // respond with success or error scenario.
      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env['RECAPTCHA_SECRET']}&response=${data.token}`;

      // Making POST request to verify captcha
      fetch(url, {
        method: "post",
      })
        .then((response) => response.json())
        .then((google_response) => {

          // google_response is the object return by
          // google as a response
          if (google_response.success == true) {
            //   if captcha is verified
            this.socket.on(this.guid + "_login_" + this.loginGuid, this.login.bind(this));
            return true;
          } else {
            // if captcha is not verified
            return false;
          }
        })
        .catch((error) => {
          // Some error while verify captcha
          return console.log(error);
        });
    }
  }

  getIp() {
    return this.socket.handshake.headers["cf-connecting-ip"] || this.socket.request.connection.remoteAddress;
  }

  getAgent() {
    return this.socket.handshake.headers["user-agent"];
  }

  getPort() {
    return this.socket.handshake.address.port;
  }

  login(data) {
    if (typeof data != "object") return; // Crash fix (issue #9)

    if (this.private.login) return;

    if (typeof data.name != "string" || typeof data.room != "string") return;

    if (
      data.name.match(/lol/gi) ||
      data.name.match(/l0l/gi) ||
      data.name.match(/l ol/gi) ||
      data.name.match(/lo l/gi) ||
      data.name.match(/l o l/gi) ||
      data.name.match(/l 0l/gi) ||
      data.name.match(/l0 l/gi) ||
      data.name.match(/l 0 l/gi)
    ) {
      this.socket.emit("loginFail", {
        reason: "nameMal",
      });
      return;
    }

    let rid = data.room;

    // Check if room was explicitly specified
    var roomSpecified = true;

    // If not, set room to public
    if (typeof rid == "undefined" || rid === "") {
      rid = roomsPublic[Math.max(roomsPublic.length - 1, 0)];
      roomSpecified = false;
    }
    if (rid == "pope") {
      this.public = {
        color: settings.bonziColors2[Math.floor(Math.random() * settings.bonziColors2.length)],
        hue: 0,
        saturation: 100,
      };
    }
    log.info.log("debug", "roomSpecified", {
      guid: this.guid,
      roomSpecified: roomSpecified,
    });

    // If private room
    if (roomSpecified) {
      if (sanitize(rid) != rid) {
        this.socket.emit("loginFail", {
          reason: "nameMal",
        });
        return;
      }

      // If room does not yet exist
      if (typeof rooms[rid] == "undefined" && rid != "default" && rid != "bonzi_tv") {
        // Clone default settings
        var tmpPrefs = JSON.parse(JSON.stringify(settings.prefs.private));
        // Set owner
        tmpPrefs.owner = this.guid;
        if (typeof rooms[rid] === "undefined") {
          newRoom(rid, tmpPrefs);
        }
      }
      if (typeof rooms[rid] == "undefined" && (rid == "default" || rid == "bonzi_tv")) {
        // Clone default settings
        var tmpPrefs = JSON.parse(JSON.stringify(settings.prefs.public));
        // Set owner
        roomsPublic.push(rid);
        if (typeof rooms[rid] === "undefined") {
          newRoom(rid, tmpPrefs);
        }
      }
      // If room is full, fail login
      else if (rooms[rid].isFull()) {
        log.info.log("debug", "loginFail", {
          guid: this.guid,
          reason: "full",
        });
        return this.socket.emit("loginFail", {
          reason: "full",
        });
      }
      // If public room
    } else {
      // If room does not exist or is full, create new room
      if (typeof rooms[rid] == "undefined" || rooms[rid].isFull()) {
        rid = "default";
        if (typeof rooms[rid] === "undefined") {
          roomsPublic.push(rid);
          // Create room

          newRoom(rid, settings.prefs.public);
        }
      }
    }

    this.room = rooms[rid];

    // Check name
    this.public.name = sanitize(data.name) || this.room.prefs.defaultName;
    if (
      this.public.name.match(/Seamus/gi) ||
      this.public.name.match(/S.eamus/gi) ||
      this.public.name.match(/S.e.amus/gi) ||
      this.public.name.match(/S.e.a.mus/gi) ||
      this.public.name.match(/S.e.a.m.us/gi) ||
      this.public.name.match(/S.e.a.m.u.s/gi) ||
      this.public.name.match(/Seamu.s/gi) ||
      this.public.name.match(/Seam.u.s/gi) ||
      this.public.name.match(/Sea.m.u.s/gi) ||
      this.public.name.match(/Se.a.m.u.s/gi)
    ) {
      this.public.name = this.public.name.replace("Seamus", "Semen");
    }
    if (this.public.name.length > this.room.prefs.name_limit)
      return this.socket.emit("loginFail", {
        reason: "nameLength",
      });

    if (this.room.prefs.speed.default == "random") this.public.speed = Utils.randomRangeInt(this.room.prefs.speed.min, this.room.prefs.speed.max);
    else this.public.speed = this.room.prefs.speed.default;

    if (this.room.prefs.pitch.default == "random") this.public.pitch = Utils.randomRangeInt(this.room.prefs.pitch.min, this.room.prefs.pitch.max);
    else this.public.pitch = this.room.prefs.pitch.default;
    if (this.room.prefs.sapi5pitch.default == "random") this.public.sapi5pitch = Utils.randomRangeInt(this.room.prefs.sapi5pitch.min, this.room.prefs.sapi5pitch.max);
    else this.public.sapi5pitch = this.room.prefs.sapi5pitch.default;

    if (!/^[~`!@#$%^&*()_+=\w[\]\\{}|;':",.\//<>?\s\w&.\-]*$/i.test(this.public.name)) {
      this.public.name = "Anonymous";
    }

    if (data.name == "Geri") {
      data.name = "Gayeri";
    } else if (this.public.name.match(/Jakey/gi)) {
      // no more impersonators???
      this.public.name = "Retard";
    } else if (this.public.name.match(/touch/gi)) {
      // you sick fucks
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/to uch/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/t ouch/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/t ou ch/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/t ouc h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/touc h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/tou c h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/to u c h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/t ouc h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/to uc h/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/Crem/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    } else if (this.public.name.match(/Creem/gi)) {
      this.public.name = "I'm a BozoWORLDer";
    }
    if (data.name.includes("flood")) {
      this.socket.emit("loginFail", {
        reason: "nameMal",
      });
      return;
    }
    if (data.name.includes("raid")) {
      this.socket.emit("loginFail", {
        reason: "nameMal",
      });
      return;
    }
    // Join room
    this.room.join(this);

    this.private.login = true;
    this.socket.removeAllListeners(this.guid);

    if (!connectLogCool) {
      log.info.log("info", "login", {
        guid: this.guid,
        name: data.name,
        room_id: rid,
        ip: this.getIp(),
      });
      connectLogCool = true;
      setTimeout(function() {
        connectLogCool = false;
      }, 1000);
    }

    // Send all user info
    this.socket.emit("updateAll", {
      usersPublic: this.room.getUsersPublic(),
    });

    // Send room info
    if (rid == "bonzi_tv" || rid == "pope") {
      this.socket.emit("room", {
        room: rid,
        vid: this.room.vid,
        curtime: this.room.curtime,
        isOwner: this.room.prefs.owner == this.guid,
        isPublic: true,
      });
    } else {
      this.socket.emit("room", {
        room: rid,
        vid: this.room.vid,
        curtime: this.room.curtime,
        isOwner: this.room.prefs.owner == this.guid,
        isPublic: roomsPublic.indexOf(rid) != -1,
      });
    }
    if (Ban.isIn(this.getIp())) {
      this.private.runlevel = 3;
    }
    this.socket.on("talk", this.talk.bind(this));
    this.socket.on("updatebonzitv", this.updatebonzitv.bind(this));
    this.socket.on("setbonzitvtime", this.setbonzitvtime.bind(this));
    this.socket.on("command", this.command.bind(this));
    this.socket.on("disconnect", this.disconnect.bind(this));
    if (Ban.isIn(this.getIp())) {
      this.socket.emit("admin");
    }
  }

  setbonzitvtime(data) {
    this.room.curtime = data.curtime;
    /*
        log.info.log("info", "updateTime", {
          bonziTvTime: data.curtime,
        });
    */
  }
  async updatebonzitv() {
    if (!bonziTvCool) {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      var bonziTvIdent = videoIdsCommercials;
      var ident = Math.floor(Math.random() * bonziTvIdent.length);
      const ytdl = require("ytdl-core");
      if (getRandomInt(1, 5) == 1) {
        if (!bonziTvCommercialMode) {

          var num = Math.floor(Math.random() * videoIdsCommercials.length);
          var vid = videoIdsCommercials[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
          this.room.vid = vid;

          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIdsCommercials[Math.floor(Math.random() * videoIdsCommercials.length)].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
            identId: videoIdsCommercials[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          });
          setTimeout(function() {
            bonziTvCommercialMode = false;
          }, 120000)
        }
      }
      /*var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");*/

      if (bonziTvCommercialMode) {

        var num = Math.floor(Math.random() * videoIdsCommercials.length);
        var vid = videoIdsCommercials[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
        this.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIdsCommercials[Math.floor(Math.random() * videoIdsCommercials.length)].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          identId: videoIdsCommercials[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
        });
      } else if (getRandomInt(1, 3) == 1) {
        if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25)) {
          var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
          var vid = videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
          this.room.vid = vid;

          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
            identId: videoIds4PM2430PM[Math.floor(Math.random() * videoIds4PM2430PM.length)].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          });
        } else if (hours == 17) {
          var num = Math.floor(Math.random() * videoIds5PM.length);
          var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
            identId: videoIds5PM[Math.floor(Math.random() * videoIds5PM.length)].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          });
        } else if (hours == 18 && minutes <= 30) {
          var num = Math.floor(Math.random() * videoIds7PM.length);
          var vid = videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
            identId: videoIds7PM[Math.floor(Math.random() * videoIds7PM.length)].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          });
        } else if (hours == 19 && hours <= 22) {
          var num = Math.floor(Math.random() * videoIds7PM.length);
          var vid = videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds7PM[Math.floor(Math.random() * videoIds7PM.length)].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
            identId: videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          });
        } else {
          var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
          var vid = videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
            identId: videoIds25MinutesofMSAgent[Math.floor(Math.random() * videoIds25MinutesofMSAgent.length)].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
          });
        }
      } else {
        if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25) || (hours == 13 && minutes <= 20)) {
          var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
          var vid = videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });
          this.room.emit("replaceTVWithURL", {
            id: videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 17) {
          var num = Math.floor(Math.random() * videoIds5PM.length);
          var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
          this.room.vid = vid;
          await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 18 && minutes <= 20) {
          var num = Math.floor(Math.random() * videoIds7PM.length);
          var vid = videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
          this.room.vid = vid;
          await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 19 && minutes <= 22) {
          var num = Math.floor(Math.random() * videoIds7PM.length);
          var vid = videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
          this.room.vid = vid;
          await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds7PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else {
          var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
          var vid = videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "");
          this.room.vid = vid;
          await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        }
      }
      bonziTvCool = true;
      setTimeout(function() {
        bonziTvCool = false;
      }, 20000);
    }
  }

  talk(data) {
    if (Ban.isMuted(this.getIp())) return;
    if (this.cantTalkAnymore) return;
    let name = this.public.name;
    var _this = this;
    if (typeof data != "object" || typeof data.text != "string") {
      // Crash fix (issue #9)
      data = {
        text: "HEY EVERYONE LOOK AT ME I'M TRYING TO SCREW WITH THE SERVER LMAO",
      };
    }
    if (!connectLogCool) {
      log.info.log("info", "talk", {
        guid: this.guid,
        name: data.name,
        ip: this.getIp(),
        text: convertToString(data.text),
      });
      connectLogCool = true;
      setTimeout(function() {
        connectLogCool = false;
      }, 1000);
    }

    if (
      data.text.match(/lol/gi) ||
      data.text.match(/l0l/gi) ||
      data.text.match(/l ol/gi) ||
      data.text.match(/lo l/gi) ||
      data.text.match(/l o l/gi) ||
      data.text.match(/l 0l/gi) ||
      data.text.match(/l0 l/gi) ||
      data.text.match(/l 0 l/gi) ||
      data.text.match(/groom/gi) ||
      data.text.match(/groo m/gi) ||
      data.text.match(/gro om/gi) ||
      data.text.match(/gr oom/gi) ||
      data.text.match(/gr 0om/gi) ||
      data.text.match(/g r oom/gi) ||
      data.text.match(/g r 0om/gi) ||
      data.text.match(/g r oo m/gi) ||
      data.text.match(/g r o o m/gi) ||
      data.text.match(/townsh/gi) ||
      data.text.match(/towns h/gi) ||
      data.text.match(/tow ns h/gi) ||
      data.text.match(/tow n s h/gi) ||
      data.text.match(/to wn s h/gi) ||
      data.text.match(/to w n s h/gi) ||
      data.text.match(/t o w n s h/gi)
    ) {
      this.disconnect();
      return;
    }
    if (typeof data.text == "undefined") return;
    let text;
    if (this.room.rid.startsWith("js-")) {
      text = convertToString(data.text);
    } else {
      text = this.private.sanitize ? sanitize(convertToString(data.text), settingsSantize) : convertToString(data.text);
    }
    if (text.match(/\/\/:/gi) && text.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    if (text.match(/\/\/:/gi) && text.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        frame: "bonziacid.html",
      });
      return;
    }
    if (text.match(/Seamus/gi)) {
      text = text.replace(/Seamus/gi, "Semen");
    } else if (text.match(/dickrider/gi) || text.match(/losky/gi)) {
      text = "Hey everyone I just hope you have a very good day and not get involved in drama ok thanks bye";
      this.cantTalkAnymore = true;
    }

    if (text.match(/.lol/gi) || text.match(/,lol/gi) || text.match(/lol is/gi) || text.match(/bonzi./gi) || text.match(/bonzi,/gi) || text.match(/crem/gi) || text.match(/72.23/gi) || text.match(/72. 23/gi) || text.match(/72 .23/gi) || text.match(/72 . 23/gi) || text.match(/mong/gi) || text.match(/hitler/gi) || text.match(/hi itler/gi) || text.match(/hitl/gi) || text.match(/h itl/gi) || text.match(/hit l/gi) || text.match(/adolf/gi) || text.match(/hi tl/gi) || text.match(/hi itl/gi) || text.match(/hit ler/gi) || text.match(/hit lurr/gi) || text.match(/kkk/gi) || text.match(/kk k/gi) || text.match(/nig/gi) || text.match(/nih/gi) || text.match(/nik/gi) || text.match(/nij/gi) || text.match(/nihg/gi) || text.match(/nie/gi) || text.match(/nieg/gi) || text.match(/k k k/gi) || text.match(/kaykaykay/gi) || text.match(/kkaykay/gi) || text.match(/gas the/gi) || text.match(/gahs/gi) || text.match(/ga s/gi) || text.match(/gah s/gi) || text.match(/kkkay/gi) || text.match(/kay kaykay/gi) || text.match(/kay kay kay/gi) || text.match(/kaykay kay/gi) || text.match(/heil/gi) ||
      text.match(/fone/gi) ||
      text.match(/fune/gi) ||
      text.match(/f une/gi) ||
      text.match(/fu ne/gi) ||
      text.match(/f u ne/gi) ||
      text.match(/fu n e/gi) ||
      text.match(/negger/gi) ||
      text.match(/nugger/gi) ||
      text.match(/nazi/gi) ||
      text.match(/pedo/gi) || // moon man
      text.match(/hail/gi)) {  // excuse me for my bad regex code
      text = "I'm a BozoWORLDer";
    }
    if (!/^[~`!@#$%^&*()_+=\w[\]\\{}|;':",.\//<>?\s\w&.\-]*$/i.test(text)) {
      if (this.getAgent() != "node-XMLHttpRequest") {
        text = "You can only have english numeric, special and alphabetic characters.  <br><small>Only you can see this.</small>";
        this.socket.emit("talk", {
          guid: this.guid,
          text: text,
          name: name,
          say: "-e",
        });
        return;
      }
    }
    if (text.length <= this.room.prefs.char_limit && text.length > 0) {
      if (!_this.connectLogCool) {
        this.room.emit("talk", {
          guid: this.guid,
          text: text,
          name: name,
          say: sanitize(text, { allowedTags: [] }),
        });
        this.room.emit("runEvents", {
          id: this.guid,
          events: [{ type: "text", text: text, say: sanitize(text, { allowedTags: [] }) }],
          text: text
        });
        _this.connectLogCool = true;
        setTimeout(function() {
          _this.connectLogCool = false;
        }, 1000);
      }

    }
  }

  command(data) {
    if (typeof data != "object") return; // Crash fix (issue #9)
    if (Ban.isMuted(this.getIp())) return;
    let name = this.public.name;
    var command;
    var args;
    var _this = this;
    try {
      var list = data.list;
      command = list[0].toLowerCase();
      args = list.slice(1);

      if (args.length <= this.room.prefs.command_limit && command.length <= this.room.prefs.command_limit) {
        if (!command.match(/move/gi)) {

          log.info.log('info', command, {
            guid: this.guid,
            args: args
          });

        }

        if (this.private.runlevel >= (this.room.prefs.runlevel[command] || 0)) {
          let commandFunc = userCommands[command];
          if (commandFunc == "passthrough") {
            if (!_this.connectLogCool || command.match(/move/gi)) {
              this.room.emit(command, {
                guid: this.guid,
                name: name,
              });
              _this.connectLogCool = true;
              setTimeout(function() {
                _this.connectLogCool = false;
              }, 5000);
            }
          } else {
            if (!_this.connectLogCool || command.match(/move/gi) || command.match(/colorcustom/gi)) {
              commandFunc.apply(this, args);
              _this.connectLogCool = true;
              setTimeout(function() {
                _this.connectLogCool = false;
              }, 5000);
            }
          }
        } else {
          this.socket.emit("info", {
            reason: "runlevel",
          });
          this.socket.emit("alert", { title: "kiddie confirmed?", msg: "You do not have permission to this command. Go rape a dog if you want admin.", button: "So I am the kiddie???" });
        }
      }
    } catch (e) {
      log.info.log("info", "commandFail", {
        guid: this.guid,
        command: command,
        args: args,
        reason: "unknown",
        exception: console.error(e),
      });
      this.socket.emit("alert", { title: "Holy shit", msg: "You just stupidly typed the wrong command, BOZO!", button: "fine" });
      this.socket.emit("commandFail", {
        reason: "unknown",
      });
    }
  }

  disconnect() {
    let ip = "N/A";
    let port = "N/A";

    try {
      ip = this.getIp();
      port = this.getPort();
    } catch (e) {
      log.info.log("warn", "exception", {
        guid: this.guid,
        exception: e,
      });
    }

    if (!connectLogCool) {
      log.access.log("info", "disconnect", {
        guid: this.guid,
        ip: ip,
        port: port,
      });
      connectLogCool = true;
      setTimeout(function() {
        connectLogCool = false;
      }, 1000);
    }

    this.socket.broadcast.emit("leave", {
      guid: this.guid,
    });

    if (this.guidUpdater != null) {
      clearInterval(this.guidUpdater);
    }
    this.socket.removeAllListeners("talk");
    this.socket.removeAllListeners("command");
    this.socket.removeAllListeners("disconnect");

    this.room.leave(this);
  }
}


// CHAT GPT BOT

const bot_io = require('socket.io-client');
var bot_socket = bot_io('https://bonziworld.co/');

bot_socket.emit("chatgpt_login", { name: "ChatGPT", room: 'ai' })
bot_socket.on("talk", async function(data) {
  if (!data.text.match(/\u200E/i)) {

    const { ChatGPTUnofficialProxyAPI } = await import('chatgpt')

    const api = new ChatGPTUnofficialProxyAPI({
      accessToken: process.env.OPENAI_TOKEN,
      apiReverseProxyUrl: 'https://gpt.pawan.krd/backend-api/conversation'
    })

    console.log("[CHATGPT LOGS] Someone said: " + data.text);
    try {

      const res = await api.sendMessage(data.text);
      bot_socket.emit('command', { list: ["name", "ChatGPT"] });
      bot_socket.emit('command', { list: ["speed", "150"] });
      bot_socket.emit('command', { list: ["pitch", "140"] });
      console.log("[CHATGPT LOGS] I said: " + res.text);
      bot_socket.emit('talk', { text: "\u200E" + res.text });

    } catch (e) {
      bot_socket.emit('command', { list: ["name", "Uh oh... I feel woozy. Give me a moment."] });
      bot_socket.disconnect();
    }

  }
})