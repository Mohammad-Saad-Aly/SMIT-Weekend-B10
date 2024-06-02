 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
 import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-storage.js";


 const firebaseConfig = {
   apiKey: "AIzaSyC07vW1j2Q1G_az0Q1lH7lG1Cwn-UgdSEk",
   authDomain: "smit-batch-10-bd722.firebaseapp.com",
   projectId: "smit-batch-10-bd722",
   storageBucket: "smit-batch-10-bd722.appspot.com",
   messagingSenderId: "668568662033",
   appId: "1:668568662033:web:d71319569beb50c32381b0",
   measurementId: "G-SP1L10D8DE"
 };

 const app = initializeApp(firebaseConfig);
 const storage = getStorage(app);



let getBtn = document.querySelector("#btn")
getBtn.addEventListener('click', () => {
    let getFile = document.getElementById('file')
    console.log(getFile.files[0])
})

let getFile = document.getElementById('file')
getFile.addEventListener('change',(data)=>{
    let getImage = document.querySelector("#image")
    getImage.src = URL.createObjectURL(data.target.files[0]) 
    console.log(getImage)

})