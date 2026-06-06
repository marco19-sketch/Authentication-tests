// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfjI-pzesZlTQ3Cr15TCRIuEtGb3Nit1o",
  authDomain: "authpractice-9d162.firebaseapp.com",
  projectId: "authpractice-9d162",
  appId: "1:68852672862:web:3213819f3f3052b902c7cf",
  storageBucket: "authpractice-9d162.firebasestorage.app",
  messagingSenderId: "68852672862",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// if (location.hostname === 'localhost') { //this connect to the emulator , the port could be 9099, check
//     connectAuthEmulator(auth, 'http://localhost:4000');
// }


