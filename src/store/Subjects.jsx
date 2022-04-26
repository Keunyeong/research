import React, { createContext, useMemo, useState } from "react";

export const SubjectsContext = createContext();
// createContext()로 비어 있는 context가 만들어진다.

export default function Subjects(props) {
  // props로 지정하고 싶은 상태를 만들어준다.
  const [username, setUsername] = useState("이근영");
  const [list, setList] = useState({});
  const [arr, setArr] = useState([]);
  const [dataArr, setDataArr] = useState([]);

  const value = useMemo(
    () => ({
      username,
      setUsername,
      list,
      setList,
      arr,
      setArr,
      dataArr,
      setDataArr,
    }),
    [username, setUsername, list, setList, arr, setArr, dataArr, setDataArr]
  );
  return (
    <SubjectsContext.Provider value={value}>
      {props.children}
    </SubjectsContext.Provider>
  );
}
