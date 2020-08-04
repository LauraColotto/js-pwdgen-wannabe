// Inserire nome
var nome = prompt("Inserisci il tuo nome");

// Inserire cognome

var cognome = prompt("Inserisci il tuo cognome");

// Inserire colore preferito

var colore = prompt("Inserisci il tuo colore preferito");

// Generatore Password

var password = nome + cognome + colore + "19";

// Stampa Password

document.getElementById('password'). innerHTML = password;
