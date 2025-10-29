// // // //Funzioni introduzione

// // // console.log("Inizio funzioni.js");

// // // const multiplyBy2 = function (n) {

// // //     const result = n * 2;
// // //     return result;

// // // }

// // // const pippo = multiplyBy2(100)
// // // console.log(pippo);

// // // const pluto = multiplyBy2(300);
// // // console.log(pluto);

// // // const paperino = multiplyBy2(500);
// // // console.log(paperino);
// // // function multiplyBy3(n) {

// // //     const result = n * 3;
// // //     return result;
// // // }


// // // const paperone = multiplyBy4(700);
// // // console.log(paperone);
// // // function multiplyBy4(n) {

// // //     const result = n * 4;
// // //     return result;
// // // }

// // // function isMultiple (n1,n2) {
// // //     const checkMultiple = n1 % n2 === 0;

// // // }


// // // const checkMultipleLambda = (n1,n2) =>{
// // //     const isMultiple = n1 % n2 == 0;
// // //     return isMultiple;

// // // }

// // // const checkMultipleLambdaShort = (n1,n2) =>n1 % n2 ===0;

// // //     function GetNow(){
// // //         const now = new Date ();
// // //         return now;
// // //     }

// // //     //scrivere una funzione che mi dice se un numero è pari

// // //     function checkEven (inputnumber){
// // //         const isEven = inputnumber % 2 ===0;
// // //         return isEven;
// // //     }

// // //     const checkEvenLambda = (inputnumber) => inputnumber % 2 ===0;

// // //     const result = checkEven (22);
// // //     console.log (result);

// // //     const resultLambda = checkEvenLambda (33);
// // //     console.log (resultLambda);

// // //     const result2 = checkEven (44);
// // //     console.log (result2);

// // //     const result2Lambda = checkEvenLambda (55);
// // //     console.log (result2Lambda);

// // //     // 1)scrivere una funzione che moltiplichi una stringa per un numero
// // //     //es)se inserisco 'cacca' e 3, l output sara caccacaccacacca

// // //     function multiplyingString(inputString, multiplier){
// // //         let multipleString = '';
// // //         for (let i = 0; i < multiplier; i++) {
// // //             multipleString += inputString;
// // //         }
// // //         return multipleString;

// // //     }

// // //     const resultString = multiplyingString ('cacca', 3);
// // //     console.log(resultString);

// // //     const resultStringLambda = (inputString, multiplier) => {

// // //     }


// // //     function checkInteger(n){
// // //         const isInteger = n % 1 === 0;
// // //         return isInteger;

// // //     }

// // //     const checkIntegerLambda = n =>  n % 1 ===0;

// // //     const resultInteger = checkInteger (5);
// // //     console.log (resultInteger);
// // //     const resultIntegerLambda = checkIntegerLambda (5.5);
// // //     console.log (resultIntegerLambda);
// // //     const resultInteger2 = checkInteger (6);
// // //     console.log (resultInteger2);
// // //     const resultInteger2Lambda = checkIntegerLambda (6.5);
// // //     console.log (resultInteger2Lambda);



// // //19 esercizi)-- scrivere una funzione che dati un input 2 numeri ritorni il maggiore
// // //20)-- scrivere una funzzione che date input 2 stringhe ritorni la piu corta
// // //21)-- scrivere una funzione che dato un input una stringa ritorni alla sua iniziale
// // //22)-- scrivere una funzione che dati in input una stringa e un numero. leggi la stringa quante volte dato.


// // // function getInitial(inputString){
// // //     const initial = inputString.charAt(0);
// // //     return initial;
// // // }
// // // const resultInitial = getInitial ('pippo');
// // // console.log (resultInitial);
// // // const resultInitial2 = getInitial ('pluto');
// // // console.log (resultInitial2);

// // //22)-- scrivere una funzione che dati in input una stringa e un numero. leggi la stringa quante volte dato.

// // // function repeatString(inputString, multiplier){
// // //     let multipleString = '';
// // //     for (let i = 0; i < multiplier; i++) {
// // //         multipleString += inputString;
// // //     }
// // //     return multipleString;
// // // }

// // // const resultRepeat = repeatString('pippo', 10);
// // // console.log(resultRepeat);


// // /////////////////////////////////////////////////////////////


// // // function stringBuilder(s1,s2,s3){

// // //     return s1+s2+s3;
// // // }

// // // console.log(stringBuilder)('leonardo','da','vinci');

// // // console.log(stringBuilder)('leonardo','da');

// // // console.log(stringBuilder)('leonardo','da','vinci', 'extra');

// // /////-

// // // function pow(base, exponent) {

// // //     if (exponent === undefined) {
// // //         exponent = 2;
// // //     }

// // //     return base ** exponent;
// // // }

// // // console.log(pow(2, 5));

// // // console.log(pow(3));

// // // console.log(pow(4, 3));

// // // /////-


// // // const number = 5;

// // // if(number > 3) {                  //(lo scope interno  accade alle variabili dello scope esterno)

// // //     const number2 = number + 5;

// // //     console.log(number2);


// // // }

// // // const number3 = number2 + 10;      //(lo scope esterno non ha accesso alle variabili dello scope interno)

// // // console.log(number3);



// // ///// CLOSURE   le funzioni si mantengono in vita anche dopo che lo scope in cui sono state create è terminato e anche al di fuori di quello scope


// // // const isOpen = true;

// // // let myFunction;
// // // if (isOpen) {

// // //     let counter = 0;
// // //     myFunction = function () {
// // //         counter++;
// // //         console.log(counter);
// // //     }

// // //     myFunction();
// // //     myFunction();
// // //     myFunction();
// // //     myFunction();

// // // }

// // ////// Factoriale

// // // function fact(n) {
// // //     if (n === 0) {
// // //         return 1;
// // //     }
// // //     return n * fact(n - 1);
// // // }


// // ///////


// // //     // fare una funzione che conta le B maiuscole in una stringa usando parole banana barba e baule
// //     function countUppercaseB(inputString) {
// //         let count = 0;
// //         for (let i = 0; i < inputString.length; i++) {
// //             const char = inputString.charAt(i);
// //             if (char === 'B') {
// //                 count++;
// //             }
// //         }
// //         return count;
// //     }
// //     const resultCountB = countUppercaseB('Banana Barba Baule BBBbbbB');
// //     console.log(resultCountB);

// //    const resultCountB2 = countUppercaseB('banana');
// //    console.log(resultCountB2);



// //23) È possibile ottenere l'ennesimo carattere, o lettera, da una stringa scrivendo [N] dopo la stringa (ad esempio, string[2]). Il valore risultante sarà una stringa contenente un solo carattere (ad esempio, "b"). Il primo carattere ha posizione 0, il che fa sì che l'ultimo si trovi alla posizione string.length - 1. In altre parole, una stringa di due caratteri ha lunghezza 2 e i suoi caratteri hanno posizioni 0 e 1.
// //Scrivi una funzione chiamata countBs che accetti una stringa come unico argomento e restituisca un numero che indica quanti caratteri B maiuscoli sono presenti nella stringa.
// //Successivamente, scrivi una funzione chiamata countChar che si comporti come countBs, tranne per il fatto che accetta un secondo argomento che indica il carattere da contare (invece di contare solo i caratteri B maiuscoli). Riscrivi countBs per utilizzare questa nuova funzione.

// // function countBs(string) {
// //     return countChar(string, 'B');
// // }

// // function countChar(string, char) {
// //     let count = 0;
// //     for (let i = 0; i < string.length; i++) {
// //         if (string[i] === char) {
// //             count++;
// //         }
// //     }
// //     return count;
// // }



// // // 24) Inversione di un numero
// // // Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il numero con le cifre invertite (es. 123 → 321).
// // function invertiNumero(numero) {
// //     const numeroStringa = numero.toString();
// //     const numeroInvertito = numeroStringa.split('').reverse().join('');
// //     return parseInt(numeroInvertito, 10);
// // }

// // const risultatoInvertito = invertiNumero(48321);
// // console.log(risultatoInvertito);


// // //25) Tabellina
// // //Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.
// // function tabellina(numero) {
// //     for (let i = 1; i <= 10; i++) {
// //         console.log(`${numero} x ${i} = ${numero * i}`);
// //     }
// // }

// // tabellina(2);





// // function countBs(string) {
// //     return countChar(string, 'B');
// // }

// // function countChar(string, char) {
// //     let count = 0;
// //     for (let i = 0; i < string.length; i++) {
// //         if (string[i] === char) {
// //             count++;
// //         }
// //     }
// //     return count;
// // }


// //26) Fibonacci
// //Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca l’N-esimo numero della sequenza di Fibonacci.


// function fibonacci(N) {
//     if (N <= 0) {
//         return 0;
//     } else if (N === 1) {
//         return 1;
//     } else {
//         return fibonacci(N - 1) + fibonacci(N - 2);
//     }

// }

// const risultatoFibonacci = fibonacci(9);
// console.log(risultatoFibonacci);


// //27)  Conteggio vocali
// //Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il numero di vocali presenti.

// function contaVocali(stringa) {
//     const vocali = 'aeiouAEIOU';
//     let count = 0;
//     for (let i = 0; i < stringa.length; i++) {
//         if (vocali.includes(stringa[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// const risultatoContaVocali = contaVocali('unoduetrequattrocinque');
// console.log(risultatoContaVocali);




// //28) Sconto
// //Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e percentuale di sconto) e restituisca il prezzo scontato.

// function applicaSconto(prezzo, percentualeSconto) {
//     const sconto = (prezzo * percentualeSconto) / 100;
//     return prezzo - sconto;
// }

// const risultatoApplicasconto = applicaSconto(190, 20);
// console.log(risultatoApplicasconto);




// //29) Conversione gradi
// //Scrivi una funzione convertiGradi che prenda un numero come parametro (gradi Celsius) e restituisca la conversione in Fahrenheit

// function convertiGradi (celsius) {
//     const fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }

// const risultatoConvertiGradi = convertiGradi (23);
// console.log(risultatoConvertiGradi);



// //30) Verifica password
// //Scrivi una funzione verificaPassword che prenda una stringa e restituisca true se:
// // - Ha almeno 8 caratteri
// // - Contiene almeno una lettera maiuscola
// // - Contiene almeno un carattere speciale tra questi '!#@$%'
// // - Non contiene la parola 'cacca'

// function verificaPassword(password) {
//     const caratteriSpeciali = '!#@$%';
//     if (password.length < 8) {
//         return false;
//     }
//     let haMaiuscola = false;
//     let haCarattereSpeciale = false;
//     for (let i = 0; i < password.length; i++) {
//         const char = password.charAt(i);
//         if (char >= 'A' && char <= 'Z') {
//             haMaiuscola = true;
//         } else if (caratteriSpeciali.includes(char)) {
//             haCarattereSpeciale = true;
//         }
//     }
//     if (!haMaiuscola || !haCarattereSpeciale) {
//         return false;
//     }
//     if (password.includes('cacca')) {
//         return false;
//     }
//     return true;
// }

// const risultatoVerificaPassword = verificaPassword('Password!123');
// console.log(risultatoVerificaPassword);

// const risultatoVerificaPassword2 = verificaPassword('password123');
// console.log(risultatoVerificaPassword2);
// const risultatoVerificaPassword3 = verificaPassword('Pass!cacca123');
// console.log(risultatoVerificaPassword3);
// const risultatoVerificaPassword4 = verificaPassword('Pass1234');
// console.log(risultatoVerificaPassword4);const risultatoVerificaPassword5 = verificaPassword('Pass!1234');
// console.log(risultatoVerificaPassword5);

//////////////////////////////////////////////////////////////////////////////////////////////////////////





// 31) Somma dei numeri fino a n
// Scrivi una funzione sommaFinoAN(n) che restituisce la somma dei numeri da 1 a n.
// sommaFinoAN(5) -> 1 + 2 + 3 + 4 + 5 -> 15

function sommaFinoAN(n) {
    let somma = 0;  
    for (let i = 1; i <= n; i++) {
        somma += i;
    }
    return somma;
}
const risultatoSommaFinoAN = sommaFinoAN(7);
console.log(risultatoSommaFinoAN);








// 32) Conteggio cifre
// Scrivi una funzione contaCifre(num) che restituisce il numero di cifre di un numero
// contaCifre(5) -> 1
// contaCifre(1245) -> 4
// 33) Somma delle cifre
// Scrivi una funzione sommaCifre(num) che restituisce la somma delle cifre di un numero
// sommaCifre(5) -> 5
// sommaCifre(1245) -> 12
// 34) Conversione valuta
// Scrivi una funzione euroToDollaro(euro) che converte un importo in euro in dollari (1 euro = 1.1 dollari).
// 35) Calcolo area rettangolo
// Scrivi una funzione areaRettangolo(base, altezza) che restituisce l’area di un rettangolo.
// 36) Calcolo media
// Scrivi una funzione media(a, b, c) che restituisce la media di tre numeri.
// 37) Generatore di password casuale
// Scrivi una funzione generaPasswordCasuale() che restituisce una password di 8 caratteri usando solo lettere maiuscole e numeri (usa Math.random())
// 38) Potenza con ciclo
// Scrivi una funzione potenzaCiclo(base, esponente) che calcola la potenza usando un ciclo.
// 39) Scrivi un validatore di email con queste regole:
// -deve contenere una @
// -deve contenere un punto posizionato dopo la @
// -le parti di testo prima della @ e tra la @ e il punto devono almeno avere tre lettere
// -il punto non può essere l'ultimo carattere
// 40) crea un converitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)