import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: process.env.REACT_APP_AUTH,
    databaseURL: process.env.REACT_APP_DB,
    projectId: process.env.REACT_APP_PROJECT,
    storageBucket: process.env.REACT_APP_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER,
    appId: process.env.REACT_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);