import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRCUJGOIdVcjn8Mx97mrbxOtaIVl7QLZo",
  authDomain: "login-signup-6edcf.firebaseapp.com",
  projectId: "login-signup-6edcf",
  storageBucket: "login-signup-6edcf.appspot.com",
  messagingSenderId: "568006449035",
  appId: "1:568006449035:web:9faa89b22bf148ee29018e",
  measurementId: "G-WW4YVFCP1Y"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
