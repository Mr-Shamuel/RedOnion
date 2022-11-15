
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBAmt5zIlvAUokvCAvcKTxy-qb4RvMv040",
    authDomain: "redonion-97da8.firebaseapp.com",
    projectId: "redonion-97da8",
    storageBucket: "redonion-97da8.appspot.com",
    messagingSenderId: "428081856711",
    appId: "1:428081856711:web:5cac5449452f7f866b7ee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;