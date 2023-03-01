// // Tipo de datos de referencia
// const persona = { nombre: "Guillermo", edad: 30, altura: 1.8 };
// const persona2 = { ...persona };
// // persona = "nuevo valor";

// console.log(persona);
// persona2.edad = 25;
// persona2.colorDePelo = "Negro";
// console.log("persona", persona);
// console.log("persona2", persona2);

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
// const sumaDeDosNumerosExpresada = function (numero1, numero2) {
//   console.log(numero1 + numero2);
// };

// sumaDeDosNumerosExpresada(5, 10);
// sumaDeDosNumerosExpresada(50, 300);
// sumaDeDosNumerosExpresada(5, 500);
// sumaDeDosNumerosExpresada(45, 30);

// //Ejemplo de funciones
// function esImpar(numero) {
//   const resultado = numero % 2;
//   if (resultado === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// esImpar(10);

//Funcion obtener dia
function obtenerFecha() {
  const fecha = new Date();
  console.log(fecha);
}

obtenerFecha();
