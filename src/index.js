import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBN3T5UJsgQan8cjwlA9RyUAcmXvW31Ck",
  authDomain: "emergify-services.firebaseapp.com",
  databaseURL: "https://emergify-services-default-rtdb.firebaseio.com",
  projectId: "emergify-services",
  storageBucket: "emergify-services.appspot.com",
  messagingSenderId: "60423776821",
  appId: "1:60423776821:web:47ef42f96cfb2c73bcdf7c",
  measurementId: "G-REHVNFB872"
};


//Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const db = getFirestore(app);

//Initialization Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
