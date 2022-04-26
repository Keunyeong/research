import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SubjectsContext } from "../store/Subjects";
import writeXlsxFile from "write-excel-file";
import Check10 from "./checkpages/Check10";
import Check11 from "./checkpages/Check11";
import Check12 from "./checkpages/Check12";

const data = [
  // Row #1
  [
    // Column #1
    {
      value: "Name",
      fontWeight: "bold",
    },
    // Column #2
    {
      value: "Date of Birth",
      fontWeight: "bold",
    },
    // Column #3
    {
      value: "Cost",
      fontWeight: "bold",
    },
    // Column #4
    {
      value: "Paid",
      fontWeight: "bold",
    },
  ],
  // Row #2
  [
    // Column #1
    {
      // `type` is optional
      type: String,
      value: "John Smith",
    },
    // Column #2
    {
      // `type` is optional
      type: Date,
      value: new Date(),
      format: "mm/dd/yyyy",
    },
    // Column #3
    {
      // `type` is optional
      type: Number,
      value: 1800,
    },
    // Column #4
    {
      // `type` is optional
      type: Boolean,
      value: true,
    },
  ],
  // Row #3
  [
    // Column #1
    {
      // `type` is optional
      type: String,
      value: "Alice Brown",
    },
    // Column #2
    {
      // `type` is optional
      type: Date,
      value: new Date(),
      format: "mm/dd/yyyy",
    },
    // Column #3
    {
      // `type` is optional
      type: Number,
      value: 2600,
    },
    // Column #4
    {
      // `type` is optional
      type: Boolean,
      value: false,
    },
  ],
];

export default function Research() {
  const navigate = useNavigate();
  const context = useContext(SubjectsContext);
  const { username, setUsername, list } = context;
  const excelWirte = async (data) => {
    await writeXlsxFile(data, {
      fileName: "file.xlsx",
    });
  };
  return (
    <ResearchPage>
      <h1>
        {list.position} {list.title}
      </h1>
      {list.code === 10 && <Check10></Check10>}
      {list.code === 11 && <Check11></Check11>}
      {list.code === 12 && <Check12></Check12>}
      <button
        onClick={() => {
          excelWirte(data);
        }}
      >
        데이터 읽기
      </button>
      <ResearchForm
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const both = e.target.both.value;
          const gender = e.target.gender.value;
          const q03 = e.target.q03.value;

          if (name === "" || both === "" || gender === "") {
            alert("전부 입력해주세요.");
          } else {
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("both", both);
            sessionStorage.setItem("gender", gender);
            sessionStorage.setItem("q03", q03);
            navigate("/result");
          }
          setUsername(name);
        }}
      >
        <InputBox width="270px" position="space-between">
          <label htmlFor="name">이름 :</label>
          <input type="text" name="name" value={username} disabled />
        </InputBox>
        <InputBox width="270px" position="space-between">
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
        <ul>
          {/* {data.map((item, index) => {
            return (
              <li key={"q" + index}>
                <QuestionBox>
                  {index + 1}. {item.q}
                </QuestionBox>
                <RadioBox type="column">
                  {item.a.map((item2, i) => {
                    return (
                      <InputBox position="end" key={"q" + index + "a" + i}>
                        <label htmlFor={"q0" + index}>{item2}</label>
                        <input type="radio" name={"q0" + index} value={i} />
                      </InputBox>
                    );
                  })}
                </RadioBox>
              </li>
            );
          })} */}
        </ul>

        <QuestionBox>03. 하고싶은 말은?</QuestionBox>
        <InputBox>
          <textarea name="q03"></textarea>
        </InputBox>

        <SubmitBtn
          type="submit"
          onClick={() => {
            const time = new Date();
            const Month = time.getMonth() + 1;
            const Dates = time.getDate();
            const Hours = time.getHours();
            const Minutes = time.getMinutes();
            const Seconds = time.getSeconds();
            sessionStorage.setItem(
              "time",
              `${Month}월 ${Dates}일 ${Hours}:${Minutes}:${Seconds}`
            );
          }}
        >
          제출
        </SubmitBtn>
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
      return props.width;
    } else {
      return "auto";
    }
  }};
  label {
    margin-right: 20px;
  }
  input {
    cursor: pointer;
  }
  textarea {
    width: 100%;
    height: 60px;
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
