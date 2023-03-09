// const contenedorLi = document.querySelectorAll("li");

// for (const liElement of contenedorLi) {
//   liElement.addEventListener("click", function () {
//     this.style.backgroundColor = "red";
//   });
// }

// const ul = document.querySelector("ul");

// ul.addEventListener("click", function (event) {
//   const target = event.target;
//   target.style.backgroundColor = "red";
// });

const array = ["nombre1", "nombre2"];

const ul = document.querySelector(".contenedor-productos");
ul.style.display = "flex";
ul.style.listStyleType = "none";
ul.style.flexWrap = "wrap";

let li;
let div;
let img;
let button;

for (let x = 0; x < 10; x++) {
  li = document.createElement("li");
  div = document.createElement("div");
  img = document.createElement("img");
  button = document.createElement("button");

  //clases
  li.classList.add("claseLi");
  div.classList.add("claseDiv");
  img.classList.add("claseImg");

  //propiedades
  img.src = "./imagen-prueba.webp";
  // img.setAttribute("src", "./imagen-prueba.webp");
  button.innerText = "Compra ahora";

  //div
  div.appendChild(img);
  div.appendChild(button);

  //li
  li.appendChild(div);

  //ul
  ul.appendChild(li);
}

// let li = document.createElement("li");

// li.innerHTML = "<div><h2>Bienvenidos</h2></div>";

// ul.appendChild(li);
