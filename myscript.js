let firstName;
let lastName;
let favouriteColor;
let superSafePassword;
let myH2;

alert`Crea la tua password super sicura!`;

firstName = prompt("qual è il tuo nome?");

console.log(firstName);

lastName = prompt("qual è il tuo cognome?");

console.log(lastName);

favouriteColor = prompt("qual è il tuo colore preferito ? ");

console.log(favouriteColor);

superSafePassword = `Password: ${firstName}${lastName}${favouriteColor}21`;

console.log(superSafePassword);

alert` La tua password super sicura è....`;

myH2 = document.getElementById('password');
myH2.innerText = superSafePassword;





