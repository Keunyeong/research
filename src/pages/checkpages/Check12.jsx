import { useState } from "react";
import CheckPage from "../../components/CheckPage";
import Common from "../../elements/Common";
import Dropdown from "../../elements/Dropdown";
import ListEl from "../../elements/ListEl";
import Personal from "../../elements/Personal";
import Radio from "../../elements/Radio";

export default function Check12() {
  const [data, setData] = useState({
    code: Number(sessionStorage.getItem("list_code")),
    terminal: "T1",
    corp: "아시아나",
    counter: "G",
    counterPosition: "1~18",
    isWaiting: "대기 있음",
    waitingStart: "2022-04-26 13:12:11",
    waitingFinish: "2022-04-26 13:25:51",
  });
  console.log(data);
  return (
    <CheckPage>
      <Common>
        <ListEl title="조사 터미널">
          <Radio
            arr={["T1", "T2", "T3"]}
            title="terminal"
            setData={setData}
          ></Radio>
        </ListEl>
        <ListEl title="조사항공사">
          <Dropdown
            arr={["아시아나", "대한항공"]}
            title="corp"
            setData={setData}
          ></Dropdown>
        </ListEl>
      </Common>
      <Personal data={data}>
        <ListEl title="체크인 대기 여부">
          <Radio
            arr={["대기 있음", "대기 없음"]}
            title="isWaiting"
            setData={setData}
          ></Radio>
        </ListEl>
        <ListEl title="체크인 대기 시작"></ListEl>
        <ListEl title="체크인 대기 종료"></ListEl>
      </Personal>
    </CheckPage>
  );
}
