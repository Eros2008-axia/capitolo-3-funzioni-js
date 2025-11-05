// console.log('oggetti!!');

// Nome string


// eta number

// istruzione string 

// sesso string 

// nazionalita string 


// //ACCEDERE ALLA PROPRIETA

// console.log(studente.nome);
// console.log(studente['eta']);
// console.log(studente.istruzione);
// console.log(studente['sesso']);
// console.log(studente.nazionalita);

// //AGGIUNGERE PROPRIETA
// studente.citta = 'Roma';
// studente['capitale'] = 'Italia';    
// console.log(studente);

// //MODIFICARE PROPRIETA  
// studente.eta = 21;
// studente['nazionalita'] = 'Italiana';
// console.log(studente);

// //ELIMINARE PROPRIETA
// delete studente.sesso;
// delete studente['istruzione'];
// console.log(studente);  

// const studente = {
//     nome: 'Eros',
//     eta: 17,
//     istruzione: 'Diploma',
//     sesso: 'Maschio',
//     nazionalita: 'Italiana'
// };


// function calculateMean(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum / numbers.length;

// }


//FOR IN

const ariel = {
    name: 'Ariello',
    age: 4,
race: 'border collie',
type : 'dog'
};

for (const key in ariel) {
    const value = ariel[key];
    console.log( key + ':' + value);
}


//JSON (JavaScript Object Notation)

arielString = JSON.stringify(ariel);
console.log(arielString); 


