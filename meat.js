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


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
var bonziTvCommercialMode = false;
var bonziTvCool = false;
var videoIdsCommercials = [
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
]
var videoIds4PM2430PM = [
  "https://www.youtube.com/watch?v=n_sWTHQKr-s",
  "https://www.youtube.com/watch?v=FdjXC4aDNrc",
  "https://www.youtube.com/watch?v=oqwjsqLvaGA",
  "https://www.youtube.com/watch?v=ewQeG4bfh7o",
  "https://www.youtube.com/watch?v=J1xFJDSeHxI",
  "https://www.youtube.com/watch?v=AJNF04k6hDU",
  "https://www.youtube.com/watch?v=EXFJ1gUqSOI",
  "https://www.youtube.com/watch?v=zvB3h2IKdYU",
  "https://www.youtube.com/watch?v=ihDMzzMxsFY",
  "https://www.youtube.com/watch?v=JdPibO28X6g",
  "https://www.youtube.com/watch?v=BpJZAKy3-EI",
  "https://www.youtube.com/watch?v=y281xhixx9I",
  "https://www.youtube.com/watch?v=f-1tlzLYUE0",
  "https://www.youtube.com/watch?v=LBapITUr878",
  "https://www.youtube.com/watch?v=R7M2RiTgEO4",
  "https://www.youtube.com/watch?v=hYC5FcjhowU",
  "https://www.youtube.com/watch?v=PM2cT0GYs0k",
  "https://www.youtube.com/watch?v=kX-TUNMguqQ",
  "https://www.youtube.com/watch?v=CJjGRbm7AP0",
  "https://www.youtube.com/watch?v=nUXNQk-GpXE",
  "https://www.youtube.com/watch?v=pRIdTBDo5s0",
  "https://www.youtube.com/watch?v=lnUnMD8avFo",
  "https://www.youtube.com/watch?v=OHtNgbbZUHc",
  "https://www.youtube.com/watch?v=IWeeGlqWjTo",
  "https://www.youtube.com/watch?v=B-43bJpN9p0",
  "https://www.youtube.com/watch?v=ZlJUN6ld7Uw",
  "https://www.youtube.com/watch?v=cepnx5OtwMg",
  "https://www.youtube.com/watch?v=CyYUtJWu67g",
  "https://www.youtube.com/watch?v=kVPAH1SoJOs",
  "https://www.youtube.com/watch?v=CSSucrEZru0",
  "https://www.youtube.com/watch?v=voX77aqxMVM",
  "https://www.youtube.com/watch?v=VMenL3FtjwY",
  "https://www.youtube.com/watch?v=gMWMaYqMuvU",
  "https://www.youtube.com/watch?v=9CivuYkHkdw",
  "https://www.youtube.com/watch?v=nWjshODENSE",
  "https://www.youtube.com/watch?v=wC85p4WwT7o",
  "https://www.youtube.com/watch?v=-STfCX3_Dt8",
  "https://www.youtube.com/watch?v=2npJbktaXas",
  "https://www.youtube.com/watch?v=mW8HT3wTjtw",
  "https://www.youtube.com/watch?v=aqJxAEc8I98",
  "https://www.youtube.com/watch?v=7RTuOTLqNJg",
  "https://www.youtube.com/watch?v=D-mxD6R0PZk",
  "https://www.youtube.com/watch?v=gkpfOwxvP5Y",
  "https://www.youtube.com/watch?v=MaOJiU7ICSs",
  "https://www.youtube.com/watch?v=ldoCeoPnsr4",
  "https://www.youtube.com/watch?v=kRtuL6PVM3M",
  "https://www.youtube.com/watch?v=BxEn1br2hhA",
  "https://www.youtube.com/watch?v=E7e2NbRTv34",
  "https://www.youtube.com/watch?v=0Pw-W11hzaY",
  "https://www.youtube.com/watch?v=fjOraqJJfdo",
  "https://www.youtube.com/watch?v=-k2lYZmcyUs",
  "https://www.youtube.com/watch?v=IpDx4Fw137U",
  "https://www.youtube.com/watch?v=bIy7bGgPmu8",
  "https://www.youtube.com/watch?v=wGFfIulM2aw",
  "https://www.youtube.com/watch?v=xv3LBB6GAh4",
  "https://www.youtube.com/watch?v=SLfbsnOG3lA",
  "https://www.youtube.com/watch?v=YaRNqZT1QH4",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=WwnSgVJcGm8",
  "https://www.youtube.com/watch?v=XEwg5dwLjng",
  "https://www.youtube.com/watch?v=eYo8jusJkfA",
  "https://www.youtube.com/watch?v=iIBI3vVcce0",
  "https://www.youtube.com/watch?v=7K7gaKhkiVg",
  "https://www.youtube.com/watch?v=vX5baryGnnk",
  "https://www.youtube.com/watch?v=kEkmTUobm9A",
  "https://www.youtube.com/watch?v=ynWOhlnFJWQ",
  "https://www.youtube.com/watch?v=ofPNauMOvFU",
  "https://www.youtube.com/watch?v=LP4M4TBXg58",
  "https://www.youtube.com/watch?v=LP4M4TBXg58",
  "https://www.youtube.com/watch?v=LP4M4TBXg58",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
];
var videoIds5PM = [
  "https://www.youtube.com/watch?v=iK4BKnkW9rc",
  "https://www.youtube.com/watch?v=qjqBUYQb21g",
  "https://www.youtube.com/watch?v=XbI29tI5MXs",
  "https://www.youtube.com/watch?v=0dnRWrsgKrU",
  "https://www.youtube.com/watch?v=ohCm6YeovpQ",
  "https://www.youtube.com/watch?v=HVK-KiANd_Q",
  "https://www.youtube.com/watch?v=6-USBEqLicg",
  "https://www.youtube.com/watch?v=QoHbvZfu1-c",
  "https://www.youtube.com/watch?v=X2Q2X-7hVQw",
  "https://www.youtube.com/watch?v=mR-lbatS6ts",
  "https://www.youtube.com/watch?v=1wMsbj0VvVE",
  "https://www.youtube.com/watch?v=Mzf_jtM8jgw",
  "https://www.youtube.com/watch?v=qsATpni7B9s",
  "https://www.youtube.com/watch?v=a0tSVDjQbz0",
  "https://www.youtube.com/watch?v=4ES2y7bxENE",
  "https://www.youtube.com/watch?v=j32-UnN6m5E",
  "https://www.youtube.com/watch?v=86EkHcJsXhU",
  "https://www.youtube.com/watch?v=P3Ca0X-TO1U",
  "https://www.youtube.com/watch?v=UjnyCsweHOE",
  "https://www.youtube.com/watch?v=G2ApsOSMX2s",
  "https://www.youtube.com/watch?v=3Hssx5jy-f4",
  "https://www.youtube.com/watch?v=sRih4d0Um9U",
  "https://www.youtube.com/watch?v=lI-u0pJ-XEM",
  "https://www.youtube.com/watch?v=tv9UIy0RCus",
  "https://www.youtube.com/watch?v=wGKi7YITv84",
  "https://www.youtube.com/watch?v=FQ0ZvlLi3Aw",
  "https://www.youtube.com/watch?v=hlm9JW6hzu4",
  "https://www.youtube.com/watch?v=W61OP5HPSU4",
  "https://www.youtube.com/watch?v=PqS4Ckf01XI",
  "https://www.youtube.com/watch?v=BjiWP6GdaZs",
  "https://www.youtube.com/watch?v=VR6G2-BXk50",
  "https://www.youtube.com/watch?v=7D6W6Dzsinw",
  "https://www.youtube.com/watch?v=LWW9kyDhSGY",
  "https://www.youtube.com/watch?v=s60XUkdNoNc",
  "https://www.youtube.com/watch?v=PjfvbA3yaB4",
  "https://www.youtube.com/watch?v=8M1fDbBTeuc",
  "https://www.youtube.com/watch?v=OMtsPjcvOyA",
  "https://www.youtube.com/watch?v=1n1_ocOUx4M",
  "https://www.youtube.com/watch?v=8Yy_xnQTS9k",
  "https://www.youtube.com/watch?v=aTYAwNeP7hw",
  "https://www.youtube.com/watch?v=Cc4_lDIhhK4",
  "https://www.youtube.com/watch?v=dTUrgFaXR2o",
  "https://www.youtube.com/watch?v=IPQmfvcvOWI",
  "https://www.youtube.com/watch?v=tHjjbHkFqVw",
  "https://www.youtube.com/watch?v=UfDFvG0Px5A",
  "https://www.youtube.com/watch?v=mtxjk_kIi6I",
  "https://www.youtube.com/watch?v=M_U4NYPHuE8",
  "https://www.youtube.com/watch?v=XmheFB3vSmM",
  "https://www.youtube.com/watch?v=b9RSREv2NAE",
  "https://www.youtube.com/watch?v=YcZ4vXgsGh4",
  "https://www.youtube.com/watch?v=MnjMwoJpDag",
  "https://www.youtube.com/watch?v=8zVTrQ54oKA",
  "https://www.youtube.com/watch?v=HV7SQkbOKQQ",
  "https://www.youtube.com/watch?v=urX6QcVFkHY",
  "https://www.youtube.com/watch?v=Q7vthL5hIqo",
  "https://www.youtube.com/watch?v=N0j6NXznknU",
  "https://www.youtube.com/watch?v=u0qTJz2DUos",
  "https://www.youtube.com/watch?v=UioiM5KopzU",
  "https://www.youtube.com/watch?v=sDlGy1SxYGg",
  "https://www.youtube.com/watch?v=dnua8QvCfB0",
  "https://www.youtube.com/watch?v=FG0ydp-1mHE",
  "https://www.youtube.com/watch?v=bCm-EAd_oEI",
  "https://www.youtube.com/watch?v=aZ5lyqb4gUc",
  "https://www.youtube.com/watch?v=2HUy60DWYek",
  "https://www.youtube.com/watch?v=FEXeAlaL9cc",
  "https://www.youtube.com/watch?v=ORouZmGacHk",
  "https://www.youtube.com/watch?v=2v-8DArgo-Y",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
];
var videoIds7PM = [
  "https://www.youtube.com/watch?v=PT5HrjP-lPE",
  "https://www.youtube.com/watch?v=1yfUfH1jF3g",
  "https://www.youtube.com/watch?v=vN2BCZjZYWs",
  "https://www.youtube.com/watch?v=oZF2RUJHV8c",
  "https://www.youtube.com/watch?v=rNY5lwrmZ1w",
  "https://www.youtube.com/watch?v=E7sn6tjcZgI",
  "https://www.youtube.com/watch?v=kvsw74KWAIw",
  "https://www.youtube.com/watch?v=OX3rC3ENFw0",
  "https://www.youtube.com/watch?v=o3i64oR6Dv8",
  "https://www.youtube.com/watch?v=Frm0LTTtgFo",
  "https://www.youtube.com/watch?v=PFbYJ2-KpR8",
  "https://www.youtube.com/watch?v=rVAxjlFU28o",
  "https://www.youtube.com/watch?v=fIonJON2p9A",
  "https://www.youtube.com/watch?v=Gc_DMKiz9LU",
  "https://www.youtube.com/watch?v=bfk_pzQSfX8",
  "https://www.youtube.com/watch?v=SKLlmJKfcI0",
  "https://www.youtube.com/watch?v=r0W-607Atz0",
  "https://www.youtube.com/watch?v=nGQ-nCwHYcs",
  "https://www.youtube.com/watch?v=7hTge-5W3Cc",
  "https://www.youtube.com/watch?v=fBHJFPqKIG0",
  "https://www.youtube.com/watch?v=LvV7MOoSwy0",
  "https://www.youtube.com/watch?v=MTyBtwmvEjE",
  "https://www.youtube.com/watch?v=djMpH9D3NUQ",
  "https://www.youtube.com/watch?v=3_uRhxkjdB4",
  "https://www.youtube.com/watch?v=3VS4Nkzh-70",
  "https://www.youtube.com/watch?v=jX28oxrdUVI",
  "https://www.youtube.com/watch?v=dnBqjTmlLg8",
  "https://www.youtube.com/watch?v=r_mwNcxuxwY",
  "https://www.youtube.com/watch?v=xlyyu1Go4yU",
  "https://www.youtube.com/watch?v=l8g0z8yZ6FU",
  "https://www.youtube.com/watch?v=gMDgHPQ0YfI",
  "https://www.youtube.com/watch?v=HjWbtUBKuUc",
  "https://www.youtube.com/watch?v=WO2SCGfEYiE",
  "https://www.youtube.com/watch?v=ur8ys2aglI4",
  "https://www.youtube.com/watch?v=jmr5kAmIQGs",
  "https://www.youtube.com/watch?v=3va3bdtT9LQ",
  "https://www.youtube.com/watch?v=7vzfeyh-ow8",
  "https://www.youtube.com/watch?v=v2t6iP4mWvA",
  "https://www.youtube.com/watch?v=iwxbY-p_w0w",
  "https://www.youtube.com/watch?v=pdO9uKpzaYU",
  "https://www.youtube.com/watch?v=8iEXhbqami8",
  "https://www.youtube.com/watch?v=T-BoDW1_9P4",
  "https://www.youtube.com/watch?v=NgHygsNwTNk",
  "https://www.youtube.com/watch?v=jPKuyeDb0mM",
  "https://www.youtube.com/watch?v=EDsDnR2dzlw",
  "https://www.youtube.com/watch?v=ljl1jBEY3_A",
  "https://www.youtube.com/watch?v=jIwqlKDPq4s",
  "https://www.youtube.com/watch?v=TGulB0MfxPs",
  "https://www.youtube.com/watch?v=ehlrUPrvFuk",
  "https://www.youtube.com/watch?v=vkUIyOm9hZk",
  "https://www.youtube.com/watch?v=t2Jpe0I5pa4",
  "https://www.youtube.com/watch?v=kHKJ9Mf8UxU",
  "https://www.youtube.com/watch?v=zwz5yJR_aFA",
  "https://www.youtube.com/watch?v=RdTJHVG_IdU",
  "https://www.youtube.com/watch?v=WaXvbkjn-RA",
  "https://www.youtube.com/watch?v=xe0P0rnsS1Q",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=IyirV9lir8Q",
  "https://www.youtube.com/watch?v=IyirV9lir8Q",
  "https://www.youtube.com/watch?v=IyirV9lir8Q",
];
var videoIds25MinutesofMSAgent = [
  "https://www.youtube.com/watch?v=iK4BKnkW9rc",
  "https://www.youtube.com/watch?v=qjqBUYQb21g",
  "https://www.youtube.com/watch?v=XbI29tI5MXs",
  "https://www.youtube.com/watch?v=0dnRWrsgKrU",
  "https://www.youtube.com/watch?v=ohCm6YeovpQ",
  "https://www.youtube.com/watch?v=HVK-KiANd_Q",
  "https://www.youtube.com/watch?v=6-USBEqLicg",
  "https://www.youtube.com/watch?v=QoHbvZfu1-c",
  "https://www.youtube.com/watch?v=X2Q2X-7hVQw",
  "https://www.youtube.com/watch?v=mR-lbatS6ts",
  "https://www.youtube.com/watch?v=1wMsbj0VvVE",
  "https://www.youtube.com/watch?v=Mzf_jtM8jgw",

  "https://www.youtube.com/watch?v=iK4BKnkW9rc",
  "https://www.youtube.com/watch?v=qjqBUYQb21g",
  "https://www.youtube.com/watch?v=XbI29tI5MXs",
  "https://www.youtube.com/watch?v=0dnRWrsgKrU",
  "https://www.youtube.com/watch?v=ohCm6YeovpQ",
  "https://www.youtube.com/watch?v=HVK-KiANd_Q",
  "https://www.youtube.com/watch?v=6-USBEqLicg",
  "https://www.youtube.com/watch?v=QoHbvZfu1-c",
  "https://www.youtube.com/watch?v=X2Q2X-7hVQw",
  "https://www.youtube.com/watch?v=mR-lbatS6ts",
  "https://www.youtube.com/watch?v=1wMsbj0VvVE",
  "https://www.youtube.com/watch?v=Mzf_jtM8jgw",
  "https://www.youtube.com/watch?v=qsATpni7B9s",
  "https://www.youtube.com/watch?v=a0tSVDjQbz0",
  "https://www.youtube.com/watch?v=4ES2y7bxENE",
  "https://www.youtube.com/watch?v=j32-UnN6m5E",
  "https://www.youtube.com/watch?v=86EkHcJsXhU",
  "https://www.youtube.com/watch?v=P3Ca0X-TO1U",
  "https://www.youtube.com/watch?v=UjnyCsweHOE",
  "https://www.youtube.com/watch?v=G2ApsOSMX2s",
  "https://www.youtube.com/watch?v=3Hssx5jy-f4",
  "https://www.youtube.com/watch?v=sRih4d0Um9U",
  "https://www.youtube.com/watch?v=lI-u0pJ-XEM",
  "https://www.youtube.com/watch?v=tv9UIy0RCus",
  "https://www.youtube.com/watch?v=wGKi7YITv84",
  "https://www.youtube.com/watch?v=FQ0ZvlLi3Aw",
  "https://www.youtube.com/watch?v=hlm9JW6hzu4",
  "https://www.youtube.com/watch?v=W61OP5HPSU4",
  "https://www.youtube.com/watch?v=PqS4Ckf01XI",
  "https://www.youtube.com/watch?v=BjiWP6GdaZs",
  "https://www.youtube.com/watch?v=VR6G2-BXk50",
  "https://www.youtube.com/watch?v=7D6W6Dzsinw",
  "https://www.youtube.com/watch?v=LWW9kyDhSGY",
  "https://www.youtube.com/watch?v=s60XUkdNoNc",
  "https://www.youtube.com/watch?v=PjfvbA3yaB4",
  "https://www.youtube.com/watch?v=8M1fDbBTeuc",
  "https://www.youtube.com/watch?v=OMtsPjcvOyA",
  "https://www.youtube.com/watch?v=1n1_ocOUx4M",
  "https://www.youtube.com/watch?v=8Yy_xnQTS9k",
  "https://www.youtube.com/watch?v=aTYAwNeP7hw",
  "https://www.youtube.com/watch?v=Cc4_lDIhhK4",
  "https://www.youtube.com/watch?v=dTUrgFaXR2o",
  "https://www.youtube.com/watch?v=IPQmfvcvOWI",
  "https://www.youtube.com/watch?v=tHjjbHkFqVw",
  "https://www.youtube.com/watch?v=UfDFvG0Px5A",
  "https://www.youtube.com/watch?v=mtxjk_kIi6I",
  "https://www.youtube.com/watch?v=M_U4NYPHuE8",
  "https://www.youtube.com/watch?v=XmheFB3vSmM",
  "https://www.youtube.com/watch?v=b9RSREv2NAE",
  "https://www.youtube.com/watch?v=YcZ4vXgsGh4",
  "https://www.youtube.com/watch?v=MnjMwoJpDag",
  "https://www.youtube.com/watch?v=8zVTrQ54oKA",
  "https://www.youtube.com/watch?v=HV7SQkbOKQQ",
  "https://www.youtube.com/watch?v=urX6QcVFkHY",
  "https://www.youtube.com/watch?v=Q7vthL5hIqo",
  "https://www.youtube.com/watch?v=N0j6NXznknU",
  "https://www.youtube.com/watch?v=u0qTJz2DUos",
  "https://www.youtube.com/watch?v=UioiM5KopzU",
  "https://www.youtube.com/watch?v=sDlGy1SxYGg",
  "https://www.youtube.com/watch?v=dnua8QvCfB0",
  "https://www.youtube.com/watch?v=FG0ydp-1mHE",
  "https://www.youtube.com/watch?v=bCm-EAd_oEI",
  "https://www.youtube.com/watch?v=aZ5lyqb4gUc",
  "https://www.youtube.com/watch?v=2HUy60DWYek",
  "https://www.youtube.com/watch?v=FEXeAlaL9cc",
  "https://www.youtube.com/watch?v=ORouZmGacHk",
  "https://www.youtube.com/watch?v=2v-8DArgo-Y",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=qsATpni7B9s",
  "https://www.youtube.com/watch?v=a0tSVDjQbz0",
  "https://www.youtube.com/watch?v=4ES2y7bxENE",
  "https://www.youtube.com/watch?v=j32-UnN6m5E",
  "https://www.youtube.com/watch?v=86EkHcJsXhU",
  "https://www.youtube.com/watch?v=P3Ca0X-TO1U",
  "https://www.youtube.com/watch?v=UjnyCsweHOE",
  "https://www.youtube.com/watch?v=G2ApsOSMX2s",
  "https://www.youtube.com/watch?v=3Hssx5jy-f4",
  "https://www.youtube.com/watch?v=sRih4d0Um9U",
  "https://www.youtube.com/watch?v=lI-u0pJ-XEM",
  "https://www.youtube.com/watch?v=tv9UIy0RCus",
  "https://www.youtube.com/watch?v=wGKi7YITv84",
  "https://www.youtube.com/watch?v=FQ0ZvlLi3Aw",
  "https://www.youtube.com/watch?v=hlm9JW6hzu4",
  "https://www.youtube.com/watch?v=W61OP5HPSU4",
  "https://www.youtube.com/watch?v=PqS4Ckf01XI",
  "https://www.youtube.com/watch?v=BjiWP6GdaZs",
  "https://www.youtube.com/watch?v=7D6W6Dzsinw",
  "https://www.youtube.com/watch?v=LWW9kyDhSGY",
  "https://www.youtube.com/watch?v=I5XjMXFuAEg",
  "https://www.youtube.com/watch?v=bLu9ZT7xc-s",
  "https://www.youtube.com/watch?v=oDmcLsCd1wM",
  "https://www.youtube.com/watch?v=_0EaFBajEJc",
  "https://www.youtube.com/watch?v=PESJ7GXFSTY",
  "https://www.youtube.com/watch?v=tjWpSalUJ7M",
  "https://www.youtube.com/watch?v=CUwkddtoq_Q",
  "https://www.youtube.com/watch?v=kUS79V-GED4",
  "https://www.youtube.com/watch?v=XuZYiN_fLLo",
  "https://www.youtube.com/watch?v=N7UVouZF3rs",
  "https://www.youtube.com/watch?v=nIe6hhSNYMo",
  "https://www.youtube.com/watch?v=WR-ItEt7Wsc",
  "https://www.youtube.com/watch?v=xRMtup3tSiY",
  "https://www.youtube.com/watch?v=8PdVfC588rk",
  "https://www.youtube.com/watch?v=y_NNbA1YHXI",
  "https://www.youtube.com/watch?v=uUKakTJTq8Q",
  "https://www.youtube.com/watch?v=Q9xzX3uYFrg",
  "https://www.youtube.com/watch?v=AeHLChNvmuo",
  "https://www.youtube.com/watch?v=oAnQODG7WIM",
  "https://www.youtube.com/watch?v=32lLfeLcqpc",
  "https://www.youtube.com/watch?v=T6OqOb9GHm8",
  "https://www.youtube.com/watch?v=7_dFef7LmN0",
  "https://www.youtube.com/watch?v=35aKtzd6ITU",
  "https://www.youtube.com/watch?v=PYX5WGWCy80",
  "https://www.youtube.com/watch?v=JnkxS1kyZgc",
  "https://www.youtube.com/watch?v=pg4zVD6nVTM",
  "https://www.youtube.com/watch?v=i8zCkUtvbyI",
  "https://www.youtube.com/watch?v=5lWKWEBG7sU",
  "https://www.youtube.com/watch?v=JC__xVzW4q4",
  "https://www.youtube.com/watch?v=g_bKg27Zskg",
  "https://www.youtube.com/watch?v=vsPt1P6ouEw",
  "https://www.youtube.com/watch?v=sWKXS0Jy6y0",
  "https://www.youtube.com/watch?v=H3aSBjRV1m4",
  "https://www.youtube.com/watch?v=mDofooY1oxI",
  "https://www.youtube.com/watch?v=9NQVRayFJ4Q",
  "https://www.youtube.com/watch?v=-_0qqaiFwKU",
  "https://www.youtube.com/watch?v=CpW0lFG8nxE",
  "https://www.youtube.com/watch?v=i7KzCagtyvg",
  "https://www.youtube.com/watch?v=Tc9IJ9yE_ds",
  "https://www.youtube.com/watch?v=LgZ9XoRakuE",
  "https://www.youtube.com/watch?v=HJ_QylejL0o",
  "https://www.youtube.com/watch?v=T7PRlNIbEOw",
  "https://www.youtube.com/watch?v=hht_m1cjqLo",
  "https://www.youtube.com/watch?v=AltpSUZqRzo",
  "https://www.youtube.com/watch?v=ryI0Hc6TNs4",
  "https://www.youtube.com/watch?v=RIrYEbJmYVU",
  "https://www.youtube.com/watch?v=NbzjAQd_A4E",
  "https://www.youtube.com/watch?v=DeugO5Tl0-k",
  "https://www.youtube.com/watch?v=b9RSREv2NAE",
  "https://www.youtube.com/watch?v=YcZ4vXgsGh4",
  "https://www.youtube.com/watch?v=MnjMwoJpDag",
  "https://www.youtube.com/watch?v=8zVTrQ54oKA",
  "https://www.youtube.com/watch?v=HV7SQkbOKQQ",
  "https://www.youtube.com/watch?v=urX6QcVFkHY",
  "https://www.youtube.com/watch?v=Q7vthL5hIqo",
  "https://www.youtube.com/watch?v=N0j6NXznknU",
  "https://www.youtube.com/watch?v=u0qTJz2DUos",
  "https://www.youtube.com/watch?v=UioiM5KopzU",
  "https://www.youtube.com/watch?v=dnua8QvCfB0",
  "https://www.youtube.com/watch?v=FG0ydp-1mHE",
  "https://www.youtube.com/watch?v=bCm-EAd_oEI",
  "https://www.youtube.com/watch?v=wlqM_kMRPJI",
  "https://www.youtube.com/watch?v=W9DST-6jIBU",
  "https://www.youtube.com/watch?v=TDpxx5UqrVU",
  "https://www.youtube.com/watch?v=d-vB8qdNSYc",
  "https://www.youtube.com/watch?v=Gh0bczrw4NU",
  "https://www.youtube.com/watch?v=doZ-Wmgrkfs",
  "https://www.youtube.com/watch?v=CiVtoO65BRY",
  "https://www.youtube.com/watch?v=9Lu99J5UsXs",
  "https://www.youtube.com/watch?v=SNK74ecgFKg",
  "https://www.youtube.com/watch?v=hRSYYKEfwoE",
  "https://www.youtube.com/watch?v=GODj_vgnmuY",
  "https://www.youtube.com/watch?v=z4nWu0kmYzE",
  "https://www.youtube.com/watch?v=SkKPMlCQWiI",
  "https://www.youtube.com/watch?v=5SAkFdHwrdU",
  "https://www.youtube.com/watch?v=5zdMJ9gCkHY",
  "https://www.youtube.com/watch?v=Q391KSf2ER8",
  "https://www.youtube.com/watch?v=OEp_2CnlXsk",
  "https://www.youtube.com/watch?v=BtmvlPi3pnM",
  "https://www.youtube.com/watch?v=hRSYYKEfwoE",
  "https://www.youtube.com/watch?v=1dHWxhHVnog",
  "https://www.youtube.com/watch?v=VVTde5W-vkg",
  "https://www.youtube.com/watch?v=FMi67zFJYyc",
  "https://www.youtube.com/watch?v=CQYj1xu-Oeg",
  "https://www.youtube.com/watch?v=LSCrZc0Ced0",
  "https://www.youtube.com/watch?v=PwyUb98K2T4",
  "https://www.youtube.com/watch?v=wx7Txh0SF6Y",
  "https://www.youtube.com/watch?v=lI-u0pJ-XEM",
  "https://www.youtube.com/watch?v=tv9UIy0RCus",
  "https://www.youtube.com/watch?v=wGKi7YITv84",
  "https://www.youtube.com/watch?v=FQ0ZvlLi3Aw",
  "https://www.youtube.com/watch?v=hlm9JW6hzu4",
  "https://www.youtube.com/watch?v=W61OP5HPSU4",
  "https://www.youtube.com/watch?v=PqS4Ckf01XI",
  "https://www.youtube.com/watch?v=BjiWP6GdaZs",
  "https://www.youtube.com/watch?v=7D6W6Dzsinw",
  "https://www.youtube.com/watch?v=LWW9kyDhSGY",
  "https://www.youtube.com/watch?v=UfDFvG0Px5A",
  "https://www.youtube.com/watch?v=mtxjk_kIi6I",
  "https://www.youtube.com/watch?v=M_U4NYPHuE8",
  "https://www.youtube.com/watch?v=XmheFB3vSmM",
  "https://www.youtube.com/watch?v=b9RSREv2NAE",
  "https://www.youtube.com/watch?v=YcZ4vXgsGh4",
  "https://www.youtube.com/watch?v=MnjMwoJpDag",
  "https://www.youtube.com/watch?v=8zVTrQ54oKA",
  "https://www.youtube.com/watch?v=HV7SQkbOKQQ",
  "https://www.youtube.com/watch?v=urX6QcVFkHY",
  "https://www.youtube.com/watch?v=Q7vthL5hIqo",
  "https://www.youtube.com/watch?v=N0j6NXznknU",
  "https://www.youtube.com/watch?v=u0qTJz2DUos",
  "https://www.youtube.com/watch?v=UioiM5KopzU",
  "https://www.youtube.com/watch?v=sDlGy1SxYGg",
  "https://www.youtube.com/watch?v=dnua8QvCfB0",
  "https://www.youtube.com/watch?v=FG0ydp-1mHE",
  "https://www.youtube.com/watch?v=bCm-EAd_oEI",
  "https://www.youtube.com/watch?v=aZ5lyqb4gUc",
  "https://www.youtube.com/watch?v=2HUy60DWYek",
  "https://www.youtube.com/watch?v=FEXeAlaL9cc",
  "https://www.youtube.com/watch?v=ORouZmGacHk",
  "https://www.youtube.com/watch?v=2v-8DArgo-Y",
  "https://www.youtube.com/watch?v=ZLUku5CPwp8",
  "https://www.youtube.com/watch?v=93nIZ0ARS9Q",
  "https://www.youtube.com/watch?v=zPSl9tS5P-Q",
  "https://www.youtube.com/watch?v=oMuzEO7JjKs",
  "https://www.youtube.com/watch?v=2aqYf7zVYKg",
  "https://www.youtube.com/watch?v=fp7_2kg232k",
  "https://www.youtube.com/watch?v=WuUujmTRqqY",
  "https://www.youtube.com/watch?v=_qkxIrAo0u0",
  "https://www.youtube.com/watch?v=0XrQlX7X0wk",
  "https://www.youtube.com/watch?v=w9PfRf30ouM",
  "https://www.youtube.com/watch?v=Ax67LzJgyH4",
  "https://www.youtube.com/watch?v=DAmynePJN0I",
  "https://www.youtube.com/watch?v=mKRAmFFDGQ4",
  "https://www.youtube.com/watch?v=ozJSqvdCk_o",
  "https://www.youtube.com/watch?v=teWdbHnpUX0",
  "https://www.youtube.com/watch?v=occcxi07ceU",
  "https://www.youtube.com/watch?v=Uc1ARqCGmss",
  "https://www.youtube.com/watch?v=HOgApT7i3K8",
  "https://www.youtube.com/watch?v=DjwfdTD4yGM",
  "https://www.youtube.com/watch?v=IjRm39PNnXY",
  "https://www.youtube.com/watch?v=q91sTl5GC7s",
  "https://www.youtube.com/watch?v=sQ3frOfC4ac",
  "https://www.youtube.com/watch?v=-LtmJW6zFxw",
  "https://www.youtube.com/watch?v=tR0yetZI9W0",
  "https://www.youtube.com/watch?v=iuj_bbhqTbQ",
  "https://www.youtube.com/watch?v=B0oOnl_84hg",
  "https://www.youtube.com/watch?v=VWYzlZfWUaM",
  "https://www.youtube.com/watch?v=fT2gX_J_6s4",
  "https://www.youtube.com/watch?v=KJddGCfK-O4",
  "https://www.youtube.com/watch?v=YSsOoXAOFV0",
  "https://www.youtube.com/watch?v=G-92dYktwdU",
  "https://www.youtube.com/watch?v=MwLhk2RqT48",
  "https://www.youtube.com/watch?v=tqL3bSg8ILw",
  "https://www.youtube.com/watch?v=Fw1irZul_7o",
  "https://www.youtube.com/watch?v=cY7Yn2XTM5c",
  "https://www.youtube.com/watch?v=HTc2XPbn5Zw",
  "https://www.youtube.com/watch?v=kjx654ej-kU",
  "https://www.youtube.com/watch?v=7l7gngZ9D8w",
  "https://www.youtube.com/watch?v=KG3ra0uuksA",
  "https://www.youtube.com/watch?v=V9zgtbXEMYA",
  "https://www.youtube.com/watch?v=gdDFxE4SxgQ",
  "https://www.youtube.com/watch?v=VSAzk4ozJfo",
  "https://www.youtube.com/watch?v=IEi5eLKLrKo",
  "https://www.youtube.com/watch?v=rWSyyWbgvUQ",
  "https://www.youtube.com/watch?v=7lWPmXqRLEI",
  "https://www.youtube.com/watch?v=5XiNtj0Qqfs",
  "https://www.youtube.com/watch?v=Dy5gqkV0_50",
  "https://www.youtube.com/watch?v=MV0U5ow_rlQ",
  "https://www.youtube.com/watch?v=THbmWn3WH1Q",
  "https://www.youtube.com/watch?v=AehsmXKJFks",
  "https://www.youtube.com/watch?v=Ftpd4sPEEiY",
  "https://www.youtube.com/watch?v=yl77i6SNoPg",
  "https://www.youtube.com/watch?v=95JdWmldJgU",
  "https://www.youtube.com/watch?v=pdRUkO7DbMY",
  "https://www.youtube.com/watch?v=yDWcO9XFXfg",
  "https://www.youtube.com/watch?v=PRbAZH9wmZY",
  "https://www.youtube.com/watch?v=ENK01RhJbYQ",
  "https://www.youtube.com/watch?v=BgBOIJX1Dig",
  "https://www.youtube.com/watch?v=tXjxxarqoLs",
  "https://www.youtube.com/watch?v=u-J5fteDrgc",
  "https://www.youtube.com/watch?v=_fZzAfA27-4",
  "https://www.youtube.com/watch?v=fVWhgNo0EL8",
  "https://www.youtube.com/watch?v=3xIartR_n-Y",
  "https://www.youtube.com/watch?v=7-WlcQ7MFUc",
  "https://www.youtube.com/watch?v=2qQChOVdtOc",
  "https://www.youtube.com/watch?v=rrAfdVGKwDM",
  "https://www.youtube.com/watch?v=HF6Jn5Vn_5Y",
  "https://www.youtube.com/watch?v=2x0QMOSLwqA",
  "https://www.youtube.com/watch?v=LfoOsDih1Ik",
  "https://www.youtube.com/watch?v=vPUVCrpZCcA",
  "https://www.youtube.com/watch?v=R7OhsJRpF58",
  "https://www.youtube.com/watch?v=qlubU-FHdb0",
  "https://www.youtube.com/watch?v=K81pKq8OcXA",
  "https://www.youtube.com/watch?v=9I4hNhqZTwU",
  "https://www.youtube.com/watch?v=vK6wH-bPlZ0",
  "https://www.youtube.com/watch?v=fw9VZM-pjTs",
  "https://www.youtube.com/watch?v=Bs7U18-UcHQ",
  "https://www.youtube.com/watch?v=tMhFu8Ky4F8",
  "https://www.youtube.com/watch?v=EFLa_kwQRk8",
  "https://www.youtube.com/watch?v=DeBl_XJACdM",
  "https://www.youtube.com/watch?v=W9IR8eHBoAs",
  "https://www.youtube.com/watch?v=UZ-E7_CVRAI",
  "https://www.youtube.com/watch?v=3M6Vs3DM-jI",
  "https://www.youtube.com/watch?v=BILw37LD9v8",
  "https://www.youtube.com/watch?v=Vl2BQK-HXUc",
  "https://www.youtube.com/watch?v=QRua3v4v_kw",
  "https://www.youtube.com/watch?v=S2UvjRylwZ8",
  "https://www.youtube.com/watch?v=9UlU5lgK5_Q",
  "https://www.youtube.com/watch?v=LUk3gfz8HLM",
  "https://www.youtube.com/watch?v=z3g30-HGOJU",
  "https://www.youtube.com/watch?v=8XxOQ0DTS08",
  "https://www.youtube.com/watch?v=xiPRXWnxPp4",
  "https://www.youtube.com/watch?v=1Bk_nqUQ0fc",
  "https://www.youtube.com/watch?v=1Bk_nqUQ0fc",
  "https://www.youtube.com/watch?v=1Bk_nqUQ0fc",
  "https://www.youtube.com/watch?v=1Bk_nqUQ0fc",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=jwGh_RhgvM8",
  "https://www.youtube.com/watch?v=pdhbu5e-zOw",
  "https://www.youtube.com/watch?v=uv4nAQOQM1Q",
  "https://www.youtube.com/watch?v=Y4szpAre16g",
  "https://www.youtube.com/watch?v=bflR2Qb2G04",
  "https://www.youtube.com/watch?v=WL35FAGyEtI",
  "https://www.youtube.com/watch?v=k-skV9Ilgf4",
  "https://www.youtube.com/watch?v=IdutXs1ZdgY",
  "https://www.youtube.com/watch?v=C2zh7nicC3E",
  "https://www.youtube.com/watch?v=C2zh7nicC3E",
  "https://www.youtube.com/watch?v=C2zh7nicC3E",
  "https://www.youtube.com/watch?v=C2zh7nicC3E",
  "https://www.youtube.com/watch?v=C2zh7nicC3E",
  "https://www.youtube.com/watch?v=C2zh7nicC3E",
  "https://www.youtube.com/watch?v=C2zh7nicC3E",
  "https://www.youtube.com/watch?v=C2zh7nicC3E",
  "https://www.youtube.com/watch?v=C2zh7nicC3E",
  "https://www.youtube.com/watch?v=C2zh7nicC3E",
  "https://www.youtube.com/watch?v=C2zh7nicC3E",
  "https://www.youtube.com/watch?v=DabosoO4gKM",
  "https://www.youtube.com/watch?v=DabosoO4gKM",
  "https://www.youtube.com/watch?v=DabosoO4gKM",
  "https://www.youtube.com/watch?v=DabosoO4gKM",
  "https://www.youtube.com/watch?v=DabosoO4gKM",
  "https://www.youtube.com/watch?v=DabosoO4gKM",
  "https://www.youtube.com/watch?v=3MnrAw8Icfs",
  "https://www.youtube.com/watch?v=3MnrAw8Icfs",
  "https://www.youtube.com/watch?v=3MnrAw8Icfs",
  "https://www.youtube.com/watch?v=3MnrAw8Icfs",
  "https://www.youtube.com/watch?v=3MnrAw8Icfs",
  "https://www.youtube.com/watch?v=3MnrAw8Icfs",
  "https://www.youtube.com/watch?v=3i-vwqNAp_E",
  "https://www.youtube.com/watch?v=3i-vwqNAp_E",
  "https://www.youtube.com/watch?v=3i-vwqNAp_E",
  "https://www.youtube.com/watch?v=3i-vwqNAp_E",
  "https://www.youtube.com/watch?v=3i-vwqNAp_E",
  "https://www.youtube.com/watch?v=YrQBisKjgIU",
  "https://www.youtube.com/watch?v=YrQBisKjgIU",
  "https://www.youtube.com/watch?v=YrQBisKjgIU",
  "https://www.youtube.com/watch?v=dfGcVX5ljiw",
  "https://www.youtube.com/watch?v=RdGgbY0U8Q8",
  "https://www.youtube.com/watch?v=Foik6bl6zLE",
  "https://www.youtube.com/watch?v=9HBG0vdm1sk",
  "https://www.youtube.com/watch?v=NxZcxparjmM",
  "https://www.youtube.com/watch?v=Tsriwuf-jjw",
  "https://www.youtube.com/watch?v=2mGctAvbbe8",
  "https://www.youtube.com/watch?v=1AiF2VwKEYE",
  "https://www.youtube.com/watch?v=P3nOIwmrltY",
  "https://www.youtube.com/watch?v=JExWAcycjQQ",
  "https://www.youtube.com/watch?v=NvMlbFeUPyw",
  "https://www.youtube.com/watch?v=QNSM24ukcF4",
  "https://www.youtube.com/watch?v=VjBV0EDiHYk",
  "https://www.youtube.com/watch?v=ktYFbptXM8Y",
  "https://www.youtube.com/watch?v=Mu8E9LjdLM4",
  "https://www.youtube.com/watch?v=aC4VeO7YndM",
  "https://www.youtube.com/watch?v=RumlVhNNpqc",
  "https://www.youtube.com/watch?v=VItMnVQ-9bM",
  "https://www.youtube.com/watch?v=jXYyV8TDp4s",
  "https://www.youtube.com/watch?v=fI48G-xAIcc",
  "https://www.youtube.com/watch?v=D9QTgQICojQ",
  "https://www.youtube.com/watch?v=dZGVp7EZ-NM", // Microsoft Agent Plays
  "https://www.youtube.com/watch?v=MlqT79QfrcM",
  "https://www.youtube.com/watch?v=VItMnVQ-9bM",
  "https://www.youtube.com/watch?v=9GlgqAeJ89Q",
  "https://www.youtube.com/watch?v=kJKM4uQs9WQ",
  "https://www.youtube.com/watch?v=crX2VvHkfjE",
  "https://www.youtube.com/watch?v=PSly8XQ-TQM",
  "https://www.youtube.com/watch?v=nS-3kpM9Ovg",
  "https://www.youtube.com/watch?v=ye1IZq1hPFE",
  "https://www.youtube.com/watch?v=D0hQp05QlaQ",
  "https://www.youtube.com/watch?v=6dQioyja4e8",
  "https://www.youtube.com/watch?v=QWdm6mLRJxA",
  //"https://www.youtube.com/watch?v=VRTuoilurZ",
  "https://www.youtube.com/watch?v=d68-HZjoSQw",
  "https://www.youtube.com/watch?v=dcFCucIQsv8",
  "https://www.youtube.com/watch?v=AdESAUZUJr8",
  "https://www.youtube.com/watch?v=OOntnyuecks",
  "https://www.youtube.com/watch?v=qK99INAXX2w",
  "https://www.youtube.com/watch?v=xA9rEtE895w",
  "https://www.youtube.com/watch?v=1NnJnPdRLlI",
  "https://www.youtube.com/watch?v=GnXiCbmBe_M",
  "https://www.youtube.com/watch?v=OUr9_Ejhx9U",
  "https://www.youtube.com/watch?v=f0KB3bkmbOU",
  "https://www.youtube.com/watch?v=cSyMKD0WUmY",
  "https://www.youtube.com/watch?v=xhXfbKaR5Qc",
  "https://www.youtube.com/watch?v=Nx1Q9m2EYOQ",
  "https://www.youtube.com/watch?v=5J0v7PdMHQY",
  "https://www.youtube.com/watch?v=pnhuAmh9K1E",
  "https://www.youtube.com/watch?v=i_wysAmPp7M",
  "https://www.youtube.com/watch?v=g1HNcG0gZrw",
  "https://www.youtube.com/watch?v=wooz39ArOPo",
  "https://www.youtube.com/watch?v=oIej7VudwMg",
  "https://www.youtube.com/watch?v=zs8Eu6Jh_Fo",
  "https://www.youtube.com/watch?v=p59UV_MGmvs",
  "https://www.youtube.com/watch?v=GikrLQBDJr4",
  "https://www.youtube.com/watch?v=n0WNbzdBzSM",
  "https://www.youtube.com/watch?v=3GI136Z82Nc",
  "https://www.youtube.com/watch?v=KB5e6OyfCws",
  "https://www.youtube.com/watch?v=0_KBkFzgEdo",
  "https://www.youtube.com/watch?v=7KV88KarKg0",
  "https://www.youtube.com/watch?v=qKw8GaFaLoA",
  "https://www.youtube.com/watch?v=MmGAxGaS_cg",
  "https://www.youtube.com/watch?v=otgKlXbBkG8",
  "https://www.youtube.com/watch?v=pj6tI8l4YLI",
  "https://www.youtube.com/watch?v=M3Ky21v3RC8",
  "https://www.youtube.com/watch?v=CWIqBU4QlGk",
  "https://www.youtube.com/watch?v=w4Zs5hVi3zM",
  "https://www.youtube.com/watch?v=rWU48g7scMo",
  "https://www.youtube.com/watch?v=UOGwOPKdO6A",
  "https://www.youtube.com/watch?v=KQtdZh3cGrc",
  "https://www.youtube.com/watch?v=UOGwOPKdO6A",
  "https://www.youtube.com/watch?v=KQtdZh3cGrc",
  "https://www.youtube.com/watch?v=0yRcRVt470I",
  "https://www.youtube.com/watch?v=bHHr76V4sDQ",
  "https://www.youtube.com/watch?v=wL1GZTqsJT8",
  "https://www.youtube.com/watch?v=dRfL4IRKRzo",
  "https://www.youtube.com/watch?v=5TYBN4vP8U4",
  "https://www.youtube.com/watch?v=LpGUS98ot3c",
  "https://www.youtube.com/watch?v=ggvzhhx11NI",
  "https://www.youtube.com/watch?v=_VRBA64vDD4",
  "https://www.youtube.com/watch?v=XyNJZ8PEWRM",
  "https://www.youtube.com/watch?v=CwUeKJt0j9o",
  "https://www.youtube.com/watch?v=ECEx2zQjaDc",
  "https://www.youtube.com/watch?v=luIwRawbmi0",
  "https://www.youtube.com/watch?v=lM4fBo8EMiE",
  "https://www.youtube.com/watch?v=EbNGrNF87AA",
  "https://www.youtube.com/watch?v=vPzCh5US-c4",
  "https://www.youtube.com/watch?v=trerahVOkuQ",
  "https://www.youtube.com/watch?v=1Xr5SfqWMmc",
  "https://www.youtube.com/watch?v=O7K3tcCZwUY",
  "https://www.youtube.com/watch?v=TitzY-BwoUY",
  "https://www.youtube.com/watch?v=6DJh-uSK9VQ",
  "https://www.youtube.com/watch?v=yl0URvSeGQs",
  "https://www.youtube.com/watch?v=T9ZadKJiHIA",
  "https://www.youtube.com/watch?v=3KM61CZTnOM",
  "https://www.youtube.com/watch?v=yVvd_IdkbkE",
  "https://www.youtube.com/watch?v=ljdupMIfAd4",
  "https://www.youtube.com/watch?v=DgYsnJnQJqU",
  "https://www.youtube.com/watch?v=OZ3LPIcRuQM",
  "https://www.youtube.com/watch?v=y0NAhZZ9QlU",
  "https://www.youtube.com/watch?v=8afdPc3Nnag",
  "https://www.youtube.com/watch?v=47lQueyRCOg",
  "https://www.youtube.com/watch?v=eFsaLhsdgLY",
  "https://www.youtube.com/watch?v=2bdGZxzr5rI",
  "https://www.youtube.com/watch?v=H8j8UFUNRWM",
  "https://www.youtube.com/watch?v=QodUVp53Hgg",
  "https://www.youtube.com/watch?v=yA4rw6GMr0c",
  "https://www.youtube.com/watch?v=7RT22IJs2k8",
  "https://www.youtube.com/watch?v=vFWNNXJJQ3o",
  "https://www.youtube.com/watch?v=6FmijN4BY4c",
  "https://www.youtube.com/watch?v=ybABNY3hwNU",
  "https://www.youtube.com/watch?v=W7aXWQFQlVg",
  "https://www.youtube.com/watch?v=ixK995Fnu1k",
  "https://www.youtube.com/watch?v=XfkoZgnR2vo",
  "https://www.youtube.com/watch?v=FlD3pOu8Sm8",
  "https://www.youtube.com/watch?v=VcgX_koOHaA",
  "https://www.youtube.com/watch?v=4mhsINjjl5c",
  "https://www.youtube.com/watch?v=2gGF7Yfg9O0",
  "https://www.youtube.com/watch?v=kZK-2qekq8s",
  "https://www.youtube.com/watch?v=5hT9k7iNTGQ",
  "https://www.youtube.com/watch?v=hmkuvXgxRsw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=LdLbRe09qas", // Android Trash
  "https://www.youtube.com/watch?v=u39KUBd2Q9I",
  "https://www.youtube.com/watch?v=vdCSSkMinvg",
  "https://www.youtube.com/watch?v=4PAiqcv08cU",
  "https://www.youtube.com/watch?v=g-r1Ug-hduw",
  "https://www.youtube.com/watch?v=yZtjYbwsTg8",
  "https://www.youtube.com/watch?v=HemR9r2dhZQ",
  "https://www.youtube.com/watch?v=tJEk1GAqQTg",
  "https://www.youtube.com/watch?v=Y4Ajyd6Hc0E",
  "https://www.youtube.com/watch?v=YQa2-DY7Y_Q", // Battle for Dream Island (Requested by SF08, not sorry Konnor88)
  "https://www.youtube.com/watch?v=8LY0o_CgPR8",
  "https://www.youtube.com/watch?v=JfzEO9-Zlhw",
  "https://www.youtube.com/watch?v=rhkgOXksmaY",
  "https://www.youtube.com/watch?v=cdmVPHdpECM",
  "https://www.youtube.com/watch?v=xHI-iKm31us",
  "https://www.youtube.com/watch?v=6vGgsXO57bs",
  "https://www.youtube.com/watch?v=Ze1p7bYXw0g",
  "https://www.youtube.com/watch?v=g0wCF04ddnw",
  "https://www.youtube.com/watch?v=Eg5Ja23HfhY",
  "https://www.youtube.com/watch?v=yhkDgX2b7po",
  "https://www.youtube.com/watch?v=U4sp10HUI6Y",
  "https://www.youtube.com/watch?v=BQBmKvRd0B0",
  "https://www.youtube.com/watch?v=yZqh3l3-pTM",
  "https://www.youtube.com/watch?v=pf9FHBM0SLQ",
  "https://www.youtube.com/watch?v=nAKk0gm73K0",
  "https://www.youtube.com/watch?v=Xmh7M7TXDRE",
  "https://www.youtube.com/watch?v=x4K1xKHwp0E",
  "https://www.youtube.com/watch?v=4pR6Y3_ahS8",
  "https://www.youtube.com/watch?v=J9udiROQchg",
  "https://www.youtube.com/watch?v=6OfKK5Rt3fY",
  "https://www.youtube.com/watch?v=GfFkiGgY6Pk",
  "https://www.youtube.com/watch?v=KLwgTM7HBhw",
  "https://www.youtube.com/watch?v=PigChYq_FrM",
  "https://www.youtube.com/watch?v=ye_HKD_C5o0", // BUT WAIT, THERES MORE
  "https://www.youtube.com/watch?v=26FJTtLOu2s", // BFDIA
  "https://www.youtube.com/watch?v=cv1Qz0GCaxw",
  "https://www.youtube.com/watch?v=hsprecnxSsE",
  "https://www.youtube.com/watch?v=dXUE7OFij_I",
  "https://www.youtube.com/watch?v=E174ogB49xs",
  "https://www.youtube.com/watch?v=4q77g4xo9ic",
  "https://www.youtube.com/watch?v=YrsRLT3u0Cg",
  "https://www.youtube.com/watch?v=kaFpfSHllOw",
  "https://www.youtube.com/watch?v=RZB7nTzSl3g",
  "https://www.youtube.com/watch?v=rFUwZ0Vtims",
  "https://www.youtube.com/watch?v=mmlPwe71JkA", // IDFB next
  "https://www.youtube.com/watch?v=2Jw0dhwmi3o",
  "https://www.youtube.com/watch?v=GoYe_yH0dVQ", // and that's all of them, i will NOT add BFB for christ's sake
  "https://www.youtube.com/watch?v=UVUatYPScjw", // rocko's modern life
  "https://www.youtube.com/watch?v=JoyB9zHYxi8",
  "https://www.youtube.com/watch?v=zV7s4Dzq8wE",
  "https://www.youtube.com/watch?v=rc4HyJ0XMgY",
  "https://www.youtube.com/watch?v=exDjH1QJOEs", // PGG and PGG Rebooted (rated Mature Audiences)
  "https://www.youtube.com/watch?v=m9JtPsnaakM",
  "https://www.youtube.com/watch?v=qt7C-Pcfw-U",
  "https://www.youtube.com/watch?v=tAjNijZHeC0",
  "https://www.youtube.com/watch?v=aiIDeirsJoY",
  "https://www.youtube.com/watch?v=OuFcuT4jSbE",
  "https://www.youtube.com/watch?v=_ZzvFCLHFAg",
  "https://www.youtube.com/watch?v=WiRdCDhaNTw",
  "https://www.youtube.com/watch?v=28DdmrivqcQ",
  "https://www.youtube.com/watch?v=i7GTdZH6km8",
  "https://www.youtube.com/watch?v=49ODdYy9yAI",
  "https://www.youtube.com/watch?v=92jKwR-M93I",
  "https://www.youtube.com/watch?v=eniRs2KpC70",
  "https://www.youtube.com/watch?v=Bm89dja7kNA",
  "https://www.youtube.com/watch?v=bMhXrVh6GZA",
  "https://www.youtube.com/watch?v=tXx2omKPXpA",
  "https://www.youtube.com/watch?v=TpPdjZo0tGg",
  "https://www.youtube.com/watch?v=ee_qZWa9DOw",
  "https://www.youtube.com/watch?v=Ln5T_j1o32k",
  "https://www.youtube.com/watch?v=h85K_p0jJ4o",
  "https://www.youtube.com/watch?v=Lgh0kIUln-o",
  "https://www.youtube.com/watch?v=6TdLkIOTkdA",
  "https://www.youtube.com/watch?v=jwChUXVMmaQ",
  "https://www.youtube.com/watch?v=ElLfUsh-NZw",
  "https://www.youtube.com/watch?v=zgAzpu3zZNo",
  "https://www.youtube.com/watch?v=hANfAmCJOAM",
  "https://www.youtube.com/watch?v=NqIJoVay-aU",
  "https://www.youtube.com/watch?v=W7br-y30kBs",
  "https://www.youtube.com/watch?v=uLnq-vOXFUc",
  "https://www.youtube.com/watch?v=WIXWIollTOE",
  "https://www.youtube.com/watch?v=xNIXsaIO-NE",
  "https://www.youtube.com/watch?v=4bijWcMnKyE",
  "https://www.youtube.com/watch?v=DV6kqZSY5WE", // Windows Desktop Skits
  "https://www.youtube.com/watch?v=eO2LgSSTXqM",
  "https://www.youtube.com/watch?v=FeorAMjcV7E",
  "https://www.youtube.com/watch?v=lex-Ap58niY",
  "https://www.youtube.com/watch?v=exter6QAGS8",
  "https://www.youtube.com/watch?v=XBRxcnne5f4",
  "https://www.youtube.com/watch?v=dxtwzr-4UYo",
  "https://www.youtube.com/watch?v=1q9phQT3-wc",
  "https://www.youtube.com/watch?v=TD8InhMS1io",
  "https://www.youtube.com/watch?v=Jn6CXHufyos",
  "https://www.youtube.com/watch?v=fcPsjkhJLyw",
  "https://www.youtube.com/watch?v=oxir0CFO_SU",
  "https://www.youtube.com/watch?v=UitVP8YClNc",
  "https://www.youtube.com/watch?v=-y9TxoTt5eQ", // SF08 Remakes
  "https://www.youtube.com/watch?v=z1ApOo20pU4",
  "https://www.youtube.com/watch?v=TafPUncacTE",
  "https://www.youtube.com/watch?v=wNfMpAR-Oog",
  "https://www.youtube.com/watch?v=iKCNlur5wRY",
  "https://www.youtube.com/watch?v=yCRHUCSI20M",
  "https://www.youtube.com/watch?v=sCKONPsB_Qc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc", // Controversial Fights
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=UGRVQ7KtEK4", // MS Brother
  "https://www.youtube.com/watch?v=XLkwqFonfOg",
  "https://www.youtube.com/watch?v=6JNqciPFPaw",
  "https://www.youtube.com/watch?v=ME28jhesxoc",
  "https://www.youtube.com/watch?v=KD71GxsfHlo",
  "https://www.youtube.com/watch?v=gKjbU1z1OlU",
  "https://www.youtube.com/watch?v=rjcJVX2fNFA", // MS Survivor
  "https://www.youtube.com/watch?v=5hzRfTXSiKA",
  "https://www.youtube.com/watch?v=xc6N_0YT2r8",
  "https://www.youtube.com/watch?v=lLpp8VPUUfk"
];

const log = require("./log.js").log;
const Ban = require("./ban.js");
const Utils = require("./utils.js");
const io = require("./index.js").io;
//const io2 = require('./index.js').io2;
const settings = require("./settings.json");
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

exports.beat = function() {
  io.on("connection", function(socket) {
    new User(socket);
  });
  /*io2.on('connection', function(socket) {
new User(socket);
});*/
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
    } else if (hours == 23 && minutes >= 50) {
      this.vid = "kQsoV69uGIY";
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
    //io2.to(this.rid).emit(cmd, data);
  }
}

function newRoom(rid, prefs) {
  rooms[rid] = new Room(rid, prefs);
  log.info.log("debug", "newRoom", {
    rid: rid,
  });
}

var godword = Utils.guidGen();
setInterval(function() {
  console.log("Godword: " + godword);
}, 30000);
let userCommands = {
  godmode: function(word) {
    let success = word == godword;
    if (success) {
      this.private.runlevel = 3;
      this.socket.emit("admin");
    } else {
      this.socket.emit("alert", { title: "epic fail", msg: 'Wrong password. Did you try "Password"?', button: "Yes" });
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
      this.socket.emit("alert", { title: "epic fail", msg: "That sticker doesn't exist. Try shoving a sticker up your ass.", button: "Ok I'll" });
    }
  },
  video: function(vidRaw) {
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.emit("video", {
      guid: this.guid,
      vid: vid,
    });
  },
  midi: function(vidRaw) {
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.updateUser(this);
    this.room.emit("midi", {
      guid: this.guid,
      midi: vid,
    });
  },
  video_legacy: function(vidRaw) {
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
  img: function(vidRaw) {
    if (vidRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        vid: "bonziacid.html",
      });
      return;
    }
    if (vidRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        vid: "bonziacid.html",
      });
      return;
    }
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.emit("img", {
      guid: this.guid,
      vid: vid,
    });
  },
  iframe: function(vidRaw) {
    if (vidRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        vid: "bonziacid.html",
      });
      return;
    }
    if (vidRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        vid: "bonziacid.html",
      });
      return;
    }
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.emit("iframe", {
      guid: this.guid,
      vid: vid,
    });
  },
  letsplay: function(vidRaw) {
    if (vidRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        vid: "bonziacid.html",
      });
      return;
    }
    if (vidRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        vid: "bonziacid.html",
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
        vid: "bonziacid.html",
      });
      return;
    }
    if (vidRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        vid: "bonziacid.html",
      });
      return;
    }
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.emit("youtube", {
      guid: this.guid,
      vid: vid,
    });
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
      } else if (hours == 23 || (hours == 22 && minutes >= 9)) {
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

  bitview: function(vidRaw) {
    if (vidRaw.includes('"')) {
      this.room.emit("iframe", {
        guid: this.guid,
        vid: "bonziacid.html",
      });
      return;
    }
    if (vidRaw.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        vid: "bonziacid.html",
      });
      return;
    }
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.emit("bitview", {
      guid: this.guid,
      vid: vid,
    });
  },
  vlare: function(vidRaw) {
    this.socket.emit("alert", { title: "you bitch", msg: "Vlare shut down a long time ago so this command is non-functional.", button: "Ill shove BitView on my ass." });
  },
  manchild: function(vidRaw) {
    this.socket.emit("alert", { title: "you bitch", msg: "ziggymoncher is ASS. (command got deprecated)", button: "Ok." });
  },
  backflip: function(swag) {
    this.room.emit("backflip", {
      guid: this.guid,
      swag: swag == "swag",
    });
  },
  swag: function(swag) {
    this.room.emit("swag", {
      guid: this.guid,
    });
  },
  bang: function(swag) {
    this.room.emit("bang", {
      guid: this.guid,
    });
  },
  earth: function(swag) {
    this.room.emit("earth", {
      guid: this.guid,
    });
  },
  grin: function(swag) {
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
  wave: function(swag) {
    this.room.emit("wave", {
      guid: this.guid,
    });
  },
  nod: function(swag) {
    this.room.emit("nod", {
      guid: this.guid,
    });
  },
  acknowledge: function(swag) {
    this.room.emit("nod", {
      guid: this.guid,
    });
  },
  shrug: function(swag) {
    this.room.emit("shrug", {
      guid: this.guid,
    });
  },
  greet: function(swag) {
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
      this.socket.emit("alert", "nice try");
    } else {
      this.room.background = text;
      this.room.emit("background", { background: text });
    }
  },
  confused: function(swag) {
    this.room.emit("confused", {
      guid: this.guid,
    });
  },
  sad: function(swag) {
    this.room.emit("sad", {
      guid: this.guid,
    });
  },
  banana: function(swag) {
    this.room.emit("banana", {
      guid: this.guid,
    });
  },
  surprised: function(swag) {
    this.room.emit("surprised", {
      guid: this.guid,
    });
  },
  laugh: function(swag) {
    this.room.emit("laugh", {
      guid: this.guid,
    });
  },
  write: function(swag) {
    this.room.emit("write", {
      guid: this.guid,
    });
  },
  write_once: function(swag) {
    this.room.emit("write_once", {
      guid: this.guid,
    });
  },
  write_infinite: function(swag) {
    this.room.emit("write_infinite", {
      guid: this.guid,
    });
  },
  swag: function(swag) {
    this.room.emit("swag", {
      guid: this.guid,
    });
  },
  think: function(swag) {
    this.room.emit("think", {
      guid: this.guid,
    });
  },
  surfjoin: function(swag) {
    this.room.emit("surfjoin", {
      guid: this.guid,
    });
  },
  surfleave: function(swag) {
    this.room.emit("surfleave", {
      guid: this.guid,
    });
  },
  surf: function(swag) {
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
      } else {
        let bc = settings.bonziColors2;
        this.public.color = bc[Math.floor(Math.random() * bc.length)];
      }
    } else {
      if (typeof color != "undefined") {
        if (settings.bonziColors.indexOf(color) == -1) return;

        this.public.color = color;
      } else {
        let bc = settings.bonziColors;
        this.public.color = bc[Math.floor(Math.random() * bc.length)];
      }
    }
    this.public.color_cross = 'none';
    this.room.updateUser(this);
  },
  crosscolor: function(color) {
    var clrurl = this.private.sanitize ? sanitize(color) : color;
    this.public.color = "empty";
    this.public.color_cross = clrurl;
    this.room.updateUser(this);
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
  wtf: function(text) {
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
  knowledge: function(text) {
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
  onute: function(text) {
    this.room.emit("rant");
  },
  "2018": function(text) {
    this.room.emit("talk", {
      text: `This generation sucks! Adolescents are filled with pornographic obsessions. Since 2018, i hate people like them nowadays. They think they're so funny with their 'funny' hentai profile pictures, and pictures like sonic using a hentai face. It's disgusting, I hate it.`,
      guid: this.guid,
    });
  },
  behh: function(text) {
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
      const url =
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env['RECAPTCHA_SECRET']}&response=${data.token}`;

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
      if (typeof rooms[rid] == "undefined") {
        // Clone default settings
        var tmpPrefs = JSON.parse(JSON.stringify(settings.prefs.private));
        // Set owner
        tmpPrefs.owner = this.guid;
        newRoom(rid, tmpPrefs);
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
        rid = Utils.guidGen();
        roomsPublic.push(rid);
        // Create room
        newRoom(rid, settings.prefs.public);
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
        } else if (hours == 23) {
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
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g) ||
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
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g) ||
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
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g) ||
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
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g) ||
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
        } else if (hours == 23 && minutes >= 50) {
          //tvhook.send("BonziTV is now off air.");
          this.room.emit("replaceTVWithURL", {
            id: "kQsoV69uGIY",
            hourAmount: 23,
            minuteAmount: 50,
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
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g) ||
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
      data.text.match(/l 0 l/gi)
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
        vid: "bonziacid.html",
      });
      return;
    }
    if (text.match(/\/\/:/gi) && text.includes("'")) {
      this.room.emit("iframe", {
        guid: this.guid,
        vid: "bonziacid.html",
      });
      return;
    }
    if (text.match(/Seamus/gi)) {
      text = text.replace(/Seamus/gi, "Semen");
    } else if (text.match(/dickrider/gi)) {
      text = "Hey everyone I just hope you have a very good day and not get involved in drama ok thanks bye";
      this.cantTalkAnymore = true;
    }
    /*
   (text.match(/.lol/gi) || text.match(/,lol/gi) || text.match(/lol is/gi) || text.match(/bonzi./gi) || text.match(/bonzi,/gi) || text.match(/crem/gi) || text.match(/72.23/gi) || text.match(/72. 23/gi) || text.match(/72 .23/gi) || text.match(/72 . 23/gi) || text.match(/mong/gi) || text.match(/hitler/gi) || text.match(/hi itler/gi) || text.match(/hitl/gi) || text.match(/h itl/gi) || text.match(/hit l/gi) || text.match(/adolf/gi) || text.match(/hi tl/gi) || text.match(/hi itl/gi) || text.match(/hit ler/gi) || text.match(/hit lurr/gi) || text.match(/kkk/gi) || text.match(/kk k/gi) || text.match(/nig/gi) || text.match(/nih/gi) || text.match(/nik/gi) || text.match(/nij/gi) || text.match(/nihg/gi) || text.match(/nie/gi) || text.match(/nieg/gi) || text.match(/k k k/gi) || text.match(/kaykaykay/gi) || text.match(/kkaykay/gi) || text.match(/gas the/gi) || text.match(/gahs/gi) || text.match(/ga s/gi) || text.match(/gah s/gi) || text.match(/kkkay/gi) || text.match(/kay kaykay/gi) || text.match(/kay kay kay/gi) || text.match(/kaykay kay/gi) || text.match(/heil/gi) ||
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
}*/
    if (!/^[~`!@#$%^&*()_+=\w[\]\\{}|;':",.\//<>?\s\w&.\-]*$/i.test(text)) {
      text = "You can only have english numeric, special and alphabetic characters.<br><small>Only you can see this.</small>";
      this.socket.emit("talk", {
        guid: this.guid,
        text: text,
        name: name,
        say: "-e",
      });
      return;
    }
    if (text.length <= this.room.prefs.char_limit && text.length > 0) {
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
              }, 1000);
            }
          } else {
            if (!_this.connectLogCool || command.match(/move/gi) || command.match(/colorcustom/gi)) {
              commandFunc.apply(this, args);
              _this.connectLogCool = true;
              setTimeout(function() {
                _this.connectLogCool = false;
              }, 1000);
            }
          }
        } else {
          this.socket.emit("info", {
            reason: "runlevel",
          });
          this.socket.emit("alert", { title: "epic fail", msg: "You do not have permission to this command.", button: "WHY?!" });
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
      this.socket.emit("alert", { title: "oh fuck", msg: "That command does not exist.", button: "OK" });
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
