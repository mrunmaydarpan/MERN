import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDsk7I3P5Q1h6KUqIozynzFrM-kEpxcn50",
    authDomain: "reactjs-60852.firebaseapp.com",
    projectId: "reactjs-60852",
    storageBucket: "reactjs-60852.appspot.com",
    messagingSenderId: "20873652609",
    appId: "1:20873652609:web:073ebd769b144344126080",
    measurementId: "G-NRB863Y3EK"
};

export const firebase = initializeApp(firebaseConfig);
export const Auth = getAuth(firebase);