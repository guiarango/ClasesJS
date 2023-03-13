const button = document.querySelector(".button");
const buttonRemover = document.querySelector(".buttonRemover");
const h1 = document.querySelector("h1");
let contador = 0;

function modificarContador() {
  contador = contador + 1;
  h1.innerText = "Contador: " + contador;
  removerContador();
}

function removerContador() {
  button.removeEventListener("click", modificarContador);
}

button.addEventListener("click", modificarContador);

// const input = document.querySelector("input");
// const form = document.querySelector("form");
// const link = document.querySelector("a");
// let text = "";

// input.addEventListener("keyup", (e) => {
//   text = input.value;
//   // console.log(e);
//   // if (e.key === "Escape") {
//   //   console.log("Cerrar menu hamburguesa");
//   // }
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e);
//   console.log("Se oprimio el submit del form");
// });

// link.addEventListener("click", (e) => {
//   e.preventDefault();
// });
