import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import writeXlsxFile from "write-excel-file";

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
    console.log(arr);
    setData(arr);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const allData = async (setData, data, code) => {
  try {
    const querySnapshot = await getDocs(collection(db, data));
    let arr = [
      [
        // Column #1
        {
          value: "CODE",
          fontWeight: "bold",
        },
        // Column #2
        {
          value: "항공사",
          fontWeight: "bold",
        },
        // Column #3
        {
          value: "카운터명",
          fontWeight: "bold",
        },
        // Column #4
        {
          value: "카운터 위치",
          fontWeight: "bold",
        },
      ],
    ];
    const title = `${data}${code}`;

    querySnapshot.forEach((doc) => {
      const item = doc.data();
      console.log(item.code);
      if (item.code === Number(code)) {
        const data = [
          // Column #1
          {
            // `type` is optional
            type: Number,
            value: item.code,
          },
          // Column #2
          {
            // `type` is optional
            type: String,
            value: item.corp,
          },
          // Column #3
          {
            // `type` is optional
            type: String,
            value: item.counter,
          },
          // Column #4
          {
            // `type` is optional
            type: String,
            value: item.counterPosition,
          },
        ];
        arr = [...arr, data];
      }
    });
    console.log(arr);
    const excel = async (arr, title) => {
      await writeXlsxFile(arr, {
        fileName: `${title}.xlsx`, // 파일명
      });
    };
    excel(arr, title);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const login = async (data, login, setIsLogin) => {
  try {
    const querySnapshot = await getDocs(collection(db, data));
    let isLogin = "fail";
    querySnapshot.forEach((doc) => {
      const id = doc.data().id;
      const pw = doc.data().pw;
      const isId = id === login.id;
      if (isId) {
        if (pw === login.pw) {
          isLogin = doc.data();
        }
      }
    });
    setIsLogin(isLogin);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
