/* 
    ------------------ LC1 -----------------------------
    Dichiarare una funzione che prende 2 numeri come parametro ne esegua la somma
    e la restituisca come risultato. Fare poi un programma che acquisisca 2 numeri dall'utent
    e usando la funzione ne resituisca la loro somma
    -------------------------------------------------------
*/

// PROGRAMMA PRINCIPALE: Cioè il programma (una sequenza di istruzione giustapposte, che messe
// in quel determinato ordine, risolve un determinato problema) che viene eseguito da subito
// all'apertura e fine caricamento della pagina web

/*
let numero1 = prompt("Inserisci il primo numero");
let numero2 = prompt("Inserisci il secondo numero");
let numero3 = prompt("Inserisci il terzo numero");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

let risultatoSommaDeiPrimiDueNumeri = sommaDueNumeri(numero1, numero2);
let risultatoSommaDegliUltimiDueNumeri = sommaDueNumeri(numero2, numero3);
console.log(risultatoSommaDeiDueNumeri);
alert(risultatoSommaDeiDueNumeri);
*/


/*
    ------------------------ LC 2 v2 --------------------------
    Scrivere una funzione che generi un numero random tra un intervallo min max.
    
    Dopodichè dichiarare una funzione che vi restituisca un array di 6 numeri casuali. 
    
    Estrarre in un array 6 numeri casuali tra 1 e 90 e stampare il cotenuto a console.
    ---------------------------------------------------------
*/

/*
let arrayRandomNumbers = generateArrayOfRandomNumbers(10, 1, 90);

printArray(arrayRandomNumbers);
*/

/* ----------------------- LC 3 -----------------------------
    Usare quanto di già buono dalle mie funzioni che ho fatto, per
    creare una lotteria semplice che chieda all'utente un numero sda giocare
    da 1 a 20 e il programma generando un array di 6 numeri casuali tra
    1 e 20, veda se il numero è stato indovina tra uno di quei 6.
    ------------------------------------------------------------

*/
/*
let numeroVincente = prompt("Inserisci il tuo numero vincente");
numeroVincente = parseInt(numeroVincente);

let numeriLotteria = generateArrayOfRandomNumbers(6, 1, 20);
console.log("I numeri vincenti estratti sono: ");
printArray(numeriLotteria);

let vittoria = searchInArray(numeriLotteria, numeroVincente);

if (vittoria) {
    console.log("HAI VINTO!");
} else {
    console.log("HAI PERSO!");
}





// ------------------------------- FUNZIONI ---------------------------------------
function sommaDueNumeri(num1, num2) {
    let risultato = num1 + num2;
    return risultato;
}

function generateRandomNumberZeroToMaxNumber(maxNumber) {
    let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    return randomNumber;
}

function getRandomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArrayOfRandomNumbers(totalNumbers, minRange, maxRange) {
    let array = [];

    //  Dichiaro un ciclo for per ripetere 6 volte la creazione del numero random
    //  e l'inserimento del numero nel vettore
    for (let i = 0; i < totalNumbers; i++) {
        let randomNumber = getRandomIntegerFromInterval(minRange, maxRange);
        array.push(randomNumber);
    }

    return array;
}

function printArray(array) {

    let string = "";

    string += "[";

    for (let i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            string += array[i];
        } else {
            string += array[i];
            string += " - ";
        }
    }

    string += "]";

    console.log(string);

}

function searchInArray(array, itemToSearch) {

    // Variabile booleana FLAG
    let found = false;

    // Decreto se l'utente ha vinto.
    for (let i = 0; i < array.length; i++) {
        if (itemToSearch == array[i]) {
            found = true;
            return found;
        }
    }

    return found;

}
*/


/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.
*/
let pariDispari = prompt("scegli pari o dispari");
let numeroScelto = prompt("scegli un numero da 1 a 5");
console.log("scelta utente: " + pariDispari)
numeroScelto =parseInt(numeroScelto)
console.log("scelta numero utente: " + numeroScelto)

let numeroCasuale =generazioneNumericaRandomica(1, 5)
console.log("numero casuale pc " + numeroCasuale)

let vincitori = sommaNumeri(numeroScelto, numeroCasuale, pariDispari)



//------------------------funzioni---------------------

function generazioneNumericaRandomica(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sommaNumeri(num1, num2, str){
    let somma=num1+num2
    if (somma%2==0 && str=="pari"){
        console.log(`${somma} HAI VINTO`)
    }else  if (somma%2==0 && str=="dispari"){
        console.log(`${somma} HAI PERSO`)
    }else if (somma%2!==0 && str=="dispari"){
        console.log(`${somma} HAI VINTO`)
    }else if (somma%2!==0 && str=="pari"){
        console.log(`${somma} HAI PERSO`)
    }

}
