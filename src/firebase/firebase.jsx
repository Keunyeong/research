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

export const addData = async (date, data, setIsSuccess) => {
  try {
    const docRef = await addDoc(collection(db, date), data);
    setIsSuccess(true);
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
      arr.push(item);
    });
    setData(arr);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const countData = async (setData, data, code) => {
  try {
    const querySnapshot = await getDocs(collection(db, data));
    const arr = [];
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      if (doc.data().code === Number(code)) {
        arr.push(item);
      }
    });
    setData(arr.length);
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
          align: "center",
        },
        // Column #2
        {
          value: "항공사",
          fontWeight: "bold",
          align: "center",
        },
        // Column #3
        {
          value: "카운터명",
          fontWeight: "bold",
          align: "center",
        },
        // Column #4
        {
          value: "카운터 위치",
          fontWeight: "bold",
          align: "center",
        },
        {
          value: "체크인 여부",
          fontWeight: "bold",
          align: "center",
        },
        {
          value: "체크인 대기 시작",
          fontWeight: "bold",
          align: "center",
        },
        {
          value: "체크인 대기 종료",
          fontWeight: "bold",
          align: "center",
        },
      ],
    ];
    const title = `${data}${code}`;

    querySnapshot.forEach((doc) => {
      const item = doc.data();
      if (item.code === Number(code)) {
        console.log(item);
        const data = [
          // Column #1
          {
            // `type` is optional
            type: Number,
            value: item.code,
            align: "center",
          },
          // Column #2
          {
            // `type` is optional
            type: String,
            value: item.corp,
            align: "center",
          },
          // Column #3
          {
            // `type` is optional
            type: String,
            value: item.counter,
            align: "center",
          },
          // Column #4
          {
            // `type` is optional
            type: String,
            value: item.counterPosition,
            align: "center",
          },
          {
            // `type` is optional
            type: Boolean,
            value: item.isWaiting,
            align: "center",
          },
          {
            // `type` is optional
            type: String,
            value: item.waitingStart,
            align: "center",
          },
          {
            // `type` is optional
            type: String,
            value: item.waitingFinish,
            align: "center",
          },
        ];
        arr = [...arr, data];
      }
    });
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
