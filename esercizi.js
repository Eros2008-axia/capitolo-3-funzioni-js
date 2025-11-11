// let numbers = [24, 56, 23, 65, 26, 43, 97, 12, 78, 34, 89, 11];



// 46) Somma Righe Matrice
// Scrivi una funzione sommaRighe(matrice) che restituisce un array con la somma degli elementi di ogni riga.
// function sumRows(matrix) {

//     const sumArray = [];    
//     for (let i = 0; i < matrix.length; i++) {
//         const row = matrix[i];
//         let sum = 0;
//         for (let j = 0; j < row.length; j++) {
//             sum += row[j];
//         }
//         sumArray.push(sum);
//     }
//     return sumArray;
// }
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(sumRows(matrix)); 


// 48) Filtra indice pari
// Scrivi una funzione filtraIndicePari(array) che tiene tutti gli elementi in posizione dispari

// function filterIndexEven(nbrArray) {

//     const newArray = [];
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (element % 2 !== 0) {
//             newArray.push(element);

//         }
//     }
//     return newArray;
// }
// console.log(filterIndexEven(numbers));


// 49) Somma pari 
// // Scrivi una funzione sommaPari(array) che somma tutti i numeri pari

// function sumEven(nbrArray) {

//     let sum = 0;
//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         if (element % 2 === 0) {
//             sum += element;
//         }

//     }
//     return sum;
// }

// const resultSumEven = sumEven([5, 20, 43, 93, 15, 32]);
// console.log(resultSumEven);

////////////////////////////////////////////////

///RISOLVERE GLI ESERCIZI IN 3 MODI
//-senza high order functions
//-con le HOF Create da noi
//-con le HOF native di JS

