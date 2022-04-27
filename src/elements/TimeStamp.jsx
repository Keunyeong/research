import { useState } from "react";
import styled from "styled-components";

export default function Timestamp({ title, position, setData, label }) {
  const [time, setTime] = useState("0000-00-00 00:00:00");
  const stamp = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = Number(today.getMonth()) + 1;
    if (month < 10) {
      month = `0${month}`;
    } else {
      month = `${month}`;
    }
    const date = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
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
