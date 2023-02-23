///// Tipos de datos
// const numerico = 18; // Number
// const texto = "Guillermo"; //String
// const verdadero = true; //Boolean
// const indefinido = undefined; //Undefined
// const array = ["Cami", "Guille", "Jack", "Juli"];

//Objeto literal
// {clave:valor}

// const producto = {
//   nombre: "Guillermo",
//   primerApellido: "Arango",
//   segundoApellido: "Mesa",
//   estatura: 1.8,
//   tieneBarba: true,
//   esGordo: false,
//   colorDeCabello: "Negro",
// };

// console.log(guillermo.colorDeCabello);

//Ejemplo
const equipoDeDesarrollo = [
  { nombre: "Cami", genero: "M", cumpleEnMarzo: false },
  { nombre: "Jack", genero: "M", cumpleEnMarzo: false },
  { nombre: "Juli", genero: "F", cumpleEnMarzo: false },
  { nombre: "Guille", genero: "M", cumpleEnMarzo: true },
];

let nombre;
let cumpleanos;

for (
  let posicionUsuario = 0;
  posicionUsuario < equipoDeDesarrollo.length;
  posicionUsuario++
) {
  nombre = equipoDeDesarrollo[posicionUsuario].nombre;
  cumpleanos = equipoDeDesarrollo[posicionUsuario].cumpleEnMarzo;

  if (cumpleanos === true) {
    console.log(nombre + " cumple anos en Marzo");
  } else {
    console.log(nombre);
  }
}

// const array = [true, false, true, true, false];

// const newArray = array.filter(function (element) {
//   return element === false;
// });

// console.log(newArray);
