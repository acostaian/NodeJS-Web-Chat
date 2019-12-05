import { Chat } from "./Chat.js";

let chatText = document.getElementById("chatText");
let chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");

const chat = new Chat(chatText, chatInput, chatSend); // Abro la conexion con el chat

chatSend.addEventListener("click", () => chat.send());

