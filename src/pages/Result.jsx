import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Result() {
  const navigate = useNavigate();
  const name = sessionStorage.getItem("name");
  const both = sessionStorage.getItem("both");
  const gender = sessionStorage.getItem("gender");
  return (
    <ResultPage>
      <h1>Result Page</h1>
      <div>이름 : {name} </div>
      <div>나이 : {both} </div>
      <div>성별 : {gender === "male" ? "남자" : "여자"} </div>
      <button
        onClick={() => {
          sessionStorage.clear();
          navigate("/");
        }}
      >
        완료
      </button>
    </ResultPage>
  );
}

const ResultPage = styled.div``;
