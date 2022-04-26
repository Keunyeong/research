import { useEffect, useState } from "react";
import styled from "styled-components";
import { countData } from "../firebase/firebase";

export default function ListCount({ date, code, text }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    countData(setCount, date, code);
  }, [code, date]);
  return (
    <CountBox>
      <span>{count}</span>
      {text}
    </CountBox>
  );
}

const CountBox = styled.div`
  span {
    margin-right: 10px;
  }
`;
