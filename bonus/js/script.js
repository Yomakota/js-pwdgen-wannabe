// insert-name
let username = prompt("insert your name");

// insert-surname
let surname = prompt("insert your surname");

// insert-color
let color = prompt("insert your favorite color");

// insert-number
let number = parseInt(prompt("insert number"));

//sum for new password
let sum = parseInt(number) + 5;

// Password
let password = `<h1>Your new password is:${username}${surname}${color}${sum}</h1>`;


document.getElementById("new-password").innerHTML = password;