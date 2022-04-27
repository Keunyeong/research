import styled from "styled-components";

export default function Common({ children }) {
  return <CommonBox>{children}</CommonBox>;
}

const CommonBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 600px;
  li {
    display: flex;
    border-bottom: 1px solid black;
    .common_list {
      text-align: right;
      margin-right: 20px;
    }
  }
`;
