// db.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const txtRef = ref(db, "cutNum");

// write array of cut numbers
export const pUpdater = (numList) => set(txtRef, numList);

// reflect realtime updates in <p id="sharedText">
onValue(txtRef, (snapshot) => {
  if (snapshot.exists()) {
    // arrays render as "1,2,3"
    p.innerText = snapshot.val();
  } else {
    p.innerText = "";
  }
});
