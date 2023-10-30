// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set } = require("firebase/database");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "placeholer",
  authDomain: "placeholder",
  databaseURL: "placeholder",
  projectId: "placeholder",
  storageBucket: "placeholder",
  messagingSenderId: "placeholder",
  appId: "placeholder",
  measurementId: "placeholder"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function writeData(joke, punchline) {
    const db = getDatabase();
    const reference = ref(db, 'jokes/' + joke);

    set(reference, {
        punchline: punchline
    })
}

writeData("What did the Penguin steal from the dental lab?", "A flipper!")