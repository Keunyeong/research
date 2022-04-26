import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_zLU9OSgb8kMdJAR05sdU56saOM5abUQ",
  authDomain: "search-data-test.firebaseapp.com",
  projectId: "search-data-test",
  storageBucket: "search-data-test.appspot.com",
  messagingSenderId: "700300518767",
  appId: "1:700300518767:web:c9a721630b0b8a269df49a",
  measurementId: "G-8RCYJHY1YE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addData = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const readData = async (setData, data) => {
  try {
    const querySnapshot = await getDocs(collection(db, data));
    const arr = [];
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      console.log(item);
      arr.push(item);
    });
    setData(arr);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
