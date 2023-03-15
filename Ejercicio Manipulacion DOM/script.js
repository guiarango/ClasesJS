const informacion = {
  cami: {
    nombre: "Camilo",
    apellido: "Muñoz",
    estatura: 1.76,
    colorFavorito: "Verde",
  },
  juli: {
    nombre: "Juliana",
    apellido: "Vélez",
    estatura: 1.65,
    colorFavorito: "Gris",
  },
  jack: {
    nombre: "Jackson",
    apellido: "Restrepo",
    estatura: 1.63,
    colorFavorito: "Azul",
  },
  guille: {
    nombre: "Guillermo",
    apellido: "Arango",
    estatura: 1.8,
    colorFavorito: "Blanco",
  },
};

//Solucion 1
// const aElements = document.querySelectorAll("a");
// const nombre = document.querySelector(".infoUsuario h1");
// const estatura = document.querySelector(".infoUsuario .estatura");
// const color = document.querySelector(".infoUsuario .color");

// aElements.forEach((a) => {
//   a.addEventListener("click", (event) => {
//     event.preventDefault();
//     const nombreElemetoA = event.target.innerText;
//     const nombreMinuscula = nombreElemetoA.toLowerCase();
//     const infoUsuarioSeleccionado = informacion[nombreMinuscula];

//     nombre.innerText = `${infoUsuarioSeleccionado.nombre} ${infoUsuarioSeleccionado.apellido}`;
//     estatura.innerText = infoUsuarioSeleccionado.estatura;
//     color.innerText = infoUsuarioSeleccionado.colorFavorito;
//   });
// });

//Solucion 2
const ul = document.querySelector("ul");
const nombre = document.querySelector(".infoUsuario h1");
const estatura = document.querySelector(".infoUsuario .estatura");
const color = document.querySelector(".infoUsuario .color");

ul.addEventListener("click", (event) => {
  const target = event.target;
  if (target.localName === "a") {
    const nombreElemetoA = target.innerText;
    const nombreMinuscula = nombreElemetoA.toLowerCase();
    const infoUsuarioSeleccionado = informacion[nombreMinuscula];

    nombre.innerText = `${infoUsuarioSeleccionado.nombre} ${infoUsuarioSeleccionado.apellido}`;
    estatura.innerText = infoUsuarioSeleccionado.estatura;
    color.innerText = infoUsuarioSeleccionado.colorFavorito;
  }
});
