import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, onSnapshot  } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


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
const db = getFirestore(app);


let btnAdd = document.querySelector("#add")
btnAdd.addEventListener('click', async () => {

    let fname = document.querySelector("#fname")
    let lname = document.querySelector("#lname")
    let phone = document.querySelector("#phone")


    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: fname.value,
            last: lname.value,
            ph: parseInt(phone.value)
        });
        // console.log("Document written with ID: ", docRef.id);
        // console.log("Document ", docRef);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
})

// let readData = document.querySelector("#read")
// readData.addEventListener('click', async() => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id}`, doc.data());
//     });
// })

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id}`,doc.data());
// });


// bhund wala code
// const unsub = onSnapshot(doc(db, "users"), (doc) => {
//     console.log("Current data: ", doc.data());
// });



// const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
//     snapshot.forEach((doc) => {
//         document.write("Current data: ", JSON.stringify(doc.data()));
//     });
// });