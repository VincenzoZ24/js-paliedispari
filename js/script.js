let parola = prompt("inserisci una parola");
console.log("la parola è", parola);
let parolaInversa = invertiParola(parola);

if (parola == parolaInversa) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function invertiParola(stringa) {
    let stringaInversa = stringa.split('').reverse().join('');
    return stringaInversa;
};




// inizo pari o dispari
let utente = prompt("pari o dispari?");
