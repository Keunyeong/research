import styled from "styled-components";

export default function ListEl({ children, title }) {
  return (
    <Li>
      <Title>{title}</Title>
      {children}
    </Li>
  );
}

const Li = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  margin: 10px 0;
  padding: 5px 0;
`;

const Title = styled.div`
  text-align: left;
  margin-right: 20px;
  width: 150px;
  border-right: 1px solid #e6e6e6;
`;
