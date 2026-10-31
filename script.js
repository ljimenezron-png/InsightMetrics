const greeting=document.getElementById("greeting")
greeting.style.textAlign ="center"
greeting.style.marginTop ="50px"

const username =window.prompt("whats your name", "Jane")
greeting.innerHTML="Welcome to my beautiful website " + username + "!"