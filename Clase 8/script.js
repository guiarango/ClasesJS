// const h1 = document.querySelector("h1");

// console.log(h1);

// // h1.style.color = "green";

// // h1.classList.add("titulo-principal");

// h1.addEventListener("click", () => {
//   h1.classList.toggle("active");
//   // h1.classList.add("active");
// });

// const elementoBienvenida = document.querySelector(".titulo-principal");
// const elementoInput = document.getElementById("nombreUsuario");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const nombreUsuario = elementoInput.value;

//   if (nombreUsuario !== "") {
//     const mensaje = "Bienvenid@ " + nombreUsuario;
//     elementoBienvenida.innerText = mensaje;
//   }
// });

const array = ["Guille", "Juli", "Jack", "Cami"];

const listaBienvenida = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let li;
  for (let x = 0; x < array.length; x++) {
    li = document.createElement("li");
    li.innerText = "Bienvenid@ " + array[x];
    listaBienvenida.append(li);
  }
  // array.forEach((element) => {
  //   li = document.createElement("li");
  //   li.innerText = "Bienvenid@ " + element;
  //   listaBienvenida.append(li);
  // });
});
