// Operadores comparación
// console.log(4 > 3);
// console.log(2 < 3);
// console.log(33 >= 45);
// console.log(74 <= 33);
// console.log(33 == "33");
// console.log(33 === "33");
// console.log(33 != "33");
// console.log(33 !== "33");

// Operadores lógicos
// && AND
// || OR
// ! NOT

// console.log(!(4 > 3) || 4 < 3);

// FLUJOS DE CONTROL

// SI EL USUARIO ES MAYOR DE EDAD Y TIENE BUENA VISION, SE LE DARÁ LA LICENCIA, DE OTRA MANERA NO

const usuarioEdad = 33;
const tieneBuenaVision = true;
const esPolitico = false;
const esCalvo = true;

if (usuarioEdad >= 18 && tieneBuenaVision === true) {
  if (esCalvo) {
    console.log("No entregar licencia por ser calvo");
  } else {
    console.log("Entregar licencia");
  }
} else if (esPolitico === true) {
  console.log("Es politico - entregar licencia");
} else {
  console.log("No entregar licencia");
}
