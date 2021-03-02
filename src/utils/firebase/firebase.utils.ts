import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_QaLhVY7j-8j3VSb1LjlXw1yHMXMIGHo",
  authDomain: "shop-db-47a63.firebaseapp.com",
  projectId: "shop-db-47a63",
  storageBucket: "shop-db-47a63.appspot.com",
  messagingSenderId: "112557293329",
  appId: "1:112557293329:web:fc57cdaba47e5512f356b0",
  measurementId: "G-Z7HN196XV2"
};

firebase.initializeApp( config );

export const auth = firebase.auth();
export const firestore = firebase.firestore();