import styled from "styled-components";
import { addData } from "../firebase/firebase";

export default function CheckPage({ children }) {
  return (
    <Page>
      {children}
      <div>
        <button
          onClick={() => {
            addData(sessionStorage.getItem("date"), {
              code: Number(sessionStorage.getItem("list_code")),
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
      </div>
    </Page>
  );
}

const Page = styled.div``;
