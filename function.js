//Funzioni introduzione

console.log("Inizio funzioni.js");

const multiplyBy2 = function (n) {

    const result = n * 2;
    return result;

}

const pippo = multiplyBy2(100)
console.log(pippo);

const pluto = multiplyBy2(300);
console.log(pluto);

const paperino = multiplyBy2(500);
console.log(paperino);
function multiplyBy3(n) {

    const result = n * 3;
    return result;
}


const paperone = multiplyBy4(700);
console.log(paperone);
function multiplyBy4(n) {

    const result = n * 4;
    return result;
}

function isMultiple (n1,n2) {
    const checkMultiple = n1 % n2 === 0;

}


const checkMultipleLambda = (n1,n2) =>{
    const isMultiple = n1 % n2 == 0;
    return isMultiple;

}

const checkMultipleLambdaShort = (n1,n2) =>n1 % n2 ===0; 

    function GetNow(){
        const now = new Date ();
        return now;
    }

    //scrivere una funzione che mi dice se un numero è pari 

    function checkEven (inputnumber){
        const isEven = inputnumber % 2 ===0;
        return isEven;
    }
    
    const checkEvenLambda = (inputnumber) => inputnumber % 2 ===0;

    const result = checkEven (22);
    console.log (result);

    const resultLambda = checkEvenLambda (33);
    console.log (resultLambda);

    const result2 = checkEven (44);
    console.log (result2);

    const result2Lambda = checkEvenLambda (55);
    console.log (result2Lambda);

    // 1)scrivere una funzione che moltiplichi una stringa per un numero 
    //es)se inserisco 'cacca' e 3, l output sara caccacaccacacca

    function multiplyingString(inputString, multiplier){
        let multipleString = '';            
        for (let i = 0; i < multiplier; i++) {
            multipleString += inputString;
        }
        return multipleString;
    
    }

    const resultString = multiplyingString ('cacca', 3);
    console.log(resultString);

    const resultStringLambda = (inputString, multiplier) => {
       
    }


    function checkInteger(n){
        const isInteger = n % 1 === 0;
        return isInteger;

    }

    const checkIntegerLambda = n =>  n % 1 ===0;

    const resultInteger = checkInteger (5);
    console.log (resultInteger);
    const resultIntegerLambda = checkIntegerLambda (5.5);
    console.log (resultIntegerLambda);
    const resultInteger2 = checkInteger (6);
    console.log (resultInteger2);
    const resultInteger2Lambda = checkIntegerLambda (6.5);
    console.log (resultInteger2Lambda);



    //19 esercizi)-- scrivere una funzione che dati un input 2 numeri ritorni il maggiore
//20)-- scrivere una funzzione che date input 2 stringhe ritorni la piu corta
//21)-- scrivere una funzione che dato un input una stringa ritorni alla sua iniziale
//22)-- scrivere una funzione che dati in input una stringa e un numero. leggi la stringa quante volte dato.
