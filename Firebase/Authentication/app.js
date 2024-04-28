import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAZXy8XClR_G6iJpgGaHP-W1tasPHtvhoI",
    authDomain: "smitb10-409dd.firebaseapp.com",
    projectId: "smitb10-409dd",
    storageBucket: "smitb10-409dd.appspot.com",
    messagingSenderId: "577082811592",
    appId: "1:577082811592:web:6b48794738f410fa49f1fd",
    measurementId: "G-D1YHBXLSNF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let getBtn = document.querySelector("#btn")
if(getBtn){
    
    getBtn.addEventListener('click',()=>{
    
        let authUser = () => {
            let getEmail = document.querySelector("#semail").value
            let getPass = document.querySelector("#spass").value
            createUserWithEmailAndPassword(auth, getEmail, getPass)
                .then((userCredential) => {
    
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error)
                });
        }
        authUser()
    })
}

let getLbtn = document.querySelector("#lbtn")
if(getLbtn){
    getLbtn.addEventListener('click', () => {

        let email = document.querySelector("#lemail").value
        let password = document.querySelector("#lpass").value
    
    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               
                const user = userCredential.user;
                console.log(user)
             
            })
            .catch((error) => {
                console.log(error);
            });
    })
    
}
