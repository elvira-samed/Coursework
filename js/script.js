// CHAT START 
var closeChat = document.querySelector("#chat .close-chat")
var miniChat = document.querySelector(".mini-chat")
var chat = document.querySelector("#chat")
var myInp = document.querySelector(".message-box")
var main = document.querySelector("main")
closeChat.onclick = function () {
    chat.classList.remove("active")
}
miniChat.onclick = function () {
    chat.classList.add("active")
}
myInp.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        if (myInp.value.trim() != "") {
            if (myInp.value[0].toUpperCase() == myInp.value[0]) {
                var msDiv = document.createElement("div")
                msDiv.className = "message support"
                var ptag = document.createElement("p")
                ptag.innerText = myInp.value
                msDiv.appendChild(ptag)
                main.appendChild(msDiv)
                var pTime = document.createElement("p")
                pTime.className = "time"
                var dt = new Date()
                pTime.innerText = dt.getHours() + ":" + dt.getMinutes()
                msDiv.appendChild(pTime)
                myInp.value = " "
            } else {
                var msDiv = document.createElement("div")
                msDiv.className = "message user"
                var ptag = document.createElement("p")
                ptag.innerText = myInp.value
                msDiv.appendChild(ptag)
                main.appendChild(msDiv)
                var pTime = document.createElement("p")
                pTime.className = "time"
                var dt = new Date()
                pTime.innerText = dt.getHours() + ":" + dt.getMinutes()
                msDiv.appendChild(pTime)
                myInp.value = " "
            }
            main.scrollTop = main.scrollHeight
        } 
    } 
})
// CHAT END 


// SCROLL TO TOP 
var scrollElem = document.getElementById("scrollToTop");
window.onscroll = function() {
        if(this.scrollY>100){
            scrollElem.classList.add("active-elem")
        }
        else{
            scrollElem.classList.remove("active-elem")
        }
    }

scrollElem.onclick=function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

