import styled from "styled-components";

export default function Dropdown({ arr, title, setData }) {
  return (
    <DropdownBox
      name={title}
      onChange={(e) => {
        setData((data) => ({ ...data, [title]: e.target.value }));
      }}
    >
      {arr.map((item, index) => (
        <option value={item} key={`${item}${index}`}>
          {item}
        </option>
      ))}
    </DropdownBox>
  );
}

const DropdownBox = styled.select`
  display: flex;
  margin: 0 10px;
`;
