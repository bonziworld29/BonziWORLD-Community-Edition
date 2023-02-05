import { socket } from "./Chat.js";
// @ts-ignore
$.contextMenu({
    selector: "#content",
    build: function () {
        return {
            items: {
                sounds: {
                    name: "Chat Sounds",
                    items: [
                        chatSound("bonk"),
                        chatSound("shut the fuck up"),
                        chatSound("always naysaying"),
                        chatSound("up your ass"),
                        chatSound("boom"),
                        chatSound("fuck you"),
                        chatSound("you fuckin dick"),
                        chatSound("you fuckin shit"),
                        chatSound("you fuckin nigger"),
                        chatSound("pussy"),
                        chatSound("cum"),
                        chatSound("big"),
                        chatSound("chungus"),
                    ]
                }, emotes: {
                    name: "Emotes",
                    items: {
                        backflip: {
                            name: "backflip",
                            callback() {
                                socket.emit("command", { text: "backflip" });
                            }
                        }
                    }
                }, color: {
                    name: "Set Color",
                    callback() {
                        $("#color_box").show();
                    }
                }
            }
        };
    }
});
function chatSound(sound) {
    return {
        name: sound,
        callback() {
            socket.emit("talk", { text: [`[${sound}]`] });
        }
    };
}
//# sourceMappingURL=menu.js.map