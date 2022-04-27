import styled from "styled-components";
import { addData } from "../firebase/firebase";

export default function Personal({ children, data }) {
  const submit = () => {
    addData(sessionStorage.getItem("date"), data);
  };
  return (
    <PersonalData>
      <ul>{children}</ul>
      <button onClick={submit}>정보 추가</button>
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
