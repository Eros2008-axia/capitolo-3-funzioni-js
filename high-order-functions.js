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


function highReduce(array, reduceFunction, startingValue){

let accumulator = startingValue;

for (let i = 0; i < array.length; i++) {
    const current = array[i];

    accumulator = reduceFunction(accumulator, current);
}
return accumulator;

    
}
    
console.log(highReduce(numbers, (acc, curr) => acc + curr, 0));



function sumFirstChar(acc, curr){
    const firstChar = curr[0];
    return acc + firstChar;
}

console.log(highReduce(strings, sumFirstChar, ''));
console.log(highReduce(strings, (acc, curr) => acc + curr[0], ''));
console.log(strings.reduce((acc, curr) => acc + curr[0], ''));



