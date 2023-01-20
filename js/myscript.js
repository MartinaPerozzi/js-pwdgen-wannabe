// Chiedere il nome all'utente
let your_name = prompt("Nome");

// Chiedere il cognome all'utente
let your_surname = prompt("Cognome");

// Chiedere l'età all'utente
let your_color = prompt("Favourite color");

// Messaggio per l'utente

// const welcome_msg = `La tua password è ${your_name}${your_surname}${your_color}23`;
// console.log(welcome_msg);

document.getElementById("welcome-title").innerHTML = `La tua password è ${your_name}${your_surname}${your_color}23`;


