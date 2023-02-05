var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Bonzi_dragStart, _Bonzi_mouseHeld, _Bonzi_mouseMoved;
import BonziData from "./BonziData.js";
import BonziSprite from "./BonziSprite.js";
import { socket } from "./Chat.js";
export default class Bonzi {
    constructor(id, userPublic) {
        this.data = BonziData;
        this.mute = false;
        this.eventQueue = [];
        // events call run on every call and run update every frame after it
        // it moves onto the next frame when nextEvent is called
        this.eventTypes = {
            text: {
                run({ bonzi, options }) {
                    bonzi.$dialog.css("display", "block");
                    bonzi.talk(options.text, options.say);
                },
                update({ bonzi }) {
                    if (bonzi.$dialog.css("display") === "none") {
                        bonzi.nextEvent();
                    }
                }
            },
            idle: {
                run({ bonzi }) {
                    if (bonzi.sprite.isIdle) {
                        bonzi.nextEvent();
                    }
                    else {
                        bonzi.sprite.idle();
                    }
                },
                update({ bonzi }) {
                    if (bonzi.sprite.isIdle) {
                        bonzi.nextEvent();
                    }
                }
            },
            anim: {
                run({ bonzi, options }) {
                    var _a;
                    (_a = options.ticks) !== null && _a !== void 0 ? _a : (options.ticks = BonziData.sprite.animations[options.anim].length);
                    bonzi.sprite.play(options.anim);
                    if (options.anim == "surfIn") {
                      
                      var d = this;
                          setTimeout(function() {
                            if (d.color == "diogo") {
                              var a = new Audio("diogo_surfintro.wav");
                              a.play();
                            }
                          }, 100),
                          setTimeout(function() {
                            if (d.color == "god") {
                              var a = new Audio("god_surfintro.wav");
                              a.play();
                            }
                          }, 100),
                          setTimeout(function() {
                            if (d.color === "clippy") {
                              var a = new Audio("clippy_surfintro.wav");
                              a.play();
                            } else if (d.color === "peedy") {
                              var a = new Audio("peedy_surfintro.wav");
                              a.play();
                            } else if (d.color === "merlin") {
                              var a = new Audio("merlin_surfintro.mp3");
                              a.play();
                            } else if (d.color === "genie") {
                              var a = new Audio("genie_surfintro.ogg");
                              a.play();
                            } else if (d.color === "robby") {
                              var a = new Audio("robby_surfintro.ogg");
                              a.play();
                            } else if (d.color === "qmark") {
                              var a = new Audio("qmark_surfintro.wav");
                              a.play();
                            } else if (d.color === "kairu") {
                              var a = new Audio("kairu_surfintro.wav");
                              a.play();
                            }
                          }, 100),
                          setTimeout(function() {
                            if (d.color == "max") {
                              var a = new Audio("max_surfintro.wav");
                              a.play();
                            }
                          }, 800),
                          setTimeout(function() {
                            if (d.color != "clippy" && d.color != "peedy" && d.color != "robby" && d.color != "merlin" && d.color != "genie" && d.color != "rover" && d.color != "qmark" && d.color != "genius" && d.color != "kairu" && d.color != "f1" && d.color != "losky" && d.color != "max") {
                              if (d.color == "diogo") {
                                var a = new Audio("diogo_jumpoff.wav");
                                a.play(); 
                              } else {
                                var a = new Audio("jump_off.mp3");
                                a.play();
                              }
                            }
                          }, 1700);
                    }
                },
                update({ bonzi, options, event }) {
                    if (event.timer >= options.ticks) {
                        bonzi.nextEvent();
                    }
                }
            },
            speak: {
                run({ bonzi, options }) {
                    bonzi.goingToSpeak = true;
                    speak.play(options.text, {
                        "pitch": bonzi.userPublic.pitch,
                        "speed": bonzi.userPublic.speed
                    }, () => {
                        bonzi.nextEvent();
                    }, (source) => {
                        if (!bonzi.goingToSpeak)
                            source.stop();
                        bonzi.voiceSource = source;
                    });
                }
            },
            showText: {
                run({ bonzi, options }) {
                    bonzi.$dialog.css("display", "block");
                    bonzi.$dialogCont.html(options.text);
                    bonzi.nextEvent();
                }
            },
            sound: {
                run({ bonzi, options }) {
                    const audio = new Audio(options.src);
                    audio.play();
                    audio.addEventListener("ended", function () {
                        audio.remove();
                        bonzi.nextEvent();
                    });
                }
            },
            clearText: {
                run({ bonzi }) {
                    bonzi.clearDialog();
                    bonzi.nextEvent();
                }
            }
        };
        _Bonzi_dragStart.set(this, void 0);
        _Bonzi_mouseHeld.set(this, false);
        _Bonzi_mouseMoved.set(this, false);
        this.userPublic = userPublic || {
            name: "BonziBUDDY",
            color: "purple",
            speed: 175,
            pitch: 50,
            voice: "en-us",
            saturation: 0,
            hue: 0,
        };
        this.latestMessage = "";
        this.color = this.userPublic.color;
        this.id = id !== null && id !== void 0 ? id : String(Math.random());
        // ========================================================================
        // HTML POPULATION
        // ========================================================================
        Bonzi.$container.append(`
			<div id='bonzi_${this.id}' class='bonzi'>
				<div class='bonzi_name'></div>
					<div class='bonzi_placeholder'></div>
				<div style='display:none' class='bubble'>
					<p class='bubble-content'></p>
				</div>
			</div>
		`);
        this.selElement = "#bonzi_" + this.id;
        this.selDialog = this.selElement + " > .bubble";
        this.selDialogCont = this.selElement + " > .bubble > p";
        this.selNametag = this.selElement + " > .bonzi_name";
        this.selCanvas = this.selElement + " > .bonzi_placeholder";
        $(this.selCanvas)
            .width(this.data.size.x)
            .height(this.data.size.y);
        this.$element = $(this.selElement);
        this.$canvas = $(this.selCanvas);
        this.$dialog = $(this.selDialog);
        this.$dialogCont = $(this.selDialogCont);
        this.$nametag = $(this.selNametag);
        this.updateName();
        $.data(this.$element[0], "parent", this);
        this.sprite = new BonziSprite({
            bonzi: this,
            color: this.color,
            hue: this.hue,
            saturation: this.saturation
        });
        // ========================================================================
        // EVENTS
        // ========================================================================
        this.$canvas.mousedown((e) => {
            if (e.which === 1) {
                __classPrivateFieldSet(this, _Bonzi_mouseHeld, true, "f");
                __classPrivateFieldSet(this, _Bonzi_mouseMoved, false, "f");
                __classPrivateFieldSet(this, _Bonzi_dragStart, {
                    x: e.pageX - this.x,
                    y: e.pageY - this.y
                }, "f");
            }
        }).on("mousedown", (e) => {
            if (e.button === 2) {
                //this.mute = true;
                //this.cancel();
                //this.runEvents([{ type: "anim", anim: "sadStart", ticks: 30 }]);
            }
        });
        $(window).mousemove((e) => {
            // code for dragging
            if (__classPrivateFieldGet(this, _Bonzi_mouseHeld, "f") && __classPrivateFieldGet(this, _Bonzi_dragStart, "f")) {
                this.move(e.pageX - __classPrivateFieldGet(this, _Bonzi_dragStart, "f").x, e.pageY - __classPrivateFieldGet(this, _Bonzi_dragStart, "f").y);
                __classPrivateFieldSet(this, _Bonzi_mouseMoved, true, "f");
            }
        }).mouseup(() => {
            if (!__classPrivateFieldGet(this, _Bonzi_mouseMoved, "f") && __classPrivateFieldGet(this, _Bonzi_mouseHeld, "f")) {
                this.cancel();
            }
            __classPrivateFieldSet(this, _Bonzi_mouseHeld, false, "f");
            __classPrivateFieldSet(this, _Bonzi_mouseMoved, false, "f");
        });
        this.x = this.maxCoords.x * Math.random();
        this.y = this.maxCoords.y * Math.random();
        this.move();
        // ========================================================================
        // MENU
        // ========================================================================
        // @ts-ignore
        $.contextMenu({
            selector: this.selCanvas,
            build: () => {
                return {
                    items: {
                        "cancel": {
                            name: "Cancel",
                            callback: () => this.cancel()
                        },
                        "mute": {
                            name: () => this.mute ? "Unmute" : "Mute",
                            callback: () => {
                                this.cancel();
                                this.mute = !this.mute;
                            }
                        },
                        "asshole": {
                            name: "Call an Asshole",
                            callback: () => {
                                socket.emit("command", {
                                    list: [`asshole`,this.userPublic.name]
                                });
                            }
                        },
                        "owo": {
                            name: "Notice Bulge",
                            callback: () => {
                                socket.emit("command", {
                                    list: [`owo`,this.userPublic.name]
                                });
                            }
                        },
                        "quote": {
                            name: "Quote",
                            callback: () => {
                                $("chat_message").val(`<blockquote>${this.latestMessage}</blockquote>`);
                            }
                        }
                    }
                };
            },
            animation: {
                duration: 175,
                show: 'fadeIn',
                hide: 'fadeOut'
            }
        });
        this.runEvents([{
                type: "anim",
                anim: "surfIn",
                ticks: 30
            }]);
    }
    move(x, y) {
        if (x && y) {
            this.x = x;
            this.y = y;
        }
        let max = this.maxCoords;
        this.x = Math.min(Math.max(0, this.x), max.x);
        this.y = Math.min(Math.max(0, this.y), max.y);
        this.$element.css({
            "marginLeft": this.x,
            "marginTop": this.y
        });
        this.updateDialogPosition();
    }
    runEvents(list, options) {
        if (this.mute)
            return;
        if (!(options === null || options === void 0 ? void 0 : options.dontCancel))
            this.cancel();
        for (const eventObject of list) {
            let bonzi = this;
            let eventType = this.eventTypes[eventObject.type];
            let event = {
                type: eventObject.type,
                timer: 0,
                options: eventObject,
                run() {
                    var _a;
                    (_a = eventType.run) === null || _a === void 0 ? void 0 : _a.call(eventType, { bonzi: bonzi, options: eventObject, event: event });
                },
                update() {
                    var _a;
                    (_a = eventType.update) === null || _a === void 0 ? void 0 : _a.call(eventType, { bonzi: bonzi, options: eventObject, event: event });
                }
            };
            this.eventQueue.push(event);
        }
        this.eventQueue[0].run();
    }
    clearDialog() {
        this.$dialogCont.html("");
        this.$dialog.hide();
    }
    cancel() {
        this.clearDialog();
        this.stopSpeaking();
        this.eventQueue = [];
        this.runEvents([{ type: "idle" }], { dontCancel: true });
    }
    stopSpeaking() {
        var _a;
        this.goingToSpeak = false;
        (_a = this.voiceSource) === null || _a === void 0 ? void 0 : _a.stop();
    }
    update() {
        this.sprite.update();
        if (this.eventQueue.length === 0)
            return;
        this.eventQueue[0].timer++;
        this.eventQueue[0].update();
    }
    nextEvent() {
        this.eventQueue.shift();
        if (this.eventQueue.length > 0) {
            this.eventQueue[0].run();
        }
    }
    talk(text, say) {
        text = text
            .replace(/{NAME}/g, this.userPublic.name)
            .replace(/{COLOR}/g, this.color);
        if (say) {
            say = say
                .replace(/{NAME}/g, this.userPublic.name)
                .replace(/{COLOR}/g, this.color);
        }
        else {
            say = text;
        }
        // text = linkify(text);
        this.$dialogCont.html(text).css("display", "block");
        this.stopSpeaking();
        this.goingToSpeak = true;
        speak.play(say, {
            "pitch": this.userPublic.pitch,
            "speed": this.userPublic.speed
        }, () => {
            this.clearDialog();
        }, (source) => {
            if (!this.goingToSpeak) {
                source.stop();
            }
            this.voiceSource = source;
        });
    }
    exit(callback) {
        this.runEvents([{
                type: "anim",
                anim: "surfOut",
                ticks: 30
            }]);
        setTimeout(callback, 2000);
    }
    updateName() {
        this.$nametag.text(this.userPublic.name);
    }
    youtube(vid) {
        if (!this.mute) {
            this.$dialogCont
                .html(`
					<iframe type="text/html" width="173" height="173" 
					src="https://www.youtube.com/embed/${vid}?autoplay=1" 
					style="width:173px;height:173px"
					frameborder="0"
					allowfullscreen="allowfullscreen"
					mozallowfullscreen="mozallowfullscreen"
					msallowfullscreen="msallowfullscreen"
					oallowfullscreen="oallowfullscreen"
					webkitallowfullscreen="webkitallowfullscreen"
					></iframe>
				`);
            this.$dialog.show();
        }
    }
    updateDialogPosition() {
        // ========================================================================
        // DIALOG BOX
        // ========================================================================
        let max = this.maxCoords;
        let { x: width } = this.data.size;
        if (width + this.$dialog.width() > max.x) {
            //mobile
            if (this.y < (Bonzi.$container.height() / 2) - (width / 2)) {
                this.$dialog
                    .removeClass("bubble-top")
                    .removeClass("bubble-left")
                    .removeClass("bubble-right")
                    .addClass("bubble-bottom");
            }
            else {
                this.$dialog
                    .removeClass("bubble-bottom")
                    .removeClass("bubble-left")
                    .removeClass("bubble-right")
                    .addClass("bubble-top");
            }
        }
        else {
            //pc
            if (this.x < (Bonzi.$container.width() / 2) - (width / 2)) {
                this.$dialog
                    .removeClass("bubble-left")
                    .removeClass("bubble-top")
                    .removeClass("bubble-bottom")
                    .addClass("bubble-right");
            }
            else {
                this.$dialog
                    .removeClass("bubble-right")
                    .removeClass("bubble-top")
                    .removeClass("bubble-bottom")
                    .addClass("bubble-left");
            }
        }
    }
    get maxCoords() {
        return {
            x: Bonzi.$container.width() - this.data.size.x,
            y: Bonzi.$container.height() - this.data.size.y - $("#chat_bar").height()
        };
    }
}
_Bonzi_dragStart = new WeakMap(), _Bonzi_mouseHeld = new WeakMap(), _Bonzi_mouseMoved = new WeakMap();
Bonzi.$container = $("#content");
//# sourceMappingURL=Bonzi.js.map