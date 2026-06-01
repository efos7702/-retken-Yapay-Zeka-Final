let links = document.querySelectorAll("nav ul li a");
let path = window.location.pathname;

links.forEach(a=>{
  if(path.includes(a.getAttribute("href")))
     a.classList.add("active");
});


const openBtn = document.getElementById("openChat");
const chatBox = document.getElementById("chatBox");
const closeBtn = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");
const input = document.getElementById("userInput");
const quickButtons = document.querySelectorAll(".quick");

openBtn.onclick = () => chatBox.style.display = "flex";
closeBtn.onclick = () => chatBox.style.display = "none";

sendBtn.onclick = sendMessage;
input.addEventListener("keypress", function(e){
    if(e.key === "Enter") sendMessage();
});

function sendMessage(){
    let text = input.value.trim();
    if(text === "") return;

    addUser(text);
    botReply(text);
    input.value = "";
}

function addUser(text){
    let div = document.createElement("div");
    div.className = "user-msg";
    div.innerText = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function addBot(text){
    let div = document.createElement("div");
    div.className = "bot-msg";
    div.innerText = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function botReply(text){
    text = text.toLowerCase();

    if(text.includes("merhaba")) addBot("Merhaba! 😊");
    else if(text.includes("bilgi")) addBot("Hakkında ne öğrenmek istiyorsun?");
    else if(text.includes("iletişim")) addBot("İletişim kısmından bana ulaşabilirsin.");
    else addBot("Şimdilik sadece basit cevaplar verebiliyorum 😊");
}

quickButtons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        let t = btn.getAttribute("data-text");
        addUser(t);
        botReply(t);
    });
});