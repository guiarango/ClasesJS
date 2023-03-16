//Ejemplo 1
// const imgPokemon = document.querySelector(".contenedorPokemon img");
// const nombrePokemon = document.querySelector(".contenedorPokemon h1");

// const charmander = fetch("https://pokeapi.co/api/v2/pokemon/3", {
//   method: "GET",
// })
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     imgPokemon.src = data.sprites.other.home.front_default;
//     nombrePokemon.innerText = data.name;
//     console.log(data);
//   });

//Ejemplo 2
// const contenedorPokemon = document.querySelector(".contenedorPokemon2");

// for (let x = 1; x <= 100; x++) {
//   fetch("https://pokeapi.co/api/v2/pokemon/" + x, {
//     method: "GET",
//   })
//     .then((result) => {
//       return result.json();
//     })
//     .then((data) => {
//       let divPokemon = document.createElement("div");
//       let imgPokemon = document.createElement("img");
//       let titlePokemon = document.createElement("h1");

//       imgPokemon.src = data.sprites.other.home.front_default;
//       titlePokemon.innerText = data.name;

//       divPokemon.appendChild(imgPokemon);
//       divPokemon.appendChild(titlePokemon);
//       contenedorPokemon.appendChild(divPokemon);

//       // console.log(data.name, data.id);
//     });
// }

//Ejemplo 3
const contenedorPokemon = document.querySelector(".contenedorPokemon2");
const arrayPromesas = [];
for (let x = 1; x <= 100; x++) {
  var promise = fetch("https://pokeapi.co/api/v2/pokemon/" + x, {
    method: "GET",
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => error);

  arrayPromesas.push(promise);
}

Promise.all(arrayPromesas).then((values) => {
  values.forEach((data) => {
    let divPokemon = document.createElement("div");
    let imgPokemon = document.createElement("img");
    let titlePokemon = document.createElement("h1");

    imgPokemon.src = data.sprites.other.home.front_default;
    titlePokemon.innerText = data.name;

    divPokemon.appendChild(imgPokemon);
    divPokemon.appendChild(titlePokemon);
    contenedorPokemon.appendChild(divPokemon);

    console.log(data.id);
  });
});
