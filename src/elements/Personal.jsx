import styled from "styled-components";
import { addData } from "../firebase/firebase";

export default function Personal({ children, data, isSuccess, setIsSuccess }) {
  const submit = () => {
    addData(sessionStorage.getItem("date"), data, setIsSuccess);
  };
  return (
    <PersonalData>
      <ul>{children}</ul>
      {isSuccess ? (
        <button disabled>추가 완료</button>
      ) : (
        <button onClick={submit}>정보 추가</button>
      )}
    </PersonalData>
  );
}

const PersonalData = styled.div`
  ul {
    li {
      display: flex;
      border-bottom: 1px solid black;
      .common_list {
        text-align: right;
        margin-right: 20px;
      }
    }
  }
`;
