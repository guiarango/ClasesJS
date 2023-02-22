///// Tipos de datos
// const numerico = 18; // Number
// const texto = "Guillermo"; //String
// const texto2 = "Guillermo"; //String
// const verdadero = true; //Boolean
// const indefinido = undefined; //Undefined

////Array
////Como no declarar variables
// const miembroEquipo1 = "Guillermo";
// const miembroEquipo2 = "Cami";
// const miembroEquipo3 = "Juli";
// const miembroEquipo4 = "Jack";

// console.log(miembroEquipo1);
// console.log(miembroEquipo2);
// console.log(miembroEquipo3);
// console.log(miembroEquipo4);

////Ejemplo array
// let miEquipoDeTrabajo = ["Guillermo", "Cami", "Juli", "Jack"];
// miEquipoDeTrabajo.push("Practicante");
// miEquipoDeTrabajo.push("Lau Ruiz");
// const ultimoMiembroRetirado = miEquipoDeTrabajo.pop();

// console.log(miEquipoDeTrabajo);
// console.log(ultimoMiembroRetirado);

// //Switch
// const nombreUsuario = "Juli";
// // console.log("Bienvenido " + nombreUsuario);

// switch (nombreUsuario) {
//   case "Guillermo":
//     console.log("Bienvenido Guillermo");
//     break;
//   case "Juli":
//     console.log("Bienvenida Juli");
//     break;
//   case "Cami":
//     console.log("Bienvenido Cami");
//     break;
//   case "Jack":
//     console.log("Bienvenido Jack");
//     break;
//   default:
//     console.log("Bienvenido anonimo");
//     break;
// }

// const edadPersona = 20;
// switch (true) {
//   case edadPersona <= 14:
//     console.log("Nino");
//     break;
//   case edadPersona < 18:
//     console.log("Adolescente");
//     break;
//   default:
//     console.log("Mayor de edad");
//     break;
// }

//CICLOS FOR
let miEquipoDeTrabajo = ["Guillermo", "Cami", "Juli", "Jack"];

for (let posicion = 0; posicion < miEquipoDeTrabajo.length; posicion++) {
  let persona = miEquipoDeTrabajo[posicion];
  if (persona === "Cami") {
    console.log("Team Lead: " + persona);
  } else {
    console.log(persona);
  }
}
