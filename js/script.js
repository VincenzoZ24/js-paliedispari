let parola = prompt("inserisci una parola");
console.log("la parola è", parola);
let parolaInversa = invertiParola(parola);

if (parola == parolaInversa) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function invertiParola(str) {
    let strInversa = str.split('').reverse().join('');
    return strInversa;
};




// inizo pari o dispari
let utente = prompt("pari o dispari?");
console.log(`hai scelto: ${utente}`);
let sceltaUtente = prompt("scegli un numero da 1 a 5");
console.log(`il tuo numero è : ${sceltaUtente}`);
if (sceltaUtente > "5") {
    alert("numero maggiore di 5")

};

function numComputer (min, max) {

    return Math.floor(Math.random() * 6 );

};

console.log(`il numero del tuo avversario è: ${numComputer (1, 5)}`);

