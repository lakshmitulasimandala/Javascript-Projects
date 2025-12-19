let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You", "Really?", "That's great!", "I see", "Can you please elaborate?", "I'm here to help you", "What else would you like to know?", "Have a nice day!", "Bye!"];

let sendBtn = document.getElementById("sendMsgBtn");
let userInput = document.getElementById("userInput");
let chatContainer = document.getElementById("chatContainer");

let count = -1;

function setUpUserChat() {
    let userInp = userInput.value;

    let toContainer = document.createElement("div");
    toContainer.classList.add("msg-to-chatbot-container");
    let toMsg = document.createElement("span");
    toMsg.classList.add("msg-to-chatbot");
    toMsg.textContent = userInp;

    toContainer.appendChild(toMsg);
    chatContainer.appendChild(toContainer);

    userInput.value = "";
}

function setUpBotChat() {

    let No0fchatbotMsgs = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * No0fchatbotMsgs - 1)];

    let fromChatBotContainer = document.createElement("div");
    fromChatBotContainer.classList.add("msg-from-chatbot-container");

    let fromBotMsg = document.createElement("span");
    fromBotMsg.classList.add("msg-from-chatbot");
    fromBotMsg.textContent = chatbotMsg;

    fromChatBotContainer.appendChild(fromBotMsg);
    chatContainer.appendChild(fromChatBotContainer);
}

sendBtn.onclick = function() {
    setUpUserChat();
    setUpBotChat();
}