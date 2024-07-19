// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyBnb7K8EnWeRdnJmoG4niwozeP0FIqgau8",
  authDomain: "email-f814c.firebaseapp.com",
  projectId: "email-f814c",
  storageBucket: "email-f814c.appspot.com",
  messagingSenderId: "698258710097",
  appId: "1:698258710097:web:07057929c988e928c22270",
  measurementId: "G-820C063FTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth=getAuth()


 export function signUp(email,password){
    
      return createUserWithEmailAndPassword(auth,email,password)
 }

 export function signIn(email,password){
     return signInWithEmailAndPassword(auth,email,password)
 }

 export function logOut(){
    return signOut()
 }


 export function useAuth(){
     const [currentUser,setCurrentUser]=useState("")
    useEffect(()=>{
        let x=onAuthStateChanged(auth,user=>setCurrentUser(user))
        return x
    },[])
    return currentUser
 }