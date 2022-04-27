import { useState } from "react";
import styled from "styled-components";

export default function Timestamp({ title, position, setData, label }) {
  const [time, setTime] = useState("0000-00-00 00:00:00");
  function convert(num) {
    if (num < 10) {
      num = `0${num}`;
    } else {
      num = `${num}`;
    }
    return num;
  }
  const stamp = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = convert(Number(today.getMonth()) + 1);
    const date = convert(today.getDate());
    const hour = convert(today.getHours());
    const minute = convert(today.getMinutes());
    const second = convert(today.getSeconds());
    const now = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    setTime(now);
    setData((data) => ({ ...data, [title]: now }));
  };
  return (
    <TimestampBox position={position}>
      <div>{time}</div>
      <button onClick={stamp}>{title}</button>
    </TimestampBox>
  );
}

const TimestampBox = styled.div`
  display: flex;
  align-items: center;
  div {
    width: 150px;
    margin: 0 10px 0 0;
  }
  button {
    border: none;
    border-radius: 5px;
    color: white;
    padding: 5px;
    cursor: pointer;
    background-color: ${(props) => {
      if (props.position === "start") {
        return "blue";
      } else {
        return "red";
      }
    }};
    :hover {
      color: ${(props) => {
        if (props.position === "start") {
          return "blue";
        } else {
          return "red";
        }
      }};
      background-color: white;
    }
  }
`;
