import styled from "styled-components";
export default function Auth() {
  return (
    <AuthPage>
      <h1>본인인증 페이지</h1>
    </AuthPage>
  );
}

const AuthPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
