//Ejemplo
// const equipoDeDesarrollo = ["Cami", "Jack", "Juli", "Guille"];
// const numeroEscalerasTotal = 100;
// let nombreUsuario;

// for (
//   let usuarioIndice = 0;
//   usuarioIndice < equipoDeDesarrollo.length;
//   usuarioIndice++
// ) {
//   for (
//     let numeroEscalera = 1;
//     numeroEscalera <= numeroEscalerasTotal;
//     numeroEscalera++
//   ) {
//     nombreUsuario = equipoDeDesarrollo[usuarioIndice];

//     if (numeroEscalera === 100) {
//       console.log(
//         "Felicitaciones " +
//           nombreUsuario +
//           " llegaste a la escalera numero " +
//           numeroEscalerasTotal
//       );
//     } else {
//       console.log("Subio a la escalera " + numeroEscalera);
//     }
//   }
// }

//Ejemplo
const equipoDeDesarrollo = ["Cami", "Jack", "Juli", "Guille"];
const numeroEscalerasTotal = 100;
let nombreUsuario;

for (
  let numeroEscalera = 1;
  numeroEscalera <= numeroEscalerasTotal;
  numeroEscalera++
) {
  for (
    let usuarioIndice = 0;
    usuarioIndice < equipoDeDesarrollo.length;
    usuarioIndice++
  ) {
    nombreUsuario = equipoDeDesarrollo[usuarioIndice];

    if (numeroEscalera === 100) {
      console.log(
        "Felicitaciones " +
          nombreUsuario +
          " llegaste a la escalera numero " +
          numeroEscalerasTotal
      );
    } else {
      console.log("Subio a la escalera " + numeroEscalera);
    }
  }
}
