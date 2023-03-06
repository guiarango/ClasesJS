    // 1)Dado el siguiente array, iterar sobre él para guardar en la variable nuevoArray cada uno de 
// los nombres de los autos concatenado con su marca y su color.

// const automovilesDisponibles = [
//   { nombre: "Sandero", marca: "Renault", color: "Blanco" },
//   { nombre: "Sandero Stepway", marca: "Renault", color: "Rojo" },
//   { nombre: "CX30", marca: "Mazda", color: "Negro" },
//   { nombre: "R8", marca: "Audi", color: "Naranja" },
// ];


// const nuevoArray = automovilesDisponibles.map((automovilesDisponibles) => automovilesDisponibles.nombre + " " + automovilesDisponibles.marca + " " + automovilesDisponibles.color );
// console.log(nuevoArray);



// ----------SEGUNDO EJERCICIO ------------

// 2)Dado el siguiente objeto literal, generar una copia de este con el nombre copiaCheetah y agregar un propiedad llamada velocidad con el valor de 100
// const cheetah = {
//   tipoDeAnimal: "Felino",
//   color: "Amarilo con puntos negros",
//   tamanoEnCm: 110,
//   pesoEnKg: 60,
// };

// const copiaCheetah = {...cheetah } ;
// copiaCheetah.velocidad = 100;


// console.log(copiaCheetah)



// ----------TERCER EJERCICIO ------------

// 3)Crear una funcion llamada "numeroMayor" en todas sus versiones (declarada, expresada y arrow function) que tome dos parametros como funcion y retorne el mayor valor de los dos (En caso de empate traera cualquiera de los dos)





// ----------CUARTO EJERCICIO ------------

// 4)Dado el siguiente array, utilizar un metodo de array para crear un nuevo array que tome cada elemento del viejo array y lo multiplique por 4
// const viejoArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let nuevoArray = viejoArray.map((numero) => numero * 4);
// console.log(nuevoArray)



// ----------QUINTO EJERCICIO ------------

// 5)Dado el siguiente array, utilizar un metodo de array para crear un nuevo array que extraiga el nombre del siguiente array
// let usuarios = [
//     { nombre: "Guillermo", genero: "Masculino" },
//     { nombre: "Jackson", genero: "Masculino" },
//     { nombre: "Juliana", genero: "Femenino" },
//     { nombre: "Camilo", genero: "Masculino" },
//   ];
  
//   let nuevosUsuarios = usuarios.map((ususario) => ususario.nombre);
//   console.log(nuevosUsuarios)
  



// ----------SEXTO EJERCICIO ------------

// 6)Dado el siguiente array, utilizar un metodo de array para encontrar el indice (posicion) del primer usuario con el genero Femenino
// usuarios = [
//     { nombre: "Guillermo", genero: "Masculino" },
//     { nombre: "Jackson", genero: "Masculino" },
//     { nombre: "Juliana", genero: "Femenino" },
//     { nombre: "Camilo", genero: "Masculino" },
//   ];
  
  
// let generoFem = usuarios.findIndex((usuario) => usuario.genero == "Femenino")

// console.log(generoFem)



// ----------SEPTIMO EJERCICIO ------------

// 7)Dado el siguiente array, utilizar un metodo de array para encontrar filtrar solo los elementos con genero masculino en un nuevo array
// usuarios = [
//     { nombre: "Guillermo", genero: "Masculino" },
//     { nombre: "Jackson", genero: "Masculino" },
//     { nombre: "Juliana", genero: "Femenino" },
//     { nombre: "Camilo", genero: "Masculino" },
//   ];

//   let nuevoArray = usuarios.filter((masculino) => masculino.genero == "Masculino" )

//   console.log(nuevoArray)