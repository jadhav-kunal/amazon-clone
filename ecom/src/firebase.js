import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHI73K0E4Mg7n7xKdZtHlIuvF47DiwsaE",
  authDomain: "ecom-8d88a.firebaseapp.com",
  projectId: "ecom-8d88a",
  storageBucket: "ecom-8d88a.appspot.com",
  messagingSenderId: "710420931555",
  appId: "1:710420931555:web:ca29ae4098b5601e1536d6",
  measurementId: "G-LWQ2XBLPSH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
