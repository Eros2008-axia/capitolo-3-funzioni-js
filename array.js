// // // // console.log("Inizio di array");

// // // // //Array

// // let numbers = [20, 10, 12, 22, 45, 58, 28, 40,86,29];

// // // // console.log(numbers.length);//->10;

// // // // console.log(numbers);//-> 45;

// // // // let booleans = [true, true, true, false, true];

// // // // console.log(booleans.length);//->5
// // // // console.log(booleans[3]);//-> false;

// let strings = ["pippo", "pluto", "topolino", "Leonardo"];

// // // // console.log(strings.length);//->4

// // // // console.log(strings[3]);//-> Leonardo

// // // // let strangeArray = [20, "pippo", true, 45, "pluto", false]; // MAI E POI MAI!

// // // // console.log(strangeArray.length);//->6
// // // // console.log(strangeArray[3]);//-> 45


// // // //CICLI CON ARRAY

// // // let i = 0;
// // // while(i < numbers.length){
// // //     const element = numbers[i];

// // //     console.log(element);
// // //     i++;
// // // }




// // // for (const element of numbers) {
// // //     console.log(element);
// // // }



// // // for (const element of strings) {
// // //     console.log(element);
// // // }


// // //aggiungere elementi ad un array

// // strings.push("Paperino");
// // console.log(strings );//-> ["pippo", "pluto", "topolino", "Leonardo", "Paperino"];
// // strings.push("Qui", "Quo", "Qua");
// // console.log(strings );//-> ["pippo", "pluto", "topolino", "Leonardo", "Paperino", "Qui", "Quo", "Qua"];

// // //rimuovere un elemento di un array


// // const rimosso = strings.pop();

// // console.log(strings );//-> ["pippo", "pluto", "topolino", "Leonardo", "Paperino", "Qui", "Quo"]
// // console.log('ho tolto '+ rimosso);//-> Qua

// // const rimosso2 = strings.pop();

// // console.log(strings );//-> ["pippo", "pluto", "topolino", "Leonardo", "Paperino", "Qui"]
// // console.log('ho tolto '+ rimosso2);//-> Quo

// // const rimosso3 = strings.pop();

// // console.log(strings );//-> ["pippo", "pluto", "topolino", "Leonardo", "Paperino"]
// // console.log('ho tolto '+ rimosso3);//-> Qui

// // //CAMBIARE GLI elementi DI UN ARRAY

// // strings[0] = "Superpippo";
// // console.log(strings );//-> ["Superpippo", "pluto", "topolino", "Leonardo", "Paperino"]

// // strings[3] = "super " + strings[3];
// // console.log(strings );//-> ["Superpippo", "pluto", "topolino", "super Leonardo", "Paperino"]

// // //PATTERN ARRAY
// // //NAP -> modifica di tutti o parte degli elementi di un array 
// // let patternArray = [];
// // for(let i = 1; i <= 10; i++){
// //     patternArray.push(i * 2);
// // }

// // console.log(patternArray);//-> 

// // for(let i = 0; i < patternArray.length; i++){
// //  strings[i] = strings[i].toUpperCase();
// // }

// console.log(strings);

// function arrayToUpper(arr){
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArray.push(element.toUpperCase());
//   }
//   return newArray;
// }

// console.log(arrayToUpper(strings));


// //moltiplicaPerDue tutti i numeri in un array 

// function moltiplicaPerDue(arr){
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArray.push(element * 2);
//   }
//   return newArray;
// }

// console.log(moltiplicaPerDue([1,2,3,4,5]));


// //trasforma tutte le stringhe  dell' array che iniziano con la lettera "p" in maiuscolo

// function trasformaP(arr){
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element.startsWith("p")) {
//       newArray.push(element.toUpperCase());
//     } else {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// console.log(trasformaP(strings));