// //CICLO DO
// let result = "";
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);
// // Expected output: "12345"

// //FUNCIONES
// //Funciones declaradas
// function sumaDeDosNumeros(numero1, numero2) {
//   console.log(numero1 + numero2);
// }
// sumaDeDosNumeros(5, 10);
// sumaDeDosNumeros(50, 300);
// sumaDeDosNumeros(5, 500);
// sumaDeDosNumeros(45, 30);

// //Funciones expresadas
// const ejemploExpresada = function (numero1, numero2) {
//   return numero1 + numero2;
// };

// //Arrow functions

// const ejemploArrowUnParametro = (numero1) => {
//   console.log(numero1);
// };

// const ejemploArrowCeroParametros = () => {
//   console.log("Prueba");
// };

// const ejemploArrowReturn = (numero1, numero2) => {
//   console.log(numero1 + numero2);
// };

// const sumaDeDosNumerosArrow = (numero1, numero2) => {
//   return numero1 + numero2;
// };

// const ejemploArrowSinReturn = (numero1, numero2) => numero1 + numero2;

//Metodos de arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let x = 0; x < numeros.length; x++) {
//   console.log(numeros[x] + 10);
// }

// const nuevoArrayPruebas=[]
// for (let x = 0; x < numeros.length; x++) {
//   if (numeros[x]%2===0){
//     nuevoArrayPruebas.push(numeros[x])
//   }
// }

//map
const nuevoArray = numeros.map((numero) => numero + 10);
const sumarDiez = (numero) => numero + 10;
const nuevoArray2 = numeros.map(sumarDiez);

console.log(nuevoArray);
console.log(nuevoArray2);

//filter
const nuevoArrayFilter = numeros.filter((numero) => numero % 2 === 0);
console.log(nuevoArrayFilter);

//find
const nuevoElemento = numeros.find((numero) => numero === 10);
console.log(nuevoElemento);

//reduce
//some
//findIndex
//forEach
