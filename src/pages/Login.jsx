import styled from "styled-components";

export default function Login() {
  const submitEvent = (e) => {
    e.preventDefault();
    console.log(e);
    const name = e.target.name;
    const mnum = e.target.mnum;
    console.log(name + "/" + mnum);

    if (name === " " || mnum === " ") {
      alert("다시 입력해주세요.");
    } else {
      console.log(name + "/" + mnum);
    }
  };
  return (
    <LoginPage>
      <LogoBox>
        <img src="assets/logo.jpeg" alt="LOGO" />
      </LogoBox>
      <LoginBox
        onSubmit={(e) => {
          submitEvent(e);
        }}
      >
        <div>
          <label htmlFor="name"></label>
          <input type="text" name="name" placeholder="이름을 입력해주세요." />
          <label htmlFor="mnum"></label>
          <input type="text" name="mnum" placeholder="사번을 입력해주세요." />
        </div>
        <LoginBtn type="submit">로그인</LoginBtn>
      </LoginBox>
    </LoginPage>
  );
}

const LoginPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LogoBox = styled.div`
  margin-bottom: 30px;

  img {
    width: 400px;
    object-fit: contain;
  }
`;
const LoginBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    input {
      margin: 10px 0;
      width: 150px;
      height: 25px;
      text-align: center;
      border: none;
      border-bottom: 1px solid #e6e6e6;
    }
  }
`;

const LoginBtn = styled.button`
  border: none;
  border-radius: 5px;
  width: 90px;
  height: 80px;
  cursor: pointer;
  :hover {
    background-color: #6799ff;
    color: white;
  }
`;
