import styled from "styled-components";

export default function Radio({ arr, title, setData }) {
  return (
    <RadioBox
      onChange={(e) => {
        setData((data) => ({ ...data, [title]: e.target.value }));
      }}
    >
      {arr.map((item, index) => {
        return index === 0 ? (
          <div key={`radio${item}${index}`}>
            <input
              type="radio"
              id={item}
              name={title}
              value={item}
              defaultChecked
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ) : (
          <div key={`radio${item}${index}`}>
            <input type="radio" id={item} name={title} value={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        );
      })}
    </RadioBox>
  );
}

const RadioBox = styled.fieldset`
  display: flex;
`;
