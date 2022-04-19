import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Research() {
  const navigate = useNavigate();
  return (
    <ResearchPage>
      <h1>Research Page</h1>
      <ResearchForm
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const both = e.target.both.value;
          const gender = e.target.gender.value;

          if (name === "" || both === "" || gender === "") {
            alert("전부 입력해주세요.");
          } else {
            sessionStorage.setItem("name", e.target.name.value);
            sessionStorage.setItem("both", e.target.both.value);
            sessionStorage.setItem("gender", e.target.gender.value);
            navigate("/result");
          }
        }}
      >
        <InputBox width="270" position="space-between">
          <label htmlFor="name">이름 :</label>
          <input type="text" name="name" />
        </InputBox>
        <InputBox width="270" position="space-between">
          <label htmlFor="both">생년월일 :</label>
          <input type="date" name="both" />
        </InputBox>

        <RadioBox type="row">
          <QuestionBox>성별 :</QuestionBox>
          <InputBox position="end">
            <label htmlFor="gender">남자</label>
            <input type="radio" name="gender" value="male" />
          </InputBox>
          <InputBox position="end">
            <label htmlFor="gender">여자</label>
            <input type="radio" name="gender" value="female" />
          </InputBox>
        </RadioBox>
        <QuestionBox>01. 일주일에 몇 번이나 술과 담배를 하시나요?</QuestionBox>
        <RadioBox type="column">
          <InputBox position="end">
            <input type="radio" name="01" value="0" />
            <label htmlFor="01">안함</label>
          </InputBox>
          <InputBox position="end">
            <input type="radio" name="01" value="1" />
            <label htmlFor="01">1~3회</label>
          </InputBox>
        </RadioBox>
        <QuestionBox>02. 일주일에 몇 번이나 술과 담배를 하시나요?</QuestionBox>
        <RadioBox type="column">
          <InputBox position="end">
            <input type="radio" name="02" value="0" />
            <label htmlFor="02">안함</label>
          </InputBox>
          <InputBox position="end">
            <input type="radio" name="02" value="1" />
            <label htmlFor="02">1~3회</label>
          </InputBox>
        </RadioBox>
        <SubmitBtn type="submit">제출</SubmitBtn>
      </ResearchForm>
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
const ResearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70vw;
  padding: 20px 20px 80px 20px;
`;

const SubmitBtn = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: blue;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    background-color: white;
    color: blue;
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: ${(props) => props.position};
  align-items: center;
  padding: 10px;
  width: ${(props) => {
    if (props.width) {
      return props.width + "px";
    } else {
      return "auto";
    }
  }};
  label {
    margin-right: 20px;
  }
  input {
  }
`;

const QuestionBox = styled.div`
  padding: 10px;
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.type};
  justify-content: start;
`;
