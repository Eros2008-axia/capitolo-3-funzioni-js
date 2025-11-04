// 46) Somma Righe Matrice
// Scrivi una funzione sommaRighe(matrice) che restituisce un array con la somma degli elementi di ogni riga.

let numbers = [24, 56, 23, 65, 26, 43, 97];
// 48) Filtra indice pari
// Scrivi una funzione filtraIndicePari(array) che tiene tutti gli elementi in posizione dispari

function filterIndexEven(nbrArray) {

    const newArray = [];
    for (let i = 0; i < nbrArray.length; i++) {
        const element = nbrArray[i];
        if (element % 2 !== 0) {
            newArray.push(element);

        }
    }
    return newArray;
}
console.log(filterIndexEven(numbers));
