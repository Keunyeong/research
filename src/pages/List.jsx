import { useContext, useEffect } from "react";
import styled from "styled-components";
import { readData } from "../firebase/firebase";
import { SubjectsContext } from "../store/Subjects";

export default function List() {
  const context = useContext(SubjectsContext);
  const { arr, setArr } = context;
  const name = sessionStorage.getItem("name");
  useEffect(() => {
    readData(setArr, "list");
  }, [setArr]);
  return (
    <ListPage>
      <h1>조사 목록</h1>
      <ListBox>
        {arr.map((item, index) => {
          return (
            <li key={`list${index}`}>
              <div className="title">
                code : {item.code} / {item.position} {item.title}
              </div>
              <div className="btn-box">
                {name === "master" ? (
                  <button>다운로드</button>
                ) : (
                  <button>조사시작</button>
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
