// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// Your Firebase configuration
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
const db = getDatabase(app);
const txtRef = ref(db, "cutNum");

// Writer function
const pUpdater = (numList) => set(txtRef, numList);

// Listener
onValue(txtRef, (snapshot) => {
  if (snapshot.exists()) {
    p.innerText = snapshot.val();
  }
});

export { pUpdater };
