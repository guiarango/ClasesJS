// import { initializeApp } from "firebase/app";
// import { doc, getFirestore, getDoc } from "firebase/firestore";

const { initializeApp } = require("firebase/app");
const {
  doc,
  getFirestore,
  getDoc,
  collection,
  getDocs,
} = require("firebase/firestore");

const init = async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCvdCLSiNwcDZOWhkRY5iUapwbNlboUPsk",
    authDomain: "integrantesdesarrollo.firebaseapp.com",
    projectId: "integrantesdesarrollo",
    storageBucket: "integrantesdesarrollo.appspot.com",
    messagingSenderId: "507985108937",
    appId: "1:507985108937:web:c36e734afd5b903b735218",
  };

  try {
    initializeApp(firebaseConfig);
  } catch (error) {
    console.log(error);
  }
};

init();

const fetchIntegrantes = async () => {
  // const db = getFirestore();
  // const integrantesRef = doc(db, "integrantes", "xaHXhRoVgItyEsEWePaa");
  // const result = await getDoc(integrantesRef);
  // return result.data();

  const db = getFirestore();
  const integrantesCol = collection(db, "integrantes");
  const result = await getDocs(integrantesCol);

  const data = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

module.exports = { fetchIntegrantes };
