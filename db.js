
  // Import the functions you need from the SDKs you need
  import { initializeApp, onValue, set, ref } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyABxgXrl0ZawYX4U_Bqpt9HRVgSaW1CA7k",
    authDomain: "bingo-ace.firebaseapp.com",
    projectId: "bingo-ace",
    databaseURL: "https://bingo-ace-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "bingo-ace.firebasestorage.app",
    messagingSenderId: "932968616436",
    appId: "1:932968616436:web:dbe017a0a451dcfde329a1"
  };

const p = document.getElementById("sharedText");

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
let txtRef = ref(db, "cutNum")

let pUpdater = (numList) => set(txtRef, numList)

onValue(txtRef, s => s.exists() && (p.innerText = s.val()))

export {pUpdater}

