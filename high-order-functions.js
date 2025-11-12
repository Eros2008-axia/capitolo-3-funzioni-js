// function sayHello() {
//     console.log ('hello');
//  }

//  const helloHello = () => console.log('hello hello!')

//  const superHello = function(){
//     console.log('super hello')

//  }
//  console.log(helloHello);
//  console.log(superHello);
//  console.log(sayHello);


/// FUNZIONI COME PARAMETRI DI INPUT


//  const numbers = [-100, -30- 20- -11, -40, -1, -21, -15, -3, -5, -9, -300, -5001];
//     function keepGreaterThan3(strArray) {
//         const newArray = [];
//        const testArray = [];
//         for (let i = 0; i < strArray.length; i++) {

//             const str = strArray[i];

//             if (str >= 3) {
//                 newArray.push(str);
//             }

//     }
// return newArray;

// }
// console.log(keepGreaterThan3(testArray));

//    const numbers = [-100, -30- 20- -11, -40, -1, -21, -15, -3, -5, -9, -300, -5001];
//     function keepPositive(nbrArray) {
//         const newArray = [];
//         for (let i = 0; i < nbrArray.length; i++) {

//             const nbr = nbrArray[i];

//             if (nbr >= 0) {
//                 newArray.push(nbr);
//             }

//     }
// return newArray;

// }


//     console.log(keepPositive(numbers));

/////////numeri
const numbers = [-100, -30, 20, -11, -40, -1, -21, -15, -3, -5, -9, -300, -5001];
const strings = ['pippo', 'pluto', 'paperino', 'topolino', 'minnie', 'paperina'];
//

// function highFilter(array, conditionFunction){
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (conditionFunction(element)) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }


// function isEven (nbr){
//     if (nbr % 2 === 0){
// return true;
//     } else {
//         return false;
//     }   
// }

// console.log(highFilter(numbers, isEven));

// function notStartingWithP(str){
//     const firstChair = str[0];
//     if (firstChair.toLowerCase() !== 'p'){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(highFilter(strings, notStartingWithP));

// /////////stringhe

// console.log(highFilter(strings, notStartingWithP));
// console.log(highFilter(numbers, (nbr) => nbr < 0));
// console.log(highFilter((nbr) => nbr < 0));

//MAP

// function multiplyBy3(nbrarray){
//     const newArray = [];
//     for (let i = 0; i < nbrarray.length; i++) {
//         const nbr = nbrarray[i];
//         const newNbr = nbr * 3;
//         newArray.push(newNbr);
//      }
//     return newArray;
// }
// console.log(multiplyBy3(numbers));


// function multiplyByArrayPosition(nbrarray){
//     const newArray = [];    
//     for (let i = 0; i < nbrarray.length; i++) {
//         const nbr = nbrarray[i];
//         const newNbr = nbr * i;
//         newArray.push(newNbr);
//      }
//     return newArray;
// }
// console.log(multiplyByArrayPosition(numbers));



// function toUpperCaseArray(strArray){
//     const newArray = [];    
//     for (let i = 0; i < strArray.length; i++) {
//         const str = strArray[i];
//         const newStr = str.toUpperCase();
//         newArray.push(newStr);
//      }
//     return newArray;
// }

// console.log(toUpperCaseArray(strings));

// function highMap(array, transformFunction){
//     const newArray = [];    
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const newElement = transformFunction(element);
//         newArray.push(newElement);
//      }
//     return newArray;
// }
// console.log(highMap(strings, (str) => str.toUpperCase()));  




// function multiplyBy3number(nbr){
//     return nbr * 3;
// }
// console.log(highMap(numbers, multiplyBy3number));
// console.log(highMap(numbers, (nbr) => nbr * 3));
// console.log(numbers.map((nbr) => nbr * 3));



///// Reduce


// function sumAll(nbrArray) {
//     let sum = 0;

//     for (let i = 0; i < nbrArray.length; i++) {
//         const nbr = nbrArray[i];

//         sum += nbr;

//     }

//     return sum;
// }

// console.log(sumAll(numbers));


// function stringWithFirstChars(strArray) {
//     let newStr = '';

//     for (let i = 0; i < strArray.length; i++) {
//         const str = strArray[i];
//         const firstChar = str[0];
//         newStr = newStr + firstChar;
//     }
//     return newStr;
// }

// console.log(stringWithFirstChars(strings));


// function highReduce(array, reduceFunction, startingValue){

// let accumulator = startingValue;

// for (let i = 0; i < array.length; i++) {
//     const current = array[i];

//     accumulator = reduceFunction(accumulator, current);
// }
// return accumulator;

    
// }
    
// console.log(highReduce(numbers, (acc, curr) => acc + curr, 0));



// function sumFirstChar(acc, curr){
//     const firstChar = curr[0];
//     return acc + firstChar;
// }

// console.log(highReduce(strings, sumFirstChar, ''));
// console.log(highReduce(strings, (acc, curr) => acc + curr[0], ''));
// console.log(strings.reduce((acc, curr) => acc + curr[0], ''));



// const students = ['Mario', 'Luigi', 'Peach', 'Toad', 'Yoshi', 'Bowser'];

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];

//      console.log(student);

// }

// for (const student of students) {
//     console.log(student);
// }


//sort


const prodotti = [
  { id: 1, nome: "Mela", categoria: "Frutta", prezzo: 1.20, scadenza: "2025-11-15", peso: 0.2, biologico: true },
  { id: 2, nome: "Pasta", categoria: "Pasta e Riso", prezzo: 0.80, scadenza: "2026-05-10", peso: 0.5, biologico: false },
  { id: 3, nome: "Latte", categoria: "Latticini", prezzo: 1.10, scadenza: "2025-11-14", peso: 1, biologico: true },
  { id: 4, nome: "Pane", categoria: "Pane e Sostituti", prezzo: 1.50, scadenza: "2025-11-12", peso: 0.3, biologico: false },
  { id: 5, nome: "Yogurt", categoria: "Latticini", prezzo: 0.60, scadenza: "2025-11-20", peso: 0.125, biologico: true },
  { id: 6, nome: "Riso", categoria: "Pasta e Riso", prezzo: 1.30, scadenza: "2027-02-20", peso: 1, biologico: false },
  { id: 7, nome: "Pomodoro", categoria: "Ortaggi", prezzo: 0.90, scadenza: "2025-11-18", peso: 0.3, biologico: true },
  { id: 8, nome: "Acqua", categoria: "Bevande", prezzo: 0.30, scadenza: "2026-12-31", peso: 1.5, biologico: false },
  { id: 9, nome: "Biscotti", categoria: "Dolci", prezzo: 2.00, scadenza: "2026-03-01", peso: 0.2, biologico: false },
  { id: 10, nome: "Uova", categoria: "Uova", prezzo: 2.50, scadenza: "2025-11-30", peso: 0.6, biologico: true },
  { id: 11, nome: "Caffè", categoria: "Bevande", prezzo: 3.00, scadenza: "2026-10-01", peso: 0.25, biologico: false },
  { id: 12, nome: "Formaggio", categoria: "Latticini", prezzo: 4.50, scadenza: "2025-12-10", peso: 0.2, biologico: true },
  { id: 13, nome: "Carote", categoria: "Ortaggi", prezzo: 0.70, scadenza: "2025-11-25", peso: 1, biologico: true },
  { id: 14, nome: "Tonno", categoria: "Conserve", prezzo: 1.80, scadenza: "2027-01-15", peso: 0.16, biologico: false },
  { id: 15, nome: "Cioccolato", categoria: "Dolci", prezzo: 1.70, scadenza: "2026-04-30", peso: 0.1, biologico: false }
];


//61) mettere in ordine l'array di prodotti per prezzo dal più costoso in giù
function compareProductsByPriceDescending(sp1, sp2){
return sp2.prezzo - sp1.prezzo;


}


prodotti.sort(compareProductsByPriceDescending);
console.log(prodotti);





//62) mettere in ordine per nome discendente
//63) mettere in ordine per categoria ascendente, e se uguali per peso dal più pesante
//64) mettere in ordine per anno di scadenza dal più vicino
//65) mettere in ordine per categoria discendente, se uguali per peso dal più piccolo, se uguali per nome ascendente

