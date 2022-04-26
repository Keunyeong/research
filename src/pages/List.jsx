import { useRef } from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { allData, readData } from "../firebase/firebase";
import { SubjectsContext } from "../store/Subjects";

export default function List() {
  const nav = useNavigate();
  const context = useContext(SubjectsContext);
  const { arr, setArr, setDataArr } = context;
  const name = sessionStorage.getItem("id");
  const [date, setDate] = useState("2022-01-01");
  const dateRef = useRef();
  useEffect(() => {
    dateRef.current.value = date;
  });
  useEffect(() => {
    readData(setArr, "list");
    setDate(new Date().toISOString().substring(0, 10));
    sessionStorage.setItem("date", date.replace("-", "").replace("-", ""));
  }, [setArr, date]);

  return (
    <ListPage>
      <h1>조사 목록</h1>
      {name === "master" ? (
        <input type="date" ref={dateRef} />
      ) : (
        <input type="date" ref={dateRef} disabled />
      )}

      <ListBox>
        {arr.map((item, index) => {
          return (
            <li key={`list${index}`}>
              <div className="title">
                code : {item.code} / {item.position} {item.title}
              </div>
              <div className="btn-box">
                {name === "master" ? (
                  <button
                    onClick={async () => {
                      await allData(
                        setDataArr,
                        sessionStorage.getItem("date"),
                        item.code
                      );
                    }}
                  >
                    다운로드
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      sessionStorage.setItem("list_code", item.code);
                      sessionStorage.setItem("list_position", item.position);
                      sessionStorage.setItem("list_title", item.title);
                      nav(`/research/check${item.code}`);
                    }}
                  >
                    조사시작
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ListBox>
    </ListPage>
  );
}

const ListPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 30px;
    margin: 20px 0;
  }
`;
const ListBox = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    .title {
      width: 300px;
    }
  }
`;
