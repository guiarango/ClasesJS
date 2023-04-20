import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {
  getDocs,
  collection,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

// const {initializeApp} =require("https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js")

const init = async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCy7WYt8vhngraaniL74PJdrN3boSwocWs",
    authDomain: "relojescolombia-8683e.firebaseapp.com",
    projectId: "relojescolombia-8683e",
    storageBucket: "relojescolombia-8683e.appspot.com",
    messagingSenderId: "711850431891",
    appId: "1:711850431891:web:2c559092b0a2c9d0870466",
  };

  try {
    await initializeApp(firebaseConfig);
    fetchProducts();
  } catch (erorr) {
    console.log(error);
  }
};

const fetchProducts = async () => {
  const db = getFirestore();
  const coleccion = collection(db, "Products");
  const result = await getDocs(coleccion);
  const data = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  data.forEach((product) => {
    createProduct(product);
  });
};

const createProduct = (product) => {
  const productList = document.querySelector("main");
  const newProduct = document.createElement("div");
  const newProductImage = document.createElement("img");
  const newProductName = document.createElement("h2");
  const newProductPrice = document.createElement("h3");
  const addToCart = document.createElement("a");

  //Se agregar clases
  newProduct.classList.add("product");
  newProductImage.classList.add("product-image");
  newProductName.classList.add("product-name");
  newProductPrice.classList.add("product-precio");
  addToCart.classList.add("addToCart");

  //Se agregan atributos
  newProductImage.src = product.imagen;
  newProductName.innerText = product.nombre;
  newProductPrice.innerText = product.precio;
  addToCart.innerText = "AGREGAR";
  addToCart.src = "#";

  //Se unen los objetos
  newProduct.appendChild(newProductImage);
  newProduct.appendChild(newProductName);
  newProduct.appendChild(newProductPrice);
  newProduct.appendChild(addToCart);
  productList.appendChild(newProduct);
};

init();
