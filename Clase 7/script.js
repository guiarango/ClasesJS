const array = ["Guillermo", "Juli", "Cami", "Jack"];

const [guillermo, juli, ...otrosUsuarios] = array;

console.log(guillermo);
console.log(juli);
console.log(otrosUsuarios);

const objeto = {
  nombre: "Guillermo",
  apellido: "Arango",
  edad: 29,
  altura: 1.8,
};

const { nombre, apellido, ...rest } = objeto;

console.log(nombre);
console.log(apellido);
console.log(rest);

const reducir = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultado = reducir.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(resultado);
