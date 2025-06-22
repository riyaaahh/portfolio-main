import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD9HCd8mf-cL_5tgUqLxankIe4Cehq3UA",
  authDomain: "portfolio-ffdbb.firebaseapp.com",
  databaseURL: "https://portfolio-ffdbb-default-rtdb.firebaseio.com",
  projectId: "portfolio-ffdbb",
  storageBucket: "portfolio-ffdbb.appspot.com",
  messagingSenderId: "586222523834",
  appId: "1:586222523834:web:85ea2df205313a6a353983",
  measurementId: "G-TZN3MC91EW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };;