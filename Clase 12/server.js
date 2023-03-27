const express = require("express");
const app = express();

const { fetchIntegrantes } = require("./script");

app.listen(8000, async () => {
  const resultado = await fetchIntegrantes();
  console.log(resultado);
});
