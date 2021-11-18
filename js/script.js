// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito

// insert-name
let username = prompt("insert your name");

// insert-surname
let surname = prompt("insert your surname");

// insert-color
let color = prompt("insert your favorite color");

// insert-number
let number = parseInt(prompt("insert number"));

// Password
let password = `<h1>Your new password is:${username}${surname}${color}${number}</h1>`;


document.getElementById("new-password").innerHTML = password;