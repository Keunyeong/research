import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import Check10 from "./checkpages/Check10";
import Check11 from "./checkpages/Check11";
import Check12 from "./checkpages/Check12";
import { SubjectsContext } from "../store/Subjects";
import { useContext } from "react";

export default function Research() {
  const nav = useNavigate();
  const context = useContext(SubjectsContext);
  const { username } = context;
  return (
    <ResearchPage>
      <h1>
        {sessionStorage.getItem("list_position")}{" "}
        {sessionStorage.getItem("list_title")}
      </h1>
      <Head>
        <Info>
          <span>{sessionStorage.getItem("date")}</span>
          <span>{username}</span>
        </Info>
        <BtnBox>
          <button
            onClick={() => {
              nav("/list");
            }}
          >
            목록으로
          </button>
          <button>초기화</button>
        </BtnBox>
      </Head>

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

const Head = styled.div`
  display: flex;
  align-items: center;
`;

const BtnBox = styled.div`
  button {
    margin: 0 10px;
  }
`;
const Info = styled.div`
  display: flex;
  margin-right: 30px;
  span {
    margin: 0 10px;
  }
`;
