import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAuCAXYAD9a1nHlrJcWkjIYzOAXeVZBwH4",
    authDomain: "startegy-ai.firebaseapp.com",
    projectId: "startegy-ai",
    storageBucket: "startegy-ai.appspot.com",
    messagingSenderId: "22543517357",
    appId: "1:22543517357:web:8540750e9ef51625c52824",
    measurementId: "G-XDPGTLM0HH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);