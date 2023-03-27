const contenedorPokemon = document.querySelector(".contenedorPokemon2");

async function retornarPokemon() {
  for (let x = 1; x <= 10; x++) {
    let promise = await fetch("https://pokeapi.co/api/v2/pokemon/" + x, {
      method: "GET",
    });
    const data = await promise.json();

    let divPokemon = document.createElement("div");
    let imgPokemon = document.createElement("img");
    let titlePokemon = document.createElement("h1");

    imgPokemon.src = data.sprites.other.home.front_default;
    titlePokemon.innerText = data.name;

    divPokemon.appendChild(imgPokemon);
    divPokemon.appendChild(titlePokemon);
    contenedorPokemon.appendChild(divPokemon);
  }
}

retornarPokemon();
