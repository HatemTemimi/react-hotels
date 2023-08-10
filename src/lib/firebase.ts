import { initializeApp } from "firebase/app";
import { type } from "os";

const firebaseConfig = {
  apiKey: "AIzaSyCB6_XQEDl5k_-qhBQymWC6-2P3BWa6v1s",
  authDomain: "react-sample-ef46d.firebaseapp.com",
  projectId: "react-sample-ef46d",
  storageBucket: "react-sample-ef46d.appspot.com",
  messagingSenderId: "1041585727016",
  appId: "1:1041585727016:web:b37955ca2ef3875e87b71d",
  measurementId: "G-4QM4LVBV8L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
