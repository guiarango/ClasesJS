//Primera solucion
let escalera = 60;

for (let i = 1; i <= escalera; i++) {
  if (i == escalera) {
    console.log(
      "escalon " + escalera + " felicitaciones, alcanzaste el punto más alto"
    );
  } else {
    console.log("escalon " + i);
  }
}

//Solucion suggar syntax
escalera = 60;

for (let i = 1; i <= escalera; i++) {
  i == escalera
    ? console.log(
        "escalon " + escalera + " felicitaciones, alcanzaste el punto más alto"
      )
    : console.log("escalon " + i);
}
