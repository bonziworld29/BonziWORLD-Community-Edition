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
  youtube_url + "b2OUKjLzcEc",
  youtube_url + "Uyw-bne3G2A",
  youtube_url + "gcGI1f24eyM",
  youtube_url + "K0damuN_9bQ",
  youtube_url + "5ls7g9eH7ss",
  youtube_url + "hb59QZW2SCA",
  youtube_url + "VJs_VALzi_8",
  youtube_url + "GCA5CB5uUyA"
]
var videoIds4PM2430PM = [
  youtube_url + "n_sWTHQKr-s",
  youtube_url + "FdjXC4aDNrc",
  youtube_url + "oqwjsqLvaGA",
  youtube_url + "ewQeG4bfh7o",
  youtube_url + "J1xFJDSeHxI",
  youtube_url + "AJNF04k6hDU",
  youtube_url + "EXFJ1gUqSOI",
  youtube_url + "zvB3h2IKdYU",
  youtube_url + "ihDMzzMxsFY",
  youtube_url + "JdPibO28X6g",
  youtube_url + "BpJZAKy3-EI",
  youtube_url + "y281xhixx9I",
  youtube_url + "f-1tlzLYUE0",
  youtube_url + "LBapITUr878",
  youtube_url + "R7M2RiTgEO4",
  youtube_url + "hYC5FcjhowU",
  youtube_url + "PM2cT0GYs0k",
  youtube_url + "kX-TUNMguqQ",
  youtube_url + "CJjGRbm7AP0",
  youtube_url + "nUXNQk-GpXE",
  youtube_url + "pRIdTBDo5s0",
  youtube_url + "lnUnMD8avFo",
  youtube_url + "OHtNgbbZUHc",
  youtube_url + "IWeeGlqWjTo",
  youtube_url + "B-43bJpN9p0",
  youtube_url + "ZlJUN6ld7Uw",
  youtube_url + "cepnx5OtwMg",
  youtube_url + "CyYUtJWu67g",
  youtube_url + "kVPAH1SoJOs",
  youtube_url + "CSSucrEZru0",
  youtube_url + "voX77aqxMVM",
  youtube_url + "VMenL3FtjwY",
  youtube_url + "gMWMaYqMuvU",
  youtube_url + "9CivuYkHkdw",
  youtube_url + "nWjshODENSE",
  youtube_url + "wC85p4WwT7o",
  youtube_url + "-STfCX3_Dt8",
  youtube_url + "2npJbktaXas",
  youtube_url + "mW8HT3wTjtw",
  youtube_url + "aqJxAEc8I98",
  youtube_url + "7RTuOTLqNJg",
  youtube_url + "D-mxD6R0PZk",
  youtube_url + "gkpfOwxvP5Y",
  youtube_url + "MaOJiU7ICSs",
  youtube_url + "ldoCeoPnsr4",
  youtube_url + "kRtuL6PVM3M",
  youtube_url + "BxEn1br2hhA",
  youtube_url + "E7e2NbRTv34",
  youtube_url + "0Pw-W11hzaY",
  youtube_url + "fjOraqJJfdo",
  youtube_url + "-k2lYZmcyUs",
  youtube_url + "IpDx4Fw137U",
  youtube_url + "bIy7bGgPmu8",
  youtube_url + "wGFfIulM2aw",
  youtube_url + "xv3LBB6GAh4",
  youtube_url + "SLfbsnOG3lA",
  youtube_url + "YaRNqZT1QH4",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "pOiiAdshU5Q",
  youtube_url + "WwnSgVJcGm8",
  youtube_url + "XEwg5dwLjng",
  youtube_url + "eYo8jusJkfA",
  youtube_url + "iIBI3vVcce0",
  youtube_url + "7K7gaKhkiVg",
  youtube_url + "vX5baryGnnk",
  youtube_url + "kEkmTUobm9A",
  youtube_url + "ynWOhlnFJWQ",
  youtube_url + "ofPNauMOvFU",
  youtube_url + "LP4M4TBXg58",
  youtube_url + "LP4M4TBXg58",
  youtube_url + "LP4M4TBXg58",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
];
var videoIds5PM = [
  youtube_url + "iK4BKnkW9rc",
  youtube_url + "qjqBUYQb21g",
  youtube_url + "XbI29tI5MXs",
  youtube_url + "0dnRWrsgKrU",
  youtube_url + "ohCm6YeovpQ",
  youtube_url + "HVK-KiANd_Q",
  youtube_url + "6-USBEqLicg",
  youtube_url + "QoHbvZfu1-c",
  youtube_url + "X2Q2X-7hVQw",
  youtube_url + "mR-lbatS6ts",
  youtube_url + "1wMsbj0VvVE",
  youtube_url + "Mzf_jtM8jgw",
  youtube_url + "qsATpni7B9s",
  youtube_url + "a0tSVDjQbz0",
  youtube_url + "4ES2y7bxENE",
  youtube_url + "j32-UnN6m5E",
  youtube_url + "86EkHcJsXhU",
  youtube_url + "P3Ca0X-TO1U",
  youtube_url + "UjnyCsweHOE",
  youtube_url + "G2ApsOSMX2s",
  youtube_url + "3Hssx5jy-f4",
  youtube_url + "sRih4d0Um9U",
  youtube_url + "lI-u0pJ-XEM",
  youtube_url + "tv9UIy0RCus",
  youtube_url + "wGKi7YITv84",
  youtube_url + "FQ0ZvlLi3Aw",
  youtube_url + "hlm9JW6hzu4",
  youtube_url + "W61OP5HPSU4",
  youtube_url + "PqS4Ckf01XI",
  youtube_url + "BjiWP6GdaZs",
  youtube_url + "VR6G2-BXk50",
  youtube_url + "7D6W6Dzsinw",
  youtube_url + "LWW9kyDhSGY",
  youtube_url + "s60XUkdNoNc",
  youtube_url + "PjfvbA3yaB4",
  youtube_url + "8M1fDbBTeuc",
  youtube_url + "OMtsPjcvOyA",
  youtube_url + "1n1_ocOUx4M",
  youtube_url + "8Yy_xnQTS9k",
  youtube_url + "aTYAwNeP7hw",
  youtube_url + "Cc4_lDIhhK4",
  youtube_url + "dTUrgFaXR2o",
  youtube_url + "IPQmfvcvOWI",
  youtube_url + "tHjjbHkFqVw",
  youtube_url + "UfDFvG0Px5A",
  youtube_url + "mtxjk_kIi6I",
  youtube_url + "M_U4NYPHuE8",
  youtube_url + "XmheFB3vSmM",
  youtube_url + "b9RSREv2NAE",
  youtube_url + "YcZ4vXgsGh4",
  youtube_url + "MnjMwoJpDag",
  youtube_url + "8zVTrQ54oKA",
  youtube_url + "HV7SQkbOKQQ",
  youtube_url + "urX6QcVFkHY",
  youtube_url + "Q7vthL5hIqo",
  youtube_url + "N0j6NXznknU",
  youtube_url + "u0qTJz2DUos",
  youtube_url + "UioiM5KopzU",
  youtube_url + "sDlGy1SxYGg",
  youtube_url + "dnua8QvCfB0",
  youtube_url + "FG0ydp-1mHE",
  youtube_url + "bCm-EAd_oEI",
  youtube_url + "aZ5lyqb4gUc",
  youtube_url + "2HUy60DWYek",
  youtube_url + "FEXeAlaL9cc",
  youtube_url + "ORouZmGacHk",
  youtube_url + "2v-8DArgo-Y",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "1cjfNYV-Z-U",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
  youtube_url + "0zg7ZA8UGa8",
];
var videoIds7PM = [
  youtube_url + "PT5HrjP-lPE",
  youtube_url + "1yfUfH1jF3g",
  youtube_url + "vN2BCZjZYWs",
  youtube_url + "oZF2RUJHV8c",
  youtube_url + "rNY5lwrmZ1w",
  youtube_url + "E7sn6tjcZgI",
  youtube_url + "kvsw74KWAIw",
  youtube_url + "OX3rC3ENFw0",
  youtube_url + "o3i64oR6Dv8",
  youtube_url + "Frm0LTTtgFo",
  youtube_url + "PFbYJ2-KpR8",
  youtube_url + "rVAxjlFU28o",
  youtube_url + "fIonJON2p9A",
  youtube_url + "Gc_DMKiz9LU",
  youtube_url + "bfk_pzQSfX8",
  youtube_url + "SKLlmJKfcI0",
  youtube_url + "r0W-607Atz0",
  youtube_url + "nGQ-nCwHYcs",
  youtube_url + "7hTge-5W3Cc",
  youtube_url + "fBHJFPqKIG0",
  youtube_url + "LvV7MOoSwy0",
  youtube_url + "MTyBtwmvEjE",
  youtube_url + "djMpH9D3NUQ",
  youtube_url + "3_uRhxkjdB4",
  youtube_url + "3VS4Nkzh-70",
  youtube_url + "jX28oxrdUVI",
  youtube_url + "dnBqjTmlLg8",
  youtube_url + "r_mwNcxuxwY",
  youtube_url + "xlyyu1Go4yU",
  youtube_url + "l8g0z8yZ6FU",
  youtube_url + "gMDgHPQ0YfI",
  youtube_url + "HjWbtUBKuUc",
  youtube_url + "WO2SCGfEYiE",
  youtube_url + "ur8ys2aglI4",
  youtube_url + "jmr5kAmIQGs",
  youtube_url + "3va3bdtT9LQ",
  youtube_url + "7vzfeyh-ow8",
  youtube_url + "v2t6iP4mWvA",
  youtube_url + "iwxbY-p_w0w",
  youtube_url + "pdO9uKpzaYU",
  youtube_url + "8iEXhbqami8",
  youtube_url + "T-BoDW1_9P4",
  youtube_url + "NgHygsNwTNk",
  youtube_url + "jPKuyeDb0mM",
  youtube_url + "EDsDnR2dzlw",
  youtube_url + "ljl1jBEY3_A",
  youtube_url + "jIwqlKDPq4s",
  youtube_url + "TGulB0MfxPs",
  youtube_url + "ehlrUPrvFuk",
  youtube_url + "vkUIyOm9hZk",
  youtube_url + "t2Jpe0I5pa4",
  youtube_url + "kHKJ9Mf8UxU",
  youtube_url + "zwz5yJR_aFA",
  youtube_url + "RdTJHVG_IdU",
  youtube_url + "WaXvbkjn-RA",
  youtube_url + "xe0P0rnsS1Q",
  youtube_url + "bBjk55hNjWw",
  youtube_url + "bBjk55hNjWw",
  youtube_url + "bBjk55hNjWw",
  youtube_url + "bBjk55hNjWw",
  youtube_url + "bBjk55hNjWw",
  youtube_url + "bBjk55hNjWw",
  youtube_url + "bBjk55hNjWw",
  youtube_url + "bBjk55hNjWw",
  youtube_url + "IyirV9lir8Q",
  youtube_url + "IyirV9lir8Q",
  youtube_url + "IyirV9lir8Q",
];
var videoIds25MinutesofMSAgent = [
  youtube_url + "qsATpni7B9s", // Angry Birds Toons
  youtube_url + "a0tSVDjQbz0",
  youtube_url + "4ES2y7bxENE",
  youtube_url + "j32-UnN6m5E",
  youtube_url + "86EkHcJsXhU",
  youtube_url + "P3Ca0X-TO1U",
  youtube_url + "UjnyCsweHOE",
  youtube_url + "G2ApsOSMX2s",
  youtube_url + "3Hssx5jy-f4",
  youtube_url + "sRih4d0Um9U",
  youtube_url + "lI-u0pJ-XEM",
  youtube_url + "tv9UIy0RCus",
  youtube_url + "iK4BKnkW9rc", // Angry Birds Stella
  youtube_url + "qjqBUYQb21g",
  youtube_url + "XbI29tI5MXs",
  youtube_url + "0dnRWrsgKrU",
  youtube_url + "ohCm6YeovpQ",
  youtube_url + "HVK-KiANd_Q",
  youtube_url + "V4we8iFk-fY", // AVGN
  youtube_url + "6M_4Yqk65f8",
  youtube_url + "9DfdRdOM_B0",
  youtube_url + "l-6WakV0kWM",
  youtube_url + "XjUz8IT0CYg",
  youtube_url + "y306cWw98a4",
  youtube_url + "qVBerX6Dzmc",
  youtube_url + "qVBerX6Dzmc",
  youtube_url + "QVS0Uks4ZUw",
  youtube_url + "sayp5lieKuU",
  youtube_url + "ofM11nPzFo0",
  youtube_url + "kMg6_IXCjo4",
  youtube_url + "1raUvGNbZFg",
  youtube_url + "3p713bNaO4A",
  youtube_url + "MYDuy7wM8Gk",
  youtube_url + "OEVzPCY2T-g",
  youtube_url + "v7poR6G3hec",
  youtube_url + "LkNvQYiM6bw",
  youtube_url + "X7-mOhP7W7k",
  youtube_url + "TLVGmvmNitg",
  youtube_url + "qF2snKCmqJo",
  youtube_url + "kZfq-IPlLF8",
  youtube_url + "omW1E7rv7IM",
  youtube_url + "g2eH3vYbdGo",
  youtube_url + "VvR_3OTxs8A",
  youtube_url + "gvnRBywkUZ0",
  youtube_url + "RL0YWB8wMDs",
  youtube_url + "M1tU61Nyv1w",
  youtube_url + "pw8tdieB30c",
  youtube_url + "bN6fxqvGBSs", // YKWBS?!
  youtube_url + "FffTJk-gFKc",
  youtube_url + "mBBwKWSxoMI",
  youtube_url + "mMoCgVDbWO0",
  youtube_url + "TSRBgfVBnjA",
  youtube_url + "oeyDkulK6lA",
  youtube_url + "wi1GWXvzhxQ",
  youtube_url + "bV0M9_NwMHY",
  youtube_url + "hdowZnCV-tc",
  youtube_url + "VsdzaEVeFEE",
  youtube_url + "nzLh9SqmqCA",
  youtube_url + "hG2otLyvuCQ",
  youtube_url + "bu3mcIfkUG8",
  youtube_url + "6Qnnxx-uHG4",
  youtube_url + "a_nZJNxf0QE",
  youtube_url + "mJPXWQDxO8Q",
  youtube_url + "9a4L-N__lJg",
  youtube_url + "v1HQJIOByQU",
  youtube_url + "Httd7YE4sAs",
  youtube_url + "UVZhVxSbaEs",
  youtube_url + "F18-BFmtVbM",
  youtube_url + "9dEpLNj0QcE",
  youtube_url + "eHEItvqF-tg",
  youtube_url + "mTcK4kynVLY",
  youtube_url + "tBUzngDUOnk",
  youtube_url + "C4Doj1AZInI",
  youtube_url + "5Ja4FkSUsAk",
  youtube_url + "kRhBahmZNAs",
  youtube_url + "eHV_5fEu3ug",
  youtube_url + "qGL3zr3xDHU",
  youtube_url + "IuAp-4j6QKQ",
  youtube_url + "dZGVp7EZ-NM", // Microsoft Agent Plays
  youtube_url + "MlqT79QfrcM",
  youtube_url + "VItMnVQ-9bM",
  youtube_url + "9GlgqAeJ89Q",
  youtube_url + "kJKM4uQs9WQ",
  youtube_url + "crX2VvHkfjE",
  youtube_url + "PSly8XQ-TQM",
  youtube_url + "nS-3kpM9Ovg",
  youtube_url + "ye1IZq1hPFE",
  youtube_url + "D0hQp05QlaQ",
  youtube_url + "6dQioyja4e8",
  youtube_url + "QWdm6mLRJxA",
  //youtube_url + "VRTuoilurZ",
  youtube_url + "d68-HZjoSQw",
  youtube_url + "dcFCucIQsv8",
  youtube_url + "AdESAUZUJr8",
  youtube_url + "OOntnyuecks",
  youtube_url + "qK99INAXX2w",
  youtube_url + "xA9rEtE895w",
  youtube_url + "1NnJnPdRLlI",
  youtube_url + "GnXiCbmBe_M",
  youtube_url + "OUr9_Ejhx9U",
  youtube_url + "f0KB3bkmbOU",
  youtube_url + "cSyMKD0WUmY",
  youtube_url + "xhXfbKaR5Qc",
  youtube_url + "Nx1Q9m2EYOQ",
  youtube_url + "5J0v7PdMHQY",
  youtube_url + "pnhuAmh9K1E",
  youtube_url + "i_wysAmPp7M",
  youtube_url + "g1HNcG0gZrw",
  youtube_url + "wooz39ArOPo",
  youtube_url + "oIej7VudwMg",
  youtube_url + "zs8Eu6Jh_Fo",
  youtube_url + "p59UV_MGmvs",
  youtube_url + "GikrLQBDJr4",
  youtube_url + "n0WNbzdBzSM",
  youtube_url + "3GI136Z82Nc",
  youtube_url + "KB5e6OyfCws",
  youtube_url + "0_KBkFzgEdo",
  youtube_url + "7KV88KarKg0",
  youtube_url + "qKw8GaFaLoA",
  youtube_url + "MmGAxGaS_cg",
  youtube_url + "otgKlXbBkG8",
  youtube_url + "pj6tI8l4YLI",
  youtube_url + "M3Ky21v3RC8",
  youtube_url + "CWIqBU4QlGk",
  youtube_url + "w4Zs5hVi3zM",
  youtube_url + "rWU48g7scMo",
  youtube_url + "UOGwOPKdO6A",
  youtube_url + "KQtdZh3cGrc",
  youtube_url + "UOGwOPKdO6A",
  youtube_url + "KQtdZh3cGrc",
  youtube_url + "0yRcRVt470I",
  youtube_url + "bHHr76V4sDQ",
  youtube_url + "wL1GZTqsJT8",
  youtube_url + "dRfL4IRKRzo",
  youtube_url + "5TYBN4vP8U4",
  youtube_url + "LpGUS98ot3c",
  youtube_url + "ggvzhhx11NI",
  youtube_url + "_VRBA64vDD4",
  youtube_url + "XyNJZ8PEWRM",
  youtube_url + "CwUeKJt0j9o",
  youtube_url + "ECEx2zQjaDc",
  youtube_url + "luIwRawbmi0",
  youtube_url + "lM4fBo8EMiE",
  youtube_url + "EbNGrNF87AA",
  youtube_url + "vPzCh5US-c4",
  youtube_url + "trerahVOkuQ",
  youtube_url + "1Xr5SfqWMmc",
  youtube_url + "O7K3tcCZwUY",
  youtube_url + "TitzY-BwoUY",
  youtube_url + "6DJh-uSK9VQ",
  youtube_url + "yl0URvSeGQs",
  youtube_url + "T9ZadKJiHIA",
  youtube_url + "3KM61CZTnOM",
  youtube_url + "yVvd_IdkbkE",
  youtube_url + "ljdupMIfAd4",
  youtube_url + "DgYsnJnQJqU",
  youtube_url + "OZ3LPIcRuQM",
  youtube_url + "y0NAhZZ9QlU",
  youtube_url + "8afdPc3Nnag",
  youtube_url + "47lQueyRCOg",
  youtube_url + "eFsaLhsdgLY",
  youtube_url + "2bdGZxzr5rI",
  youtube_url + "H8j8UFUNRWM",
  youtube_url + "QodUVp53Hgg",
  youtube_url + "yA4rw6GMr0c",
  youtube_url + "7RT22IJs2k8",
  youtube_url + "vFWNNXJJQ3o",
  youtube_url + "6FmijN4BY4c",
  youtube_url + "ybABNY3hwNU",
  youtube_url + "W7aXWQFQlVg",
  youtube_url + "ixK995Fnu1k",
  youtube_url + "XfkoZgnR2vo",
  youtube_url + "FlD3pOu8Sm8",
  youtube_url + "VcgX_koOHaA",
  youtube_url + "4mhsINjjl5c",
  youtube_url + "2gGF7Yfg9O0",
  youtube_url + "kZK-2qekq8s",
  youtube_url + "5hT9k7iNTGQ",
  youtube_url + "hmkuvXgxRsw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "lGT7GRoUsaw",
  youtube_url + "LdLbRe09qas", // Android Trash
  youtube_url + "u39KUBd2Q9I",
  youtube_url + "vdCSSkMinvg",
  youtube_url + "4PAiqcv08cU",
  youtube_url + "g-r1Ug-hduw",
  youtube_url + "yZtjYbwsTg8",
  youtube_url + "HemR9r2dhZQ",
  youtube_url + "tJEk1GAqQTg",
  youtube_url + "Y4Ajyd6Hc0E",
  youtube_url + "YQa2-DY7Y_Q", // Battle for Dream Island (Requested by SF08, not sorry Konnor88)
  youtube_url + "8LY0o_CgPR8",
  youtube_url + "JfzEO9-Zlhw",
  youtube_url + "rhkgOXksmaY",
  youtube_url + "cdmVPHdpECM",
  youtube_url + "xHI-iKm31us",
  youtube_url + "6vGgsXO57bs",
  youtube_url + "Ze1p7bYXw0g",
  youtube_url + "g0wCF04ddnw",
  youtube_url + "Eg5Ja23HfhY",
  youtube_url + "yhkDgX2b7po",
  youtube_url + "U4sp10HUI6Y",
  youtube_url + "BQBmKvRd0B0",
  youtube_url + "yZqh3l3-pTM",
  youtube_url + "pf9FHBM0SLQ",
  youtube_url + "nAKk0gm73K0",
  youtube_url + "Xmh7M7TXDRE",
  youtube_url + "x4K1xKHwp0E",
  youtube_url + "4pR6Y3_ahS8",
  youtube_url + "J9udiROQchg",
  youtube_url + "6OfKK5Rt3fY",
  youtube_url + "GfFkiGgY6Pk",
  youtube_url + "KLwgTM7HBhw",
  youtube_url + "PigChYq_FrM",
  youtube_url + "ye_HKD_C5o0", // BUT WAIT, THERES MORE
  youtube_url + "26FJTtLOu2s", // BFDIA
  youtube_url + "cv1Qz0GCaxw",
  youtube_url + "hsprecnxSsE",
  youtube_url + "dXUE7OFij_I",
  youtube_url + "E174ogB49xs",
  youtube_url + "4q77g4xo9ic",
  youtube_url + "YrsRLT3u0Cg",
  youtube_url + "kaFpfSHllOw",
  youtube_url + "RZB7nTzSl3g",
  youtube_url + "rFUwZ0Vtims",
  youtube_url + "mmlPwe71JkA", // IDFB next
  youtube_url + "2Jw0dhwmi3o",
  youtube_url + "GoYe_yH0dVQ", // and that's all of them, i will NOT add BFB for christ's sake
  youtube_url + "UVUatYPScjw", // rocko's modern life
  youtube_url + "JoyB9zHYxi8",
  youtube_url + "zV7s4Dzq8wE",
  youtube_url + "rc4HyJ0XMgY",
  youtube_url + "exDjH1QJOEs", // PGG and PGG Rebooted (rated Mature Audiences)
  youtube_url + "m9JtPsnaakM",
  youtube_url + "qt7C-Pcfw-U",
  youtube_url + "tAjNijZHeC0",
  youtube_url + "aiIDeirsJoY",
  youtube_url + "OuFcuT4jSbE",
  youtube_url + "_ZzvFCLHFAg",
  youtube_url + "WiRdCDhaNTw",
  youtube_url + "28DdmrivqcQ",
  youtube_url + "i7GTdZH6km8",
  youtube_url + "49ODdYy9yAI",
  youtube_url + "92jKwR-M93I",
  youtube_url + "eniRs2KpC70",
  youtube_url + "Bm89dja7kNA",
  youtube_url + "bMhXrVh6GZA",
  youtube_url + "tXx2omKPXpA",
  youtube_url + "TpPdjZo0tGg",
  youtube_url + "ee_qZWa9DOw",
  youtube_url + "Ln5T_j1o32k",
  youtube_url + "h85K_p0jJ4o",
  youtube_url + "Lgh0kIUln-o",
  youtube_url + "6TdLkIOTkdA",
  youtube_url + "jwChUXVMmaQ",
  youtube_url + "ElLfUsh-NZw",
  youtube_url + "zgAzpu3zZNo",
  youtube_url + "hANfAmCJOAM",
  youtube_url + "NqIJoVay-aU",
  youtube_url + "W7br-y30kBs",
  youtube_url + "uLnq-vOXFUc",
  youtube_url + "WIXWIollTOE",
  youtube_url + "xNIXsaIO-NE",
  youtube_url + "4bijWcMnKyE",
  youtube_url + "DV6kqZSY5WE", // Windows Desktop Skits
  youtube_url + "eO2LgSSTXqM",
  youtube_url + "FeorAMjcV7E",
  youtube_url + "lex-Ap58niY",
  youtube_url + "exter6QAGS8",
  youtube_url + "XBRxcnne5f4",
  youtube_url + "dxtwzr-4UYo",
  youtube_url + "1q9phQT3-wc",
  youtube_url + "TD8InhMS1io",
  youtube_url + "Jn6CXHufyos",
  youtube_url + "fcPsjkhJLyw",
  youtube_url + "oxir0CFO_SU",
  youtube_url + "UitVP8YClNc",
  youtube_url + "-y9TxoTt5eQ", // SF08 Remakes
  youtube_url + "z1ApOo20pU4",
  youtube_url + "TafPUncacTE",
  youtube_url + "wNfMpAR-Oog",
  youtube_url + "iKCNlur5wRY",
  youtube_url + "yCRHUCSI20M",
  youtube_url + "sCKONPsB_Qc",
  youtube_url + "67XnrO-Cygc", // Controversial Fights
  youtube_url + "67XnrO-Cygc",
  youtube_url + "67XnrO-Cygc",
  youtube_url + "67XnrO-Cygc",
  youtube_url + "67XnrO-Cygc",
  youtube_url + "67XnrO-Cygc",
  youtube_url + "67XnrO-Cygc",
  youtube_url + "67XnrO-Cygc",
  youtube_url + "UGRVQ7KtEK4", // MS Brother
  youtube_url + "XLkwqFonfOg",
  youtube_url + "6JNqciPFPaw",
  youtube_url + "ME28jhesxoc",
  youtube_url + "KD71GxsfHlo",
  youtube_url + "gKjbU1z1OlU",
  youtube_url + "rjcJVX2fNFA", // MS Survivor
  youtube_url + "5hzRfTXSiKA",
  youtube_url + "xc6N_0YT2r8",
  youtube_url + "lLpp8VPUUfk"
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
      var vid = videoIds4PM2430PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
      this.vid = vid;
    } else if (hours == 17) {
      var num = Math.floor(Math.random() * videoIds5PM.length);
      var vid = videoIds5PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
      this.vid = vid;
    } else if (hours == 14) {
      var num = Math.floor(Math.random() * videoIds5PM.length);
      var vid = videoIds5PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
      this.vid = vid;
    } else if (hours == 18 && minutes <= 30) {
      var num = Math.floor(Math.random() * videoIds7PM.length);
      var vid = videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
      this.vid = vid;
    } else if (hours == 19) {
      var num = Math.floor(Math.random() * videoIds7PM.length);
      var vid = videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
      this.vid = vid;
    } else {
      var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
      var vid = videoIds25MinutesofMSAgent[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
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
        var vid = videoIdsCommercials[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: vidId,
          identId: videoIdsCommercials[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
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
        var vid = videoIds4PM2430PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 18 && minutes <= 30) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 19 && minutes <= 22) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          identId: vidId,
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          identId: vidId,
        });
      }
    } else {
      if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25) || (hours == 13 && minutes <= 20)) {
        var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
        var vid = videoIds4PM2430PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 18 && minutes <= 30) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 19 && hours <= 22) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          identId: vidId,
        });
      } else if (hours == 23 || (hours == 22 && minutes >= 9)) {
        //tvhook.send("BonziTV is now off air.");
        this.room.emit("replaceTVWithURL", {
          id: "kQsoV69uGIY",
          hourAmount: hours,
          minuteAmount: minutes,
          identId: bonziTvIdent[ident].replaceAll("https://www.youtube.com/watch?v=", ""),
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
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
      identId: bonziTvIdent[ident].replaceAll("https://www.youtube.com/watch?v=", ""),
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
          var vid = videoIdsCommercials[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
          this.room.vid = vid;

          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIdsCommercials[Math.floor(Math.random() * videoIdsCommercials.length)].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
            identId: videoIdsCommercials[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          });
          setTimeout(function() {
            bonziTvCommercialMode = false;
          }, 120000)
        }
      }
      /*var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");*/

      if (bonziTvCommercialMode) {

        var num = Math.floor(Math.random() * videoIdsCommercials.length);
        var vid = videoIdsCommercials[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
        this.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIdsCommercials[Math.floor(Math.random() * videoIdsCommercials.length)].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          identId: videoIdsCommercials[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
        });
      } else if (getRandomInt(1, 3) == 1) {
        if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25)) {
          var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
          var vid = videoIds4PM2430PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
          this.room.vid = vid;

          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds4PM2430PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
            identId: videoIds4PM2430PM[Math.floor(Math.random() * videoIds4PM2430PM.length)].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          });
        } else if (hours == 17) {
          var num = Math.floor(Math.random() * videoIds5PM.length);
          var vid = videoIds5PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds5PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
            identId: videoIds5PM[Math.floor(Math.random() * videoIds5PM.length)].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          });
        } else if (hours == 18 && minutes <= 30) {
          var num = Math.floor(Math.random() * videoIds7PM.length);
          var vid = videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
            identId: videoIds7PM[Math.floor(Math.random() * videoIds7PM.length)].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          });
        } else if (hours == 19 && hours <= 22) {
          var num = Math.floor(Math.random() * videoIds7PM.length);
          var vid = videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds7PM[Math.floor(Math.random() * videoIds7PM.length)].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
            identId: videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          });
        } else {
          var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
          var vid = videoIds25MinutesofMSAgent[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds25MinutesofMSAgent[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
            identId: videoIds25MinutesofMSAgent[Math.floor(Math.random() * videoIds25MinutesofMSAgent.length)].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
          });
        }
      } else {
        if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25) || (hours == 13 && minutes <= 20)) {
          var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
          var vid = videoIds4PM2430PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
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
            id: videoIds4PM2430PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
            identId: bonziTvIdent[ident].replaceAll("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 17) {
          var num = Math.floor(Math.random() * videoIds5PM.length);
          var vid = videoIds5PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
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
            id: videoIds5PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
            identId: bonziTvIdent[ident].replaceAll("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 18 && minutes <= 20) {
          var num = Math.floor(Math.random() * videoIds7PM.length);
          var vid = videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
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
            id: videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
            identId: bonziTvIdent[ident].replaceAll("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 19 && minutes <= 22) {
          var num = Math.floor(Math.random() * videoIds7PM.length);
          var vid = videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
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
            id: videoIds7PM[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
            identId: bonziTvIdent[ident].replaceAll("https://www.youtube.com/watch?v=", ""),
          });
        } else {
          var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
          var vid = videoIds25MinutesofMSAgent[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", "");
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
            id: videoIds25MinutesofMSAgent[num].replaceAll("https://www.youtube.com/watch?v=", "").replaceAll("https://youtu.be/", ""),
            identId: bonziTvIdent[ident].replaceAll("https://www.youtube.com/watch?v=", ""),
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