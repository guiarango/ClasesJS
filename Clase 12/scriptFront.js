import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {
  getDoc,
  getDocs,
  collection,
  doc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

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
    await initializeApp(firebaseConfig);
  } catch (error) {
    console.log(error);
  }
};

const fetchIntegrantes = async () => {
  const db = getFirestore();
  const integrantesCol = collection(db, "integrantes");
  const result = await getDocs(integrantesCol);
  const data = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(data);
  //   return data;
};

init();
fetchIntegrantes();
