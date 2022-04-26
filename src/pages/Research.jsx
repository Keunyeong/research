import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import Check10 from "./checkpages/Check10";
import Check11 from "./checkpages/Check11";
import Check12 from "./checkpages/Check12";
import { SubjectsContext } from "../store/Subjects";
import { useContext, useState } from "react";
import { addData } from "../firebase/firebase";
import { useEffect } from "react";

export default function Research() {
  const nav = useNavigate();
  const context = useContext(SubjectsContext);
  const { username } = context;
  const [date, setDate] = useState("20220101");
  useEffect(() => {
    setDate(sessionStorage.getItem("date"));
  }, []);
  return (
    <ResearchPage>
      <h1>
        {sessionStorage.getItem("list_position")}{" "}
        {sessionStorage.getItem("list_title")}
      </h1>
      <BtnBox>
        <button
          onClick={() => {
            nav("/list");
          }}
        >
          목록으로
        </button>
        <button>초기화</button>
        <button
          onClick={() => {
            addData(date, {
              code: 10,
              corp: "아시아나 항공",
              counter: "G",
              counterPosition: "1~18",
              isWaiting: true,
              terminal: "T1",
              waitingStart: "2022-04-26 13:12:11",
              waitingFinish: "2022-04-26 13:25:51",
            });
          }}
        >
          정보 추가
        </button>
      </BtnBox>
      <Info>
        <div>작성자 :</div>
        <div>{username}</div>
      </Info>
      <Routes>
        <Route path="/check10" element={<Check10></Check10>}></Route>
        <Route path="/check11" element={<Check11></Check11>}></Route>
        <Route path="/check12" element={<Check12></Check12>}></Route>
      </Routes>
    </ResearchPage>
  );
}

const ResearchPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 60px;
    margin: 15px;
  }
`;

const BtnBox = styled.div``;
const Info = styled.div`
  display: flex;
`;
