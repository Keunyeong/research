import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addData } from "../firebase/firebase";
import { SubjectsContext } from "../store/Subjects";

export default function Result() {
  const navigate = useNavigate();
  const name = sessionStorage.getItem("name");
  const both = sessionStorage.getItem("both");
  const gender = sessionStorage.getItem("gender");
  const q03 = sessionStorage.getItem("q03");
  const time = sessionStorage.getItem("time");
  const context = useContext(SubjectsContext);
  const { username } = context;
  console.log(q03);
  return (
    <ResultPage>
      <h1>Result Page</h1>
      <div>제출 시간 : {time}</div>
      <div>이름 : {name} </div>
      <div>이름 : {username} </div>
      <div>나이 : {both} </div>
      <div>성별 : {gender === "male" ? "남자" : "여자"} </div>
      <button
        onClick={() => {
          sessionStorage.clear();
          addData();
          navigate("/");
        }}
      >
        완료
      </button>
    </ResultPage>
  );
}

const ResultPage = styled.div``;
